import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import VoicePrompt from './components/VoicePrompt'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.9)]" />
            <span className="text-sm font-semibold tracking-tight text-blue-100">OrionHub Voice</span>
          </div>
          <nav className="hidden gap-6 text-sm text-blue-100/80 sm:flex">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#start" className="hover:text-white">System prompt</a>
            <a href="/test" className="hover:text-white">Backend test</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <VoicePrompt />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-blue-300/70">
          OrionHub AgentOS · Voice‑first assistant that plans, researches, and orchestrates in the background.
        </div>
      </footer>
    </div>
  )
}

export default App
