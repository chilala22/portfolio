import Link from "next/link";
import { BiLogoLinkedinSquare, BiEnvelope } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-base-300 mt-20 bg-base-200/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xl font-bold text-primary">Beene.</span>
            <p className="text-sm text-base-content/50 mt-1">Software Developer</p>
          </div>
          <div className="flex gap-2">
            <a
              href="http://www.linkedin.com/in/beene-chilala-838ba4321"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle btn-sm text-base-content/70 hover:text-primary"
              aria-label="LinkedIn"
            >
              <BiLogoLinkedinSquare size={22} />
            </a>
            <a
              href="mailto:bchilala22@yahoo.com"
              className="btn btn-ghost btn-circle btn-sm text-base-content/70 hover:text-primary"
              aria-label="Email"
            >
              <BiEnvelope size={22} />
            </a>
            <a
              href="https://t.me/Beene_C"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle btn-sm text-base-content/70 hover:text-primary"
              aria-label="Telegram"
            >
              <FaTelegram size={20} />
            </a>
          </div>
          <p className="text-sm text-base-content/40">
            © {new Date().getFullYear()} Beene Chilala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
