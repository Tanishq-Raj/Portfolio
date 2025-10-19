import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import careplusImage from '../../assets/careplus.png'
import netflixImage from '../../assets/netflix1.png'
import daisyImage from '../../assets/daisy.png'

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRefs = useRef([])

  const projects = [
    { title: 'Netflix Recommendation System', description: '', image: netflixImage, link: 'https://github.com/Tanishq-Raj/Netflix-Recommendation-System.git' },
    { title: 'CarePlus', description: '', image: careplusImage, link: 'https://github.com/Tanishq-Raj/CarePlus.git' },
    { title: 'DAISY : Self Driving Car', description: '', image: daisyImage, link: 'https://github.com/Tanishq-Raj/DAISY.git' },
    // { title: 'Devruks Globalization', description: 'Global expansion strategies for tech startups', image: Devruks, link: 'https://devruks.com' },
    // { title: 'Make My Trip', description: 'It is a clone project for the assignment submission', image: MMT, link: 'https://make-my-trip-clone-lyart.vercel.app' },
   
  ]

  const handleMouseMove = (event, index) => {
    const card = cardRefs.current[index]
    const rect = card.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  const handleMouseEnter = (title, index) => {
    setHoveredProject(title)
    cardRefs.current[index].addEventListener('mousemove', (e) => handleMouseMove(e, index))
  }

  const handleMouseLeave = (index) => {
    setHoveredProject(null)
    cardRefs.current[index].removeEventListener('mousemove', handleMouseMove)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => handleMouseEnter(project.title, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
                <motion.div
                  className="absolute top-4 right-4 bg-white rounded-full p-2 drop-shadow-2xl shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpRight className="w-6 h-6 text-indigo-500 " />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
            <AnimatePresence>
              {hoveredProject === project.title && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-6 right-6"
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-indigo-500 px-4 py-2 rounded-full flex items-center shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default ProjectsPage