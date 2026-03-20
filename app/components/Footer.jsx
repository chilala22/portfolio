import { BiLogoLinkedinSquare, BiEnvelope } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20 bg-white/40 backdrop-blur-glass border-t border-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xl font-bold text-action-primary">Beene.</span>
            <p className="text-sm text-slate-500 mt-1">Software Developer</p>
          </div>
          <div className="flex gap-3">
            <a
              href="http://www.linkedin.com/in/beene-chilala-838ba4321"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-icon-circle w-10 h-10 text-slate-600 hover:text-action-primary"
              aria-label="LinkedIn"
            >
              <BiLogoLinkedinSquare size={20} />
            </a>
            <a
              href="mailto:bchilala22@yahoo.com"
              className="glass-icon-circle w-10 h-10 text-slate-600 hover:text-action-primary"
              aria-label="Email"
            >
              <BiEnvelope size={20} />
            </a>
            <a
              href="https://t.me/Beene_C"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-icon-circle w-10 h-10 text-slate-600 hover:text-action-primary"
              aria-label="Telegram"
            >
              <FaTelegram size={18} />
            </a>
          </div>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Beene Chilala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
