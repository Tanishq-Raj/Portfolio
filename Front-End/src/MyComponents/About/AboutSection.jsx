import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../../components/ui/animated-text'
import { AnimatedGridBackground } from '../../components/ui/animated-grid-background'

export default function AboutSection() {
  const skills = [
    { 
      category: 'Languages',
      items: ['Python', ' C / C++', 'SQL']
    },
    {
      category: 'Development',
      items: ['React.js', 'Next.js', ' Express', 'TypeScript', 'Node.js', 'Django', 'Tailwind CSS']
    },
    {
      category: ' Databases',
      items: ['MySQL', 'MongoDB', 'SQLite']
    },
    {
      category: 'Tools',
      items: ['Git', 'Tableau', ' Streamlit', 'Docker', 'Vercel', 'Figma']
    }
  ]

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  }

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated grid background */}
      <AnimatedGridBackground 
        gridSize={60}
        blur={30}
        speed={0.5}
        containerClassName="absolute inset-0 z-0"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <motion.span 
            className="block mb-3 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            ABOUT ME
          </motion.span>
          <AnimatedText 
            text="My background"
            className="text-3xl md:text-5xl font-bold"
            once={true}
            delay={0.1}
          />
        </div>

        {/* About content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Bio */}
          <div className="pr-0 md:pr-6">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl leading-relaxed">
              I’m a driven and versatile developer passionate about building impactful digital solutions that merge technology, usability, and design.
              </p>
              
              <p className="text-gray-600">
              With a strong foundation in full-stack development and data-driven problem-solving, I bring both technical expertise and creativity to every project. I focus on delivering solutions that are not only functional and efficient but also user-centric and scalable.
              </p>
              
              <p className="text-gray-600">
              My journey began with solving data structures and algorithmic challenges, which evolved into developing modern web applications and AI-powered systems. Today, I specialize in creating financial, healthcare, and AI-driven platforms, with a strong emphasis on performance, reliability, and real-world impact.
              </p>
              
              <div className="pt-6">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-black font-medium flex items-center gap-2 group relative overflow-hidden"
                >
                  <motion.span 
                    className="inline-block w-8 h-[2px] bg-black group-hover:w-12 transition-all duration-300 relative z-10"
                  ></motion.span>
                  <span className="relative z-10">See my work</span>
                  
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-black"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Right column - Skills */}
          <div>
            <motion.div
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm backdrop-blur-sm relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-8">Skills & Expertise</h3>
              
              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          custom={skillIndex}
                          variants={fadeInUpVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm hover:bg-black hover:text-white hover:border-black transition-colors duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative element */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full mix-blend-multiply blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}