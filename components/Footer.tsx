import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4">
        <span className="text-sm">
          © {new Date().getFullYear()} Adna Fika Agestifanka. All rights reserved.
        </span>
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/adnafika"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-teal-400 transition-colors"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adnafika/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-teal-400 transition-colors"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}