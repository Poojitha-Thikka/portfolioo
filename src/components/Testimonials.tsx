import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Professor of Computer Science",
    institution: "SRITW",
    content: "Poojitha demonstrates exceptional technical understanding and creativity in her approach to problem-solving. Her dedication to learning new technologies and applying them effectively is truly commendable.",
    rating: 5,
    avatar: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20professor%20avatar%20headshot%20clean%20background%20academic%20look&image_size=square"
  },
  {
    name: "Rajesh Kumar",
    role: "Technical Mentor",
    institution: "Oasis Infobyte",
    content: "Her problem-solving skills and collaborative approach make her an excellent team member. Poojitha's ability to grasp complex concepts quickly and implement them effectively is impressive.",
    rating: 5,
    avatar: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20technical%20mentor%20avatar%20headshot%20clean%20background%20corporate%20look&image_size=square"
  },
  {
    name: "Priya Sharma",
    role: "Hackathon Team Lead",
    institution: "InnovateHer Hackathon",
    content: "Poojitha's leadership qualities and technical expertise were instrumental in our team's success. She brings both creativity and analytical thinking to every project she undertakes.",
    rating: 5,
    avatar: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20team%20lead%20avatar%20headshot%20clean%20background%20confident%20look&image_size=square"
  },
  {
    name: "Michael Chen",
    role: "Senior Software Engineer",
    institution: "Tech Industry Professional",
    content: "I had the opportunity to review Poojitha's projects and was impressed by her clean code practices and attention to detail. She shows great potential as a future software engineer.",
    rating: 5,
    avatar: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20senior%20engineer%20avatar%20headshot%20clean%20background%20technical%20look&image_size=square"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What mentors, professors, and industry professionals say about my work and potential
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-8 md:p-12"
              >
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <Quote className="w-12 h-12 text-blue-600 dark:text-blue-400 opacity-50" />
                  </div>

                  {/* Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div className="flex justify-center">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>

                  {/* Author Info */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonials[currentIndex].institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonial Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mt-16"
        >
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 opacity-50 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Academic Excellence</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Consistent Performance</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm italic">
              "Poojitha has consistently demonstrated academic excellence with a strong grasp of fundamental concepts and their practical applications."
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400 opacity-50 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Future Potential</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Industry Readiness</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm italic">
              "With her technical skills and professional attitude, Poojitha is well-prepared to make significant contributions to any organization."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}