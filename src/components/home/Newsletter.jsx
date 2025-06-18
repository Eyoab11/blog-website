import { FiMail } from 'react-icons/fi';
import { useState } from 'react';

export const Newsletter = ({ darkMode }) => {
  const [email, setEmail] = useState('');

  return (
    <div className={`relative py-16 px-8 rounded-3xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-indigo-50'}`}>
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-indigo-200 opacity-20"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-yellow-200 opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Stay Updated with My Latest Thoughts
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Join my newsletter to receive updates on new articles, coding tips, and philosophical musings.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-grow">
            <FiMail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-800 text-white focus:ring-yellow-400' : 'bg-white text-gray-900 focus:ring-indigo-600'} shadow-sm`}
            />
          </div>
          <button className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-indigo-600 hover:bg-indigo-700 text-white'} transition-colors shadow-sm`}>
            Subscribe
          </button>
        </div>
        
        <p className={`text-sm mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};