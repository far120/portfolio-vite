import { userInfo } from "./userInfo";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaMobileAlt, FaMapMarkerAlt, FaEnvelope, FaBirthdayCake } from "react-icons/fa";
import { motion } from "framer-motion";

function Aside() {
  return (
    <aside className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-sm mx-auto mb-10 border-2 border-blue-500/40 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.25)_0%,transparent_70%)] before:blur-2xl before:z-0">
      <div className="flex flex-col items-center relative z-10">
        <div className="relative mb-5">
          <motion.img
            src={userInfo.image}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-fit"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px #3b82f6' }}
          />
          <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
        </div>
        <motion.h2
          className="text-3xl font-extrabold mb-1 text-white drop-shadow-lg tracking-tight text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >{userInfo.name}</motion.h2>
        <motion.h3
          className="text-blue-300 mb-4 text-lg font-semibold tracking-wide text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >{userInfo.title}</motion.h3>
        <motion.div
          className="flex gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <a href={userInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-2xl transition-colors" title="Facebook"><FaFacebook /></a>
          <a href={userInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl transition-colors" title="GitHub"><FaGithub /></a>
          <a href={userInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 text-2xl transition-colors" title="Instagram"><FaInstagram /></a>
          <a href={userInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 text-2xl transition-colors" title="LinkedIn"><FaLinkedin /></a>
          <a href={userInfo.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-2xl transition-colors" title="WhatsApp"><FaWhatsapp /></a>
        </motion.div>
      </div>
      <div className="mt-8 space-y-5 bg-gray-800/70 rounded-2xl p-5 shadow-inner">
        <div className="flex items-center gap-3 text-gray-200 text-base">
          <FaMobileAlt className="text-blue-400" />
          <span className="font-semibold">Phone:</span>
          <a href={`tel:${userInfo.phone}`} className="hover:text-blue-400 underline underline-offset-2">{userInfo.phone}</a>
        </div>
        <div className="flex items-center gap-3 text-gray-200 text-base">
          <FaMapMarkerAlt className="text-blue-400" />
          <span className="font-semibold">Location:</span>
          <span>{userInfo.location}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-200 text-base">
          <FaEnvelope className="text-blue-400" />
          <span className="font-semibold">Email:</span>
          <a href={`mailto:${userInfo.email}`} className="hover:text-blue-400 underline underline-offset-2">{userInfo.email}</a>
        </div>
        <div className="flex items-center gap-3 text-gray-200 text-base">
          <FaBirthdayCake className="text-blue-400" />
          <span className="font-semibold">Birthday:</span>
          <span>{userInfo.birthday}</span>
        </div>
      </div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-800/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl z-0"></div>
    </aside>
  );
}

export default Aside;
