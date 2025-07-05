export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">My Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hello! I&apos;m Adna Fika Agestifanka, a passionate developer with a love for 
                creating digital solutions that make a difference. My journey in technology 
                started with curiosity and has evolved into a career dedicated to building 
                meaningful applications.
              </p>
              <p>
                I specialize in full-stack development, with expertise in modern web 
                technologies. I enjoy tackling complex problems and transforming ideas 
                into functional, user-friendly applications.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-blue-400 mb-2">Frontend</h3>
                  <p className="text-gray-300 text-sm">
                    React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-blue-400 mb-2">Backend</h3>
                  <p className="text-gray-300 text-sm">
                    Node.js, Python, Express.js, REST APIs, GraphQL
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-blue-400 mb-2">Database</h3>
                  <p className="text-gray-300 text-sm">
                    PostgreSQL, MongoDB, MySQL, Redis
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-blue-400 mb-2">Tools & DevOps</h3>
                  <p className="text-gray-300 text-sm">
                    Git, Docker, AWS, Vercel, CI/CD, Linux
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Interests</h2>
              <div className="space-y-2 text-gray-300">
                <p>• Web Performance Optimization</p>
                <p>• Open Source Contributions</p>
                <p>• UI/UX Design</p>
                <p>• Cloud Technologies</p>
                <p>• Mobile Development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-6 bg-gray-800 border border-gray-700 rounded-lg p-12">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:adna@example.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}