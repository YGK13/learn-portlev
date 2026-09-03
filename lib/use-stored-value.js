'use client'

// ============================================================
// lib/use-stored-value.js - localStorage as a React external store
//
// The interactive lesson blocks (KnowledgeCheck, ActionChecklist,
// TryIt) persist per-reader progress in localStorage. Reading that
// value inside useEffect and copying it into state causes a second
// render on every mount (the react-hooks/set-state-in-effect rule).
// useSyncExternalStore is the right primitive: the store is the
// source of truth, React subscribes to it, and the server snapshot
// is `undefined` so SSR and the first client render agree.
//
//   const raw = useStoredValue('pl-kc-anatomy')   // undefined | null | string
//   const hydrated = raw !== undefined
//   writeStored('pl-kc-anatomy', JSON.stringify(next))
//
// If storage is unavailable (private mode, quota, disabled) the
// value lives in an in-memory map for the life of the page, so the
// block still works; it simply does not survive a reload.
// ============================================================

import { useCallback, useSyncExternalStore } from 'react'

const memory    = new Map()
const listeners = new Map()

function readStored(key) {
  let value = null
  try {
    value = window.localStorage.getItem(key)
  } catch {
    // Storage unavailable: fall through to memory
  }
  return value ?? memory.get(key) ?? null
}

function notify(key) {
  const set = listeners.get(key)
  if (set) for (const cb of set) cb()
}

function subscribeKey(key, cb) {
  let set = listeners.get(key)
  if (!set) {
    set = new Set()
    listeners.set(key, set)
  }
  set.add(cb)

  // Cross-tab updates: the storage event fires in other documents
  const onStorage = event => {
    if (event.key === null || event.key === key) cb()
  }
  window.addEventListener('storage', onStorage)

  return () => {
    set.delete(cb)
    if (set.size === 0) listeners.delete(key)
    window.removeEventListener('storage', onStorage)
  }
}

/** Persist a string under `key` and re-render every subscriber. */
export function writeStored(key, value) {
  memory.set(key, value)
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Storage unavailable: memory copy keeps the UI consistent
  }
  notify(key)
}

/**
 * Subscribe to a localStorage key.
 * Returns `undefined` on the server and during hydration, `null`
 * when nothing is stored, otherwise the stored string.
 */
export function useStoredValue(key) {
  const subscribe = useCallback(cb => subscribeKey(key, cb), [key])
  const getSnapshot = useCallback(() => readStored(key), [key])
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

function getServerSnapshot() {
  return undefined
}

/** Parse a stored JSON string; returns null on anything unparseable. */
export function parseStored(raw) {
  if (typeof raw !== 'string') return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}
