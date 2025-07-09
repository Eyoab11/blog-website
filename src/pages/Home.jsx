import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Newsletter } from '../components/home/Newsletter';
import eyoabImg from '../assets/Eyoab-removebg-preview.png';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error) setBlogs(data || []);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-2xl">Loading...</div>;
  if (!blogs.length) return <div className="min-h-screen flex items-center justify-center text-2xl">No blogs found.</div>;

  const featuredPost = blogs[0];
  const latestPosts = blogs.slice(0, visibleCount);

  return (
    <div className="min-h-screen">
      {/* Featured Post */}
      <div className="relative h-[600px] mb-16">
        <div className="absolute inset-0">
          <img
            src={featuredPost.image_url}
            alt={featuredPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wider mr-2">{featuredPost.created_at?.slice(0, 10)}</span>
              {featuredPost.tags?.map((category, index) => (
                <Link
                  key={index}
                  to={`/category/${category.toLowerCase()}`}
                  className="category-tag mr-2"
                >
                  {category}
                </Link>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <Link to={`/blog/${featuredPost.id}`} className="hover:text-gray-200" style={{ color: '#0E79B2' }}>
                {featuredPost.title}
              </Link>
            </h1>
            <p className="text-lg text-gray-200 mb-6">{featuredPost.excerpt}</p>
            <Link
              to={`/blog/${featuredPost.id}`}
              className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Stories */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-widest text-gray-600 mb-2">BROWSE AND READ THE LATEST STUFF</h2>
          <h3 className="text-3xl font-bold" style={{ color: '#0E79B2' }}>Latest Stories</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card min-h-[420px] flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/blog/${post.id}`)}
              tabIndex={0}
              onKeyPress={e => { if (e.key === 'Enter') navigate(`/blog/${post.id}`); }}
            >
              {post.image_url ? (
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="blog-card-image"
                />
              ) : (
                <div className="blog-card-image bg-gray-200 flex items-center justify-center text-gray-400 text-xl">No Image</div>
              )}
              <div className="blog-card-content flex flex-col flex-1 justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-sm text-gray-500 mr-2">{post.created_at?.slice(0, 10)}</span>
                    {post.tags?.map((category, index) => (
                      <Link
                        key={index}
                        to={`/category/${category.toLowerCase()}`}
                        className="text-xs text-primary-600 mr-2"
                        onClick={e => e.stopPropagation()}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  <h2 className="blog-card-title mt-2">
                    {post.title}
                  </h2>
                  <p className="blog-card-excerpt text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex flex-row items-end justify-between mt-4 w-full">
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-500 mb-1">{post.read_time || '5 min read'}</span>
                    <span className="inline-flex items-center text-primary-600 hover:text-primary-700 cursor-pointer">
                      Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-cover bg-center border border-black" style={{ backgroundImage: `url(${eyoabImg})` }}></div>
                    <span className="font-semibold text-sm">{post.author || 'Eyoab Amare'}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              onClick={() => setVisibleCount(visibleCount + 7)}
            >
              See More
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 md:mt-24 lg:mt-32"></div>
      <Newsletter />
    </div>
  );
};

export default Home;