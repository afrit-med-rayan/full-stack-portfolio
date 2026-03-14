"use client";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "M2 Intern",
    company: "Djezzy",
    period: "Oct 2025 → Present",
    current: true,
    bullets: [
      "AI-driven international roaming management (3G/4G/5G)",
      "Forecasting, optimal pricing, and revenue automation with ML",
      "Processing and structuring massive telecoms datasets",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Djezzy × Huawei × Majesteye",
    period: "Aug – Oct 2025",
    bullets: [
      "Churn and migration prediction with scikit-learn + Power BI",
      "End-to-end ML pipeline deployment with Docker",
      "Collaboration with senior engineers aligned to business KPIs",
    ],
  },
  {
    role: "Web Dev Intern",
    company: "Digit Sign",
    period: "Mar – May 2025",
    bullets: [
      "React + Express.js dynamic client portal",
      "REST APIs + optimized SQL for real-time tracking",
    ],
  },
  {
    role: "Web Dev Intern",
    company: "Zimou Express",
    period: "Dec 2024 – Feb 2025",
    bullets: [
      "Full Laravel ticket management and customer support system",
    ],
  },
  {
    role: "Software Dev Intern",
    company: "Algérie Télécom",
    period: "Jan – Jul 2024",
    bullets: [
      "Payment file automation system, +30% data accuracy",
      "Production deployment for a national infrastructure company",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest">
            Career
          </span>
          <h2 className="font-syne font-bold text-4xl text-[#0f172a] mt-2">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Dot */}
                <div
                  className={`absolute -left-12 top-1 flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    exp.current
                      ? "border-[#2563eb] bg-[#2563eb]"
                      : "border-[#e2e8f0] bg-white"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      exp.current ? "bg-white" : "bg-[#cbd5e1]"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="bg-[#f8faff] border border-[#e2e8f0] rounded-xl p-6 hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-syne font-bold text-lg text-[#0f172a]">
                        {exp.role}
                      </h3>
                      <p className="text-[#2563eb] font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#64748b] bg-white border border-[#e2e8f0] px-3 py-1 rounded-full font-medium">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-[#64748b]"
                      >
                        <span className="text-[#2563eb] mt-1.5 text-xs flex-shrink-0">
                          ●
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
