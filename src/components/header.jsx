import { motion } from "framer-motion";
import { useEffect } from "react";
import Eyoab from "../assets/Eyoab-removebg-preview.png"
const Header = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={container}
      className="relative flex flex-col items-center justify-center p-8 bg-black text-white font-serif min-h-screen"
    >
      {/* Your photo with Lao Tzu styling */}
      <motion.div 
        variants={item}
        className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-400 mb-6"
      >
        <img 
          src= {Eyoab} // Replace with your image path
          alt="Eyoab Amare"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold tracking-widest mb-2">
        THE
      </motion.h1>
      <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold tracking-widest mb-2">
        WISDOM
      </motion.h1>
      <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold tracking-wider mb-6">
        OF<span className="text-yellow-400">CODE</span>
      </motion.h1>
      
      <motion.p variants={item} className="text-lg md:text-xl italic mb-4 text-center max-w-md">
        Ancient Principles for Modern Programming
      </motion.p>
      
      <motion.div variants={item} className="text-sm text-center">
        <p>Written by Eyoab Amare</p>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 20],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="mt-16"
      >
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.header>
  );
};

export default Header;