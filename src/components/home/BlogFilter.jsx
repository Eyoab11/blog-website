import { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

export const BlogFilter = ({ 
  searchQuery, 
  setSearchQuery, 
  activeFilter, 
  setActiveFilter,
  filters 
}) => {
  const [showClear, setShowClear] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-6 py-10 rounded-3xl shadow-2xl backdrop-blur-md bg-white/40 border border-[#e2d8c3]"
      style={{
        boxShadow: '0 8px 32px 0 rgba(181,155,106,0.18), 0 1.5px 0 0 #e2d8c3',
        border: '1.5px solid #e2d8c3',
      }}
    >
      {/* Floating Sparkle */}
      <div className="absolute -top-4 right-10 w-6 h-6 rounded-full bg-[#b59b6a] opacity-30 blur-sm animate-pulse z-10" />
      {/* Search Bar */}
      <div className="relative w-full max-w-xl flex items-center mb-6">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b59b6a] text-2xl" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search articles, topics, or tags..."
          className="w-full pl-12 pr-12 py-5 rounded-full bg-white/70 border-2 border-[#b59b6a] text-lg font-serif shadow focus:ring-2 focus:ring-[#b59b6a] focus:outline-none transition-all duration-300 placeholder-[#b59b6a]"
          style={{ fontFamily: 'Merriweather, serif', fontWeight: 500 }}
          onFocus={() => setShowClear(true)}
          onBlur={() => setTimeout(() => setShowClear(false), 200)}
        />
        {searchQuery && showClear && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#fffbe9] hover:bg-[#b59b6a] hover:text-white text-[#b59b6a] transition-colors shadow"
            aria-label="Clear search"
          >
            <FiX className="text-xl" />
          </button>
        )}
      </div>
      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {filters.filter(f => f !== 'All').map(tag => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-5 py-2 rounded-full border-2 font-serif text-sm font-semibold shadow transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none ${activeFilter === tag ? 'bg-[#b59b6a] text-white border-[#b59b6a]' : 'bg-white/70 text-[#b59b6a] border-[#b59b6a] hover:bg-[#b59b6a] hover:text-white'}`}
            style={{ letterSpacing: '0.08em' }}
          >
            {tag}
            {activeFilter === tag && (
              <FiX className="ml-2 inline text-white" />
            )}
          </button>
        ))}
        <button
          onClick={() => setActiveFilter('All')}
          className={`px-5 py-2 rounded-full border-2 font-serif text-sm font-semibold shadow transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none ${activeFilter === 'All' ? 'bg-[#b59b6a] text-white border-[#b59b6a]' : 'bg-white/70 text-[#b59b6a] border-[#b59b6a] hover:bg-[#b59b6a] hover:text-white'}`}
          style={{ letterSpacing: '0.08em' }}
        >
          All
        </button>
      </div>
    </div>
  );
};