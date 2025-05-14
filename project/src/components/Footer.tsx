import React from 'react';
import { QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { translate } = useLanguage();
  
  const translations = {
    safetyTip: {
      english: "Safety Tip: Never share your PIN with anyone.",
      sinhala: "ආරක්ෂක ඉඟිය: ඔබේ PIN අංකය කිසි විටෙකත් කාටවත් ලබා නොදෙන්න.",
      tamil: "பாதுகாப்பு குறிப்பு: உங்கள் PIN ஐ யாருடனும் பகிர வேண்டாம்."
    },
    qrCode: {
      english: "QR Code",
      sinhala: "QR කේතය",
      tamil: "QR குறியீடு"
    }
  };
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-2 md:mb-0">
            {translate(translations.safetyTip)}
          </p>
          
          <Link 
            to="/qrcode" 
            className="flex items-center space-x-1 text-blue-700 hover:text-blue-900 transition-colors"
          >
            <QrCode size={16} />
            <span className="text-sm">{translate(translations.qrCode)}</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;