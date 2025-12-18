import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, Award, BookOpen, Users, MapPin } from 'lucide-react'

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Sumathi Reddy Institute of Technology for Women (SRITW)",
    affiliation: "Affiliated to JNTUH (Jawaharlal Nehru Technological University Hyderabad)",
    duration: "2022 - 2026",
    status: "4th Year (Final Year)",
    cgpa: "8.8/10",
    location: "Hyderabad, Telangana",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    achievements: [
      "Maintained consistent academic performance with CGPA 8.8",
      "Active participation in technical events and hackathons",
      "Member of various student technical societies",
      "Completed DSA certification from Smart Interviews"
    ],
    coursework: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Database Management Systems",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems"
    ]
  }
]

const additionalEducation = [
  {
    title: "Intermediate (MPC)",
    institution: "Shivani Junior College",
    board: "Board of Intermediate Education, Telangana",
    year: "2020 - 2022",
    percentage: "98.9%",
    icon: BookOpen,
    color: "from-green-500 to-green-600"
  }
]

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic journey and educational qualifications that form the foundation of my technical expertise
          </p>
        </motion.div>

        {/* Main Education */}
        <div className="max-w-4xl mx-auto mb-16">
          {education.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  {/* Header */}
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${edu.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {edu.affiliation}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-1" />
                          <span>CGPA: {edu.cgpa}</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                      <BookOpen size={20} className="mr-2" />
                      Key Coursework
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.coursework.map((course, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                      <Award size={20} className="mr-2" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Education */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {additionalEducation.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color}`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {edu.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {edu.board}
                  </p>
                  <div className="flex items-center">
                    <Award size={16} className="text-blue-500 mr-2" />
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {edu.percentage}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}