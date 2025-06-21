import { motion } from "framer-motion";

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

const shimmerVariants = {
  initial: { backgroundPosition: '200% 0' },
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const Header = () => {
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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', bounce: 0.3 } },
  };

  // Split the title for floating animation
  const title = 'THE EYOAB GAZETTE';
  const titleLetters = title.split('');

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={container}
      className="relative flex flex-col items-center justify-center w-full min-h-screen h-[100dvh] bg-[#f5ecd9] border-b-8 border-black overflow-hidden"
      style={{ fontFamily: 'EB Garamond, serif' }}
    >
      {/* Floating Letters */}
      <motion.h1
        variants={item}
        className="text-6xl md:text-8xl font-extrabold tracking-widest mb-2 uppercase text-center leading-tight flex flex-wrap justify-center"
        style={{ letterSpacing: '0.12em', zIndex: 2 }}
      >
        {titleLetters.map((char, i) =>
          char === ' ' ? (
            <span key={i} style={{ width: '0.5em' }}></span>
          ) : (
            <motion.span
              key={i}
              variants={floatingVariants}
              animate="animate"
              style={{ display: 'inline-block', margin: '0 0.02em' }}
              transition={{ delay: i * 0.06 }}
            >
              {char}
            </motion.span>
          )
        )}
      </motion.h1>
      {/* Subtitle shimmer */}
      <motion.p
        variants={item}
        className="text-2xl md:text-3xl italic mb-2 text-center max-w-2xl mt-2 relative"
        style={{ zIndex: 2 }}
      >
        <motion.span
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
          className="inline-block bg-gradient-to-r from-[#b59b6a] via-[#f5ecd9] to-[#b59b6a] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer"
          style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
        >
          Ancient Principles for Modern Programming
        </motion.span>
      </motion.p>
      <motion.div variants={item} className="text-lg text-center mb-2" style={{ zIndex: 2 }}>
        <span className="tracking-widest">Est. 2024 &mdash; Vol. 1, No. 1</span>
      </motion.div>
      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2, type: 'spring', bounce: 0.2 }}
        className="w-40 md:w-64 h-3 bg-black rounded-full mt-8 mb-2 origin-left shadow-lg"
        style={{ zIndex: 2 }}
      ></motion.div>
      {/* Magical floating sparkles */}
      <motion.div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#b59b6a] opacity-30 shadow-lg"
            style={{
              top: `${Math.random() * 90 + 2}%`,
              left: `${Math.random() * 95 + 1}%`,
              filter: 'blur(1.5px)',
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2.5 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </motion.header>
  );
};

export default Header;