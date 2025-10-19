import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './MyComponents/loader/Loader';
import CustomCursor from './MyComponents/cursor/CustomCursor';
import { preloadCriticalImages } from './lib/imageOptimizer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Work from './pages/Work';

// List of critical images to preload
const CRITICAL_IMAGES = [
  '/src/assets/Dhruv-Avatar.png',
  '/src/assets/avatar.png'
];

function App() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Add mounted state for client-side animation
    setMounted(true);
    
    // Preload critical images
    preloadCriticalImages(CRITICAL_IMAGES);
    
    // Add custom cursor active class to body
    document.body.classList.add('custom-cursor-active');
    
    // Check current route
    const path = window.location.pathname;
    if (path.includes('/projects')) {
      setCurrentPage('projects');
    } else if (path.includes('/work')) {
      setCurrentPage('work');
    } else {
      setCurrentPage('home');
    }
    
    // Start loading immediately but give a minimum perceived loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  // Prevent layout shift by waiting for mount
  if (!mounted) return null;

  return (
    <>
      {/* Custom cursor component (only rendered on client-side) */}
      {mounted && <CustomCursor />}
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent"
          >
            <Toaster 
              position="top-right"
              reverseOrder={false} 
              toastOptions={{
                duration: 5000,
                style: {
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500
                },
              }}
            />
            {currentPage === 'home' && <Home />}
            {currentPage === 'projects' && <Projects />}
            {currentPage === 'work' && <Work />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;