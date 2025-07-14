import { projects, skills, aboutMe, workExperience, certifications, skillsList, projectDetails } from "./data";
import { FaGithub, FaCode, FaChevronDown, FaChevronUp, FaUser, FaBriefcase, FaProjectDiagram, FaCertificate, FaTools, FaExternalLinkAlt, FaCopy, FaCheck, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import Aside from "./Aside";
import { useState, useEffect } from "react";
import { userInfo } from "./userInfo";
import Logo from "./components/Logo";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showCerts, setShowCerts] = useState(false);
  const [copiedCredentials, setCopiedCredentials] = useState<'email' | 'password' | null>(null);
  const [loadingProjects, setLoadingProjects] = useState<string[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enhanced copy to clipboard functionality
  const copyToClipboard = async (text: string, type: 'email' | 'password') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCredentials(type);
      setTimeout(() => setCopiedCredentials(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Handle external link loading states
  const handleLinkClick = (url: string, projectTitle: string) => {
    setLoadingProjects(prev => [...prev, projectTitle]);
    window.open(url, '_blank');
    setTimeout(() => {
      setLoadingProjects(prev => prev.filter(p => p !== projectTitle));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      {/* Floating Navigation Header */}
      <AnimatePresence>
        {scrollProgress > 5 && (
          <motion.header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-purple-500/20"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Logo size="sm" showText={true} />
                </motion.div>

                <motion.nav
                  className="hidden md:flex items-center gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {[
                    { label: "About", onClick: () => setShowAbout(true) },
                    { label: "Work", onClick: () => setShowWork(true) },
                    { label: "Projects", onClick: () => setShowProjects(true) },
                    { label: "Skills", onClick: () => setShowSkills(true) },
                    { label: "Certificates", onClick: () => setShowCerts(true) },
                  ].map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={item.onClick}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </motion.nav>

                <motion.button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaChevronUp className="text-sm" />
                </motion.button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <Aside />

      {/* Main Content */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-16 relative z-10">
          {/* About Me Section */}
          <section className="mb-16">
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div
                onClick={() => setShowAbout(v => !v)}
                className="flex items-center justify-between mb-8 p-6 bg-gradient-to-r from-purple-900/50 via-slate-800/50 to-purple-900/50 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg">
                    <FaUser className="text-xl text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    About Me
                  </h2>
                </div>
                <motion.div
                  animate={{ rotate: showAbout ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg"
                >
                  <FaChevronDown className="text-xl text-purple-300" />
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence>
              {showAbout && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-slate-900/80 via-purple-900/30 to-slate-900/80 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                      <p className="text-lg leading-relaxed text-slate-200 relative z-10 whitespace-pre-line">
                        {aboutMe}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
          {/* Work Experience Section */}
          <section className="mb-16">
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div
                onClick={() => setShowWork(v => !v)}
                className="flex items-center justify-between mb-8 p-6 bg-gradient-to-r from-cyan-900/50 via-slate-800/50 to-cyan-900/50 rounded-2xl backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl shadow-lg">
                    <FaBriefcase className="text-xl text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Work Experience
                  </h2>
                </div>
                <motion.div
                  animate={{ rotate: showWork ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg"
                >
                  <FaChevronDown className="text-xl text-cyan-300" />
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence>
              {showWork && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden space-y-6"
                >
                  {workExperience.map((exp, idx) => (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2, duration: 0.6 }}
                      className="bg-gradient-to-br from-slate-900/80 via-cyan-900/30 to-slate-900/80 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/20 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)"
                      }}
                    >
                      <div className="relative">
                        <motion.div
                          className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"
                          whileHover={{ scale: 1.2, opacity: 0.8 }}
                        />
                        <motion.div
                          className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10"
                          whileHover={{ x: 5 }}
                        >
                          <h3 className="text-2xl font-bold text-white mb-2 md:mb-0 group-hover:text-cyan-300 transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col md:items-end text-cyan-300">
                            <motion.span
                              className="font-semibold"
                              whileHover={{ scale: 1.05 }}
                            >
                              {exp.duration}
                            </motion.span>
                            <span className="text-sm text-slate-400">{exp.location}</span>
                          </div>
                        </motion.div>
                        <div className="space-y-3 relative z-10">
                          {exp.details.map((detail, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-3 text-slate-200"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (idx * 0.2) + (i * 0.1), duration: 0.4 }}
                              whileHover={{ x: 5, scale: 1.01 }}
                            >
                              <motion.div
                                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                                whileHover={{ scale: 1.3 }}
                              />
                              <span className="leading-relaxed">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </section>
          {/* Projects Section */}
          <section className="mb-16">
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div
                onClick={() => setShowProjects(v => !v)}
                className="flex items-center justify-between mb-8 p-6 bg-gradient-to-r from-pink-900/50 via-slate-800/50 to-pink-900/50 rounded-2xl backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 shadow-xl hover:shadow-pink-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl shadow-lg">
                    <FaProjectDiagram className="text-xl text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Projects
                  </h2>
                </div>
                <motion.div
                  animate={{ rotate: showProjects ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-lg"
                >
                  <FaChevronDown className="text-xl text-pink-300" />
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence>
              {showProjects && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {projectDetails.map((project, idx) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="group bg-gradient-to-br from-slate-900/90 via-purple-900/20 to-slate-900/90 rounded-2xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2"
                      >
                        <div className="relative h-64 bg-slate-800 overflow-hidden">
                          {project.iframe ? (
                            <iframe
                              src={project.iframe}
                              title={project.title}
                              className="w-full h-full border-0"
                              allow="fullscreen"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-500 bg-gradient-to-br from-slate-800 to-slate-900">
                              <FaCode className="text-4xl" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-6 relative">
                          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors relative z-10">
                            {project.title}
                          </h3>
                          <p className="text-slate-300 mb-4 leading-relaxed relative z-10">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                            {project.tags && project.tags.slice(0, 4).map(tag => (
                              <span key={tag} className="px-3 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-xs font-medium text-white backdrop-blur-sm">
                                {tag}
                              </span>
                            ))}
                            {project.tags && project.tags.length > 4 && (
                              <span className="px-3 py-1 bg-slate-700/80 rounded-full text-xs font-medium text-slate-300">
                                +{project.tags.length - 4} more
                              </span>
                            )}
                          </div>

                          <div className="flex gap-4 relative z-10">
                            {project.github && (
                              <motion.button
                                onClick={() => handleLinkClick(project.github!, project.title)}
                                disabled={loadingProjects.includes(project.title)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium shadow-lg transition-all duration-300 ${loadingProjects.includes(project.title)
                                  ? 'bg-gradient-to-r from-slate-600 to-slate-500 cursor-not-allowed'
                                  : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 hover:shadow-slate-500/20 hover:scale-105 active:scale-95'
                                  }`}
                                whileHover={!loadingProjects.includes(project.title) ? { scale: 1.05, y: -2 } : {}}
                                whileTap={!loadingProjects.includes(project.title) ? { scale: 0.95 } : {}}
                              >
                                {loadingProjects.includes(project.title) ? (
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <FaGithub />
                                )}
                                <span>{loadingProjects.includes(project.title) ? 'Opening...' : 'Code'}</span>
                              </motion.button>
                            )}
                            {project.demo && (
                              <motion.button
                                onClick={() => handleLinkClick(project.demo!, project.title)}
                                disabled={loadingProjects.includes(project.title)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium shadow-lg transition-all duration-300 ${loadingProjects.includes(project.title)
                                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 cursor-not-allowed'
                                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/20 hover:scale-105 active:scale-95'
                                  }`}
                                whileHover={!loadingProjects.includes(project.title) ? { scale: 1.05, y: -2 } : {}}
                                whileTap={!loadingProjects.includes(project.title) ? { scale: 0.95 } : {}}
                              >
                                {loadingProjects.includes(project.title) ? (
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <FaExternalLinkAlt />
                                )}
                                <span>{loadingProjects.includes(project.title) ? 'Opening...' : 'Live Demo'}</span>
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h3 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
                      <FaCode className="text-sm" />
                      Demo Credentials
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        className="group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => copyToClipboard('user@user.com', 'email')}
                      >
                        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                          <div>
                            <span className="text-purple-400 font-medium text-sm">Email:</span>
                            <div className="font-mono text-white text-sm">user@user.com</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {copiedCredentials === 'email' ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-green-400"
                              >
                                <FaCheck className="text-sm" />
                              </motion.div>
                            ) : (
                              <FaCopy className="text-slate-400 group-hover:text-purple-400 text-sm transition-colors" />
                            )}
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => copyToClipboard('123456789', 'password')}
                      >
                        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                          <div>
                            <span className="text-purple-400 font-medium text-sm">Password:</span>
                            <div className="font-mono text-white text-sm">123456789</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {copiedCredentials === 'password' ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-green-400"
                              >
                                <FaCheck className="text-sm" />
                              </motion.div>
                            ) : (
                              <FaCopy className="text-slate-400 group-hover:text-purple-400 text-sm transition-colors" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <p className="text-slate-400 text-xs mt-3 text-center">
                      Click to copy credentials to clipboard
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
          {/* Skills Section */}
          <section className="mb-16">
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div
                onClick={() => setShowSkills(v => !v)}
                className="flex items-center justify-between mb-8 p-6 bg-gradient-to-r from-emerald-900/50 via-slate-800/50 to-emerald-900/50 rounded-2xl backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-xl hover:shadow-emerald-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl shadow-lg">
                    <FaTools className="text-xl text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Skills & Technologies
                  </h2>
                </div>
                <motion.div
                  animate={{ rotate: showSkills ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg"
                >
                  <FaChevronDown className="text-xl text-emerald-300" />
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence>
              {showSkills && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {skillsList.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        className="group bg-gradient-to-br from-slate-900/80 via-emerald-900/20 to-slate-900/80 rounded-xl p-4 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                          boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative text-center">
                          <motion.div
                            className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                            whileHover={{ scale: 1.2, opacity: 1 }}
                          />
                          <motion.span
                            className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors relative z-10 block"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
          {/* Certifications Section */}
          <section className="mb-16">
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div
                onClick={() => setShowCerts(v => !v)}
                className="flex items-center justify-between mb-8 p-6 bg-gradient-to-r from-amber-900/50 via-slate-800/50 to-amber-900/50 rounded-2xl backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 shadow-xl hover:shadow-amber-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow-lg">
                    <FaCertificate className="text-xl text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Certifications
                  </h2>
                </div>
                <motion.div
                  animate={{ rotate: showCerts ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg"
                >
                  <FaChevronDown className="text-xl text-amber-300" />
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence>
              {showCerts && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, idx) => (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                        className="group bg-gradient-to-br from-slate-900/80 via-amber-900/20 to-slate-900/80 rounded-2xl p-6 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1"
                        whileHover={{
                          scale: 1.02,
                          y: -5,
                          boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="relative">
                          <motion.div
                            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl"
                            whileHover={{ scale: 1.2, opacity: 0.8 }}
                          />
                          <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative z-10"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors line-clamp-2">
                              {cert.name}
                            </h3>
                            <motion.div
                              className="flex items-center gap-2 text-amber-400 text-sm font-medium group-hover:text-amber-300 transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              <FaCertificate className="text-xs" />
                              <span>View Certificate</span>
                              <FaExternalLinkAlt className="text-xs opacity-60 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">

            {/* About Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Logo size="md" showText={true} />
              </div>
              <motion.h3
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.02 }}
              >
                {userInfo.name}
              </motion.h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {userInfo.title} passionate about creating exceptional web experiences.
                Let's build something amazing together using modern technologies and innovative solutions.
              </p>
              <div className="flex gap-4">
                {[
                  { href: userInfo.socialLinks.github, icon: FaGithub, color: "hover:text-slate-300", bg: "hover:bg-slate-700/20" },
                  { href: userInfo.socialLinks.linkedin, icon: FaLinkedin, color: "hover:text-blue-400", bg: "hover:bg-blue-400/20" },
                  { href: userInfo.socialLinks.facebook, icon: FaFacebook, color: "hover:text-blue-500", bg: "hover:bg-blue-500/20" },
                  { href: userInfo.socialLinks.instagram, icon: FaInstagram, color: "hover:text-pink-500", bg: "hover:bg-pink-500/20" },
                  { href: userInfo.socialLinks.whatsapp, icon: FaWhatsapp, color: "hover:text-green-500", bg: "hover:bg-green-500/20" },
                ].map(({ href, icon: Icon, color, bg }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 border border-slate-600 rounded-xl flex items-center justify-center text-slate-400 ${color} ${bg} transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Me", onClick: () => setShowAbout(true) },
                  { label: "Projects", onClick: () => setShowProjects(true) },
                  { label: "Skills", onClick: () => setShowSkills(true) },
                  { label: "Experience", onClick: () => setShowWork(true) },
                  { label: "Certificates", onClick: () => setShowCerts(true) },
                ].map((link, index) => (
                  <motion.li key={index}>
                    <motion.button
                      onClick={link.onClick}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-left"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${userInfo.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <span className="text-sm">{userInfo.email}</span>
                </motion.a>

                <motion.a
                  href={`tel:${userInfo.phone}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <FaPhone className="text-sm" />
                  </div>
                  <span className="text-sm">{userInfo.phone}</span>
                </motion.a>

                <motion.div
                  className="flex items-center gap-3 text-slate-400"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <span className="text-sm">{userInfo.location}, Egypt</span>
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Footer */}
          <motion.div
            className="border-t border-slate-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                className="text-slate-400 text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>© {new Date().getFullYear()} {userInfo.name}. Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaHeart className="text-red-500" />
                </motion.span>
                <span>using React & TypeScript</span>
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Back to top</span>
                <FaChevronUp className="text-xs" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
      </footer>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Floating Action Button */}
      <AnimatePresence>
        {scrollProgress > 20 && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center text-white z-40 group"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaChevronUp className="text-lg group-hover:text-cyan-200 transition-colors" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;