import { FiMail } from 'react-icons/fi';
import { useState } from 'react';
import { supabase } from '../../../supabaseClient';

// Newsletter now uses Supabase for subscriptions.

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    if (!email) {
      setStatus('Please enter a valid email.');
      return;
    }
    const { error } = await supabase
      .from('newsletters')
      .insert([{ email }]);
    if (error) {
      setStatus('Something went wrong. Please try again.');
    } else {
      setStatus('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <section className="w-full py-20 bg-[#1e272e] flex justify-center items-center">
      <div
        className="bg-white border border-gray-200 shadow-lg rounded-2xl max-w-xl w-full mx-auto px-8 py-12 flex flex-col items-center"
        style={{ fontFamily: 'EB Garamond, serif' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center text-[#0E79B2]" style={{ fontFamily: 'EB Garamond, serif' }}>
          Newsletter
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700 text-center" style={{ fontFamily: 'Merriweather, serif' }}>
          Receive the latest articles and updates straight to your inbox. No spam, ever.
        </p>
        <form className="newsletter-form w-full flex flex-col sm:flex-row gap-4 items-center justify-center" onSubmit={handleSubmit}>
          <div className="relative flex-grow w-full">
            <div className="flex items-center gap-3">
              <FiMail className="text-2xl text-[#0E79B2]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="newsletter-input w-full pr-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-[#0E79B2] focus:outline-none shadow-sm text-lg transition-all duration-300 focus:border-[#0E79B2]"
                style={{ fontFamily: 'Merriweather, serif' }}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="newsletter-button px-8 py-3 rounded-lg bg-[#0E79B2] text-white font-bold text-lg uppercase tracking-widest shadow transition-all duration-300 hover:bg-[#0E79B2CC]"
            style={{ fontFamily: 'EB Garamond, serif', letterSpacing: '0.12em' }}
          >
            Subscribe
          </button>
        </form>
        {status && (
          <p className="mt-4 text-[#0E79B2] font-semibold text-center" style={{ fontFamily: 'Merriweather, serif' }}>{status}</p>
        )}
      </div>
    </section>
  );
}
