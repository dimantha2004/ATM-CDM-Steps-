import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Languages, TextSelect } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const { largeText, toggleLargeText } = useAccessibility();
  
  const showBackButton = location.pathname !== '/';
  
  const translations = {
    title: {
      english: "ATM & CDM Guide",
      sinhala: "ATM සහ CDM මාර්ගෝපදේශය",
      tamil: "ATM & CDM வழிகாட்டி"
    }
  };
  
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {showBackButton && (
            <Link to={location.pathname.includes('/step/') ? `/machine/${location.pathname.split('/')[2]}` : '/'}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full hover:bg-blue-800 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft size={24} />
              </motion.button>
            </Link>
          )}
          <Link to="/" className="font-bold text-xl md:text-2xl">
            {translations.title[language]}
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLargeText}
            className={`p-2 rounded-full ${largeText ? 'bg-blue-700' : 'hover:bg-blue-800'} transition-colors`}
            aria-label="Toggle large text"
            title="Toggle large text"
          >
            <TextSelect size={24} />
          </motion.button>
          
          <div className="relative group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-blue-800 transition-colors"
              aria-label="Change language"
              title="Change language"
            >
              <Languages size={24} />
            </motion.button>
            
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
              <div className="py-1">
                <button 
                  onClick={() => setLanguage('english')}
                  className={`block w-full text-left px-4 py-2 text-sm ${language === 'english' ? 'bg-blue-100 text-blue-900' : 'text-gray-800 hover:bg-gray-100'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage('sinhala')}
                  className={`block w-full text-left px-4 py-2 text-sm ${language === 'sinhala' ? 'bg-blue-100 text-blue-900' : 'text-gray-800 hover:bg-gray-100'}`}
                >
                  සිංහල (Sinhala)
                </button>
                <button 
                  onClick={() => setLanguage('tamil')}
                  className={`block w-full text-left px-4 py-2 text-sm ${language === 'tamil' ? 'bg-blue-100 text-blue-900' : 'text-gray-800 hover:bg-gray-100'}`}
                >
                  தமிழ் (Tamil)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;