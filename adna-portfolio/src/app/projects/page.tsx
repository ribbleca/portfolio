import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique 
            challenge and learning opportunity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center pt-8">
          <p className="text-gray-300 mb-4">
            Want to see more of my work or discuss a project?
          </p>
          <a
            href="mailto:adna@example.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}