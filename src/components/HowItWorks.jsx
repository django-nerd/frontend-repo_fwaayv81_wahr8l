import React from 'react'

const steps = [
  {
    title: 'Voice-first interaction',
    desc: 'Speak naturally. I listen, clarify, and keep the flow simple and fast.'
  },
  {
    title: 'Understand the goal',
    desc: 'I translate your request into clear outcomes and constraints.'
  },
  {
    title: 'Route to the right agents',
    desc: 'Goal plans it. Research checks facts. Orchestrator executes in the background.'
  },
  {
    title: 'Summarize & confirm',
    desc: 'You get short spoken updates, options, and the next best action.'
  }
]

function HowItWorks() {
  return (
    <section id="how" className="relative bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-blue-200/80">A single voice conversation end‑to‑end. Behind the scenes, a coordinated multi‑agent system turns your intent into outcomes.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 text-blue-100 shadow-sm">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-300/80">Step {i + 1}</div>
              <div className="text-lg font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-sm text-blue-200/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
