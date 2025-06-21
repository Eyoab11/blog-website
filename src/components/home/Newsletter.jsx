import { FiMail } from 'react-icons/fi';
import { useState } from 'react';
import { motion } from 'framer-motion';

const sparkleVariants = {
  animate: {
    y: [0, -8, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <motion.section
      className="relative py-16 px-8 rounded-2xl overflow-hidden border-2 border-[#b59b6a] bg-[#fffbe9] shadow-xl flex flex-col items-center max-w-2xl mx-auto mt-8"
      style={{ fontFamily: 'EB Garamond, serif', boxShadow: '0 0 0 4px #b59b6a22, 0 8px 32px 0 rgba(181,155,106,0.10)' }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
    >
      {/* Magical Sparkles */}
      <motion.div
        className="absolute top-6 left-8 w-4 h-4 rounded-full bg-[#b59b6a] opacity-60 shadow-lg z-20"
        variants={sparkleVariants}
        animate="animate"
        style={{ filter: 'blur(1px)' }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-4 h-4 rounded-full bg-[#b59b6a] opacity-60 shadow-lg z-20"
        variants={sparkleVariants}
        animate="animate"
        style={{ filter: 'blur(1px)' }}
      />
      {/* Scroll-like top and bottom edges */}
      <div className="absolute left-0 top-0 w-full h-6" style={{ pointerEvents: 'none' }}>
        <svg viewBox="0 0 400 24" width="100%" height="100%" preserveAspectRatio="none">
          <path d="M0,12 Q40,24 80,12 T160,12 T240,12 T320,12 T400,12 V24 H0 Z" fill="#fffbe9" stroke="#b59b6a" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-6" style={{ pointerEvents: 'none' }}>
        <svg viewBox="0 0 400 24" width="100%" height="100%" preserveAspectRatio="none">
          <path d="M0,12 Q40,0 80,12 T160,12 T240,12 T320,12 T400,12 V0 H0 Z" fill="#fffbe9" stroke="#b59b6a" strokeWidth="2" />
        </svg>
      </div>
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-widest text-[#b59b6a] drop-shadow-lg" style={{ fontFamily: 'EB Garamond, serif' }}>
          Owl Post Newsletter
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-[#3a2c13] italic" style={{ fontFamily: 'Merriweather, serif' }}>
          Receive magical updates, enchanted articles, and wisdom delivered straight to your inbox. No howler, just pure inspiration!
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center justify-center mt-6">
          <div className="relative flex-grow w-full">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b59b6a]" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your owl's address (email)"
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#b59b6a] bg-white text-black placeholder-[#b59b6a] focus:ring-2 focus:ring-[#b59b6a] focus:outline-none shadow-sm text-lg font-serif transition-all duration-300 focus:border-black"
              style={{ fontFamily: 'Merriweather, serif' }}
            />
          </div>
          {/* Wax Seal Subscribe Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.08, rotate: -3, boxShadow: '0 0 0 4px #b59b6a, 0 8px 32px 0 rgba(181,155,106,0.18)' }}
            className="flex items-center justify-center px-8 py-3 rounded-full bg-[#b59b6a] text-white font-bold text-lg uppercase tracking-widest border-4 border-[#3a2c13] shadow-lg relative transition-all duration-300 hover:bg-[#a88a4a] hover:text-black"
            style={{ fontFamily: 'EB Garamond, serif', letterSpacing: '0.12em', position: 'relative' }}
          >
            <span className="mr-2">Subscribe</span>
            {/* Wax seal effect */}
            <span className="absolute -right-6 -bottom-3 w-8 h-8 rounded-full bg-[#a88a4a] border-2 border-[#3a2c13] flex items-center justify-center shadow-md text-white text-xl" style={{ fontFamily: 'serif', fontWeight: 900, fontSize: '1.5em', transform: 'rotate(-12deg)' }}>✶</span>
          </motion.button>
        </form>
        <p className="text-sm mt-4 text-[#b59b6a] italic">
          No spam, ever. Unsubscribe anytime. Your owl is safe with us.
        </p>
      </div>
    </motion.section>
  );
}