const features = [
  {
    icon: "🔐",
    title: "Advanced Security & Encryption",
    desc: "Military-grade AES-256 encryption and multi-factor authentication protect your assets at every layer.",
  },
  {
    icon: "📊",
    title: "Expert Market Analysis",
    desc: "Our AI-powered algorithms analyze markets in real-time, giving you the edge on every investment decision.",
  },
  {
    icon: "⚡",
    title: "Fast Withdrawals",
    desc: "Access your funds within 24 hours. No unnecessary holds, no hidden delays.",
  },
  {
    icon: "🎧",
    title: "24/7 Customer Support",
    desc: "Dedicated specialists are available around the clock to assist with any questions or concerns.",
  },
  {
    icon: "🔍",
    title: "Transparent Investment Process",
    desc: "Real-time dashboards show exactly where your money is invested and how it is performing.",
  },
  {
    icon: "🚀",
    title: "Technology-Driven Growth",
    desc: "Backed by cutting-edge fintech infrastructure that scales with the evolving digital economy.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-[#c9a84c]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm uppercase tracking-widest font-semibold">Why Choose Us</span>
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The TeslaX <span className="text-gold">Advantage</span>
          </h2>
          <p className="text-[#64748b] text-lg">
            Every feature is engineered to maximize your returns while keeping your assets safe.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card p-7 group"
            >
              <div className="text-3xl mb-5">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#c9a84c] transition-colors">
                {f.title}
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-16 glass-card px-8 py-6 flex flex-wrap items-center justify-between gap-6">
          <div className="text-[#64748b] text-sm">Trusted by investors across 40+ countries</div>
          <div className="flex flex-wrap gap-8">
            {["SEC Registered", "FDIC Insured", "ISO 27001", "SOC 2 Certified"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#c9a84c]">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[#94a3b8] font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
