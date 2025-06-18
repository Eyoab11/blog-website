import { useState } from 'react';
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart, FaComment, FaBookmark, FaCheck } from "react-icons/fa";

export const BlogCard = ({ 
  title, 
  excerpt, 
  category, 
  date, 
  darkMode,
  readTime = "5 min read",
  author = "Eyoab Amare",
  imageUrl = "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  authorImage = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleCardClick = (e) => {
    // Don't flip if click originated from the "See More" button
    if (!e.target.closest('.no-flip')) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className="w-full max-w-[380px] h-[500px] perspective-1500 mx-auto cursor-pointer"
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1500px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.5s ease"
      }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of Card */}
        <div className={`absolute w-full h-full backface-hidden rounded-3xl overflow-hidden ${darkMode ? 'shadow-2xl shadow-gray-800' : 'shadow-2xl shadow-gray-200'}`}>
          {/* Decorative Elements */}
          <div className="absolute top-6 right-6 w-12 h-12 bg-yellow-400 rounded-full animate-pulse z-10"></div>
          <div className="absolute bottom-10 left-6 w-16 h-16 bg-purple-400 rounded-full z-10"></div>
          
          {/* Image Background */}
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-indigo-900/40 to-purple-900/40' : 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20'}`}></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-0"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 w-full p-8 text-white z-10">
            <div className="flex gap-2 mb-4">
              <span className={`${darkMode ? 'bg-indigo-600/80 hover:bg-indigo-600' : 'bg-indigo-500/80 hover:bg-indigo-500'} text-white px-3 py-1 rounded-full text-sm font-medium transition-colors`}>
                {category}
              </span>
              <span className={`${darkMode ? 'bg-purple-600/80 hover:bg-purple-600' : 'bg-purple-500/80 hover:bg-purple-500'} text-white px-3 py-1 rounded-full text-sm font-medium transition-colors`}>
                Tutorial
              </span>
            </div>
            
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            
            <p className="text-white/90 mb-6">{excerpt}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div 
                  className="w-10 h-10 rounded-full bg-cover bg-center mr-3 border-2 border-white/30"
                  style={{ backgroundImage: `url(${authorImage})` }}
                ></div>
                <div>
                  <div className="font-medium">{author}</div>
                  <div className="text-xs text-white/70">{date} · {readTime}</div>
                </div>
              </div>
              
              <button 
                className="no-flip flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                onClick={(e) => e.stopPropagation()} // Prevent card flip
              >
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Back of Card */}
        <div className={`absolute w-full h-full backface-hidden rounded-3xl overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-indigo-900 to-purple-900'} text-white p-8 rotate-y-180`}>
          <h2 className="text-2xl font-bold mb-6">About This Article</h2>
          
          <p className="mb-6">{excerpt}</p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Key Topics:</h3>
            <ul className="space-y-2">
              {['Modern Design Principles', 'Performance Optimization', 'Accessibility Standards', 'User Experience'].map((topic) => (
                <li key={topic} className="flex items-center">
                  <span className={`w-6 h-6 rounded-full ${darkMode ? 'bg-indigo-500/30' : 'bg-indigo-400/30'} flex items-center justify-center mr-3`}>
                    <FaCheck className="text-xs" />
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-between text-white/80">
            <div className="flex items-center">
              <span className="mr-3">
                <FaHeart className="text-xl" />
              </span>
              2.4K
            </div>
            
            <div className="flex items-center">
              <span className="mr-3">
                <FaComment className="text-xl" />
              </span>
              86
            </div>
            
            <div className="flex items-center">
              <span className="mr-3">
                <FaBookmark className="text-xl" />
              </span>
              350
            </div>
          </div>
          
          <button 
            className="no-flip w-full py-3 bg-white text-indigo-900 font-semibold rounded-full mt-8 transition-all transform hover:scale-105"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card flip
              setIsFlipped(false); // Flip back to front
            }}
          >
            Back to Article
          </button>
        </div>
      </motion.div>
    </div>
  );
};