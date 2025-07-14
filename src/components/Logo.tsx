import { motion } from "framer-motion";

interface LogoProps {
    size?: "sm" | "md" | "lg";
    showText?: boolean;
    className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
    const sizeClasses = {
        sm: "h-8",
        md: "h-12",
        lg: "h-16"
    };

    const containerSizeClasses = {
        sm: "h-8",
        md: "h-12",
        lg: "h-16"
    };

    return (
        <motion.div
            className={`flex items-center gap-3 ${className}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            {/* EIFAR Logo */}
            <motion.div
                className={`${containerSizeClasses[size]} relative group`}
                whileHover={{
                    rotate: [0, -2, 2, 0],
                    filter: "drop-shadow(0 10px 20px rgba(168, 85, 247, 0.3))"
                }}
                transition={{ duration: 0.5 }}
            >
                {/* Animated glow background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Logo Image */}
                <motion.img
                    src="/ChatGPT Image Jul 3, 2025, 11_50_39 AM.png"
                    alt="ELFAR Logo"
                    className={`${sizeClasses[size]} w-auto object-contain relative z-10 filter brightness-110`}
                    whileHover={{
                        scale: 1.1,
                        filter: "brightness(120%) drop-shadow(0 0 10px rgba(255,255,255,0.3))"
                    }}
                    onError={(e) => {
                        // Fallback to text logo if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                    }}
                />

           

                {/* Sparkle effects */}
                <motion.div
                    className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5
                    }}
                />
                <motion.div
                    className="absolute bottom-1 left-1 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 1
                    }}
                />
            </motion.div>

            {/* Optional Brand Text */}
            {showText && (
                <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.span
                        className={`font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'} leading-tight`}
                        whileHover={{
                            background: "linear-gradient(45deg, #a855f7, #06b6d4, #ec4899, #8b5cf6)",
                            backgroundClip: "text"
                        }}
                    >
                        ElFAR
                    </motion.span>
                    {size !== "sm" && (
                        <motion.span
                            className="text-xs text-slate-400 -mt-1"
                            whileHover={{ color: "#94a3b8" }}
                        >
                            {size === "lg" ? "Developer Portfolio" : "Portfolio"}
                        </motion.span>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
};

export default Logo;
