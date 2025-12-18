import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Calendar, ExternalLink, Shield, Code, Network, Database, Brain } from 'lucide-react'

const certifications = [
  {
    title: "Smart Coder Certification",
    provider: "Smart Interviews",
    date: "23 July 2025",
    duration: "3 months",
    skills: ["Data Structures", "Algorithms", "Coding Interview Preparation", "Problem Solving"],
    icon: Shield,
    color: "from-red-500 to-red-600",
    certificateLink: "#",
    description: "Certified in Data Structures, Algorithms, and coding interview preparation."
  },
  {
    title: "InnovateHer Hackathon",
    provider: "InnovateHer",
    date: "22 March 2025",
    duration: "24 hours",
    skills: ["Team Collaboration", "Innovation", "Problem Solving", "Technical Implementation"],
    icon: Code,
    color: "from-blue-500 to-blue-600",
    certificateLink: "#",
    description: "Won 3rd Prize for building an innovative tech solution."
  },
  {
    title: "Infineon Launchpad Hackathon",
    provider: "Infineon Technologies",
    date: "1 March 2025",
    duration: "48 hours",
    skills: ["Hardware-Software Integration", "IoT", "Embedded Systems", "Team Work"],
    icon: Network,
    color: "from-green-500 to-green-600",
    certificateLink: "#",
    description: "Participated in hardware-software integration challenges."
  },
  {
    title: "Java Certification",
    provider: "HackerRank",
    date: "2024",
    duration: "2 hours",
    skills: ["Java Basics", "Object-Oriented Programming", "Coding Fundamentals"],
    icon: Code,
    color: "from-purple-500 to-purple-600",
    certificateLink: "#",
    description: "Certified in Java basics, OOP, and coding fundamentals."
  },
  {
    title: "SQL Certification",
    provider: "Simplilearn",
    date: "2024",
    duration: "15 hours",
    skills: ["SQL Queries", "Database Concepts", "Joins", "Data Manipulation"],
    icon: Database,
    color: "from-orange-500 to-orange-600",
    certificateLink: "#",
    description: "Completed SQL fundamentals including queries, joins, and database concepts."
  }
]

export default function Certifications() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and specialized training programs from industry leaders
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color}`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <motion.a
                      href={cert.certificateLink}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {cert.provider}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar size={12} className="mr-1" />
                      <span className="mr-4">{cert.date}</span>
                      <Award size={12} className="mr-1" />
                      <span>{cert.duration}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I am committed to continuous learning and regularly update my skills through online courses, 
              certifications, and hands-on projects to stay current with industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Always Learning
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Industry Relevant
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Skill Focused
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}