import { useParams } from 'react-router-dom';
import NavBar from '../components/navbar';
// import Header from '../components/header';
import { useEffect, useState } from 'react';
import allBlogs from './allBlogs';

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = allBlogs.find(b => String(b.id) === String(id));
    setBlog(found);
  }, [id]);

  if (!blog) return <div className="min-h-screen flex items-center justify-center text-2xl">Blog not found.</div>;

  return (
    <div className="min-h-screen bg-[#f5ecd9]">
      <NavBar />
      {/* <Header /> */}
      <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col items-center">
        {/* Blog Images */}
        <div className="w-full mb-8 flex justify-center">
          <img src={blog.imageUrl} alt={blog.title} className="rounded-xl w-full max-h-96 object-cover object-center shadow-lg" />
        </div>
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center" style={{ fontFamily: 'EB Garamond, serif' }}>{blog.title}</h1>
        {/* Blog Meta */}
        <div className="mb-6 text-center text-[#b59b6a] font-serif italic">{blog.date} &mdash; {blog.category}</div>
        {/* Blog Content */}
        <div className="prose prose-lg max-w-none text-center" style={{ fontFamily: 'Merriweather, serif' }}>
          {blog.content || blog.excerpt}
        </div>
      </main>
    </div>
  );
};

export default BlogPage; 