import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Award, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: "DSA Mentor",
    company: "Smart Interviews",
    location: "Remote",
    duration: "Nov 2024 – Present",
    type: "Part-time",
    description: "Mentoring and guiding junior students in Data Structures and Algorithms, helping them build strong problem-solving foundations for technical interviews.",
    achievements: [
      "Mentored and guided 100+ junior students in Data Structures and Algorithms",
      "Explained DSA and Java concepts in a simple, structured way",
      "Helped students debug their code, fix logic errors, and understand optimal approaches",
      "Conducted doubt-solving sessions and clarified complex topics with examples",
      "Ensured students developed strong problem-solving skills through topic-wise practice"
    ],
    technologies: ["Data Structures & Algorithms", "Java", "Problem-solving", "Code debugging", "Teaching & communication"],
    certificateLink: "#",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Web Developer Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    duration: "Oct 2024 – Nov 2024",
    type: "Internship",
    description: "Completed web development tasks and built multiple web applications using modern frontend technologies and responsive design principles.",
    achievements: [
      "Completed assigned web development tasks within the given deadlines",
      "Built a Portfolio Website, Amazon Clone Landing Page, and Temperature Converter App using HTML, CSS, and basic JavaScript",
      "Followed Agile-style task structure during weekly assignments",
      "Practiced version control by pushing all projects to GitHub",
      "Gained hands-on experience with frontend development workflows"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive design", "Git & GitHub", "UI layout and web components"],
    certificateLink: "#",
    color: "from-purple-500 to-purple-600"
  }
]

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional experience and internships that shaped my technical expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-transparent"></div>
              )}
              
              <div className="flex items-start space-x-6 mb-12">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center shadow-lg`}>
                  <Briefcase size={24} className="text-white" />
                </div>

                {/* Experience content */}
                <div className="flex-1 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                        <Award size={12} className="mr-1" />
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate link */}
                  <motion.a
                    href={experience.certificateLink}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Experience Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Looking for Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I am actively seeking internships and entry-level positions in Web Development, Software Engineering, 
              and AI/ML domains. I am eager to contribute my skills and learn from industry professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Web Development
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Software Engineering
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Backend Development
              </span>
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">
                AI/ML
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}