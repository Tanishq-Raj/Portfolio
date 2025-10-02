import React, { useEffect, useState } from 'react';
import Header from '../MyComponents/Navigation/Header';
import WorkExperienceSection from '../MyComponents/Work/WorkExperienceSection';
import Footer from '../MyComponents/Footer/Footer';
import Loader from '../MyComponents/loader/Loader';
import { AnimatedShapesBackground } from '../components/ui/animated-shapes-background';
import { FlowingGradient } from '../components/ui/flowing-gradient';
import { GridAnimation } from '../components/ui/grid-animation';

export default function Work() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check if window is defined (for SSR)
    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize);
      
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Base animated background with professional vibes */}
      <div className="fixed inset-0 z-[-1]" style={{ pointerEvents: 'none' }}>
        <FlowingGradient
          colorScheme="blue" 
          intensity="medium"
          blur="medium"
          className="opacity-40"
        />
      </div>
      
      {/* Subtle grid pattern for professional look */}
      <div className="fixed inset-0 z-[-1]" style={{ pointerEvents: 'none' }}>
        <GridAnimation 
          variant="random"
          cellSize={40} 
          opacity={0.06}
          color="#000000"
          animationSpeed={15}
          className="opacity-90"
        />
      </div>
      
      {/* Additional animated shapes */}
      <div className="fixed inset-0 z-[-1]" style={{ pointerEvents: 'none' }}>
        <AnimatedShapesBackground 
          variant="geometric" 
          intensity="medium"
          baseColor="#3B82F6"
          accentColor="#8B5CF6"
          tertiaryColor="#10B981"
          className="opacity-35"
        />
      </div>
      
      <Header isMobile={isMobile} />
      
      <main className="pt-20">
        <div className="relative">
          {/* Header section with special background */}
          <div className="relative py-20 mb-10">
            <div className="absolute inset-0 z-[-1]" style={{ pointerEvents: 'none' }}>
              <AnimatedShapesBackground 
                variant="blob" 
                intensity="high"
                baseColor="#3B82F6"
                accentColor="#8B5CF6"
                tertiaryColor="#10B981"
                className="opacity-45"
              />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                Work Experience
              </h1>
              <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg">
                My professional journey and the impact I've made across different organizations and projects.
                Each role has shaped my expertise and perspective in technology.
              </p>
            </div>
          </div>
          
          {/* Work experience timeline */}
          <div className="relative">
            <WorkExperienceSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
