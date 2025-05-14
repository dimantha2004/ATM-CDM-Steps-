import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface AnimationContainerProps {
  src: string;
  className?: string;
}

const AnimationContainer: React.FC<AnimationContainerProps> = ({ src, className = '' }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  
  useEffect(() => {
    setLoading(true);
    setError(false);
    
    fetch(src)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load animation');
        }
        return response.json();
      })
      .then(data => {
        setAnimationData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading animation:', err);
        setError(true);
        setLoading(false);
      });
  }, [src]);
  
  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-40 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !animationData) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
        <div className="text-gray-500 text-center p-4">
          <p>Failed to load animation</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`${className}`}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default AnimationContainer;