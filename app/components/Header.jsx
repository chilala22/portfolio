"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Resume", label: "Resume" },
  { href: "/Work", label: "Projects" },
  { href: "/Contact", label: "About" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-base-100/90 border-b border-base-300"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="navbar min-h-16">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost px-2">
              <motion.span
                className="text-2xl font-bold text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Beene<span className="text-base-content/40">.</span>
              </motion.span>
            </Link>
          </div>
          <nav className="flex-none">
            <ul className="menu menu-horizontal gap-1 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-medium rounded-lg px-4 py-2 transition-all duration-200 ${
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "hover:text-primary hover:bg-base-200"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.span
                        className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full"
                        layoutId="underline"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
