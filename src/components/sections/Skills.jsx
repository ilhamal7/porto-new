import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const skills = [
    "Web Application Security",
    "Network Penetration Testing",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 
                  hover:-translate-y-1 hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  transition-all"
              >
                <p className="text-xl font-semibold text-gray-400">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};