'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about building exceptional digital experiences through modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Adna Fika Agestifanka"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                Adna Fika Agestifanka
              </h2>
              <p className="text-blue-600 dark:text-blue-400 text-center font-medium mb-4">
                Principal Frontend Engineer
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>📍 Jakarta, Indonesia</p>
                <p>💼 8+ years experience</p>
                <p>🎓 Computer Science</p>
                <p>🌟 Full-stack development</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Journey
              </h3>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  I'm a Principal Frontend Engineer with over 8 years of experience in building 
                  scalable web applications and leading development teams. My passion lies in 
                  creating exceptional user experiences through modern web technologies and 
                  innovative solutions.
                </p>
                <p>
                  Throughout my career, I've specialized in React, Next.js, and TypeScript, 
                  while also exploring the intersection of web development and artificial intelligence. 
                  I believe in writing clean, maintainable code and fostering collaborative 
                  environments where teams can thrive.
                </p>
                <p>
                  When I'm not coding, you can find me mentoring junior developers, contributing 
                  to open-source projects, or exploring the latest trends in web development 
                  and AI integration.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Styling</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Tailwind CSS', 'Styled Components', 'SCSS', 'CSS-in-JS'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'FastAPI', 'Express.js'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI/ML</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'OpenAI API', 'Google AI', 'Scikit-learn'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Achievements
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Led Development of AI-Powered Analytics Platform
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Architected and led the development of a comprehensive analytics dashboard 
                    with machine learning capabilities, resulting in 70% faster decision-making 
                    and 85% prediction accuracy.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Scaled E-commerce Platform Performance
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Optimized a Next.js e-commerce platform serving 100K+ users, achieving 
                    60% improvement in page load speed and 35% increase in conversion rates.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Mentored 20+ Junior Developers
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Established mentorship programs and technical training sessions, 
                    contributing to team growth and knowledge sharing across the organization.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}