import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/navbar';
import Header from '../components/header';
import { BlogCard } from '../components/home/BlogCard';
import { BlogFilter } from '../components/home/BlogFilter';
import { Newsletter } from '../components/home/Newsletter';
import { Footer } from '../components/common/Footer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const filters = ['All', 'React', 'JavaScript', 'Philosophy', 'Design'];
  
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Clean Code",
      excerpt: "Exploring how philosophical principles can guide us to write better, more maintainable code.",
      category: "Philosophy",
      date: "May 15, 2023"
    },
    // ... other blog posts
  ];
  
  // Filter posts based on active filter and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = activeFilter === 'All' || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="relative min-h-screen">
        
        <NavBar darkMode={darkMode} />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="relative z-10 py-16">
          <div className="container mx-auto px-6">
            <BlogFilter 
                darkMode={darkMode}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                filters={filters}
            />
            
            {filteredPosts.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.map((post) => (
                    <BlogCard 
                        title="Creating Modern User Interfaces"
                        excerpt="Learn how to build beautiful interfaces that engage users..."
                        category="Design"
                        date="Aug 12, 2023"
                        darkMode={darkMode}
                        // Optional props:
                        readTime="6 min read"
                        author="Eyoab Amare"
                        imageUrl="your-image-url.jpg"
                        authorImage="your-avatar.jpg"
                    />
                ))}
              </motion.div>
            ) : (
              <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <p className="text-lg">No articles found matching your criteria.</p>
              </div>
            )}
            
            <div className="mt-24">
              <Newsletter darkMode={darkMode} />
            </div>
          </div>
        </main>
        
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Home;