"use client";

interface SkillGroup {
  label: string;
  labelColor: string;
  pillColor: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: "AI & Data Science",
    labelColor: "text-blue-700 bg-blue-50 border-blue-200",
    pillColor: "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "LangChain",
      "Gemini API",
      "RAG",
      "Power BI",
    ],
  },
  {
    label: "Frontend",
    labelColor: "text-purple-700 bg-purple-50 border-purple-200",
    pillColor:
      "bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100",
    skills: ["React", "TypeScript", "Flutter", "JavaScript"],
  },
  {
    label: "Backend",
    labelColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    pillColor:
      "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100",
    skills: [
      "Node.js",
      "Laravel",
      "Flask",
      "Django",
      "Spring Boot",
      "PHP",
      ".NET",
    ],
  },
  {
    label: "Cloud & DevOps",
    labelColor: "text-orange-700 bg-orange-50 border-orange-200",
    pillColor:
      "bg-orange-50 text-orange-800 border-orange-200 hover:bg-orange-100",
    skills: [
      "Oracle Cloud Infrastructure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "OCI Data Science",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#f8faff] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="font-syne font-bold text-4xl text-[#0f172a] mt-2">
            Skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className="animate-on-scroll bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span
                className={`inline-block px-3 py-1 text-xs font-bold border rounded-full mb-4 ${group.labelColor}`}
              >
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-medium border rounded-full transition-colors duration-200 cursor-default ${group.pillColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
