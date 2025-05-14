import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const hallOfFame = [
    {
      title: "Airwallex",
      description:
        "Discovered exposed API keys and a publicly accessible .env file, unlocking the potential for unauthorized JWT generation, twice!",
    },
    {
      title: "Uphold",
      description:
        "Exploited a remote code execution vulnerability through a dependency confusion attack, taking control of the system with ease.",
    },
    {
      title: "EmpireFlippers",
      description:
        "Bypassed OTP protection, proving once again that no security measure is unbreakable.",
    },
    {
      title: "KU Leuven University",
      description:
        "Unleashed a remote code execution exploit via a dependency confusion attack, once more demonstrating the critical need for proper dependency management.",
    },
    {
      title: "IspSystem",
      description:
        "Discovered a stored XSS vulnerability in the subject field of email tickets, potentially allowing malicious scripts to run across systems.",
    },
    {
      title: "AppyPie",
      description:
        "Exploited stored XSS through request tampering in the name field, taking advantage of improperly validated inputs to inject harmful scripts.",
    },
    {
      title: "OneSpan",
      description:
        "Revealed a critical broken access control vulnerability, leveraging member invite functionality to bypass security restrictions.",
    },
    {
      title: "Rapyd",
      description:
        "Discovered an access control issue where a low-privileged viewer could download admin-only files. A solid example of privilege escalation.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Hall Of Fame
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hallOfFame.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 
                  hover:-translate-y-1 hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  transition-all"
              >
                <h5 className="text-xl font-bold mb-2 text-blue-400">
                  {item.title}
                </h5>
                <p className="text-gray-400 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};