import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MachinePage from './pages/MachinePage';
import StepPage from './pages/StepPage';
import LanguageProvider from './contexts/LanguageContext';
import AccessibilityProvider from './contexts/AccessibilityContext';
import QRCodePage from './pages/QRCodePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AccessibilityProvider>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/machine/:type" element={<MachinePage />} />
                <Route path="/machine/:type/step/:stepId" element={<StepPage />} />
                <Route path="/qrcode" element={<QRCodePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AccessibilityProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;