// import React from 'react'
// import { motion } from 'framer-motion'

// const skills = ["HTML5", "CSS", "JavaScript", "React", "MERN", "Bootstrap"]

// export default function Skills() {
//   return (
//     <section id="skills" className="section">
//       <motion.h2
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-bold mb-8">Skills</motion.h2>
//       <div className="flex flex-wrap gap-4">
//         {skills.map((s, i) => (
//           <motion.span
//             key={s}
//             initial={{ opacity: 0, y: 8 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.3, delay: i * 0.05 }}
//             className="px-4 py-2 rounded-full glass text-slate-200 text-sm shadow-glow">
//             {s}
//           </motion.span>
//         ))}
//       </div>
//     </section>
//   )
// }







import React from "react";
import { motion } from "framer-motion";

const skills = [
  // Line 1
  "HTML5", "CSS", "Tailwind CSS", "JavaScript", "React", "MERN", "MongoDB", "Express.js",

  // Line 2
  "Node.js", "Mongoose", "SQL", "Git", "GitHub", "Postman"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {skills.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="px-3 py-2 rounded-full glass text-slate-200 text-sm shadow-glow text-center"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
