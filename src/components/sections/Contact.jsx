import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import ikon GitHub dan LinkedIn
import { HiOutlineMail } from "react-icons/hi"; // Import ikon email
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center space-y-6 px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/ilhamal7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 text-3xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:ilhamalazis741@gmail.com"
              className="text-white hover:text-blue-500 text-3xl transition"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://www.linkedin.com/in/ilham-al-azis-b47a38283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 text-3xl transition"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="text-gray-300 mt-4">
            Feel free to reach out through any of the above channels.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};