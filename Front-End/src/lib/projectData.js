// Project data centralized for use across components
import GT from '../assets/GT.png';
import Devruks from '../assets/Devruks.png';
import Synergy from '../assets/Synergy.png';
import Niri from '../assets/NiriGlobal.png';
import MMT from '../assets/make-my-trip.png';
import careplusImage from '../assets/careplus.png';
import netflixImage from '../assets/netflix1.png';
import daisyImage from '../assets/daisy.png';

// Centralized project data that can be used across different components
export const projects = [
  { 
    id: 1,
    title: 'Netflix Recommendation System', 
    description: 'Movie recommendation system using ML algorithms',
    image: netflixImage,
    link: 'https://github.com/Tanishq-Raj/Netflix-Recommendation-System.git',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB'],
    featured: true
  },
  { 
    id: 2,
    title: 'CarePlus', 
    description: 'Healthcare management application',
    image: careplusImage,
    link: 'https://github.com/Tanishq-Raj/CarePlus.git',
    category: 'web',
    tags: ['React', 'NextJS'],
    featured: true
  },
  { 
    id: 3,
    title: 'DAISY : Self Driving Car', 
    description: 'Advanced self-driving car prototype',
    image: daisyImage,
    link: 'https://github.com/Tanishq-Raj/DAISY',
    category: 'ai',
    tags: ['OpenCV', 'NumPy', 'Flask-CORS', 'Python', 'Git'],
    featured: false
  },
  { 
    id: 4,
    title: 'Devruks Globalization', 
    description: 'Global expansion strategies for tech startups',
    image: Devruks,
    cloudinaryUrl: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845324/aw0eczvz62feyvalohes.png',
    link: 'https://devruks.com',
    category: 'web',
    tags: ['React', 'Tailwind'],
    featured: false
  },
  { 
    id: 5,
    title: 'Make My Trip', 
    description: 'It is a clone project for the assignment submission',
    image: MMT,
    cloudinaryUrl: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845324/w26otp1ntl5ncqu6q9lz.png',
    link: 'https://make-my-trip-clone-lyart.vercel.app',
    category: 'web',
    tags: ['React', 'CSS'],
    featured: false
  }
];

// Helper functions to filter projects
export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getAllProjects = () => projects;
export const getProjectsByCategory = (category) => projects.filter(project => project.category === category);