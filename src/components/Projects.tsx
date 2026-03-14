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
    title: "Ceramic Studio Platform",
    description:
      "Full e-commerce and brand platform for an Algiers ceramics atelier. Covers B2B (hotels, restaurants) and B2C sales, workshop booking, and a custom North African–inspired design system. Phase 2 will add a structured training platform with student portals.",
    tags: ["React", "Node.js", "MySQL", "Stripe", "Vercel"],
    status: "In progress",
    featured: true,
  },
  {
    title: "Customer Churn Prediction — Djezzy",
    description:
      "Supervised ML model predicting which prepaid customers are likely to switch to postpaid. Improved accuracy by 12% through hyperparameter tuning and model stacking. Deployed with a Power BI dashboard for the Djezzy commercial team.",
    tags: ["Python", "scikit-learn", "Flask", "Docker", "Power BI", "Streamlit"],
    status: "Deployed",
  },
  {
    title: "Pro Assurance — Smart Cities Hackathon · 2nd place",
    description:
      "AI-powered system automating accident report management: QR scan, NLP-based form extraction, and integrated digital payment. Built in 48 hours, placed 2nd overall at the Future Caravans × Djezzy × Guiddini hackathon.",
    tags: ["React", "Node.js", "Flask", "PostgreSQL", "NLP", "Docker"],
    status: "Hackathon project",
  },
  {
    title: "Payment File Management — Algérie Télécom",
    description:
      "Automated payment file processing system for Algeria's national telecoms provider. Reduced manual workload significantly and improved data accuracy by 30%. This was also the basis of my Licence thesis.",
    tags: ["PHP", "Laravel", "MySQL", "Power BI", "JavaScript"],
    status: "Production",
  },
  {
    title: "ZenGenius — MLH Hackathon",
    description:
      "AI study assistant that transforms PDFs into interactive learning tools — automatic summaries, flashcard generation, and semantic Q&A — powered by Gemini Pro and a full RAG pipeline.",
    tags: ["React", "Node.js", "MongoDB", "Auth0", "Gemini API", "LangChain"],
    status: "Hackathon project",
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
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border ${
                      statusConfig[featured.status].color
                    }`}
                  >
                    <Clock size={11} />
                    {featured.status}
                  </span>
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
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${
                    statusConfig[project.status].color
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
                      className="p-2 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-gray-100 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-[#64748b] hover:text-[#2563eb] hover:bg-blue-50 transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={16} />
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
