"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiImport } from "react-icons/bi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="scroll-mt-24 min-h-[calc(100vh-8rem)] flex items-center justify-center px-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center space-y-4 sm:space-y-6 max-w-2xl w-full"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glassmorphic circle behind avatar */}
            <div
              className="absolute inset-0 rounded-full bg-frost-sky/60 scale-125"
              style={{ filter: "blur(30px)" }}
            />
            <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/60 shadow-glass">
              <img
                src="/Image3.jpg"
                alt="Beene Chilala"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-heading text-slate-900"
        >
          Hello, I&apos;m Beene Chilala
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-500"
        >
          Software Developer | Crafting Digital Experiences
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2"
        >
          <motion.a
            href="/Beene_Chilala_CV1.pdf"
            download
            className="btn-primary-frost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BiImport size={18} />
            Download CV
          </motion.a>
          <motion.a
            href="#projects"
            className="btn-glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
