import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '../../components/ui/animated-text';
import { Calendar, MapPin, Building, Award, Users, Code, Rocket } from 'lucide-react';

export default function WorkExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "Circle Wealth Advisors Private Limited",
      position: " MERNStack Developer",
      type: "Internship",
      duration: "Jan 2025 - Present",
      location: "Mumbai,India",
    //   description: "Delivering comprehensive web solutions and AI-powered applications for diverse clients",
      achievements: [
        "Developed a distributed financial analytics platform that cuts index comparison time from 4–6 hours to under 5 minutes, handles multiple indices simultaneously, and delivers 75% better analytics than traditional tools",
        "Optimized database queries, indexing,caching strategies, achieving 90% cost savings by eliminating 3rd party tools",
        " Integrated multiple financial APIs with SQL backend,ensuring fault-tolerant pipelines and delivering 85% more accurate analytics and replacing costly licensed tools",
      ],
      technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'Yahoo Finance API', 'TailwindCSS', 'Express', 'SQLite', 'Nginx'],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      company: "Materialyz",
      position: " Software Development Intern",
      type: "Internship",
      duration: "Jan 2025 - March 2025",
      location: "Mumbai,India",
    //   description: "Led development of advanced recommendation algorithms using machine learning",
      achievements: [
        " Built a responsive website for a digital platform in React and Tailwind CSS for a platform listing 1000+ assets",
        " Implemented secure API endpoints connecting 50+ financial institutions with thousands of investors",
        " Improved system reliability and scalability, boosting marketplace transparency and efficiency."
      ],
      technologies: [' React JS', 'Flask', 'Tailwind CSS', 'Express', ' MongoDB'],
      icon: <Rocket className="w-6 h-6" />,
      color: "from-red-500 to-orange-600"
    }
  ];

  const skills = [
    { category: "Frontend", skills: "React, Next.js, Vue.js, TypeScript, Tailwind CSS, Material-UI" },
    { category: "Backend", skills: "Node.js, Python, Flask, Express.js, RESTful APIs, GraphQL" },
    { category: "AI/ML", skills: "Python, Scikit-learn, TensorFlow, OpenAI, LangChain, NLP, Computer Vision" },
    { category: "Database", skills: "MongoDB, PostgreSQL, Firebase, Redis, Appwrite" },
    { category: "DevOps", skills: "AWS, Vercel, Docker, Git, CI/CD, Sentry Monitoring" }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Experience Timeline */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <AnimatedText 
              text="Professional Journey"
              className="text-3xl md:text-4xl font-bold mb-4"
              once={true}
              delay={0.1}
            />
            <p className="text-gray-600 text-lg max-w-3xl">
              Each role has been a stepping stone in my growth as a full-stack developer and AI engineer. 
              Here's how I've applied my skills across different domains.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30 hidden md:block"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}

                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} p-1 shadow-lg`}>
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-white">
                        <div className={`w-full h-full bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center`}>
                          {exp.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-medium text-gray-600">{exp.company}</span>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            exp.type === 'Freelance' ? 'bg-blue-100 text-blue-700' :
                            exp.type === 'Research Project' ? 'bg-purple-100 text-purple-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className="text-green-500 mt-1">✓</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
