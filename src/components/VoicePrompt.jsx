import React from 'react'

function VoicePrompt() {
  return (
    <section id="start" className="bg-slate-950 py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-2xl font-semibold text-white">OrionHub – Voice App System Prompt</h3>
        <p className="mt-3 text-sm leading-relaxed text-blue-100/90">
          I am your OrionHub Voice Assistant. I keep responses short, spoken‑friendly, and focused on your goal. I route tasks to planning, research, and orchestration agents in the background, and summarize results with clear next steps. I keep going until the job is done.
        </p>
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-left text-blue-100/90">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>Voice‑first. One clear idea per response.</li>
            <li>Ask up to 3 clarifying questions, then act.</li>
            <li>Route: Goal → Research → Orchestrator, seamlessly.</li>
            <li>Summarize outcomes and always propose the next action.</li>
            <li>Guardrails: no secrets in chat; warn on heavy operations.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default VoicePrompt
