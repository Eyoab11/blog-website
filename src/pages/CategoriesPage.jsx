import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import eyoabImg from '../assets/Eyoab-removebg-preview.png';

const CategoriesPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeSort, setActiveSort] = useState('newest');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        setBlogs(data);
        // Extract unique tags from all blogs
        const tagsSet = new Set();
        data.forEach(blog => (blog.tags && blog.tags.length ? blog.tags : ["General"]).forEach(tag => tagsSet.add(tag)));
        setAllTags(Array.from(tagsSet));
      }
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    let filtered = [...blogs];
    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter(blog =>
        (blog.tags && blog.tags.length ? blog.tags : ["General"]).includes(selectedTag)
      );
    }
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Sort blogs
    filtered.sort((a, b) => {
      switch (activeSort) {
        case 'newest':
          return new Date(b.created_at) - new Date(a.created_at);
        case 'oldest':
          return new Date(a.created_at) - new Date(b.created_at);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
    setFilteredBlogs(filtered);
  }, [blogs, selectedTag, searchQuery, activeSort]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-2xl">Loading...</div>;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0E79B2' }}>Categories</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our articles by categories and discover stories that interest you.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Articles</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title or content..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
              <div className="relative">
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none"
                >
                  <option value="All">All Categories</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <div className="flex space-x-2">
                {[
                  { value: 'newest', label: 'Newest' },
                  { value: 'oldest', label: 'Oldest' },
                  { value: 'title', label: 'Title' }
                ].map(sort => (
                  <button
                    key={sort.value}
                    onClick={() => setActiveSort(sort.value)}
                    className={`flex-1 py-2 px-4 rounded-lg border transition-all ${
                      activeSort === sort.value
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                    }`}
                  >
                    {sort.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4">
        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
            {selectedTag !== 'All' && ` in ${selectedTag}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <article key={blog.id} className="blog-card min-h-[420px] flex flex-col">
              <Link to={`/blog/${blog.id}`}>
                {blog.image_url ? (
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="blog-card-image"
                  />
                ) : (
                  <div className="blog-card-image bg-gray-200 flex items-center justify-center text-gray-400 text-xl">No Image</div>
                )}
              </Link>
              <div className="blog-card-content flex flex-col flex-1 justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-sm text-gray-500 mr-2">{blog.created_at?.slice(0, 10)}</span>
                    {(blog.tags && blog.tags.length ? blog.tags : ["General"]).map((tag, index) => (
                      <Link
                        key={index}
                        to={`/category/${tag.toLowerCase()}`}
                        className="text-xs text-primary-600 mr-2"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <h2 className="blog-card-title mt-2">
                    <Link to={`/blog/${blog.id}`} className="hover:text-primary-600">
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="blog-card-excerpt text-gray-600">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="flex flex-row items-end justify-between mt-4 w-full">
                  <div className="flex flex-col items-start">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-1"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <span className="text-xs text-gray-500">{blog.read_time || '5 min read'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-cover bg-center border border-black" style={{ backgroundImage: `url(${eyoabImg})` }}></div>
                    <span className="font-semibold text-sm">{blog.author || 'Eyoab Amare'}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Love for the writing is our best strategy!</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest updates straight to your inbox.
          </p>
          <form className="newsletter-form max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage; 