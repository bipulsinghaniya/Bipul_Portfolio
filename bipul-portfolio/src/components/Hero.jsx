// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// const titles = ['Full Stack Developer', 'React Enthusiast']

// export default function Hero() {
//   const [idx, setIdx] = useState(0)
//   const [display, setDisplay] = useState('')

//   useEffect(() => {
//     let i = 0
//     let timer = setInterval(() => {
//       setDisplay(titles[idx].slice(0, i++))
//       if (i > titles[idx].length) {
//         clearInterval(timer)
//         setTimeout(() => {
//           setIdx((idx + 1) % titles.length)
//           setDisplay('')
//         }, 1200)
//       }
//     }, 80)
//     return () => clearInterval(timer)
//   }, [idx])

//   return (
//     <section className="section">
//       <div className="grid md:grid-cols-2 gap-10 items-center">





//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight whitespace-nowrap">
//             Hi, I'm <span className="text-sky-400">Bipul Singhaniya</span>
//           </h1>

//           <p className="mt-2 text-lg text-slate-300">
//             <span className="text-white">{display}</span>
//             <span className="animate-pulse">|</span>
//           </p>

//           <p className="mt-5 text-slate-300 leading-relaxed">
//             I craft elegant, accessible and high-performance web interfaces. Currently strengthening my MERN skills to build robust end-to-end products.
//           </p>

//           <div className="mt-6 flex gap-3">
//             <a
//               href="#projects"
//               className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 transition shadow-glow"
//             >
//               View Projects
//             </a>
//             <a
//               href="#contact"
//               className="px-5 py-2.5 rounded-xl glass"
//             >
//               Contact
//             </a>
//           </div>
//         </motion.div>





        

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="rounded-3xl glass p-8 shadow-glow bg-grid bg-[length:var(--tw-bg-size-grid)]"
//         >
//           <div className="aspect-[4/3] rounded-2xl glass grid place-items-center">
//             <div className="text-center">
//               <p className="text-sm text-slate-300">Portfolio Snapshot</p>
//               <p className="text-xl font-semibold mt-2">Clean • Modern • Fast</p>
//             </div>
//           </div>
//         </motion.div>


        
//       </div>
//     </section>
//   )
// }




import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile2.jpeg'

// const titles = ['Full Stack Developer', 'React Enthusiast']
const titles = [
  'Full Stack Developer',
  'MERN Stack Developer'
]


export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let i = 0
    let timer = setInterval(() => {
      setDisplay(titles[idx].slice(0, i++))
      if (i > titles[idx].length) {
        clearInterval(timer)
        setTimeout(() => {
          setIdx((idx + 1) % titles.length)
          setDisplay('')
        }, 1200)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [idx])

  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight whitespace-nowrap">
            Hi, I'm <span className="text-sky-400">Bipul Singhaniya</span>
          </h1>

          <p className="mt-2 text-lg text-slate-300">
            <span className="text-white">{display}</span>
            <span className="animate-pulse">|</span>
          </p>

          {/* <p className="mt-5 text-slate-300 leading-relaxed">
            I craft elegant, accessible and high-performance web interfaces. Currently strengthening my MERN skills to build robust end-to-end products.
          </p> */}

          <p className="mt-5 text-slate-300 leading-relaxed">
  I specialize in crafting elegant, accessible, and high-performance user interfaces while building full-stack applications with the MERN stack.
</p>


          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 transition shadow-glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl glass"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl glass p-8 shadow-glow overflow-hidden"
        >
          {/* Gradient Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />
          
          {/* Content */}
          <div className="relative flex flex-col items-center">
            {/* Profile Photo with Glow */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full blur-xl opacity-50 animate-pulse" />
             {/* <img
                src={profile}
                alt="Bipul Singhaniya"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-slate-700/50 shadow-2xl pt-2"
              /> */}

         <img
  src={profile}
  alt="Bipul Singhaniya"
  className="relative w-48 h-48 rounded-full object-cover border-4 border-slate-700/50 shadow-2xl"
  style={{ objectPosition: 'center 20%' }}
/>

            </div>

            {/* Status & Focus Info */}
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                <span className="text-slate-400 text-sm">💼 Status</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 font-medium">Available</span>
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                <span className="text-slate-400 text-sm">🎯 Focus</span>
                <span className="font-medium">MERN Stack</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}