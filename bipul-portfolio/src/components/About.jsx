// import React from 'react'
// import { motion } from 'framer-motion'

// export default function About() {
//   return (
//     <section id="about" className="section">
//       <div className="grid md:grid-cols-2 gap-10 items-start">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}>
//           <h2 className="text-3xl font-bold">About Me</h2>
//           <p className="mt-4 text-slate-300 leading-relaxed">
//             I am a passionate <strong>Frontend Developer</strong> focused on crafting elegant, accessible and
//             high-performance web interfaces. I love turning ideas into clean, efficient code and intuitive user
//             experiences. Currently strengthening my <strong>MERN</strong> skills to build robust, end-to-end products.
//           </p>
//           <p className="mt-3 text-slate-300 leading-relaxed">
//             I enjoy collaborating with teams, shipping features fast, and continuously learning modern tooling and
//             best practices. I'm excited to contribute to innovative projects that create real impact for users.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="rounded-2xl glass p-8 shadow-glow">
//           <ul className="space-y-4">
//             <li className="flex items-center justify-between">
//               <span className="text-slate-400">Role</span>
//               <span>FullStack Developer</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span className="text-slate-400">Location</span>
//               <span>Patna, Bihar</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span className="text-slate-400">Status</span>
//               <span>Open to Opportunities</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span className="text-slate-400">Current Focus</span>
//               <span>MERN Stack</span>
//             </li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   )
// }





import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="mt-4 text-slate-300 leading-relaxed">
            I am a passionate <strong>Frontend Developer</strong> focused on crafting elegant,
            accessible, and high-performance web interfaces. I love turning ideas into clean,
            efficient code and intuitive user experiences. Currently strengthening my{' '}
            <strong>MERN</strong> skills to build robust, end-to-end products.
          </p>

          <p className="mt-3 text-slate-300 leading-relaxed">
            I enjoy collaborating with teams, shipping features fast, and continuously learning
            modern tooling and best practices. I'm excited to contribute to innovative projects
            that create real impact for users.
          </p>
        </motion.div>

        {/* RIGHT: Photo + Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl glass p-8 shadow-glow flex flex-col items-center"
        >
          {/* Profile Photo */}
          <img
            src={profile}
            alt="Bipul Singhaniya"
            className="w-36 h-36 rounded-full object-cover border-2 border-cyan-400 shadow-lg mb-6"
          />

          {/* Info List */}
          <ul className="space-y-4 w-full">
            <li className="flex items-center justify-between">
              <span className="text-slate-400">Role</span>
              <span>Full Stack Developer</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="text-slate-400">Location</span>
              <span>Patna, Bihar</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="text-slate-400">Status</span>
              <span className="text-emerald-400">Open to Opportunities</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="text-slate-400">Current Focus</span>
              <span>MERN Stack</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  )
}
