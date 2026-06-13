export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor AI Response Times<br />
          <span className="text-[#58a6ff]">Across Every Provider</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Track latency, timeout rates, and cost-per-second for OpenAI, Anthropic, and other AI APIs — all in one real-time dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $29/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["< 50ms", "Ping interval"],
            ["99.9%", "Uptime tracked"],
            ["3+ Providers", "Out of the box"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Real-time latency dashboard",
              "OpenAI, Anthropic & custom endpoints",
              "Cost-per-second analytics",
              "Timeout & error rate alerts",
              "30-day historical data",
              "Email & Slack notifications"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which AI providers are supported?",
              "OpenAI, Anthropic, and any custom HTTP endpoint. Add your own API keys and we handle the rest."
            ],
            [
              "How is cost-per-second calculated?",
              "We combine your provider's token pricing with measured response durations to give you a true cost efficiency score per request."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your dashboard at any time — no questions asked, no lock-in."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} AI Prompt Response Time Tracker. All rights reserved.
      </footer>
    </main>
  );
}
