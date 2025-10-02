/**
 * Image optimization utility
 * Creates responsive image sources for better performance across devices
 */

export const getResponsiveImageSrc = (imagePath, size = "default") => {
  try {
    // For production, these would be actual image paths
    const sizes = {
      small: `${imagePath}?w=480`,
      medium: `${imagePath}?w=768`,
      large: `${imagePath}?w=1024`,
      default: imagePath
    };

    return sizes[size] || sizes.default;
  } catch (err) {
    console.warn('Error getting responsive image source:', err);
    return imagePath; // Fallback to original path
  }
};

export const lazyLoadImage = (imgElement) => {
  try {
    if ('loading' in HTMLImageElement.prototype) {
      imgElement.loading = 'lazy';
    }
    return imgElement;
  } catch (err) {
    console.warn('Error setting lazy loading:', err);
    return imgElement;
  }
};

// Image preload function for critical images
export const preloadCriticalImages = (imagePaths) => {
  try {
    if (typeof window === 'undefined' || !document) return;
    
    if (!Array.isArray(imagePaths)) {
      console.warn('preloadCriticalImages expected an array, got:', typeof imagePaths);
      return;
    }
    
    // Create a map of already preloaded images to avoid duplicates
    const preloadedImages = new Map();
    document.querySelectorAll('link[rel="preload"][as="image"]').forEach(link => {
      preloadedImages.set(link.href, true);
    });
    
    // We'll preload images only when they're about to be used
    const onLoadCallback = () => {
      // Only preload images that are actually visible in the viewport
      const visibleImages = new Set();
      document.querySelectorAll('img').forEach(img => {
        if (img.src) {
          const rect = img.getBoundingClientRect();
          const isVisible = (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0
          );
          
          if (isVisible) {
            visibleImages.add(img.src);
          }
        }
      });
      
      imagePaths.forEach(path => {
        try {
          if (!path) return;
          
          // Don't preload again if already preloaded
          const fullPath = new URL(path, window.location.href).href;
          if (preloadedImages.has(fullPath)) return;
          
          // Check if this image is actually used in the visible content
          let isUsed = false;
          for (const visibleSrc of visibleImages) {
            if (visibleSrc.includes(path)) {
              isUsed = true;
              break;
            }
          }
          
          // Only preload if it's actually used
          if (isUsed) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = path;
            link.fetchPriority = 'high';
            document.head.appendChild(link);
            preloadedImages.set(fullPath, true);
          }
        } catch (err) {
          console.warn(`Failed to preload image ${path}:`, err);
        }
      });
    };
    
    // Execute once and then observe for DOM changes
    onLoadCallback();
    
    // Use MutationObserver to detect when new images might be added
    if ('MutationObserver' in window) {
      const observer = new MutationObserver(() => {
        // Throttle calls to avoid excessive processing
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(onLoadCallback);
        } else {
          setTimeout(onLoadCallback, 100);
        }
      });
      
      observer.observe(document.body, { 
        childList: true, 
        subtree: true 
      });
    }
  } catch (err) {
    console.warn('Error in preloadCriticalImages:', err);
  }
};