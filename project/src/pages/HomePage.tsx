import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Banknote, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { language, setLanguage, translate } = useLanguage();
  
  useEffect(() => {
    document.title = translate(translations.pageTitle);
  }, [language]);

  const translations = {
    pageTitle: {
      english: "ATM & CDM Guide",
      sinhala: "ATM සහ CDM මාර්ගෝපදේශය",
      tamil: "ATM & CDM வழிகாட்டி"
    },
    welcome: {
      english: "Welcome to the Banking Machine Guide",
      sinhala: "බැංකු යන්ත්‍ර මාර්ගෝපදේශයට සාදරයෙන් පිළිගනිමු",
      tamil: "வங்கி இயந்திர வழிகாட்டிக்கு வரவேற்கிறோம்"
    },
    subheading: {
      english: "Select a machine type to get started",
      sinhala: "ආරම්භ කිරීමට යන්ත්‍ර වර්ගයක් තෝරන්න",
      tamil: "தொடங்க ஒரு இயந்திர வகையைத் தேர்ந்தெடுக்கவும்"
    },
    atm: {
      english: "How to Use ATM",
      sinhala: "ATM භාවිතා කරන්නේ කෙසේද",
      tamil: "ATM ஐ பயன்படுத்துவது எப்படி"
    },
    atmDesc: {
      english: "Withdraw cash, check balances, and more",
      sinhala: "මුදල් ආපසු ගැනීම, ශේෂයන් පරීක්ෂා කිරීම, තවත් දේ",
      tamil: "பணம் எடுத்தல், இருப்புகளை சரிபார்த்தல், மேலும் பல"
    },
    cdm: {
      english: "How to Use CDM",
      sinhala: "CDM භාවිතා කරන්නේ කෙසේද",
      tamil: "CDM ஐ பயன்படுத்துவது எப்படி"
    },
    cdmDesc: {
      english: "Deposit cash quickly and securely",
      sinhala: "ඉක්මනින් සහ ආරක්ෂිතව මුදල් තැන්පත් කරන්න",
      tamil: "விரைவாகவும் பாதுகாப்பாகவும் பணத்தை டெபாசிட் செய்யவும்"
    },
    languageSelector: {
      english: "Select Language",
      sinhala: "භාෂාව තෝරන්න",
      tamil: "மொழியைத் தேர்ந்தெடுக்கவும்"
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.h1 
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-2"
        >
          {translate(translations.welcome)}
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-xl text-gray-600 text-center mb-8"
        >
          {translate(translations.subheading)}
        </motion.p>
        
        <motion.div 
          variants={item}
          className="w-full flex flex-col sm:flex-row gap-6 max-w-4xl"
        >
          <Link 
            to="/machine/atm" 
            className="flex-1 group"
          >
            <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 transition-all duration-300 transform group-hover:shadow-lg group-hover:-translate-y-1">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                <CreditCard size={32} />
              </div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">{translate(translations.atm)}</h2>
              <p className="text-gray-600 text-center">{translate(translations.atmDesc)}</p>
            </div>
          </Link>
          
          <Link 
            to="/machine/cdm" 
            className="flex-1 group"
          >
            <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 transition-all duration-300 transform group-hover:shadow-lg group-hover:-translate-y-1">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                <Banknote size={32} />
              </div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">{translate(translations.cdm)}</h2>
              <p className="text-gray-600 text-center">{translate(translations.cdmDesc)}</p>
            </div>
          </Link>
        </motion.div>
        
        <motion.div
          variants={item} 
          className="mt-12 bg-white rounded-xl shadow-md p-6 max-w-md w-full"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Languages size={24} className="text-blue-700" />
            <h3 className="text-xl font-semibold text-gray-800">{translate(translations.languageSelector)}</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setLanguage('english')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                language === 'english' 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('sinhala')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                language === 'sinhala' 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              සිංහල
            </button>
            <button
              onClick={() => setLanguage('tamil')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                language === 'tamil' 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              தமிழ்
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;