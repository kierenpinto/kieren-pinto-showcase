const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vue"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "CI/CD", "Linux"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-5xl">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider">// skills</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Tech <span className="text-gradient">stack</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-primary text-xs uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-default">
                    <span className="text-primary mr-2">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
