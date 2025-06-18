import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiChevronDown, FiFilter, FiCalendar, FiClock } from 'react-icons/fi';
import { format } from 'date-fns';

export const BlogFilter = ({ 
  darkMode, 
  searchQuery, 
  setSearchQuery, 
  activeFilter, 
  setActiveFilter,
  filters 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dateRange, setDateRange] = useState(undefined);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const handleDateSelect = (date) => {
    setDateRange(date);
    // Add date filtering logic here if needed
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveFilter('All');
    setDateRange(undefined);
  };

  const hasActiveFilters = activeFilter !== 'All' || searchQuery || dateRange;

  const filterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className={`mb-12 rounded-3xl p-8 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-lg shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
        {/* Search Section */}
        <div className="flex-1 min-w-[300px] relative group">
          <div className={`absolute inset-0 rounded-xl blur-xl group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 ${darkMode ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-r from-blue-200/50 to-purple-200/50'}`}></div>
          <div className="relative">
            <FiSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} h-5 w-5 transition-colors duration-300 group-hover:${darkMode ? 'text-white' : 'text-black'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search wisdom..."
              className={`pl-12 pr-4 py-3 w-full rounded-xl border-0 ${darkMode ? 'bg-gray-800/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400' : 'bg-white/30 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500'} focus:outline-none backdrop-blur-sm transition-all duration-300 text-lg`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className={`absolute right-3 p-1 rounded-full ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
              >
                <FiX />
              </button>
            )}
          </div>
        </div>

        {/* Sort & Filter Controls */}
        <div className="flex gap-4 items-center">
          {/* Sort Dropdown */}
          <div className="relative group">
            <div className={`absolute inset-0 rounded-xl blur-xl group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 ${darkMode ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-r from-purple-200/50 to-pink-200/50'}`}></div>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center w-[160px] px-4 py-3 rounded-xl ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors duration-300`}
              >
                <FiClock className="mr-2 h-4 w-4" />
                <span className="flex-1 text-left">Latest First</span>
                <FiChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={filterVariants}
                    className={`absolute z-10 mt-2 w-full rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                  >
                    {['Latest First', 'Oldest First', 'Most Popular', 'Title A-Z'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`w-full text-left px-4 py-3 ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors first:rounded-t-xl last:rounded-b-xl`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Date Filter */}
          <div className="relative group">
            <div className={`absolute inset-0 rounded-xl blur-xl group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 ${darkMode ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20' : 'bg-gradient-to-r from-green-200/50 to-blue-200/50'}`}></div>
            <div className="relative">
              <button
                className={`flex items-center px-4 py-3 rounded-xl ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors duration-300`}
              >
                <FiCalendar className="mr-2 h-4 w-4" />
                {dateRange ? format(dateRange, 'MMM dd') : 'Any Date'}
              </button>
            </div>
          </div>

          {/* Tags Filter Toggle */}
          <div className="relative group">
            <div className={`absolute inset-0 rounded-xl blur-xl group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 ${darkMode ? 'bg-gradient-to-r from-yellow-500/20 to-red-500/20' : 'bg-gradient-to-r from-yellow-200/50 to-red-200/50'}`}></div>
            <button
              onClick={() => setIsFilterExpanded(!isFilterExpanded)}
              className={`flex items-center px-4 py-3 rounded-xl ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors duration-300`}
            >
              <FiFilter className="mr-2 h-4 w-4" />
              Tags
              <FiChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFilterExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Tags Section */}
      <div className={`overflow-hidden transition-all duration-500 ease-out ${isFilterExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <span className={`${darkMode ? 'text-white/90' : 'text-gray-900'} font-medium`}>Filter by Topics</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.filter(f => f !== 'All').map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tag
                    ? darkMode
                      ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/20'
                      : 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${activeFilter === tag ? 'scale-105' : 'scale-100'}`}
              >
                {tag}
                {activeFilter === tag && (
                  <FiX className="ml-2 h-3 w-3 inline" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`text-sm ${darkMode ? 'text-white/80' : 'text-gray-600'} font-medium flex items-center gap-2`}>
              <FiFilter className="h-4 w-4" />
              Active filters:
            </span>
            {activeFilter !== 'All' && (
              <button
                onClick={() => setActiveFilter('All')}
                className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${
                  darkMode
                    ? 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30'
                    : 'bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20'
                }`}
              >
                {activeFilter}
                <FiX className="h-3 w-3" />
              </button>
            )}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${
                  darkMode
                    ? 'bg-blue-400/20 text-blue-400 hover:bg-blue-400/30'
                    : 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20'
                }`}
              >
                Search: {searchQuery}
                <FiX className="h-3 w-3" />
              </button>
            )}
            {dateRange && (
              <button
                onClick={() => setDateRange(undefined)}
                className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${
                  darkMode
                    ? 'bg-green-400/20 text-green-400 hover:bg-green-400/30'
                    : 'bg-green-500/10 text-green-600 hover:bg-green-500/20'
                }`}
              >
                {format(dateRange, 'MMM dd, yyyy')}
                <FiX className="h-3 w-3" />
              </button>
            )}
            <button
              onClick={clearFilters}
              className={`ml-2 text-xs ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  );
};