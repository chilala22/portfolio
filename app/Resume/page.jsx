"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiImport } from "react-icons/bi";
import {
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

const timelineEntries = [
  {
    type: "work",
    period: "2025 – Present",
    role: "Systems Developer and Support Officer",
    org: "Smart Zambia Institute",
    bullets: [
      "Supported design, development, and maintenance of government digital platforms",
      "Conducted systems analysis including requirements gathering and process mapping",
    ],
  },
  {
    type: "work",
    period: "2025",
    role: "Assistant Systems Analyst",
    org: "Road Transport Safety Agency (RTSA)",
    bullets: [
      "Ensured data entry accuracy and database integrity",
      "Supported database development through proper constraints and indexing",
    ],
  },
  {
    type: "work",
    period: "2024 – 2025",
    role: "ICT Support Officer – Intern",
    org: "Road Transport Safety Agency (RTSA)",
    bullets: [
      "Resolved network and connectivity issues including IP conflicts",
      "Conducted routine inspections of workstations and peripheral devices",
    ],
  },
  {
    type: "education",
    period: "2020 – 2024",
    role: "BSc in Software & Information Systems",
    org: "Belgorod State National Research University",
    bullets: [
      "Focus on Databases, Parallel Programming, and Computer Architecture",
      "Graduated with Honors. GPA: 4.6/5",
    ],
  },
  {
    type: "work",
    period: "2021 – 2024",
    role: "Student Intern (Multiple Terms)",
    org: "Belgorod State National University",
    bullets: [
      "Developed web applications, storefronts, and monitoring systems",
      "Collaborated with engineering teams on planning, implementation, and testing",
    ],
  },
  {
    type: "education",
    period: "2014 – 2018",
    role: "GCSEs",
    org: "St. Joseph's Secondary School – Monze, Zambia",
    bullets: [
      "Graduated with an O-level Certificate",
    ],
  },
];

const Resume = () => {
  return (
    <div className="py-10 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Resume</h1>
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

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-action-primary/20" />

        <div className="space-y-8">
          {timelineEntries.map((entry, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-4 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Milestone marker */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-action-primary border-4 border-white shadow-sm" />
                </div>

                {/* Spacer for mobile (left side of line) */}
                <div className="w-12 flex-shrink-0 md:hidden" />

                {/* Card */}
                <div className={`flex-1 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                }`}>
                  <div className="glass-card glass-card-hover p-5">
                    <div className={`flex items-center gap-2 mb-2 ${
                      isLeft ? "md:justify-end" : "md:justify-start"
                    }`}>
                      {entry.type === "work" ? (
                        <FaBriefcase size={14} className="text-action-primary" />
                      ) : (
                        <FaGraduationCap size={14} className="text-frost-violet" style={{ color: "#8B5CF6" }} />
                      )}
                      <span className="text-xs font-semibold text-action-primary">
                        {entry.period}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">{entry.role}</h3>
                    <p className="text-sm text-slate-500 mb-3">{entry.org}</p>
                    <ul className={`space-y-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                      {entry.bullets.map((bullet, j) => (
                        <li key={j} className="text-sm text-slate-600 leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty spacer for opposite side on desktop */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
