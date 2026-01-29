


import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, Github, Link, UtensilsCrossed, MessageCircle, Calculator  } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">

{/* === 1st - UniNotes (MERN Notes Portal) === */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-2xl glass p-6 shadow-glow"
>
  <div className="flex items-center gap-3">
    <Hammer />
    <h3 className="text-lg font-semibold">UniNotes – College Notes Portal (MERN)</h3>
  </div>

  <p className="mt-3 text-slate-300">
    A full-stack MERN-based college notes platform providing branch-wise and year-wise
    access to academic notes with secure authentication and admin management.
  </p>

  <div className="flex gap-4 mt-4">
    <a
      href="https://uninotes-frontend.onrender.com/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sky-400 hover:underline"
    >
      <Link size={18} /> Live Demo
    </a>
    <a
      href="https://github.com/bipulsinghaniya/uniNotes"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sky-400 hover:underline"
    >
      <Github size={18} /> GitHub
    </a>
  </div>

  <div className="flex flex-wrap gap-2 mt-4 text-xs">
    <span className="px-2 py-1 rounded bg-purple-600/30">MongoDB</span>
    <span className="px-2 py-1 rounded bg-green-600/30">Express</span>
    <span className="px-2 py-1 rounded bg-blue-600/30">React</span>
    <span className="px-2 py-1 rounded bg-yellow-500/30">Node.js</span>
    <span className="px-2 py-1 rounded bg-red-500/30">JWT Auth</span>
    <span className="px-2 py-1 rounded bg-teal-600/30">Admin Panel</span>
  </div>
</motion.div>



 {/* === 2nd Card - LpuQuora (NEW) === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass p-6 shadow-glow"
        >
          <div className="flex items-center gap-3">
            <MessageCircle />
            <h3 className="text-lg font-semibold">LpuQuora – Q&A Platform (MERN)</h3>
          </div>

          <p className="mt-3 text-slate-300">
            A full-stack Q&A platform inspired by Quora where users can ask questions,
            post answers, and authenticate securely using JWT with Redis caching.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://lpuquora-frontend.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:underline"
            >
              <Link size={18} /> Live Demo
            </a>
            <a
              href="https://github.com/bipulsinghaniya/lpu-quora"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:underline"
            >
              <Github size={18} /> GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="px-2 py-1 rounded bg-purple-600/30">MongoDB</span>
            <span className="px-2 py-1 rounded bg-green-600/30">Express</span>
            <span className="px-2 py-1 rounded bg-blue-600/30">React</span>
            <span className="px-2 py-1 rounded bg-yellow-500/30">Node.js</span>
            <span className="px-2 py-1 rounded bg-red-500/30">JWT</span>
            <span className="px-2 py-1 rounded bg-pink-600/30">Redis</span>
            <span className="px-2 py-1 rounded bg-sky-600/30">Render</span>
          </div>
        </motion.div>



{/* === AlgoJudge – Online Coding Practice Platform === */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-2xl glass p-6 shadow-glow"
>
  <div className="flex items-center gap-3">
    <Hammer />
    <h3 className="text-lg font-semibold">
      AlgoJudge – Online Coding Practice Platform
    </h3>
  </div>

  <p className="mt-3 text-slate-300">
    A scalable online coding judge inspired by LeetCode, enabling users to practice
    data structures and algorithms, write code in-browser, and submit solutions
    with real-time evaluation.
  </p>

  <div className="flex gap-4 mt-4">
    <a
      href="https://algojudge-frontend.onrender.com/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sky-400 hover:underline"
    >
      <Link size={18} /> Live Demo
    </a>
    <a
      href="https://github.com/bipulsinghaniya/AlgoJudge"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sky-400 hover:underline"
    >
      <Github size={18} /> GitHub
    </a>
  </div>

  <div className="flex flex-wrap gap-2 mt-4 text-xs">
    <span className="px-2 py-1 rounded bg-blue-600/30">React.js</span>
    <span className="px-2 py-1 rounded bg-purple-600/30">Redux</span>
    <span className="px-2 py-1 rounded bg-sky-600/30">React Hooks</span>
    <span className="px-2 py-1 rounded bg-teal-600/30">Tailwind CSS</span>
    <span className="px-2 py-1 rounded bg-green-600/30">REST APIs</span>
    <span className="px-2 py-1 rounded bg-purple-500/30">MongoDB</span>
    <span className="px-2 py-1 rounded bg-yellow-500/30">Multi-Language Judge</span>
  </div>
</motion.div>




        {/* === 4th Card - MERN Notes App === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass p-6 shadow-glow"
        >
          <div className="flex items-center gap-3">
            <Hammer />
            <h3 className="text-lg font-semibold">Personal Notes Manager (MERN)</h3>
          </div>

          <p className="mt-3 text-slate-300">
            A secure MERN-based notes manager with authentication & persistent notes syncing.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://personal-notes-hvrt.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:underline"
            >
              <Link size={18} /> Live Demo
            </a>
            <a
              href="https://github.com/bipulsinghaniya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:underline"
            >
              <Github size={18} /> GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="px-2 py-1 rounded bg-purple-600/30">MongoDB</span>
            <span className="px-2 py-1 rounded bg-green-600/30">Express</span>
            <span className="px-2 py-1 rounded bg-blue-600/30">React</span>
            <span className="px-2 py-1 rounded bg-yellow-500/30">Node</span>
            <span className="px-2 py-1 rounded bg-red-500/30">JWT Auth</span>
          </div>
        </motion.div>

       
        {/* === 3rd - Real-Time Broadcast Chat === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass p-6 shadow-glow"
        >
          <div className="flex items-center gap-3">
            <MessageCircle />
            <h3 className="text-lg font-semibold">Real-Time Broadcast Chat Application</h3>
          </div>

          <p className="mt-3 text-slate-300">
            Multi-user broadcast chat using Socket.io with real-time message sync & deployment tuning on Render.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://broadcast-chat.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:underline"
            >
              <Link size={18} /> Live Demo
            </a>
            <a
              href="https://github.com/bipulsinghaniya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:underline"
            >
              <Github size={18} /> GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="px-2 py-1 rounded bg-green-600/30">Node.js</span>
            <span className="px-2 py-1 rounded bg-purple-600/30">Express.js</span>
            <span className="px-2 py-1 rounded bg-yellow-600/30">Socket.io</span>
            <span className="px-2 py-1 rounded bg-blue-600/30">Tailwind CSS</span>
            <span className="px-2 py-1 rounded bg-teal-600/30">JavaScript</span>
          </div>
        </motion.div>

        {/* === 4th - Swiggy Clone === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass p-6 shadow-glow"
        >
          <div className="flex items-center gap-3">
            <UtensilsCrossed />
            <h3 className="text-lg font-semibold">Swiggy Clone Web Application</h3>
          </div>

          <p className="mt-3 text-slate-300">
            Food ordering UI clone with Redux state, live restaurant API, hooks & optimized rendering.
          </p>

          <a
            href="https://github.com/bipulsinghaniya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sky-400 hover:underline"
          >
            <Github size={18} /> GitHub
          </a>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="px-2 py-1 rounded bg-orange-600/30">React.js</span>
            <span className="px-2 py-1 rounded bg-purple-600/30">Redux</span>
            <span className="px-2 py-1 rounded bg-green-600/30">API Integration</span>
            <span className="px-2 py-1 rounded bg-blue-600/30">React Hooks</span>
          </div>
        </motion.div>



        {/* === LPU CGPA / TGPA Calculator === */}
{/* === LPU CGPA / TGPA Calculator === */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-2xl glass p-6 shadow-glow"
>
  <div className="flex items-center gap-3">
    <Calculator />
    <h3 className="text-lg font-semibold">
      LPU CGPA / TGPA Calculator
    </h3>
  </div>

  <p className="mt-3 text-slate-300">
    A responsive academic grade calculator built for Lovely Professional University
    students to compute CGPA (CSE) and TGPA (Agriculture) using dynamic inputs,
    credit-based formulas, and real-time result evaluation.
  </p>

  <div className="flex gap-4 mt-4">
    <a
      href="https://lpu-grade-calculator.netlify.app"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sky-400 hover:underline"
    >
      <Link size={18} /> Live Demo
    </a>
    <a
      href="https://github.com/bipulsinghaniya"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sky-400 hover:underline"
    >
      <Github size={18} /> GitHub
    </a>
  </div>

  <div className="flex flex-wrap gap-2 mt-4 text-xs">
    <span className="px-2 py-1 rounded bg-blue-600/30">HTML</span>
    <span className="px-2 py-1 rounded bg-teal-600/30">Tailwind CSS</span>
    <span className="px-2 py-1 rounded bg-yellow-500/30">JavaScript</span>
    <span className="px-2 py-1 rounded bg-purple-600/30">Dynamic DOM</span>
    <span className="px-2 py-1 rounded bg-green-600/30">Grade Logic</span>
    <span className="px-2 py-1 rounded bg-pink-600/30">Netlify</span>
  </div>
</motion.div>


 








      </div>
    </section>
  )
}
