import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AccessibilityContextType {
  largeText: boolean;
  toggleLargeText: () => void;
}

const defaultValue: AccessibilityContextType = {
  largeText: false,
  toggleLargeText: () => {},
};

const AccessibilityContext = createContext<AccessibilityContextType>(defaultValue);

export const useAccessibility = () => useContext(AccessibilityContext);

interface AccessibilityProviderProps {
  children: ReactNode;
}

const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [largeText, setLargeText] = useState<boolean>(false);

  const toggleLargeText = () => {
    setLargeText((prev) => !prev);
  };

  return (
    <AccessibilityContext.Provider value={{ largeText, toggleLargeText }}>
      <div className={largeText ? 'text-lg' : 'text-base'}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityProvider;