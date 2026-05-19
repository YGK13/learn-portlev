// ============================================================
// components/FlowDiagram.jsx — Step-flow concept diagram
// Server component: pure display. Used inside MDX via the
// MDXComponents map, e.g.:
//   <FlowDiagram steps={["Role", "Task", "Context"]} />
//   <FlowDiagram loop steps={[{label:"Observe"},{label:"Think"},{label:"Act"}]} />
//   <FlowDiagram steps={[...]} caption="The RAG pattern" />
//
// Each step is a string or { label, note }. `loop` appends a
// "repeat" marker for cyclical processes (e.g. the agent loop).
// ============================================================

import { Fragment } from 'react'

export default function FlowDiagram({ steps = [], loop = false, caption }) {
  if (!Array.isArray(steps) || steps.length === 0) return null

  return (
    <figure className="my-7 mx-0">
      <div className="flex flex-wrap items-stretch gap-2">
        {steps.map((step, i) => {
          const label = typeof step === 'string' ? step : step.label
          const note  = typeof step === 'string' ? null  : step.note

          return (
            <Fragment key={i}>
              <div
                className="flex flex-1 min-w-[116px] flex-col justify-center rounded-lg border px-3 py-3 text-center"
                style={{ borderColor: '#c7d2fe', backgroundColor: 'rgb(79 70 229 / 0.04)' }}
              >
                <span className="text-sm font-semibold leading-snug" style={{ color: '#0f172a' }}>
                  {label}
                </span>
                {note && (
                  <span className="mt-0.5 text-xs leading-snug" style={{ color: '#64748b' }}>
                    {note}
                  </span>
                )}
              </div>

              {/* Arrow connector between steps */}
              {i < steps.length - 1 && (
                <div
                  className="flex items-center text-base font-bold"
                  style={{ color: '#4f46e5' }}
                  aria-hidden="true"
                >
                  →
                </div>
              )}
            </Fragment>
          )
        })}

        {/* Loop-back marker for cyclical processes */}
        {loop && (
          <div
            className="flex items-center gap-1 rounded-lg px-3 py-3 text-xs font-semibold"
            style={{ color: '#4f46e5', backgroundColor: 'rgb(79 70 229 / 0.08)' }}
            aria-hidden="true"
          >
            ↻ repeat
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2.5 text-center text-xs" style={{ color: '#94a3b8' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
