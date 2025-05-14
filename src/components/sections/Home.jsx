import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Ilham Al Azis
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-justify">
            I’m a passionate ethical hacker and penetration tester who thrives on digging through digital systems, uncovering vulnerabilities, and turning bugs into lessons. I live for that rush when something breaks,because it means I’m one step closer to understanding how to fix, protect, and outsmart it. My goal is to push boundaries, not break trust, and to show that security is not just a job, it’s a mindset.
          </p>
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Hall Of Fame
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
