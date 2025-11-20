import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-white/10 backdrop-blur">
            OrionHub · Voice Assistant
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Talk to build. Orchestrate to deliver.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">
            A calm, voice‑first interface that turns intent into agents, plans, and working outcomes — powered by OrionHub AgentOS.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#start" className="group inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
              Start a voice session
              <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
