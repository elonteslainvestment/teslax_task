export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#060a11]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm uppercase tracking-widest font-semibold">Contact</span>
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-[#64748b] text-lg">
            Our team is available 24/7 to assist you with any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Email */}
          <div className="glass-card p-8 text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#c9a84c]/20 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth={1.5} className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="text-[#64748b] text-xs uppercase tracking-wider mb-2">Email Us</div>
            <a
              href="mailto:elonreeve.musk.tesla00109@gmail.com"
              className="text-white font-semibold text-sm break-all hover:text-[#c9a84c] transition-colors"
            >
              elonreeve.musk.tesla00109@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="glass-card p-8 text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#c9a84c]/20 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth={1.5} className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div className="text-[#64748b] text-xs uppercase tracking-wider mb-2">Office</div>
            <div className="text-white font-semibold text-lg">Texas, USA</div>
            <div className="text-[#64748b] text-xs mt-2">TeslaX Digital Investments HQ</div>
          </div>
        </div>
      </div>
    </section>
  );
}
