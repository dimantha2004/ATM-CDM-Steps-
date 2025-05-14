import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, RefreshCw, VolumeX, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import { useLanguage } from '../contexts/LanguageContext';
import { guideData } from '../data/guideData';
import { MachineType } from '../types';

const StepPage: React.FC = () => {
  const { type, stepId } = useParams<{ type: string; stepId: string }>();
  const machineType = (type as MachineType) || 'atm';
  const currentStepId = parseInt(stepId || '1', 10);
  
  const { translate, language } = useLanguage();
  const navigate = useNavigate();
  
  const [lottieData, setLottieData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const steps = guideData[machineType];
  const currentStep = steps.find(step => step.id === currentStepId);
  const totalSteps = steps.length;
  
  const isFirstStep = currentStepId === 1;
  const isLastStep = currentStepId === totalSteps;
  
  useEffect(() => {
    if (!currentStep) {
      navigate(`/machine/${machineType}`);
      return;
    }
    
    document.title = translate(currentStep.title);
    
    // Fetch the Lottie animation data
    fetch(currentStep.animationSrc)
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error('Error loading animation:', error));
      
    // Clean up speech synthesis when unmounting
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentStepId, machineType, language]);
  
  const goToNextStep = () => {
    if (!isLastStep) {
      navigate(`/machine/${machineType}/step/${currentStepId + 1}`);
    }
  };
  
  const goToPreviousStep = () => {
    if (!isFirstStep) {
      navigate(`/machine/${machineType}/step/${currentStepId - 1}`);
    }
  };
  
  const restartAnimation = () => {
    // Force re-render of Lottie component
    setLottieData(null);
    setTimeout(() => {
      fetch(currentStep?.animationSrc || '')
        .then(response => response.json())
        .then(data => setLottieData(data));
    }, 100);
  };
  
  const toggleSpeech = () => {
    if (!currentStep) return;
    
    if (window.speechSynthesis) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const text = translate(currentStep.description);
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Set language based on current selection
        if (language === 'english') {
          utterance.lang = 'en-US';
        } else if (language === 'sinhala') {
          utterance.lang = 'si-LK';
        } else if (language === 'tamil') {
          utterance.lang = 'ta-IN';
        }
        
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    }
  };
  
  if (!currentStep) return null;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm font-medium text-gray-500">
            {`${currentStepId} / ${totalSteps}`}
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={restartAnimation}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Restart animation"
              title="Restart animation"
            >
              <RefreshCw size={20} />
            </button>
            
            <button
              onClick={toggleSpeech}
              className={`p-2 rounded-full ${
                isSpeaking ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
              aria-label={isSpeaking ? "Stop speaking" : "Read aloud"}
              title={isSpeaking ? "Stop speaking" : "Read aloud"}
            >
              {isSpeaking ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                  {translate(currentStep.title)}
                </h1>
                
                <p className="text-gray-700 mb-6">
                  {translate(currentStep.description)}
                </p>
                
                <div className="flex justify-center mb-6">
                  <div className="w-full max-w-sm h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                    {lottieData ? (
                      <Lottie
                        animationData={lottieData}
                        loop={true}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="h-40 bg-gray-200 rounded w-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {currentStep.tips && currentStep.tips.length > 0 && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Tips:</h3>
                    <ul className="space-y-2">
                      {currentStep.tips.map((tip, index) => (
                        <li key={index} className="text-blue-700">
                          {translate(tip)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="px-6 py-4 bg-gray-50 flex justify-between">
                <button
                  onClick={goToPreviousStep}
                  disabled={isFirstStep}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    isFirstStep
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-700 hover:bg-blue-50 transition-colors'
                  }`}
                >
                  <ChevronLeft size={20} />
                  <span>Previous</span>
                </button>
                
                <button
                  onClick={goToNextStep}
                  disabled={isLastStep}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    isLastStep
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-700 hover:bg-blue-50 transition-colors'
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link
                to={`/machine/${machineType}`}
                className="text-blue-700 hover:underline transition-colors"
              >
                Back to all steps
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StepPage;