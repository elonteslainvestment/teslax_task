export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a2540] bg-[#060a11]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#c9a84c,#e8c96a)" }}
              >
                <span className="text-[#080c14] font-black text-base">T</span>
              </div>
              <span className="text-white font-bold text-lg">
                Tesla<span className="text-gold">X</span>
              </span>
            </div>
            <p className="text-[#4a5568] text-sm leading-relaxed">
              Powering the future of wealth through innovation and digital assets.
            </p>
            <div className="flex gap-3 mt-5">
              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-[#0d1420] border border-[#1a2540] flex items-center justify-center text-[#4a5568] hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Telegram */}
              <a href="#" aria-label="Telegram" className="w-9 h-9 rounded-lg bg-[#0d1420] border border-[#1a2540] flex items-center justify-center text-[#4a5568] hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-[#0d1420] border border-[#1a2540] flex items-center justify-center text-[#4a5568] hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navigation</div>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Investment Plans", href: "#plans" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[#4a5568] text-sm hover:text-[#c9a84c] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Investments */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wider mb-5">Investments</div>
            <ul className="space-y-3">
              {[
                "Tesla Investment",
                "Crypto Investment",
                "Portfolio Management",
                "Passive Income Plans",
                "Tesla Membership",
              ].map((l) => (
                <li key={l}>
                  <a href="#plans" className="text-[#4a5568] text-sm hover:text-[#c9a84c] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wider mb-5">Legal</div>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms & Conditions", "Risk Disclosure", "AML Policy", "Cookie Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-[#4a5568] text-sm hover:text-[#c9a84c] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4a5568] text-xs">
            © {year} TeslaX Digital Investments. All rights reserved.
          </p>
          <p className="text-[#4a5568] text-xs text-center">
            Investment involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
