import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/navbar';
import Header from '../components/header';
import { BlogCard } from '../components/home/BlogCard';
import { BlogFilter } from '../components/home/BlogFilter';
import { Newsletter } from '../components/home/Newsletter';
import { Footer } from '../components/common/Footer';
import allBlogs from './allBlogs';

const allTags = [
  "All",
  "React",
  "JavaScript",
  "Philosophy",
  "Design",
  "Music",
  "Humor",
  "Technology",
  "Wellness",
  "Community"
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter posts based on active filter and search query
  const filteredPosts = allBlogs.filter(post => {
    const matchesFilter = activeFilter === 'All' || post.category === activeFilter || (post.tags && post.tags.includes(activeFilter));
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesFilter && matchesSearch;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const canSeeMore = visibleCount < filteredPosts.length;

  return (
    <div>
      <div className="relative min-h-screen newspaper-bg pt-32">
        <NavBar />
        <Header />
        <main className="relative z-10 py-16 px-6 md:px-16">
          <div>
            <div className="flex justify-center w-full mb-8">
              <div className="w-full max-w-xl">
                <BlogFilter 
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                  filters={allTags}
                />
              </div>
            </div>
            {visiblePosts.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12 mt-8"
              >
                {visiblePosts.map((post) => (
                    <div key={post.id} className="break-inside-avoid mb-12 flex justify-center">
                      <BlogCard 
                          id={post.id}
                          title={post.title}
                          excerpt={post.excerpt}
                          category={post.category}
                          date={post.date}
                          tags={post.tags}
                          imageUrl={post.imageUrl}
                          readTime="6 min read"
                          author="Eyoab Amare"
                          authorImage="your-avatar.jpg"
                      />
                    </div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No articles found matching your criteria.</p>
              </div>
            )}
            {canSeeMore && (
              <div className="flex justify-center mt-10">
                <button
                  className="px-8 py-3 rounded-full bg-[#b59b6a] text-white font-bold uppercase tracking-widest border-2 border-black hover:bg-black hover:text-[#b59b6a] transition-colors text-lg shadow-md"
                  onClick={() => setVisibleCount(visibleCount + 6)}
                >
                  See More
                </button>
              </div>
            )}
            <div className="mt-24">
              <Newsletter />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;