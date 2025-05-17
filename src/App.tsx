import { projects, skills, aboutMe, workExperience, certifications, skillsList, projectDetails } from "./data";
import { FaGithub, FaCode } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import type { IconType } from 'react-icons';
import { motion } from "framer-motion";
import Aside from "./Aside";

// Helper to get icon by name safely
function getIconByName(name: string): IconType {
  // This function is used in the skills.map below
  return (FaIcons as Record<string, IconType>)[name] || (SiIcons as Record<string, IconType>)[name] || FaCode;
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-8 text-center">
        <Aside />
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold mb-2">Mostafa Mahmoud Hosni</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg md:text-2xl text-gray-300">Full Stack Developer | React | TypeScript | Node.js</motion.p>
        <div className="flex justify-center gap-4 mt-4">
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 text-blue-300 uppercase tracking-widest bg-gradient-to-r from-blue-900/60 via-transparent to-blue-900/60 rounded-t-xl px-4 py-2 shadow-lg">About Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-gray-900/80 to-blue-900/60 rounded-2xl shadow-xl p-8 border border-blue-700/30 text-gray-200 text-lg mb-6 overflow-hidden"
          >
            <span className="absolute -top-6 -left-6 w-24 h-24 bg-blue-700/20 rounded-full blur-2xl z-0"></span>
            <span className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl z-0"></span>
            <span className="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-transparent rounded-2xl pointer-events-none z-0"></span>
            <span className="absolute top-4 right-8 text-blue-400 text-3xl opacity-20 select-none z-0">&#10077;</span>
            <span className="absolute bottom-4 left-8 text-blue-400 text-3xl opacity-20 select-none z-0">&#10078;</span>
            <span className="relative z-10 whitespace-pre-line leading-relaxed font-medium drop-shadow">
              {aboutMe}
            </span>
          </motion.div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 text-blue-300 uppercase tracking-widest bg-gradient-to-r from-blue-900/60 via-transparent to-blue-900/60 rounded-t-xl px-4 py-2 shadow-lg">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.7 }}
                className="relative bg-gradient-to-br from-gray-900/80 to-blue-900/60 rounded-2xl shadow-xl p-8 border border-blue-700/30 overflow-hidden group hover:scale-[1.025] transition-transform"
              >
                <span className="absolute -top-6 -left-6 w-24 h-24 bg-blue-700/20 rounded-full blur-2xl z-0"></span>
                <span className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl z-0"></span>
                <span className="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-transparent rounded-2xl pointer-events-none z-0"></span>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 text-blue-200 drop-shadow-lg tracking-tight group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                  <div className="text-blue-400 text-sm mb-3 font-semibold flex flex-wrap gap-2 items-center">
                    <span>{exp.duration}</span>
                    <span className="mx-2 text-gray-500">|</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-200/90 pl-4 space-y-1">
                    {exp.details.map((d, i) => <li key={i} className="leading-relaxed">{d}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 text-blue-300 uppercase tracking-widest bg-gradient-to-r from-blue-900/60 via-transparent to-blue-900/60 rounded-t-xl px-4 py-2 shadow-lg">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projectDetails.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative bg-gradient-to-br from-gray-900/80 to-blue-900/60 rounded-2xl shadow-2xl overflow-hidden hover:scale-[1.025] transition-transform flex flex-col border border-blue-700/30 group"
              >
                <div className="w-full h-56 border-b-4 border-blue-500 bg-[#222] flex items-center justify-center relative overflow-hidden">
                  {project.iframe ? (
                    <iframe
                      src={project.iframe}
                      title={project.title}
                      className="w-full h-full border-0 rounded-none"
                      allow="fullscreen"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">No Preview</div>
                  )}
                  <span className="absolute -top-6 -left-6 w-24 h-24 bg-blue-700/20 rounded-full blur-2xl z-0"></span>
                  <span className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl z-0"></span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-blue-300 drop-shadow-lg group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags && project.tags.map(tag => (
                      <span key={tag} className="bg-blue-700/80 text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center gap-1 font-semibold transition-colors">
                        <FaGithub />Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 font-semibold transition-colors">Live Demo</a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <h3 className="font-semibold">This is the email and password for any project demo:</h3>
            <div>email: <span className="font-mono">user@user.com</span></div>
            <div>password: <span className="font-mono">123456789</span></div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-blue-500 pb-2 text-blue-300 uppercase tracking-widest">Skills</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {skillsList.map(skill => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 rounded-xl p-5 shadow-lg hover:scale-110 transition-transform border-2 border-blue-700/30 group relative overflow-hidden"
              >
                <span className="text-lg font-bold text-blue-200 drop-shadow group-hover:text-blue-400 transition-colors duration-200">
                  {skill}
                </span>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-700/20 rounded-full blur-lg z-0"></span>
                <span className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-400/10 rounded-full blur-lg z-0"></span>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 text-blue-300 uppercase tracking-widest bg-gradient-to-r from-blue-900/60 via-transparent to-blue-900/60 rounded-t-xl px-4 py-2 shadow-lg">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
                className="relative bg-gradient-to-br from-gray-900/80 to-blue-900/60 rounded-2xl shadow-xl p-6 border border-blue-700/30 overflow-hidden group hover:scale-[1.025] transition-transform"
              >
                <span className="absolute -top-4 -left-4 w-16 h-16 bg-blue-700/20 rounded-full blur-2xl z-0"></span>
                <span className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400/10 rounded-full blur-2xl z-0"></span>
                <span className="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-transparent rounded-2xl pointer-events-none z-0"></span>
                <div className="relative z-10 flex flex-col gap-2">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-blue-200 hover:text-blue-400 underline underline-offset-4 transition-colors duration-200 drop-shadow-lg">
                    {cert.name}
                  </a>
                  <span className="text-xs text-gray-400">Click to view certificate</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center py-6 text-gray-400">&copy; {new Date().getFullYear()} Mostafa Mahmoud Hosny. All rights reserved.</footer>
    </div>
  );
}

export default App;
