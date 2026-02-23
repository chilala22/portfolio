"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiImport, BiLogoLinkedinSquare } from "react-icons/bi";
import Link from "next/link";

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

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
        {/* Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-primary font-semibold tracking-widest uppercase text-sm"
          >
            Software Developer
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Beene Chilala
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base-content/70 text-lg leading-relaxed max-w-lg"
          >
            I have a strong passion for creating innovative solutions. Proficient
            in various programming languages and technologies, turning ideas into
            elegant digital experiences.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            <motion.a
              href="/Beene_Chilala_CV1.pdf"
              download
              className="btn btn-primary gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <BiImport size={20} />
            </motion.a>
            <motion.a
              href="http://www.linkedin.com/in/beene-chilala-838ba4321"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiLogoLinkedinSquare size={22} />
              LinkedIn
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/Contact" className="btn btn-ghost">
                About Me →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-110 animate-pulse" />
            <div className="avatar relative z-10">
              <div className="ring-primary ring-offset-base-100 w-72 md:w-80 rounded-full ring-4 ring-offset-4">
                <img src="/Image3.jpg" alt="Beene Chilala" className="object-cover" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
