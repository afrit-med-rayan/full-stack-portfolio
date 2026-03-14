"use client";

import { Github, Linkedin, Mail, ChevronRight, Download } from "lucide-react";

const techTags = ["React", "Node.js", "Python", "AI/ML", "Oracle Cloud", "Docker"];

const stats = [
  { value: "3×", label: "Oracle Cloud Certified" },
  { value: "6+", label: "Production deployments" },
  { value: "2nd", label: "Smart Cities Hackathon" },
];

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-[#0f172a] flex flex-col justify-center px-6 pt-24 pb-0 relative overflow-hidden">
        {/* Background grid decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.6) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        {/* Glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-on-scroll">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white/70 font-medium">
              Available for freelance
            </span>
          </div>

          {/* Name */}
          <h1 className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-4 animate-on-scroll delay-100">
            Mohamed Rayan
            <br />
            <span className="text-white">Afrit</span>
          </h1>

          {/* Title */}
          <h2 className="font-syne font-semibold text-2xl sm:text-3xl text-[#2563eb] mb-6 animate-on-scroll delay-200">
            Full-Stack Developer &amp; AI Engineer
          </h2>

          {/* Description */}
          <p className="text-[#94a3b8] text-lg max-w-2xl leading-relaxed mb-8 animate-on-scroll delay-300">
            Master&apos;s student in Computer Science · AI &amp; Data Science
            specialization at Université M&apos;hamed Bougara de Boumerdès. I
            build full-stack products and AI systems — currently shaping
            AI-driven solutions at Djezzy, one of Algeria&apos;s largest
            telcos. 3× Oracle Cloud Certified.
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-3 mb-10 animate-on-scroll delay-400">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm font-medium text-white/80 border border-white/15 rounded-full bg-white/5 hover:border-[#2563eb]/60 hover:text-white hover:bg-[#2563eb]/10 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 animate-on-scroll delay-500">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View my work
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-on-scroll delay-600">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/15 rounded-lg text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/15 rounded-lg text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:afrit.mohamedrayan@gmail.com"
              className="p-2.5 border border-white/15 rounded-lg text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#f8faff] border-y border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 divide-x divide-[#e2e8f0]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-2 px-4 animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-syne font-bold text-3xl sm:text-4xl text-[#0f172a]">
                  {stat.value}
                </span>
                <span className="text-sm text-[#64748b] text-center mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
