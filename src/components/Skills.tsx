import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Globe, Database, Wrench, Brain, Users } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['C', 'Java', 'Python', 'PHP'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['SQL', 'MySQL', 'Firebase'],
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'XAMPP'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Core CS Concepts',
    icon: Brain,
    skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'Database Management Systems (DBMS)', 'Operating Systems (OS)', 'Computer Networks (CN)'],
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'Development Methodologies',
    icon: Users,
    skills: ['Software Development Life Cycle (SDLC)', 'Agile Methodology', 'Problem Solving', 'Team Collaboration'],
    color: 'from-teal-500 to-teal-600'
  }
]

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-gray-800 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.1 }}
                        className="flex items-center p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-600 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-200"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                      </motion.div>
                    ))}
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