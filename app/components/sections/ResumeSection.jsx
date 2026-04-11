"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiImport } from "react-icons/bi";
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

const sections = ["Experience", "Education", "Skills"];

const experiences = [
  {
    period: "04/2025 – Present",
    role: "Systems Developer and Support Officer",
    org: "Smart Zambia Institute",
    description:
      "Supported the design, development, enhancement, and maintenance of government digital platforms in line with national e-Government and digital transformation initiatives. Conducted systems analysis including requirements gathering, process mapping, and documentation.",
  },
  {
    period: "01/2025 – 04/2025",
    role: "Assistant Systems Analyst (Temporary)",
    org: "Road Transport Safety Agency (RTSA)",
    description:
      "Ensured data entry accuracy and preservation of system and database integrity. Supported database development, maintenance, and integrity enforcement through proper constraints, indexing, and access controls.",
  },
  {
    period: "11/2024 – 01/2025",
    role: "ICT Support Officer – Intern",
    org: "Road Transport Safety Agency (RTSA)",
    description:
      "Resolved network and connectivity issues including IP conflicts and device failures. Conducted routine inspections and resolved hardware issues involving workstations, printers, and peripheral devices.",
  },
  {
    period: "06/2024 – 07/2024",
    role: "Student Intern",
    org: "Belgorod State National University",
    description:
      "Participated in the testing of software products, working with code, correcting errors and introducing new functions. Participated in company projects, helping teams from planning to implementation and testing.",
  },
  {
    period: "06/2023 – 07/2023",
    role: "Student Intern",
    org: "Belgorod State National University",
    description:
      "Collaborated with a team of 3 software engineers developing the interface of a web application for monitoring environmental factors and growing conditions of plant racks for seedlings and flowers.",
  },
  {
    period: "06/2022 – 07/2022",
    role: "Student Intern",
    org: "Belgorod State National University",
    description:
      "Developed a custom storefront for a computer accessory store using PHP, HTML, JavaScript, CSS and MySQL.",
  },
  {
    period: "06/2021 – 07/2021",
    role: "Student Intern",
    org: "Belgorod State National University",
    description:
      "Developed a tic-tac-toe game using C++, demonstrating strong problem-solving skills and understanding of game mechanics.",
  },
];

const education = [
  {
    period: "09/2020 – 06/2024",
    degree: "Bachelor of Science: Software and Administration of Information Systems",
    school: "Belgorod State National Research University – Belgorod, Russia",
    desc: "Graduated with a BSc in Software and Administration of Information Systems. Courses included Databases, Parallel Programming, Structures and Algorithms of Computer Data Processing, and Architecture of Computer and Computing Systems. Cumulative GPA: 4.6/5.",
  },
  {
    period: "01/2014 – 12/2018",
    degree: "GCSEs",
    school: "St. Joseph's Secondary School – Monze, Zambia",
    desc: "Graduated with an O-level Certificate. Points: 6.",
  },
];

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

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

const renderContent = (selectedSection) => {
  switch (selectedSection) {
    case "Experience":
      return (
        <motion.div
          key="experience"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            My Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 overflow-y-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] pr-1">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="glass-card glass-card-hover p-4 flex flex-col gap-3"
              >
                <p className="text-action-primary text-xs font-semibold">{exp.period}</p>
                <p className="text-sm text-slate-600 flex-1 leading-relaxed">
                  {exp.description}
                </p>
                <div className="border-t border-white/30 pt-2">
                  <p className="font-semibold text-sm text-slate-900">{exp.role}</p>
                  <p className="text-slate-500 text-xs">{exp.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case "Education":
      return (
        <motion.div
          key="education"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            My Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.01 }}
                className="glass-card glass-card-hover p-5"
              >
                <p className="text-action-primary font-semibold text-sm mb-2">
                  {edu.period}
                </p>
                <p className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</p>
                <p className="text-slate-500 text-sm mb-3">{edu.school}</p>
                {edu.desc && (
                  <p className="text-sm text-slate-600 leading-relaxed">{edu.desc}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case "Skills":
      return (
        <motion.div
          key="skills"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card glass-card-hover flex flex-col items-center justify-center gap-2 p-5 cursor-default"
              >
                <skill.icon size={48} className="text-action-primary" />
                <span className="text-xs font-medium text-slate-500">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    default:
      return null;
  }
};

const ResumeSection = () => {
  const [selectedSection, setSelectedSection] = useState("Experience");

  return (
    <section id="resume" className="scroll-mt-24 py-12 sm:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-10 gap-4"
      >
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Resume
          </h1>
        </div>
        <motion.a
          href="/Beene_Chilala_CV1.pdf"
          download
          className="btn-primary-frost"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BiImport size={18} />
          Download Full PDF
        </motion.a>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Sidebar */}
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="glass-card p-5 mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Why Hire Me</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              A highly motivated and organized individual with a strong passion
              for learning, growth, and building impactful digital solutions.
            </p>
          </div>
          <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto">
            {sections.map((section) => (
              <motion.button
                key={section}
                onClick={() => setSelectedSection(section)}
                className={`flex-1 lg:flex-none lg:w-full text-center lg:text-left rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  selectedSection === section
                    ? "btn-primary-frost"
                    : "glass-card glass-card-hover text-slate-600 hover:text-action-primary"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {renderContent(selectedSection)}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
