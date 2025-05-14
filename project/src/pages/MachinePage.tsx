import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Shield, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { guideData } from '../data/guideData';
import { MachineType } from '../types';

const MachinePage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const machineType = (type as MachineType) || 'atm';
  const { translate, language } = useLanguage();
  
  const steps = guideData[machineType];
  
  useEffect(() => {
    document.title = translate(translations.title);
  }, [language, machineType]);
  
  const translations = {
    title: {
      english: machineType.toUpperCase() === 'ATM' ? "How to Use an ATM" : "How to Use a CDM",
      sinhala: machineType.toUpperCase() === 'ATM' ? "ATM එකක් භාවිතා කරන්නේ කෙසේද" : "CDM එකක් භාවිතා කරන්නේ කෙසේද",
      tamil: machineType.toUpperCase() === 'ATM' ? "ATM ஐ பயன்படுத்துவது எப்படி" : "CDM ஐ பயன்படுத்துவது எப்படி"
    },
    subtitle: {
      english: "Follow these steps to use the machine safely",
      sinhala: "යන්ත්‍රය ආරක්ෂිතව භාවිතා කිරීමට මෙම පියවර අනුගමනය කරන්න",
      tamil: "இயந்திரத்தைப் பாதுகாப்பாகப் பயன்படுத்த இந்த படிகளைப் பின்பற்றவும்"
    },
    stepsTitle: {
      english: "Steps",
      sinhala: "පියවරයන්",
      tamil: "படிகள்"
    },
    safetyTips: {
      english: "Safety Tips",
      sinhala: "ආරක්ෂක ඉඟි",
      tamil: "பாதுகாப்பு குறிப்புகள்"
    },
    coverPin: {
      english: "Always cover the keypad when entering your PIN",
      sinhala: "ඔබේ PIN ඇතුළත් කිරීමේදී සැමවිටම යතුරු පුවරුව ආවරණය කරන්න",
      tamil: "உங்கள் PIN ஐ உள்ளிடும் போது எப்போதும் கீபேடை மூடவும்"
    },
    checkSurroundings: {
      english: "Be aware of your surroundings when using the machine",
      sinhala: "යන්ත්‍රය භාවිතා කිරීමේදී ඔබේ අවට පරිසරය ගැන දැනුවත් වන්න",
      tamil: "இயந்திரத்தைப் பயன்படுத்தும் போது உங்கள் சுற்றுப்புறத்தைப் பற்றி விழிப்புடன் இருங்கள்"
    },
    noHelp: {
      english: "Never accept help from strangers at the machine",
      sinhala: "යන්ත්‍රයේදී කිසි විටෙකත් අමුත්තන්ගෙන් උපකාර පිළිගන්න එපා",
      tamil: "இயந்திரத்தில் அந்நியர்களிடமிருந்து உதவியை ஒருபோதும் ஏற்க வேண்டாம்"
    },
    countCash: {
      english: "Count your cash immediately before leaving",
      sinhala: "පිටත්වීමට පෙර වහාම ඔබේ මුදල් ගණන් කරන්න",
      tamil: "வெளியேறும் முன் உடனடியாக உங்கள் பணத்தை எண்ணவும்"
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
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          variants={item}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-2"
        >
          {translate(translations.title)}
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-xl text-gray-600 mb-8"
        >
          {translate(translations.subtitle)}
        </motion.p>
        
        <motion.div
          variants={item}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            {translate(translations.stepsTitle)}
          </h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {steps.map((step, index) => (
              <Link 
                key={step.id}
                to={`/machine/${machineType}/step/${step.id}`}
                className={`block ${
                  index !== steps.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-center justify-between p-4 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-4">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {translate(step.title)}
                      </h3>
                      <p className="text-gray-600 line-clamp-1">
                        {translate(step.description)}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="flex-shrink-0 text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={item}
        >
          <div className="flex items-center mb-4">
            <Shield className="mr-2 text-blue-700" />
            <h2 className="text-2xl font-semibold text-blue-800">
              {translate(translations.safetyTips)}
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Info size={20} className="flex-shrink-0 mt-0.5 mr-2 text-yellow-500" />
                <span>{translate(translations.coverPin)}</span>
              </li>
              <li className="flex items-start">
                <Info size={20} className="flex-shrink-0 mt-0.5 mr-2 text-yellow-500" />
                <span>{translate(translations.checkSurroundings)}</span>
              </li>
              <li className="flex items-start">
                <Info size={20} className="flex-shrink-0 mt-0.5 mr-2 text-yellow-500" />
                <span>{translate(translations.noHelp)}</span>
              </li>
              <li className="flex items-start">
                <Info size={20} className="flex-shrink-0 mt-0.5 mr-2 text-yellow-500" />
                <span>{translate(translations.countCash)}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MachinePage;