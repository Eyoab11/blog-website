import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import emailjs from 'emailjs-com';

// Contact form now uses Supabase for submissions and EmailJS for email delivery.
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    const { name, email, subject, message } = formData;
    if (!name || !email || !message) {
      setStatus('Please fill in all required fields.');
      return;
    }
    // 1. Save to Supabase
    const { error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }]);
    if (error) {
      setStatus('Something went wrong. Please try again.');
      return;
    }
    // 2. Send email via EmailJS using env variables
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_USER_ID
    ).then(
      (result) => {
        setStatus('Message sent! Thank you for reaching out.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        setStatus('Message saved, but email notification failed.');
      }
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0E79B2' }}>Get in Touch</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out. I'd love to hear from you!
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">contact@eyoabamare.com</p>
                  <p className="text-gray-600">business@eyoabamare.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                    <a href="https://t.me/yourtelegram" className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.04 16.44l-.39 3.67c.56 0 .8-.24 1.09-.53l2.62-2.49 5.44 3.98c1 .55 1.72.26 1.97-.92l3.58-16.84c.36-1.66-.6-2.32-1.62-1.92L2.2 9.13c-1.62.65-1.6 1.58-.28 2.01l4.6 1.44 10.7-6.74c.5-.32.96-.14.58.18"/></svg>
                    </a>
                    <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
            {status && (
              <div
                className={`mt-6 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium shadow-md
                  ${status.toLowerCase().includes('thank') || status.toLowerCase().includes('sent') ? 'bg-green-100 text-green-800 border border-green-300' :
                    status.toLowerCase().includes('wrong') || status.toLowerCase().includes('try again') ? 'bg-[#E3F2FA] text-[#0E79B2] border border-[#B3DDF2]' :
                    'bg-yellow-100 text-yellow-800 border border-yellow-300'}`}
                role="alert"
              >
                {status.toLowerCase().includes('thank') || status.toLowerCase().includes('sent') ? (
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                ) : status.toLowerCase().includes('wrong') || status.toLowerCase().includes('try again') ? (
                  <svg className="w-5 h-5 mr-2 text-[#0E79B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                )}
                <span>{status}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 