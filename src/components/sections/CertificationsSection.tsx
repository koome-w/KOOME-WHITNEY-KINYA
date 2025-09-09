'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaShieldAlt, 
  FaCertificate, 
  FaAward, 
  FaDownload, 
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaBuilding,
  FaCheckCircle,
  FaCode,
  FaLock
} from 'react-icons/fa'

const CertificationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const certifications = [
    {
      id: 1,
      title: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: 'December 2023',
      category: 'security',
      description: 'Comprehensive certification covering ethical hacking methodologies, penetration testing, and vulnerability assessment techniques.',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Web Application Security'],
      credentialId: 'CEH-123456',
      verificationUrl: 'https://aspen.eccouncil.org/verify',
      badgeUrl: '/certificates/ceh-badge.png',
      status: 'active'
    },
    {
      id: 2,
      title: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: 'October 2022',
      category: 'security',
      description: 'Industry-standard certification validating foundational cybersecurity skills and knowledge.',
      skills: ['Threats & Vulnerabilities', 'Architecture & Design', 'Implementation', 'Operations & Incident Response'],
      credentialId: 'SY0-601-789012',
      verificationUrl: 'https://www.comptia.org/verify',
      badgeUrl: '/certificates/security-plus-badge.png',
      status: 'active'
    },
    {
      id: 3,
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: 'August 2023',
      category: 'cloud',
      description: 'Demonstrates expertise in developing and maintaining applications on the AWS platform.',
      skills: ['AWS Services', 'Cloud Development', 'DevOps', 'Serverless Architecture'],
      credentialId: 'AWS-DEV-345678',
      verificationUrl: 'https://aws.amazon.com/verification',
      badgeUrl: '/certificates/aws-dev-badge.png',
      status: 'active'
    },
    {
      id: 4,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'June 2022',
      category: 'frontend',
      description: 'Professional certification in React development, covering modern React patterns and best practices.',
      skills: ['React Hooks', 'State Management', 'Component Design', 'Performance Optimization'],
      credentialId: 'META-REACT-901234',
      verificationUrl: 'https://www.coursera.org/verify',
      badgeUrl: '/certificates/react-badge.png',
      status: 'active'
    },
    {
      id: 5,
      title: 'Certified Information Security Manager (CISM)',
      issuer: 'ISACA',
      date: 'March 2024',
      category: 'security',
      description: 'Advanced certification focusing on information security management and governance.',
      skills: ['Security Governance', 'Risk Management', 'Security Program Development', 'Incident Management'],
      credentialId: 'CISM-567890',
      verificationUrl: 'https://www.isaca.org/verify',
      badgeUrl: '/certificates/cism-badge.png',
      status: 'active'
    },
    {
      id: 6,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'January 2024',
      category: 'cloud',
      description: 'Validates ability to design, develop, and deploy applications on Google Cloud Platform.',
      skills: ['GCP Services', 'Cloud Architecture', 'Data Engineering', 'Machine Learning'],
      credentialId: 'GCP-DEV-123789',
      verificationUrl: 'https://cloud.google.com/certification/verify',
      badgeUrl: '/certificates/gcp-dev-badge.png',
      status: 'active'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Certifications', icon: FaAward, count: certifications.length },
    { key: 'security', label: 'Security', icon: FaShieldAlt, count: certifications.filter(c => c.category === 'security').length },
    { key: 'frontend', label: 'Frontend', icon: FaCode, count: certifications.filter(c => c.category === 'frontend').length },
    { key: 'cloud', label: 'Cloud', icon: FaBuilding, count: certifications.filter(c => c.category === 'cloud').length }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return FaShieldAlt
      case 'frontend': return FaCode
      case 'cloud': return FaBuilding
      default: return FaCertificate
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'security': return 'text-red-500 bg-red-100'
      case 'frontend': return 'text-blue-500 bg-blue-100'
      case 'cloud': return 'text-green-500 bg-green-100'
      default: return 'text-gray-500 bg-gray-100'
    }
  }

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">Professional Certifications</h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            My professional certifications demonstrate my commitment to continuous learning 
            and expertise in both frontend development and cybersecurity domains.
          </p>
        </motion.div>

        {/* Certification Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <category.icon className="text-2xl text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{category.label}</h3>
              <div className="text-2xl font-bold text-primary-600">{category.count}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Certificate Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-full ${getCategoryColor(cert.category)}`}>
                    {React.createElement(getCategoryIcon(cert.category), { className: "text-xl" })}
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <FaCheckCircle className="text-sm" />
                    <span className="text-sm font-medium">{cert.status}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaBuilding className="text-sm mr-2" />
                  <span className="text-sm">{cert.issuer}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="text-sm mr-2" />
                  <span className="text-sm">{cert.date}</span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
                
                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">Credential ID</div>
                  <div className="text-sm font-mono text-gray-800">{cert.credentialId}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Verify</span>
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaDownload className="text-sm" />
                    <span>Download</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="text-2xl text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">6</div>
            <div className="text-gray-600">Professional Certifications</div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-2xl text-accent-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">3</div>
            <div className="text-gray-600">Security Certifications</div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-2xl text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
            <div className="text-gray-600">Active Certifications</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning & Growth</h3>
            <p className="text-lg mb-6 opacity-90">
              I believe in staying current with the latest technologies and security practices. 
              These certifications are just the beginning of my learning journey.
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
              Discuss My Expertise
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificationsSection
