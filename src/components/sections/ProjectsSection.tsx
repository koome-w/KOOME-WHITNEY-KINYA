'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaCode, 
  FaShieldAlt, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaEye,
  FaLock,
  FaRocket,
  FaUsers,
  FaChartLine
} from 'react-icons/fa'

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      id: 1,
      title: 'Secure E-Commerce Platform',
      description: 'A full-stack e-commerce platform with advanced security features including OWASP compliance, secure payment processing, and real-time threat monitoring.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      features: ['Secure Authentication', 'Payment Processing', 'Real-time Analytics', 'Admin Dashboard'],
      liveUrl: 'https://secure-ecommerce-demo.com',
      githubUrl: 'https://github.com/koomewhitney/secure-ecommerce',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Penetration Testing Toolkit',
      description: 'A comprehensive web application security testing toolkit with automated vulnerability scanning, custom exploit development, and detailed reporting.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      category: 'security',
      technologies: ['Python', 'Flask', 'SQLite', 'OWASP ZAP', 'Burp Suite'],
      features: ['Automated Scanning', 'Custom Exploits', 'Vulnerability Reports', 'Risk Assessment'],
      liveUrl: null,
      githubUrl: 'https://github.com/koomewhitney/penetration-toolkit',
      status: 'completed'
    },
    {
      id: 3,
      title: 'React Dashboard Analytics',
      description: 'A modern, responsive analytics dashboard built with React and D3.js, featuring real-time data visualization and interactive charts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'D3.js', 'Chart.js', 'Tailwind CSS'],
      features: ['Real-time Updates', 'Interactive Charts', 'Responsive Design', 'Data Export'],
      liveUrl: 'https://analytics-dashboard-demo.com',
      githubUrl: 'https://github.com/koomewhitney/analytics-dashboard',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Network Security Scanner',
      description: 'An advanced network security scanner that identifies vulnerabilities, open ports, and potential security threats across network infrastructure.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      category: 'security',
      technologies: ['Python', 'Nmap', 'Scapy', 'Django', 'PostgreSQL'],
      features: ['Port Scanning', 'Vulnerability Detection', 'Network Mapping', 'Threat Analysis'],
      liveUrl: null,
      githubUrl: 'https://github.com/koomewhitney/network-scanner',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing both frontend development and cybersecurity expertise with smooth animations and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      features: ['Responsive Design', 'SEO Optimized', 'Smooth Animations', 'Performance Optimized'],
      liveUrl: 'https://koomewhitney.com',
      githubUrl: 'https://github.com/koomewhitney/portfolio',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Security Audit Framework',
      description: 'A comprehensive security audit framework for web applications, providing automated testing, compliance checking, and detailed security reports.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      category: 'security',
      technologies: ['Python', 'FastAPI', 'Docker', 'OWASP', 'NIST'],
      features: ['Automated Auditing', 'Compliance Reports', 'Risk Scoring', 'Remediation Guidance'],
      liveUrl: null,
      githubUrl: 'https://github.com/koomewhitney/security-audit-framework',
      status: 'in-progress'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects', icon: FaRocket },
    { key: 'frontend', label: 'Frontend', icon: FaCode },
    { key: 'security', label: 'Security', icon: FaShieldAlt }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  const getCategoryIcon = (category: string) => {
    return category === 'frontend' ? FaCode : FaShieldAlt
  }

  const getCategoryColor = (category: string) => {
    return category === 'frontend' ? 'text-primary-500' : 'text-accent-500'
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">Featured Projects</h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of frontend development and cybersecurity projects. 
            Each project demonstrates my expertise in creating secure, beautiful, and functional solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <filter.icon className="text-lg" />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm ${getCategoryColor(project.category)}`}>
                      {React.createElement(getCategoryIcon(project.category), { className: "text-sm" })}
                      <span className="text-sm font-medium capitalize">{project.category}</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-primary-500 transition-colors duration-300"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-gray-900 transition-colors duration-300"
                      title="View Source Code"
                    >
                      <FaGithub className="text-sm" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <FaEye className="text-sm" />
                        <span>View Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${project.liveUrl ? 'flex-1' : 'w-full'} bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2`}
                    >
                      <FaGithub className="text-sm" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-lg mb-6 opacity-90">
              I'm always excited to take on new challenges and create amazing solutions. 
              Let's discuss your next project!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
