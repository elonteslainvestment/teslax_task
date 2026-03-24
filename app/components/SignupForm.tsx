"use client";
import { useActionState } from "react";
import { submitApplication, type FormState } from "../actions";

const initialState: FormState = { success: false };

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(submitApplication, initialState);

  if (state.success) {
    return (
      <section id="signup" className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card p-12">
            <div className="w-20 h-20 rounded-full bg-[#c9a84c]/15 flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth={2} className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-white text-3xl font-black mb-4">Application Received!</h3>
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              Thank you for your interest in TeslaX Digital Investments.
              Our team will review your application and contact you within{" "}
              <span className="text-[#c9a84c] font-semibold">24–48 hours</span>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] bg-[#c9a84c]/6 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm uppercase tracking-widest font-semibold">Get Started</span>
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Start Your <span className="text-gold">Investment Journey</span>
          </h2>
          <p className="text-[#64748b] text-lg">
            Fill out the form below and our team will reach out to you shortly.
          </p>
        </div>

        <div className="glass-card p-8 md:p-10">
          <form action={formAction} className="space-y-6">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#94a3b8] mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#94a3b8] mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#94a3b8] mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+1 (555) 000-0000"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#94a3b8] mb-2">Investment Type *</label>
                <select
                  name="investmentType"
                  required
                  defaultValue=""
                  className="form-input"
                >
                  <option value="" disabled>Select investment type</option>
                  <option value="tesla">Tesla Investment</option>
                  <option value="crypto">Crypto Investment</option>
                  <option value="portfolio">Portfolio Management</option>
                  <option value="passive">Passive Income Plans</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-[#94a3b8] mb-2">Address</label>
              <input
                type="text"
                name="address"
                placeholder="City, State, Country"
                className="form-input"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-[#94a3b8] mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your investment goals..."
                className="form-input resize-none"
              />
            </div>

            {/* Radio rows */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#94a3b8] mb-3">
                  Are you ready to start investing? *
                </label>
                <div className="flex gap-6">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="readyToInvest"
                        value={v}
                        required
                        className="w-4 h-4 accent-[#c9a84c]"
                      />
                      <span className="text-[#94a3b8] text-sm capitalize group-hover:text-white transition-colors">
                        {v}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#94a3b8] mb-3">
                  Any criminal record? *
                </label>
                <div className="flex gap-6">
                  {["yes", "no"].map((v) => (
                    <label key={v} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="criminalRecord"
                        value={v}
                        required
                        className="w-4 h-4 accent-[#c9a84c]"
                      />
                      <span className="text-[#94a3b8] text-sm capitalize group-hover:text-white transition-colors">
                        {v}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {state.error && (
              <p className="text-red-400 text-sm text-center">{state.error}</p>
            )}

            <button type="submit" disabled={pending} className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
              {pending ? "Submitting…" : "Submit Application — Start Investing →"}
            </button>

            <p className="text-center text-xs text-[#4a5568]">
              By submitting, you agree to our{" "}
              <a href="#" className="text-[#c9a84c] hover:underline">Terms & Conditions</a>{" "}
              and{" "}
              <a href="#" className="text-[#c9a84c] hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
