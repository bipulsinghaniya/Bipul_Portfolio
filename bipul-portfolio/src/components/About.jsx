



// import React from 'react'
// import { motion } from 'framer-motion'
// import profile from '../assets/profile1.jpg'

// export default function About() {
//   return (
//     <section id="about" className="section">
//       <div className="grid md:grid-cols-2 gap-10 items-start">






//         {/* LEFT: About Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-bold">About Me</h2>

//           <p className="mt-4 text-slate-300 leading-relaxed">
//             I am a passionate <strong>Frontend Developer</strong> focused on crafting elegant,
//             accessible, and high-performance web interfaces. I love turning ideas into clean,
//             efficient code and intuitive user experiences. Currently strengthening my{' '}
//             <strong>MERN</strong> skills to build robust, end-to-end products.
//           </p>

//           <p className="mt-3 text-slate-300 leading-relaxed">
//             I enjoy collaborating with teams, shipping features fast, and continuously learning
//             modern tooling and best practices. I'm excited to contribute to innovative projects
//             that create real impact for users.
//           </p>
//         </motion.div>




        

//         {/* RIGHT: Photo + Info Card */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="rounded-2xl glass p-8 shadow-glow flex flex-col items-center"
//         >
         
//           <img
//             src={profile}
//             alt="Bipul Singhaniya"
//             className="w-36 h-36 rounded-full object-cover border-2 border-cyan-400 shadow-lg mb-6"
//           />

        
//           <ul className="space-y-4 w-full">
//             <li className="flex items-center justify-between">
//               <span className="text-slate-400">Role</span>
//               <span>Full Stack Developer</span>
//             </li>

//             <li className="flex items-center justify-between">
//               <span className="text-slate-400">Location</span>
//               <span>Patna, Bihar</span>
//             </li>

//             <li className="flex items-center justify-between">
//               <span className="text-slate-400">Status</span>
//               <span className="text-emerald-400">Open to Opportunities</span>
//             </li>

//             <li className="flex items-center justify-between">
//               <span className="text-slate-400">Current Focus</span>
//               <span>MERN Stack</span>
//             </li>
//           </ul>
//         </motion.div> */}





// {/* RIGHT: Photo + Info Card */}
//       {/* RIGHT: Photo + Info Card */}
//    {/* RIGHT: Photo + Info Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="relative rounded-2xl glass p-8 shadow-glow flex flex-col items-center overflow-hidden"
//         >
//           {/* Gradient Background Effect */}
//           <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />
          
//           {/* Profile Photo with Glow */}
//           <div className="relative mb-6">
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full blur-xl opacity-50 animate-pulse" />
//             <img
//               src={profile}
//               alt="Bipul Singhaniya"
//               className="relative w-40 h-40 rounded-full object-cover border-4 border-slate-700/50 shadow-2xl"
//             />
//           </div>

//           {/* Name & Title */}
//           <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
//             Bipul Singhaniya
//           </h3>
//           <p className="text-slate-400 mb-6">Full Stack Developer</p>

//           {/* Info List with Icons */}
//           <ul className="space-y-3 w-full">
//             <li className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
//               <span className="text-slate-400 text-sm">📍 Location</span>
//               <span className="font-medium">Patna, Bihar</span>
//             </li>

//             <li className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
//               <span className="text-slate-400 text-sm">💼 Status</span>
//               <span className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//                 <span className="text-emerald-400 font-medium">Available</span>
//               </span>
//             </li>

//             <li className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
//               <span className="text-slate-400 text-sm">🎯 Focus</span>
//               <span className="font-medium">MERN Stack</span>
//             </li>

//             <li className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
//               <span className="text-slate-400 text-sm">⚡ Experience</span>
//               <span className="font-medium">2+ Years</span>
//             </li>
//           </ul>
//         </motion.div>





//       </div>
//     </section>
//   )
  
// }

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Get to Know Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: Description */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
           <p className="text-slate-200 leading-relaxed text-lg">
  I’m a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> focused on building
  elegant, accessible, and high-performance web applications. I turn real-world
  problems into clean, efficient code and intuitive user experiences through
  hands-on projects.
</p>

<p className="text-slate-300 leading-relaxed">
  I work with the <span className="text-cyan-400 font-semibold">MERN Stack</span> to design and develop
  robust, end-to-end solutions, applying strong fundamentals in
  <span className="text-cyan-400 font-semibold"> Data Structures, Algorithms</span>, and
  <span className="text-cyan-400 font-semibold"> system design basics</span> to write scalable,
  maintainable code.
</p>

<p className="text-slate-300 leading-relaxed">
  I enjoy solving real-life problems through technology, collaborating with teams,
  and continuously improving my skills while building products that create
  meaningful impact for users.
</p>

          </motion.div>

          {/* RIGHT: What I Do */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl bg-slate-800/30 backdrop-blur-md p-8 border border-slate-700/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent pointer-events-none rounded-2xl" />
              
              <h3 className="text-2xl font-bold text-white mb-6 relative">What I Do</h3>
              
              <ul className="space-y-5 relative">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400 text-xl">✦</span>
                    </div>
                  </div>
                  <div>
                     <p className="font-semibold text-white text-lg mb-1">Full Stack Projects</p>
                    <p className="text-slate-400">End-to-end MERN applications</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 text-xl">✦</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg mb-1">Scalable Application Design</p>
                    <p className="text-slate-400">System design fundamentals for scalable applications.
</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <span className="text-emerald-400 text-xl">✦</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg mb-1">Performance Optimization</p>
                    <p className="text-slate-400">Fast, accessible experiences</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}