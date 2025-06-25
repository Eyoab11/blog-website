import { Link } from 'react-router-dom';
import { allBlogs } from './allBlogs';

const Home = () => {
  const featuredPost = allBlogs[0]; // Using the first blog as featured
  const latestPosts = allBlogs.slice(1, 7); // Get next 6 posts for latest stories

  return (
    <div className="min-h-screen">
      {/* Featured Post */}
      <div className="relative h-[600px] mb-16">
        <div className="absolute inset-0">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wider mr-2">{featuredPost.date}</span>
              {featuredPost.categories.map((category, index) => (
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
              <Link to={`/blog/${featuredPost.id}`} className="hover:text-gray-200">
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
          <h3 className="text-3xl font-bold">Latest Stories</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />
              </Link>
              <div className="blog-card-content">
                <div className="mb-3">
                  <span className="text-sm text-gray-500 mr-2">{post.date}</span>
                  {post.categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/category/${category.toLowerCase()}`}
                      className="text-sm text-primary-600 mr-2"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
                <h2 className="blog-card-title">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="blog-card-excerpt text-gray-600">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16">
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

export default Home;