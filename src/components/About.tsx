import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
          >
            <p className="mb-6">
              I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Poojitha Thikka</span>, a final-year <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science and Engineering</span> student 
              at <span className="font-semibold text-blue-600 dark:text-blue-400">SRITW</span>, currently maintaining a CGPA of <span className="font-semibold text-blue-600 dark:text-blue-400">8.8</span>. 
              I am passionate about web development, problem-solving, and building real-world software solutions.
            </p>
            
            <p className="mb-6">
              Throughout my academic journey, I gained strong technical skills and applied them in projects like 
              <span className="font-semibold text-blue-600 dark:text-blue-400">E-HealthHub</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">Shramkriti</span>, and a real-time project I'm currently developing, 
              the <span className="font-semibold text-blue-600 dark:text-blue-400">NOC Management System</span>. I have completed a <span className="font-semibold text-blue-600 dark:text-blue-400">DSA certification from Smart Interviews</span>, 
              which strengthened my data structures and algorithms foundation.
            </p>

            <p className="mb-6">
              I also participated in multiple hackathons and won prizes, which enhanced my teamwork, creativity, 
              and analytical thinking. Currently, I am working as a <span className="font-semibold text-blue-600 dark:text-blue-400">DSA Mentor at Smart Interviews</span> and 
              worked as a <span className="font-semibold text-blue-600 dark:text-blue-400">Web Developer Intern at Oasis Infobyte</span>, where I continue to grow my technical expertise 
              and real-world development experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <p className="text-xl font-medium text-gray-800 dark:text-gray-200 italic">
                "I believe in leveraging technology to solve real-world problems and create meaningful impact through continuous learning and innovation."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Strong analytical skills with expertise in data structures and algorithms
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">Teamwork</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Collaborative approach with excellent communication and leadership skills
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Always eager to learn new technologies and adapt to changing industry trends
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}