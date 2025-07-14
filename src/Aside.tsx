import { userInfo } from "./userInfo";
import { aboutMe } from "./data";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaCheck, FaCopy } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Aside() {
  const [showToast, setShowToast] = useState<string | null>(null);
  const [buttonStates, setButtonStates] = useState({
    hire: 'idle', // 'idle', 'loading', 'success'
    talk: 'idle'
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showFeedback = (message: string, type: 'success' | 'info' = 'info') => {
    setShowToast(message);
    setTimeout(() => setShowToast(null), 3000);
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showFeedback(`${label} copied to clipboard!`, 'success');
    } catch (err) {
      showFeedback(`Failed to copy ${label}`, 'info');
    }
  };


  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/15 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">

          {/* Left Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="text-white block sm:inline">Hi, I'm </span>
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent block sm:inline">
                  {userInfo.name.split(' ')[0]} {userInfo.name.split(' ')[1]}
                </span>
              </motion.h1>
              <motion.h2
                className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Full Stack Developer | MERN Stack Specialist
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {aboutMe.split('\n')[0].substring(0, 200)}...
              </motion.p>
            </div>
           

            {/* Social Links */}
            <motion.div
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { href: userInfo.socialLinks.facebook, icon: FaFacebook, color: "hover:text-blue-500 hover:border-blue-500", bg: "hover:bg-blue-500/10", label: "Facebook" },
                { href: userInfo.socialLinks.github, icon: FaGithub, color: "hover:text-slate-300 hover:border-slate-300", bg: "hover:bg-slate-300/10", label: "GitHub" },
                { href: userInfo.socialLinks.instagram, icon: FaInstagram, color: "hover:text-pink-500 hover:border-pink-500", bg: "hover:bg-pink-500/10", label: "Instagram" },
                { href: userInfo.socialLinks.linkedin, icon: FaLinkedin, color: "hover:text-blue-400 hover:border-blue-400", bg: "hover:bg-blue-400/10", label: "LinkedIn" },
                { href: userInfo.socialLinks.whatsapp, icon: FaWhatsapp, color: "hover:text-green-500 hover:border-green-500", bg: "hover:bg-green-500/10", label: "WhatsApp" },
              ].map(({ href, icon: Icon, color, bg, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${label} profile`}
                  className={`w-10 h-10 sm:w-12 sm:h-12 border border-slate-600 rounded-full flex items-center justify-center text-slate-400 ${color} ${bg} transition-all duration-300 hover:scale-110 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-95`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="text-sm sm:text-lg" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image - Responsive */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-3xl blur-2xl transform rotate-3 scale-105"></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-purple-900/90 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl backdrop-blur-sm border border-purple-500/20">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={userInfo.image}
                    alt={`${userInfo.name} - ${userInfo.title}`}
                    className="w-full h-auto aspect-[3/4] object-cover shadow-xl transition-transform duration-500 hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                  {/* Status card */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.div
                      className="bg-slate-900/90 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-cyan-500/30 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-medium text-sm sm:text-base">Available for work</span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm mt-1">📍 {userInfo.location}, Egypt</p>
                      <p className="text-slate-300 text-xs sm:text-sm">📱 {userInfo.phone}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed top-8 right-8 z-50 max-w-sm"
            initial={{ opacity: 0, y: -50, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: -50, scale: 0.9, x: 100 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="bg-slate-800/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl px-4 py-3 text-white shadow-2xl">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-sm font-medium flex-1">{showToast}</span>
                <motion.button
                  onClick={() => setShowToast(null)}
                  className="text-slate-400 hover:text-white transition-colors duration-200 ml-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

     

    </section>
  );
}

export default Aside;
