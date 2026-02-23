"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Movie Recommendation System",
    subtitle: "Web Application — Thesis Project",
    description:
      "Developed a recommendation system for selecting movies of interest as a final university project. The interface is a web application utilizing web technologies to create a seamless experience, showcasing the ability to build a comprehensive and functional recommendation system blending user-focused design with back-end functionality.",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    number: "02",
    title: "Students Information System",
    subtitle: "Full-Stack Web Application",
    description:
      "Developed a comprehensive Student Information System, integrating front-end and back-end technologies to create an efficient and user-friendly application for managing student records and data.",
    tech: ["HTML", "CSS", "PHP"],
  },
  {
    number: "03",
    title: "Systems of Linear Equations",
    subtitle: "Parallel Computing — Jacobi Method",
    description:
      "Designed and implemented a parallel program to solve systems of linear equations using the Jacobi method, demonstrating expertise in algorithm optimization and parallel computing. Achieved significant performance improvements through parallelization for large datasets.",
    tech: ["C++", "OpenMP"],
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

const Work = () => {
  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-5xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-base-content/50 mt-2">A selection of work I&apos;m proud of</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ x: 6, transition: { duration: 0.2 } }}
            className="group p-6 md:p-8 bg-white border border-base-300 rounded-2xl shadow-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-default"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <span className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 leading-none select-none">
                {project.number}
              </span>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-base-content/50 text-sm mb-3">{project.subtitle}</p>
                <p className="text-base-content/70 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="badge badge-outline badge-sm text-primary border-primary/40 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
