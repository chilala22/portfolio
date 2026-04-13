"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Movie Recommendation System",
    subtitle: "Web Application — Thesis Project",
    description:
      "Built a recommendation system for selecting movies of interest as a final university project, blending user-focused design with back-end functionality.",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    accent: "border-t-action-primary",
    gradient: "from-blue-100 to-frost-sky",
  },
  {
    title: "Students Information System",
    subtitle: "Full-Stack Web Application",
    description:
      "Developed a comprehensive Student Information System, integrating front-end and back-end technologies for managing student records and data.",
    tech: ["HTML", "CSS", "PHP"],
    accent: "border-t-frost-rose",
    gradient: "from-pink-100 to-frost-rose",
  },
  {
    title: "Systems of Linear Equations",
    subtitle: "Parallel Computing — Jacobi Method",
    description:
      "Designed and implemented a parallel program to solve systems of linear equations using the Jacobi method, achieving significant performance improvements.",
    tech: ["C++", "OpenMP"],
    accent: "border-t-frost-violet",
    gradient: "from-violet-100 to-frost-violet",
  },
 
 
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
          My Projects
        </h1>
        <p className="text-slate-500 mt-2">A selection of work I&apos;m proud of</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`glass-card glass-card-hover overflow-hidden border-t-2 ${project.accent} cursor-default flex flex-col`}
          >
            {/* Gradient placeholder for project image */}
            <div
              className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <span className="text-4xl font-bold text-white/30 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-lg font-bold text-slate-900 mb-1">
                {project.title}
              </h2>
              <p className="text-xs text-slate-500 mb-3">{project.subtitle}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/50 text-slate-600 border border-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2">
                <span className="btn-glass text-xs px-3 py-1.5 rounded-lg">
                  View Case Study
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
