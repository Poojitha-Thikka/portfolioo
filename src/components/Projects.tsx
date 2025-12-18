import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code, Database, Palette, Zap } from 'lucide-react'

const projects = [
  {
    title: "E-HealthHub",
    description: "A web-based hospital appointment management platform that allows patients to book appointments based on doctor availability. Doctors can manage appointments and provide online consultations.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/Poojitha-Thikka/e-healthhub",
    liveLink: "#",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20hospital%20appointment%20management%20system%20dashboard%20interface%20clean%20design%20blue%20color%20scheme%20medical%20icons%20doctor%20patient%20booking&image_size=landscape_16_9",
    category: "Web Application",
    icon: Database
  },
  {
    title: "Shramkriti",
    description: "A digital platform that connects farmers/landlords with agricultural laborers, enabling direct hiring without middlemen. Features laborer profiles and skill-based hiring system.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/Poojitha-Thikka/shramkriti",
    liveLink: "#",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=agricultural%20hiring%20platform%20interface%20farm%20workers%20profiles%20green%20color%20scheme%20modern%20clean%20design&image_size=landscape_16_9",
    category: "Web Application",
    icon: Palette
  },
  {
    title: "NOC Management System",
    description: "A real-time solution that automates the entire NOC approval process using email-based faculty approvals. Students can download their NOC instantly after all approvals.",
    techStack: ["React.js", "Express.js", "Firebase"],
    githubLink: "https://github.com/Poojitha-Thikka/noc-management-system",
    liveLink: "#",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=automated%20noc%20certificate%20approval%20system%20dashboard%20interface%20purple%20color%20scheme%20modern%20clean%20design%20email%20notifications&image_size=landscape_16_9",
    category: "Full Stack Application",
    icon: Code
  },
  {
    title: "Student Attendance Management System",
    description: "A complete attendance tracking system with modules for Admin, Faculty, and Students. Faculty can take/manage attendance and students can view their attendance records.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/Poojitha-Thikka/student-attendance-system",
    liveLink: "#",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=student%20attendance%20management%20system%20interface%20dashboard%20orange%20color%20scheme%20modern%20clean%20design%20faculty%20student%20modules&image_size=landscape_16_9",
    category: "Web Application",
    icon: Zap
  }
]

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my journey through code with innovative solutions and creative implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full flex items-center space-x-2">
                        <IconComponent size={12} />
                        <span>{project.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>

                      <motion.a
                        href={project.liveLink}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.a>
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
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Poojitha-Thikka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View More Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}