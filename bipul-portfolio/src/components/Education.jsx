// import React from 'react'
// import { motion } from 'framer-motion'

// export default function Education() {
//   return (
//     <section id="education" className="section">
//       <motion.h2
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-bold mb-8">Education</motion.h2>
//       <div className="rounded-2xl glass p-8 shadow-glow">
//         <p className="text-slate-200 font-medium">
//           B.Tech in Computer Science & Engineering — 3rd Year
//         </p>
//         <p className="text-slate-400 mt-1">
//           Currently pursuing.
//         </p>
//       </div>
//     </section>
//   )
// }




import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Education
      </motion.h2>

      <div className="rounded-2xl glass p-8 shadow-glow">
        <p className="text-slate-200 font-medium text-lg">
          B.Tech in Computer Science & Engineering — 3rd Year
        </p>

        <p className="text-slate-300 mt-1">
          Lovely Professional University (LPU)
        </p>
<p className="text-slate-200 text-base mt-1 font-semibold">
  CGPA: 8.47
</p>



        <p className="text-slate-400 mt-1">
          Currently pursuing.
        </p>
      </div>
    </section>
  )
}
