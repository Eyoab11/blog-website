import { useState } from 'react';
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

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

const tagColors = {
  Philosophy: 'bg-[#f5ecd9] text-[#7c5e2a] border-[#e2d8c3]',
  Technology: 'bg-[#e6f7fa] text-[#1e3a5c] border-[#b3e0ee]',
  Music: 'bg-[#f0e7fa] text-[#6b21a8] border-[#d1b3ee]',
  Humor: 'bg-[#fffbe9] text-[#b59b6a] border-[#e2d8c3]',
  Design: 'bg-[#f9f6f2] text-[#3a2c13] border-[#e2d8c3]',
  JavaScript: 'bg-[#fff7e6] text-[#eab308] border-[#f7e1b3]',
  React: 'bg-[#e6f7fa] text-[#2563eb] border-[#b3e0ee]',
  Wellness: 'bg-[#e6fae6] text-[#15803d] border-[#b3eeb3]',
  Community: 'bg-[#f0f7fa] text-[#0e7490] border-[#b3dbee]',
  All: 'bg-[#f5ecd9] text-[#7c5e2a] border-[#e2d8c3]'
};

export const BlogCard = ({ 
  title, 
  excerpt, 
  category, 
  date, 
  tags = [],
  imageUrl,
  images,
  readTime = "5 min read",
  author = "Eyoab Amare",
  authorImage = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  id
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const galleryImages = images && images.length > 0 ? images : imageUrl ? [imageUrl] : [];
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleCardClick = (e) => {
    if (!e.target.closest('.no-flip')) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <motion.div 
      className="w-full max-w-3xl min-h-[340px] mx-auto cursor-pointer paper-shadow blog-card-parchment transition-transform duration-300 hover:scale-[1.035] hover:shadow-2xl flex flex-col relative overflow-hidden"
      onClick={handleCardClick}
      style={{ fontFamily: 'EB Garamond, Merriweather, serif' }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring', bounce: 0.25 }}
      whileHover={{ boxShadow: '0 0 0 4px #b59b6a, 0 8px 32px 0 rgba(181,155,106,0.10)' }}
    >
      {/* Magical Sparkle */}
      <motion.div
        className="absolute top-6 right-8 w-4 h-4 rounded-full bg-[#b59b6a] opacity-60 shadow-lg z-20"
        variants={sparkleVariants}
        animate="animate"
        style={{ filter: 'blur(1px)' }}
      />
      {/* Image Gallery */}
      {galleryImages.length > 0 && (
        <div className="w-full h-56 bg-gray-200 border-b-2 border-[#e2d8c3] relative flex items-center justify-center overflow-hidden carousel-hide-scrollbar">
          <img
            src={galleryImages[galleryIndex]}
            alt={title}
            className="w-full h-56 object-cover object-center rounded-t-xl transition-all duration-300"
            draggable={false}
          />
          {galleryImages.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#fffbe9] border border-[#b59b6a] rounded-full p-2 shadow hover:bg-[#b59b6a] hover:text-white transition-colors z-10"
                onClick={e => { e.stopPropagation(); setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length); }}
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#fffbe9] border border-[#b59b6a] rounded-full p-2 shadow hover:bg-[#b59b6a] hover:text-white transition-colors z-10"
                onClick={e => { e.stopPropagation(); setGalleryIndex((galleryIndex + 1) % galleryImages.length); }}
                aria-label="Next image"
              >
                &#8594;
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {galleryImages.map((_, idx) => (
                  <span key={idx} className={`w-2 h-2 rounded-full ${galleryIndex === idx ? 'bg-[#b59b6a]' : 'bg-[#e2d8c3]'}`}></span>
                ))}
              </div>
            </>
          )}
        </div>
      )}
      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-8 pb-10 relative z-10">
        <div>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="bg-[#f5ecd9] border border-[#e2d8c3] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">{category}</span>
            {tags && tags.map(tag => (
              <span
                key={tag}
                className={`border px-3 py-1 rounded-full text-xs font-semibold tracking-wider ml-1 ${tagColors[tag] || 'bg-[#f5ecd9] text-[#7c5e2a] border-[#e2d8c3]'}`}
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-extrabold mb-1 leading-tight" style={{ fontFamily: 'EB Garamond, serif' }}>{title}</h2>
          {/* Gold accent line */}
          <div className="w-16 h-1 bg-[#b59b6a] rounded-full mb-3 mt-1"></div>
          <p className="drop-cap text-base leading-relaxed mb-4 line-clamp-2" style={{ fontFamily: 'Merriweather, serif' }}>{excerpt}</p>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-cover bg-center border border-black" style={{ backgroundImage: `url(${authorImage})` }}></div>
            <div>
              <div className="font-semibold text-sm">{author}</div>
              <div className="text-xs text-gray-700">{date} · {readTime}</div>
            </div>
          </div>
          <Link to={`/blog/${id}`} className="no-flip flex items-center justify-center w-10 h-10 border border-black rounded-full bg-[#f5ecd9] hover:bg-black hover:text-[#f5ecd9] transition-colors" onClick={e => e.stopPropagation()}>
            <FaArrowRight className="text-base" />
          </Link>
        </div>
      </div>
      {/* Torn paper effect at bottom */}
      <div className="absolute left-0 bottom-0 w-full h-8 z-10" style={{ pointerEvents: 'none' }}>
        <svg viewBox="0 0 400 40" width="100%" height="100%" preserveAspectRatio="none">
          <path d="M0,20 Q40,40 80,20 T160,20 T240,20 T320,20 T400,20 V40 H0 Z" fill="#fffbe9" stroke="#b59b6a" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
}