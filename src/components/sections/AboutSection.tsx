'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaCode, 
  FaShieldAlt, 
  FaRocket, 
  FaUsers, 
  FaLightbulb, 
  FaHeart,
  FaGlobe,
  FaLock
} from 'react-icons/fa'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const roles = [
    {
      title: 'Frontend Developer',
      icon: FaCode,
      color: 'primary',
      description: 'Creating beautiful, responsive, and user-friendly web applications with modern technologies.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      achievements: [
        'Built 50+ responsive web applications',
        'Improved user engagement by 40%',
        'Reduced load times by 60%',
        'Led frontend architecture decisions'
      ]
    },
    {
      title: 'Ethical Hacker',
      icon: FaShieldAlt,
      color: 'accent',
      description: 'Protecting digital assets through security assessments, penetration testing, and vulnerability analysis.',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Auditing', 'OWASP', 'Network Security'],
      achievements: [
        'Identified 200+ security vulnerabilities',
        'Prevented potential data breaches',
        'Conducted security audits for 20+ companies',
        'Certified in multiple security frameworks'
      ]
    }
  ]

  const values = [
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and open communication to achieve exceptional results.'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Approaching challenges with creativity and analytical thinking to find optimal solutions.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Driven by genuine enthusiasm for technology and making a positive impact through code.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">About Me</h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            I'm a passionate professional who bridges the gap between beautiful user experiences 
            and robust security. With expertise in both frontend development and ethical hacking, 
            I create applications that are not only visually stunning but also secure by design.
          </p>
        </motion.div>

        {/* Dual Role Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${
                role.color === 'primary' 
                  ? 'from-primary-50 to-primary-100' 
                  : 'from-accent-50 to-accent-100'
              } border border-gray-200 card-hover`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-full bg-${role.color}-500 text-white mr-4`}>
                  <role.icon className="text-2xl" />
                </div>
                <h3 className="heading-3 text-gray-800">{role.title}</h3>
              </div>

              <p className="text-gray-600 mb-6">{role.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-${role.color}-200 text-${role.color}-800`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {role.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-${role.color}-500 mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="heading-3 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                My journey began with a fascination for how things work. As a child, I was always 
                curious about technology and spent countless hours exploring computers and the internet. 
                This curiosity naturally led me to programming and eventually to cybersecurity.
              </p>
              <p>
                What started as a hobby quickly became a passion. I realized that creating beautiful 
                applications wasn't enough - they also needed to be secure. This dual interest 
                shaped my career path, leading me to specialize in both frontend development and 
                ethical hacking.
              </p>
              <p>
                Today, I combine these skills to help businesses create applications that are not 
                only user-friendly and visually appealing but also secure and robust against 
                potential threats.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
              alt="Working on code"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="heading-3 text-center mb-12">What Drives Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-2xl text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl text-white"
        >
          <div className="flex items-center justify-center mb-4">
            <FaGlobe className="text-3xl mr-3" />
            <FaLock className="text-3xl" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's collaborate to create secure, beautiful, and functional web applications 
            that make a difference.
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
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
