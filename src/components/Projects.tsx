"use client";

import { Github, ExternalLink, Clock } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  status: "In progress" | "Deployed" | "Hackathon project" | "Production";
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Lunaire",
    description:
      "Modern e-commerce platform specialized for jewelry retail with advanced filtering",
    tags: ["React", "Node.js", "MySQL", "Stripe"],
    status: "Production",
    github: "https://github.com/afrit-med-rayan/lunaire",
    live: "https://demo-lunaire.vercel.app",
    featured: true,
  },
  {
    title: "Customer Churn Prediction — Djezzy",
    description:
      "Supervised ML model predicting which prepaid customers are likely to switch to postpaid. Improved accuracy by 12% through hyperparameter tuning and model stacking. Deployed with a Power BI dashboard for the Djezzy commercial team.",
    tags: ["Python", "scikit-learn", "Flask", "Docker", "Power BI", "Streamlit"],
    status: "Deployed",
    github: "https://github.com/afrit-med-rayan",
  },
  {
    title: "ZOA – Veterinary Clinic System",
    description:
      "ZOA is a comprehensive Veterinary Clinic Management System designed to streamline operations for clinics, veterinarians, and pet owners.",
    tags: ["React", "Node.js", "Flask", "PostgreSQL", "NLP", "Docker"],
    status: "Deployed",
    live: "https://zoa-clinic-demo.vercel.app",
  },
  {
    title: "Freshmart Store",
    description:
      "Freshmart Store is a modern grocery shopping platform designed to offer users a seamless and visually appealing experience. Built using React and Vite, it focuses on performance and smooth navigation. Redux ensures efficient state management for cart operations and product handling, while Tailwind CSS provides a clean and responsive interface optimized for all devices.",
    tags: ["React", "Vite", "Redux", "Tailwind CSS"],
    status: "Deployed",
    live: "https://freshmart-demo.vercel.app",
  },
];

const statusConfig = {
  "In progress": { color: "text-amber-600 bg-amber-50 border-amber-200" },
  Deployed: { color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  "Hackathon project": { color: "text-purple-600 bg-purple-50 border-purple-200" },
  Production: { color: "text-blue-600 bg-blue-50 border-blue-200" },
};

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#f8faff] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-syne font-bold text-4xl text-[#0f172a] mt-2">
            Things I&apos;ve built
          </h2>
        </div>

        {/* Featured Project */}
        {featured && (
          <div className="animate-on-scroll delay-100 mb-6">
            <div className="relative group border-2 border-[#2563eb]/30 rounded-2xl bg-white p-8 hover:border-[#2563eb] hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 overflow-hidden">
              {/* Featured badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#2563eb] text-white text-xs font-semibold rounded-full">
                  ✦ Featured
                </span>
              </div>
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563eb]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

              <div className="max-w-2xl">
                <h3 className="font-syne font-bold text-2xl text-[#0f172a] mb-3">
                  {featured.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed mb-4">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-[#2563eb] bg-blue-50 border border-blue-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border ${statusConfig[featured.status].color
                      }`}
                  >
                    <Clock size={11} />
                    {featured.status}
                  </span>

                  {/* Links for Featured Project */}
                  <div className="flex items-center gap-2">
                    {featured.github && (
                      <a
                        href={featured.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#64748b] hover:text-[#0f172a] hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {featured.live && (
                      <a
                        href={featured.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#2563eb] hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid of remaining projects */}
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <div
              key={project.title}
              className="animate-on-scroll group bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#2563eb]/40 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="font-syne font-bold text-lg text-[#0f172a] mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-[#64748b] bg-[#f8faff] border border-[#e2e8f0] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${statusConfig[project.status].color
                    }`}
                >
                  {project.status}
                </span>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#64748b] hover:text-[#0f172a] hover:bg-gray-100 rounded-lg transition-colors"
                      aria-label="GitHub Code"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#2563eb] hover:bg-blue-50 rounded-lg transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
