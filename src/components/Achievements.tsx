import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Award, Star, Calendar, Users, Zap } from 'lucide-react'

const achievements = [
  {
    title: "1st Prize in Ideathon",
    description: "Secured first place in the college-level Ideathon competition for innovative problem-solving and creative solution presentation.",
    icon: Trophy,
    color: "from-yellow-400 to-yellow-600",
    date: "2024",
    type: "Competition"
  },
  {
    title: "3rd Prize in InnovateHer Hackathon",
    description: "Achieved third place in the InnovateHer Hackathon, showcasing technical skills and collaborative problem-solving abilities.",
    icon: Award,
    color: "from-orange-400 to-orange-600",
    date: "2023",
    type: "Hackathon"
  },
  {
    title: "Infineon Launchpad Hackathon Participant",
    description: "Participated in the prestigious Infineon Launchpad Hackathon, gaining valuable experience in rapid prototyping and innovation.",
    icon: Star,
    color: "from-purple-400 to-purple-600",
    date: "2023",
    type: "Hackathon"
  }
]

const additionalAchievements = [
  {
    title: "Academic Excellence",
    description: "Consistently maintained high academic performance throughout engineering studies",
    icon: Star,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Team Leadership",
    description: "Led multiple project teams demonstrating strong leadership and coordination skills",
    icon: Users,
    color: "from-green-400 to-green-600"
  },
  {
    title: "Quick Learner",
    description: "Rapidly adapted to new technologies and programming languages",
    icon: Zap,
    color: "from-red-400 to-red-600"
  }
]

export default function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognitions and accomplishments that highlight my dedication and excellence
          </p>
        </motion.div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} className="text-white" />
                    </div>

                    {/* Achievement details */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
                        {achievement.type}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {achievement.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Additional Recognition
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${achievement.color} mb-4`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}