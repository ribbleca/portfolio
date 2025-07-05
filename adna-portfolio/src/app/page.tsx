export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-blue-400">Adna Fika Agestifanka</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A passionate developer focused on creating meaningful digital experiences 
            through clean code and thoughtful design.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
            </a>
            <a
              href="/about"
              className="border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              About Me
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "AWS",
              "Git",
              "Tailwind CSS"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center hover:border-gray-600 transition-colors"
              >
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 bg-gray-800 border border-gray-700 rounded-lg p-12">
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. 
            Feel free to reach out if you&apos;d like to collaborate.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:adna@example.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
