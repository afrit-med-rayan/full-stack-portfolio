"use client";

import { Github, Linkedin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0f172a] py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.6) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 animate-on-scroll">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/70 font-medium">
            Available for freelance
          </span>
        </div>

        <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white mb-4 animate-on-scroll delay-100">
          Let&apos;s work together
        </h2>
        <p className="text-[#94a3b8] text-lg leading-relaxed mb-10 animate-on-scroll delay-200">
          I&apos;m currently available for freelance projects. Whether it&apos;s
          a full product build, an AI integration, or a consulting call —
          reach out.
        </p>

        {/* Big Email Link */}
        <div className="animate-on-scroll delay-300 mb-10">
          <a
            href="mailto:afrit.mohamedrayan@gmail.com"
            className="group inline-flex items-center gap-3 text-white font-syne font-bold text-xl sm:text-2xl hover:text-[#2563eb] transition-colors duration-300 border-b border-white/20 pb-2 hover:border-[#2563eb]/60"
          >
            <Mail size={24} className="text-[#2563eb]" />
            afrit.mohamedrayan@gmail.com
          </a>
        </div>

        {/* Social Row */}
        <div className="flex items-center justify-center gap-4 animate-on-scroll delay-400 mb-16">
          <a
            href="https://www.linkedin.com/in/afrit-med-rayan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 border border-white/15 rounded-xl text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 border border-white/15 rounded-xl text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="tel:+213560609624"
            className="group flex items-center gap-2 px-5 py-2.5 border border-white/15 rounded-xl text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            aria-label="Phone"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">+213 560 609 624</span>
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-[#64748b] text-sm">
            © 2025 Mohamed Rayan Afrit · Built with Next.js · Deployed on
            Vercel
          </p>
        </div>
      </div>
    </section>
  );
}
