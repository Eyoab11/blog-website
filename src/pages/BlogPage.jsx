import { useParams } from 'react-router-dom';
// import Header from '../components/header';
import { useEffect, useState } from 'react';
import { allBlogs } from './allBlogs';

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = allBlogs.find(b => String(b.id) === String(id));
    setBlog(found);
  }, [id]);

  if (!blog) return <div className="min-h-screen flex items-center justify-center text-2xl">Blog not found.</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col items-center">
        {/* Blog Images */}
        <div className="w-full mb-8 flex justify-center">
          <img src={blog.image} alt={blog.title} className="rounded-xl w-full max-h-96 object-cover object-center shadow-lg" />
        </div>
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{blog.title}</h1>
        {/* Blog Meta */}
        <div className="mb-6 text-center text-gray-600">
          <span className="mr-2">{blog.date}</span>
          {blog.categories.map((category, index) => (
            <span key={index} className="category-tag mr-2">
              {category}
            </span>
          ))}
        </div>
        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content || blog.excerpt}
        </div>
      </main>
    </div>
  );
};

export default BlogPage; 