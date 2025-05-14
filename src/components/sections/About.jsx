import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-justify">
              I'm a Fisheries and Marine Science student at Universitas Padjadjaran who somehow found his way deep into the world of tech, especially cybersecurity and ethical hacking.
              While I spend my academic life learning about aquatic ecosystems and sustainable fisheries, my passion lies in poking around digital systems, finding bugs, and learning how things work (and break). I love blending both worlds, science and tech, and proving that you don’t have to be from a computer science background to make waves in cybersecurity.
              Always exploring, always learning. Fish by degree, hacker by choice. 🐟💻
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};