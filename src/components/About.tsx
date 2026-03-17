"use client";

import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud",
    subtitle: "Generative AI Professional",
    period: "2025–2027",
    link: "https://mylearn.oracle.com/ou/credential/mohamed-rayan-afrit/",
  },
  {
    title: "Oracle Cloud",
    subtitle: "DevOps Professional",
    period: "2025–2027",
    link: "https://mylearn.oracle.com/ou/credential/mohamed-rayan-afrit/",
  },
  {
    title: "Oracle Cloud",
    subtitle: "Data Science Professional",
    period: "2025–2027",
    link: "https://mylearn.oracle.com/ou/credential/mohamed-rayan-afrit/",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Avatar */}
          <div className="flex justify-center lg:justify-start animate-on-scroll">
            <div className="relative">
              {/* Outer decorative rings */}
              <div className="absolute -inset-4 rounded-2xl border-2 border-[#2563eb]/20 rotate-3" />
              <div className="absolute -inset-2 rounded-2xl border border-[#2563eb]/30 -rotate-2" />
              {/* Main avatar */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <span className="font-syne font-bold text-6xl sm:text-7xl text-white tracking-tight select-none">
                  MRA
                </span>
                <div className="absolute inset-0 bg-[#2563eb]/10" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(37,99,235,0.3), transparent)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="animate-on-scroll mb-2">
              <span className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest">
                About Me
              </span>
            </div>
            <h2 className="font-syne font-bold text-4xl text-[#0f172a] mb-6 animate-on-scroll delay-100">
              Developer. Engineer.
              <br />
              Builder.
            </h2>
            <div className="space-y-4 text-[#64748b] leading-relaxed animate-on-scroll delay-200">
              <p>
                I&apos;m Rayan — a developer and AI engineer based in
                Boumerdès, Algeria. I&apos;m currently finishing my
                Master&apos;s in Computer Science with a focus on Data Science,
                Cloud Computing, and AI Engineering. I&apos;ve worked across
                the full stack: from shipping Laravel backends at Algérie
                Télécom to building ML pipelines at Djezzy alongside Huawei and
                Majesteye engineers.
              </p>
              <p>
                I care about building things that actually work in production —
                not just demos. I mentor junior developers at DevUp Club,
                competed in national hackathons, and hold three Oracle Cloud
                certifications covering Generative AI, DevOps, and Data
                Science.
              </p>
              <p>
                Right now I&apos;m freelancing on a full e-commerce + showcase
                platform for a ceramics studio, which is how you probably found
                this.
              </p>
            </div>

            {/* Certification Badges */}
            <div className="mt-10 animate-on-scroll delay-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-4">
                Certifications
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {certifications.map((cert, i) => (
                  <a
                    key={i}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border border-[#e2e8f0] rounded-xl bg-[#f8faff] hover:border-[#2563eb]/40 hover:shadow-md hover:shadow-blue-100 transition-all duration-300 block"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-1.5 bg-[#2563eb]/10 rounded-lg">
                        <Award
                          size={14}
                          className="text-[#2563eb]"
                        />
                      </div>
                      <ExternalLink size={12} className="text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs font-semibold text-[#2563eb] mb-0.5">
                      {cert.title}
                    </p>
                    <p className="text-xs text-[#0f172a] font-medium leading-snug">
                      {cert.subtitle}
                    </p>
                    <p className="text-xs text-[#94a3b8] mt-1">{cert.period}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
