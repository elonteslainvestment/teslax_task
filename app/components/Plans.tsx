import Image from "next/image";

const teslaModels = [
  {
    image: "/images/tesla-model3-street.jpeg",
    model: "Model 3",
    plan: "Starter Plan",
    minInvest: "$5,000",
    roi: "25% / yr",
    features: ["Tesla Model 3 reward", "Crypto portfolio access", "Monthly reports", "Email support"],
    popular: false,
  },
  {
    image: "/images/tesla-modelx-showroom-wings.jpeg",
    model: "Model X",
    plan: "Elite Plan",
    minInvest: "$25,000",
    roi: "65% / yr",
    features: ["Tesla Model X reward", "Full crypto + stock access", "Weekly strategy calls", "Priority 24/7 support", "Tesla Membership Card"],
    popular: true,
  },
  {
    image: "/images/tesla-cybertruck-white.jpeg",
    model: "Cybertruck",
    plan: "Titan Plan",
    minInvest: "$100,000",
    roi: "120% / yr",
    features: ["Tesla Cybertruck reward", "Unlimited asset classes", "Daily analyst briefings", "Dedicated account manager", "VIP Tesla Family access", "Exit strategy planning"],
    popular: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-28 px-6 bg-[#060a11]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm uppercase tracking-widest font-semibold">Investment Plans</span>
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Choose Your <span className="text-gold">Tesla</span>
          </h2>
          <p className="text-[#64748b] text-lg">
            Every investment tier rewards you with a brand-new Tesla. Pick the plan that fits your goals.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {teslaModels.map((p) => (
            <div
              key={p.model}
              className={`glass-card overflow-hidden relative ${p.popular ? "plan-popular" : ""}`}
            >
              {p.popular && (
                <div className="absolute top-4 right-4 z-20 bg-[#c9a84c] text-[#080c14] text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              {/* Car image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.image}
                  alt={`Tesla ${p.model}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-[#0d1420]/20 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <div className="text-white font-black text-2xl">Tesla {p.model}</div>
                  <div className="text-[#c9a84c] text-sm font-semibold mt-0.5">{p.plan}</div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                {/* ROI + Min */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-[#64748b] text-xs uppercase tracking-wider mb-1">Min. Investment</div>
                    <div className="text-white font-black text-2xl">{p.minInvest}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#64748b] text-xs uppercase tracking-wider mb-1">Expected ROI</div>
                    <div className="text-gold font-black text-2xl">{p.roi}</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#signup"
                  className={`block text-center py-3 px-6 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                    p.popular
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                >
                  Start with {p.model}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Extra model showcase */}
        <div className="mt-12 glass-card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/tesla-modelx-dealership-wings.jpeg"
                alt="Tesla Model X at dealership"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="text-[#c9a84c] text-sm uppercase tracking-widest font-semibold mb-3">Exclusive Reward</div>
              <h3 className="text-white text-3xl font-black mb-4">
                Join the <span className="text-gold">Tesla Family</span>
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Every investor receives a personalized Tesla Membership Card, access to Tesla showroom events,
                and the chance to drive away in a brand-new vehicle — fully funded by your investment returns.
              </p>
              <a href="#signup" className="btn-primary self-start">
                Claim Your Tesla →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
