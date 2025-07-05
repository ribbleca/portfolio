import { projects } from '../../lib/data';

export const metadata = {
  title: 'Projects | Adna Fika Agestifanka',
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-zinc-800 rounded-lg p-6 hover:border-teal-400 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-zinc-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-zinc-800 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}