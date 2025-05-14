import React, { useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Printer } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const QRCodePage: React.FC = () => {
  const { translate, language } = useLanguage();
  const currentUrl = window.location.origin;
  
  useEffect(() => {
    document.title = translate(translations.pageTitle);
  }, [language]);
  
  const translations = {
    pageTitle: {
      english: "QR Code | ATM & CDM Guide",
      sinhala: "QR කේතය | ATM සහ CDM මාර්ගෝපදේශය",
      tamil: "QR குறியீடு | ATM & CDM வழிகாட்டி"
    },
    heading: {
      english: "Scan this QR code",
      sinhala: "මෙම QR කේතය ස්කෑන් කරන්න",
      tamil: "இந்த QR குறியீட்டை ஸ்கேன் செய்யவும்"
    },
    subheading: {
      english: "to access the ATM & CDM Guide on your mobile device",
      sinhala: "ඔබගේ ජංගම උපාංගයේ ATM සහ CDM මාර්ගෝපදේශයට ප්‍රවේශ වීමට",
      tamil: "உங்கள் மொபைல் சாதனத்தில் ATM & CDM வழிகாட்டியை அணுக"
    },
    printLabel: {
      english: "Print QR Code",
      sinhala: "QR කේතය මුද්‍රණය කරන්න",
      tamil: "QR குறியீட்டை அச்சிடுக"
    },
    instruction: {
      english: "Print this QR code and place it near the ATM/CDM machine for easy access to instructions.",
      sinhala: "මෙම QR කේතය මුද්‍රණය කර, උපදෙස් වලට පහසුවෙන් ප්‍රවේශ වීම සඳහා ATM/CDM යන්ත්‍රය අසල තබන්න.",
      tamil: "இந்த QR குறியீட்டை அச்சிட்டு, வழிமுறைகளை எளிதாக அணுகுவதற்காக ATM/CDM இயந்திரத்தின் அருகில் வைக்கவும்."
    }
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
            {translate(translations.heading)}
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            {translate(translations.subheading)}
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
              <QRCodeSVG value={currentUrl} size={200} level="H" />
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            {translate(translations.instruction)}
          </p>
          
          <button
            onClick={handlePrint}
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
          >
            <Printer size={20} className="mr-2" />
            {translate(translations.printLabel)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;