import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tesla-cybertruck-white.jpeg"
          alt="Tesla Cybertruck"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/97 via-[#080c14]/85 to-[#080c14]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent" />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-[#c9a84c]/8 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] bg-blue-500/6 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2540] bg-[#0d1420]/80 mb-8">
            <span className="pulse-dot" />
            <span className="text-xs text-[#94a3b8] uppercase tracking-widest font-medium">
              Next-Generation Investment Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-white">Powering the </span>
            <span className="text-gold">Future of Wealth</span>
            <br />
            <span className="text-white">Through </span>
            <span className="text-electric">Innovation</span>
          </h1>

          <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl">
            TeslaX Digital Investments combines advanced technology, crypto markets,
            and forward-thinking strategies to help you{" "}
            <span className="text-white font-semibold">grow, secure, and scale</span>{" "}
            your financial future.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#signup" className="btn-primary text-base px-8 py-4">
              Get Started →
            </a>
            <a href="#plans" className="btn-secondary text-base px-8 py-4">
              View Investment Plans
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: "$2.4B+", label: "Assets Managed" },
              { value: "18,000+", label: "Investors Worldwide" },
              { value: "340%", label: "Avg. Annual Return" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-gold">{stat.value}</div>
                <div className="text-sm text-[#64748b] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080c14] to-transparent z-10" />
    </section>
  );
}
