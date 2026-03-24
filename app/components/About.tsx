import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-sm uppercase tracking-widest font-semibold">About Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="text-white">Who We </span>
              <span className="text-gold">Are</span>
            </h2>

            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              TeslaX Digital Investments is a next-generation financial platform focused on
              technology-driven investing, cryptocurrency markets, and high-growth opportunities.
            </p>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              We leverage data, innovation, and market insights to deliver{" "}
              <span className="text-white font-semibold">smart, secure, and scalable</span>{" "}
              investment solutions for individuals and institutions.
            </p>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
              When you invest with us, we use your capital to acquire Tesla, SpaceX, and
              high-growth technology assets — generating compounding returns as valuations rise.
              As a member, you also join the exclusive{" "}
              <span className="text-gold font-semibold">Tesla Family</span>{" "}
              and become eligible for a brand-new Tesla of your choice.
            </p>

            {/* Mission box */}
            <div className="glass-card p-6 border-l-4 border-[#c9a84c]">
              <h3 className="text-white font-bold text-lg mb-2">Our Mission</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                To empower investors worldwide by providing access to cutting-edge financial
                opportunities in digital assets and emerging technologies.
              </p>
            </div>
          </div>

          {/* Right: Founder card */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#c9a84c]/30 to-blue-500/10 blur-sm group-hover:blur-md transition-all duration-500" />

              <div className="relative glass-card p-1 rounded-2xl overflow-hidden w-80">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/founder-portrait.jpeg"
                    alt="Founder & CEO"
                    fill
                    sizes="320px"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-white font-bold text-lg">Elon Reeve Musk FRS</div>
                    <div className="text-[#c9a84c] text-sm mt-0.5">Founder & Chief Investment Officer</div>
                    <div className="flex gap-2 mt-3">
                      {["SpaceX", "Tesla", "Neuralink"].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full border border-[#1a2540] text-[#64748b]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-6 glass-card px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#c9a84c]" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Verified & Regulated</div>
                <div className="text-[#64748b] text-xs">SEC-compliant investment platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
