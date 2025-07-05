export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"]
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Built with React and Node.js, featuring drag-and-drop functionality and team collaboration tools.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"]
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather application that displays current conditions and forecasts. Integrated with multiple weather APIs and features location-based services.",
    tags: ["React", "API Integration", "Chart.js", "Responsive Design"]
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects and skills. Built with Next.js and deployed on Vercel with optimized performance.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "TypeScript"]
  }
];