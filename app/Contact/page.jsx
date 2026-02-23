"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiEnvelope, BiPhone, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contactInfo = [
  { label: "Name", value: "Beene Chilala", icon: null, href: null },
  { label: "Nationality", value: "Zambian", icon: null, href: null },
  { label: "Languages", value: "English, Russian, Tonga", icon: null, href: null },
  {
    label: "Email",
    value: "bchilala22@yahoo.com",
    icon: BiEnvelope,
    href: "mailto:bchilala22@yahoo.com",
  },
  {
    label: "Phone",
    value: "+260975465229",
    icon: BiPhone,
    href: "tel:+260975465229",
  },
  {
    label: "Telegram",
    value: "@Beene_C",
    icon: FaTelegram,
    href: "https://t.me/Beene_C",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/beene-chilala",
    icon: BiLogoLinkedinSquare,
    href: "http://www.linkedin.com/in/beene-chilala-838ba4321",
  },
];

const Contact = () => {
  return (
    <div className="py-10 max-w-4xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-base-content/70 text-lg leading-relaxed">
            Motivated and results-driven information systems professional with hands-on
            experience in software development, systems analysis, IT support and systems
            operations. I have a solid understanding of documentation, business
            requirements, and digital governance processes. Passionate about building and
            improving digital solutions, solving complex problems, and enabling efficient
            business operations through technology.
          </p>
        </motion.div>

        {/* Info Grid */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4 text-base-content/80">
            Contact &amp; Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                className="flex items-center gap-3 p-4 bg-white border border-base-300 rounded-xl shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                {item.icon && (
                  <item.icon size={18} className="text-primary flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-base-content/50 uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
