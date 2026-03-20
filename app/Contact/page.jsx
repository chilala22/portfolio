"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiEnvelope, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";

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

const skills = [
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3, label: "CSS3" },
  { icon: FaJs, label: "JavaScript" },
  { icon: RiNextjsLine, label: "Next.js" },
  { icon: FaReact, label: "React" },
  { icon: SiCplusplus, label: "C++" },
  { icon: FaPython, label: "Python" },
  { icon: RiTailwindCssFill, label: "Tailwind" },
  { icon: FaFigma, label: "Figma" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: BiLogoLinkedinSquare,
    href: "http://www.linkedin.com/in/beene-chilala-838ba4321",
    value: "linkedin.com/in/beene-chilala",
  },
  {
    label: "Email",
    icon: BiEnvelope,
    href: "mailto:bchilala22@yahoo.com",
    value: "bchilala22@yahoo.com",
  },
  {
    label: "Telegram",
    icon: FaTelegram,
    href: "https://t.me/Beene_C",
    value: "@Beene_C",
  },
];

const About = () => {
  return (
    <div className="py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* About Me Glass Card */}
        <motion.div variants={itemVariants} className="glass-card glass-card-hover p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-frost-sky/50 scale-110" style={{ filter: "blur(20px)" }} />
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/60 shadow-glass">
                  <img
                    src="/Image3.jpg"
                    alt="Beene Chilala"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                About Me
              </h1>
              <p className="text-action-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Story
              </p>
              <p className="text-slate-600 leading-relaxed">
                Motivated and results-driven information systems professional with hands-on
                experience in software development, systems analysis, IT support and systems
                operations. I have a solid understanding of documentation, business
                requirements, and digital governance processes. Passionate about building and
                improving digital solutions, solving complex problems, and enabling efficient
                business operations through technology.
              </p>
            </div>
          </div>

          {/* Skills Icons */}
          <div className="mt-8 pt-6 border-t border-white/30">
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="glass-icon-circle flex-col gap-1 w-16 h-16 cursor-default"
                  title={skill.label}
                >
                  <skill.icon size={24} className="text-action-primary" />
                  <span className="text-[9px] font-medium text-slate-500">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass-card glass-card-hover p-5 flex flex-col items-center gap-3 text-center"
              >
                <div className="glass-icon-circle w-14 h-14">
                  <link.icon size={26} className="text-action-primary" />
                </div>
                <span className="font-semibold text-slate-900 text-sm">{link.label}</span>
                <span className="text-xs text-slate-500 truncate max-w-full">{link.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
