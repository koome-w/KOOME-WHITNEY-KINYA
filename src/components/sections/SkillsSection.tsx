'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython,
  FaShieldAlt,
  FaLock,
  FaBug,
  FaNetworkWired,
  FaDatabase,
  FaCloud,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaCode,
  FaTools
} from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiKubernetes, SiJenkins } from 'react-icons/si'

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const frontendSkills = [
    { name: 'React', icon: FaReact, level: 95, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, level: 90, color: 'text-gray-800' },
    { name: 'TypeScript', icon: SiTypescript, level: 88, color: 'text-blue-600' },
    { name: 'JavaScript', icon: FaJs, level: 92, color: 'text-yellow-500' },
    { name: 'HTML5', icon: FaHtml5, level: 95, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: 'text-cyan-500' },
    { name: 'Node.js', icon: FaNodeJs, level: 80, color: 'text-green-600' }
  ]

  const securitySkills = [
    { name: 'Penetration Testing', icon: FaShieldAlt, level: 90, color: 'text-red-500' },
    { name: 'Vulnerability Assessment', icon: FaBug, level: 88, color: 'text-orange-500' },
    { name: 'Network Security', icon: FaNetworkWired, level: 85, color: 'text-blue-500' },
    { name: 'Cryptography', icon: FaLock, level: 82, color: 'text-purple-500' },
    { name: 'OWASP', icon: FaShieldAlt, level: 90, color: 'text-red-600' },
    { name: 'Python', icon: FaPython, level: 85, color: 'text-yellow-600' },
    { name: 'Linux', icon: FaLinux, level: 88, color: 'text-gray-600' },
    { name: 'Security Tools', icon: FaTools, level: 87, color: 'text-gray-700' }
  ]

  const toolsAndTech = [
    { name: 'Git', icon: FaGitAlt, category: 'Version Control' },
    { name: 'Docker', icon: FaDocker, category: 'Containerization' },
    { name: 'Kubernetes', icon: SiKubernetes, category: 'Orchestration' },
    { name: 'AWS', icon: FaAws, category: 'Cloud Platform' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
    { name: 'Redis', icon: SiRedis, category: 'Cache' },
    { name: 'Jenkins', icon: SiJenkins, category: 'CI/CD' }
  ]

  const certifications = [
    { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', year: '2023' },
    { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2022' },
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2022' }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">Skills & Expertise</h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across frontend development 
            and cybersecurity domains.
          </p>
        </motion.div>

        {/* Frontend Development Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <FaCode className="text-3xl text-primary-500 mr-4" />
            <h3 className="heading-3">Frontend Development</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className={`text-3xl ${skill.color} mr-3`} />
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className={`h-2 rounded-full bg-gradient-to-r from-primary-400 to-primary-600`}
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cybersecurity Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <FaShieldAlt className="text-3xl text-accent-500 mr-4" />
            <h3 className="heading-3">Cybersecurity & Ethical Hacking</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securitySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className={`text-3xl ${skill.color} mr-3`} />
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className={`h-2 rounded-full bg-gradient-to-r from-accent-400 to-accent-600`}
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="heading-3 text-center mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {toolsAndTech.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                <tool.icon className="text-3xl text-gray-700 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-800">{tool.name}</div>
                <div className="text-xs text-gray-500">{tool.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="heading-3 text-center mb-8">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <FaShieldAlt className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose Me?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
