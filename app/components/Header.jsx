"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Work", label: "Projects" },
  { href: "/Contact", label: "About" },
];

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="glass-nav px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <motion.span
            className="text-xl font-bold text-action-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Beene<span className="text-slate-400">.</span>
          </motion.span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative font-medium rounded-lg px-4 py-2 text-sm transition-all duration-200 ${
                  pathname === link.href
                    ? "text-action-primary bg-white/50"
                    : "text-slate-600 hover:text-action-primary hover:bg-white/30"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    className="absolute bottom-1 left-3 right-3 h-0.5 bg-action-primary rounded-full"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/Resume"
              className={`btn-primary-frost rounded-full px-5 py-2 text-sm ${
                pathname === "/Resume" ? "ring-2 ring-action-primary/30 ring-offset-2" : ""
              }`}
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/50 text-slate-700 hover:text-action-primary hover:bg-white/70 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <BiX size={22} /> : <BiMenu size={22} />}
        </button>
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
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      pathname === link.href
                        ? "text-action-primary bg-white/60 font-semibold"
                        : "text-slate-600 hover:text-action-primary hover:bg-white/40"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-1">
                <Link
                  href="/Resume"
                  onClick={() => setMobileOpen(false)}
                  className={`btn-primary-frost rounded-xl px-5 py-3 text-sm w-full text-center block ${
                    pathname === "/Resume" ? "ring-2 ring-action-primary/30" : ""
                  }`}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
