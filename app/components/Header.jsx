"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
];

const Header = () => {
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="glass-nav px-4 sm:px-6 py-2.5 flex items-center justify-center">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Logo */}
          <a href="#home">
            <motion.span
              className="text-xl font-bold text-action-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Beene<span className="text-slate-400">.</span>
            </motion.span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative font-medium rounded-lg px-4 py-2 text-sm transition-all duration-200 ${
                    activeId === link.id
                      ? "text-action-primary bg-white/50"
                      : "text-slate-600 hover:text-action-primary hover:bg-white/30"
                  }`}
                >
                  {link.label}
                  {activeId === link.id && (
                    <motion.span
                      className="absolute bottom-1 left-3 right-3 h-0.5 bg-action-primary rounded-full"
                      layoutId="underline"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/50 text-slate-700 hover:text-action-primary hover:bg-white/70 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <BiX size={22} /> : <BiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-card mt-2 p-3 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      activeId === link.id
                        ? "text-action-primary bg-white/60 font-semibold"
                        : "text-slate-600 hover:text-action-primary hover:bg-white/40"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
