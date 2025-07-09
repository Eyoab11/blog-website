import { useParams } from 'react-router-dom';
// import Header from '../components/header';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import ReactMarkdown from 'react-markdown';

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();
      setBlog(data);
      setLoading(false);
    };
    fetchBlog();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-2xl">Loading...</div>;
  if (!blog) return <div className="min-h-screen flex items-center justify-center text-2xl">Blog not found.</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col items-center">
        {/* Blog Images */}
        <div className="w-full mb-8 flex justify-center">
          <img src={blog.image_url} alt={blog.title} className="rounded-xl w-full max-h-96 object-cover object-center shadow-lg" />
        </div>
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{blog.title}</h1>
        {/* Blog Meta */}
        <div className="mb-6 text-center text-gray-600">
          <span className="mr-2">{blog.created_at?.slice(0, 10)}</span>
          {blog.tags?.map((category, index) => (
            <span key={index} className="category-tag mr-2">
              {category}
            </span>
          ))}
        </div>
        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content ? <ReactMarkdown>{blog.content}</ReactMarkdown> : blog.excerpt}
        </div>
      </main>
    </div>
  );
};

export default BlogPage; 