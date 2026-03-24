const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Tesla Investment",
    description:
      "Invest in Tesla and join the Tesla Family. Gain access to a brand-new Tesla of your choice plus your exclusive Tesla Membership Card.",
    tag: "Most Popular",
    accent: "#c9a84c",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Crypto Investment",
    description:
      "Diversified portfolios across top-performing cryptocurrencies — Bitcoin, Ethereum, and emerging assets — with strategic profit optimization.",
    tag: "High Yield",
    accent: "#00d4ff",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Portfolio Management",
    description:
      "Personalized investment strategies tailored to your unique financial goals, risk appetite, and long-term wealth objectives.",
    tag: "Tailored",
    accent: "#a78bfa",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Passive Income Plans",
    description:
      "Earn consistent, structured returns through our tiered passive income packages designed for long-term financial freedom.",
    tag: "Steady Returns",
    accent: "#34d399",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#060a11]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm uppercase tracking-widest font-semibold">Our Services</span>
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Investment <span className="text-gold">Solutions</span>
          </h2>
          <p className="text-[#64748b] text-lg">
            Four powerful pathways to build and grow your wealth in the digital age.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-6 group relative overflow-hidden">
              {/* Glow accent top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${s.accent}18`, color: s.accent }}
              >
                {s.icon}
              </div>

              {/* Tag */}
              <span
                className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 inline-block"
                style={{ background: `${s.accent}15`, color: s.accent }}
              >
                {s.tag}
              </span>

              <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{s.description}</p>

              <div className="mt-6">
                <a
                  href="#signup"
                  className="text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  style={{ color: s.accent }}
                >
                  Learn More
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
