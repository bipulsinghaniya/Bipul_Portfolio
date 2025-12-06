// import React from 'react'
// import { motion } from 'framer-motion'
// import { Hammer, Github } from 'lucide-react'

// export default function Projects() {
//   return (
//     <section id="projects" className="section">
//       <motion.h2
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-bold mb-8">
//         Projects
//       </motion.h2>

//       <div className="grid md:grid-cols-2 gap-6">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="rounded-2xl glass p-6 shadow-glow">

//           <div className="flex items-center gap-3">
//             <Hammer />
//             <h3 className="text-lg font-semibold">Currently working</h3>
//           </div>

//           <p className="mt-3 text-slate-300">
//             I'm actively building new projects. This section will be updated with live demos and GitHub links.
//           </p>

//           <a
//             href="https://github.com/bipulsinghaniya"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 mt-4 text-sky-400 hover:underline"
//           >
//             <Github size={18} /> View GitHub
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
















// import React from 'react'
// import { motion } from 'framer-motion'
// import { Hammer, Github, Link } from 'lucide-react'

// export default function Projects() {
//   return (
//     <section id="projects" className="section">
//       <motion.h2
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-bold mb-8">
//         Projects
//       </motion.h2>

//       <div className="grid md:grid-cols-2 gap-6">

//         {/* === Card 1 - Currently working === */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="rounded-2xl glass p-6 shadow-glow">

//           <div className="flex items-center gap-3">
//             <Hammer />
//             <h3 className="text-lg font-semibold">Currently working</h3>
//           </div>

//           <p className="mt-3 text-slate-300">
//             I'm actively building new projects. This section will be updated with live demos and GitHub links.
//           </p>

//           <a
//             href="https://github.com/bipulsinghaniya"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 mt-4 text-sky-400 hover:underline"
//           >
//             <Github size={18} /> View GitHub
//           </a>
//         </motion.div>


//         {/* === Card 2 - MERN Notes App === */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="rounded-2xl glass p-6 shadow-glow">

//           <div className="flex items-center gap-3">
//             <Hammer />
//             <h3 className="text-lg font-semibold">Personal Notes Manager (MERN)</h3>
//           </div>

//           <p className="mt-3 text-slate-300">
//             A secure MERN-based notes manager with login & note saving,
//             where users can add, view & reset notes. Includes authentication & persistent storage.
//           </p>

//           <div className="flex gap-4 mt-4">
//             <a
//               href="https://personal-notes-hvrt.onrender.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 text-sky-400 hover:underline"
//             >
//               <Link size={18} /> Live Demo
//             </a>

//             <a
//               href="https://github.com/bipulsinghaniya"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 text-sky-400 hover:underline"
//             >
//               <Github size={18} /> GitHub
//             </a>
//           </div>

//           {/* Tech Stack Badges */}
//           <div className="flex flex-wrap gap-2 mt-4 text-xs">
//             <span className="px-2 py-1 rounded bg-purple-600/30">MongoDB</span>
//             <span className="px-2 py-1 rounded bg-green-600/30">Express</span>
//             <span className="px-2 py-1 rounded bg-blue-600/30">React</span>
//             <span className="px-2 py-1 rounded bg-yellow-500/30">Node</span>
//             <span className="px-2 py-1 rounded bg-red-500/30">JWT Auth</span>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   )
// }
















// import React from 'react'
// import { motion } from 'framer-motion'
// import { Hammer, Github, Link } from 'lucide-react'

// export default function Projects() {
//   return (
//     <section id="projects" className="section">
//       <motion.h2
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-bold mb-8"
//       >
//         Projects
//       </motion.h2>

//       <div className="grid md:grid-cols-2 gap-6">

//         {/* === Card 1 - MERN Notes App (Now FIRST) === */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="rounded-2xl glass p-6 shadow-glow"
//         >
//           <div className="flex items-center gap-3">
//             <Hammer />
//             <h3 className="text-lg font-semibold">Personal Notes Manager (MERN)</h3>
//           </div>

//           <p className="mt-3 text-slate-300">
//             A secure MERN-based notes manager with login & note saving, where users can add, 
//             view & reset notes. Includes authentication & persistent storage.
//           </p>

//           <div className="flex gap-4 mt-4">
//             <a
//               href="https://personal-notes-hvrt.onrender.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 text-sky-400 hover:underline"
//             >
//               <Link size={18} /> Live Demo
//             </a>

//             <a
//               href="https://github.com/bipulsinghaniya"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 text-sky-400 hover:underline"
//             >
//               <Github size={18} /> GitHub
//             </a>
//           </div>

//           <div className="flex flex-wrap gap-2 mt-4 text-xs">
//             <span className="px-2 py-1 rounded bg-purple-600/30">MongoDB</span>
//             <span className="px-2 py-1 rounded bg-green-600/30">Express</span>
//             <span className="px-2 py-1 rounded bg-blue-600/30">React</span>
//             <span className="px-2 py-1 rounded bg-yellow-500/30">Node</span>
//             <span className="px-2 py-1 rounded bg-red-500/30">JWT Auth</span>
//           </div>
//         </motion.div>


//         {/* === Card 2 - Currently working (Now SECOND) === */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="rounded-2xl glass p-6 shadow-glow"
//         >
//           <div className="flex items-center gap-3">
//             <Hammer />
//             <h3 className="text-lg font-semibold">Currently working</h3>
//           </div>

//           <p className="mt-3 text-slate-300">
//             I'm actively building new projects. This section will be updated with live demos 
//             and GitHub links.
//           </p>

//           <a
//             href="https://github.com/bipulsinghaniya"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 mt-4 text-sky-400 hover:underline"
//           >
//             <Github size={18} /> View GitHub
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   )
// }


















import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, Github, Link, UtensilsCrossed } from 'lucide-react'

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

        {/* === 1st Card - MERN Notes App === */}
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
            A secure MERN-based notes manager with login & note saving,
            where users can add, view & reset notes. Includes authentication & persistent storage.
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


        {/* === 2nd Card - Currently Working === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl glass p-6 shadow-glow"
        >
          <div className="flex items-center gap-3">
            <Hammer />
            <h3 className="text-lg font-semibold">Currently working</h3>
          </div>

          <p className="mt-3 text-slate-300">
            I'm actively building new projects. This section will be updated with live demos
            and GitHub links.
          </p>

          <a
            href="https://github.com/bipulsinghaniya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sky-400 hover:underline"
          >
            <Github size={18} /> View GitHub
          </a>
        </motion.div>


        {/* === 3rd Card - Swiggy Clone === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass p-6 shadow-glow md:col-span-2"
        >
          <div className="flex items-center gap-3">
            <UtensilsCrossed />
            <h3 className="text-lg font-semibold">Swiggy Clone Web Application</h3>
          </div>

          <p className="mt-3 text-slate-300">
            A Swiggy-inspired frontend platform built using React.js with live API integration,
            Redux state management, server-side logic approach, and hooks for optimized performance.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/bipulsinghaniya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:underline"
            >
              <Github size={18} /> GitHub
            </a>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="px-2 py-1 rounded bg-orange-600/30">React.js</span>
            <span className="px-2 py-1 rounded bg-purple-600/30">Redux</span>
            <span className="px-2 py-1 rounded bg-green-600/30">API Integration</span>
            <span className="px-2 py-1 rounded bg-blue-600/30">React Hooks</span>
            <span className="px-2 py-1 rounded bg-yellow-500/30">SSR Concept</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
