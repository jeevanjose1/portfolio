"use client";

const skillGroups = [
  {
    category: "FRONTEND",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    category: "BACKEND",
    skills: ["Node.js", "Express.js", "GraphQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "MOBILE",
    skills: ["Flutter", "React Native", "Firebase", "Dart"]
  },
  {
    category: "INFRASTRUCTURE",
    skills: ["AWS", "Docker", "CI/CD", "Nginx", "Linux"]
  }
];

export default function SkillsSection() {
  return (
    <section className="section-padding border-t border-subtle">
      <div className="container-custom">
        <div className="flex flex-col gap-12">
          <header>
            <p className="text-label font-mono text-muted uppercase tracking-[0.12em] mb-4">
              Technical Skills
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            {skillGroups.map((group) => (
              <div key={group.category} className="space-y-6">
                <h3 className="text-label font-mono text-muted uppercase border-b border-subtle pb-4">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-small font-mono text-secondary">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
