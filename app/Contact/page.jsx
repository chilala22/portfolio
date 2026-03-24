"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiEnvelope, BiLogoLinkedinSquare, BiSend } from "react-icons/bi";
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

const socialLinks = [
  {
    label: "LinkedIn",
    icon: BiLogoLinkedinSquare,
    href: "http://www.linkedin.com/in/beene-chilala-838ba4321",
    value: "linkedin.com/in/beene-chilala",
    color: "text-blue-600",
  },
  {
    label: "Email",
    icon: BiEnvelope,
    href: "mailto:bchilala22@yahoo.com",
    value: "bchilala22@yahoo.com",
    color: "text-red-500",
  },
  {
    label: "Telegram",
    icon: FaTelegram,
    href: "https://t.me/Beene_C",
    value: "@Beene_C",
    color: "text-sky-500",
  },
];

const Contact = () => {
  return (
    <div className="py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get in Touch
          </h1>
          <p className="text-slate-500 mt-2">
            Have a question or want to work together? Drop me a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-card p-6 md:p-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-action-primary focus:ring-2 focus:ring-action-primary/20 outline-none transition-all backdrop-blur-sm text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-action-primary focus:ring-2 focus:ring-action-primary/20 outline-none transition-all backdrop-blur-sm text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-action-primary focus:ring-2 focus:ring-action-primary/20 outline-none transition-all backdrop-blur-sm text-slate-900 placeholder:text-slate-400 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary-frost w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <BiSend size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass-card glass-card-hover p-5 flex items-center gap-4 block"
              >
                <div className="glass-icon-circle w-12 h-12 flex-shrink-0">
                  <link.icon size={24} className={link.color} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 text-sm">{link.label}</p>
                  <p className="text-xs text-slate-500 truncate">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
