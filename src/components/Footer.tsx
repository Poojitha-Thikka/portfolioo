import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Social Links Only */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Connect With Me</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Poojitha-Thikka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 dark:bg-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/poojitha2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 dark:bg-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:poojithathikka98@gmail.com"
                className="p-2 bg-gray-800 dark:bg-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Designed & Built by Poojitha Thikka with <Heart size={16} className="mx-1 text-red-500" /> and curiosity. © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}