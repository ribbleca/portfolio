export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard to manage products, orders, and users for an e-commerce platform.',
    tags: ['React', 'Chart.js', 'Node.js'],
  },
  {
    title: 'Real-time Chat App',
    description: 'A real-time chat application using Socket.io and Express.',
    tags: ['Socket.io', 'Express', 'MongoDB'],
  },
  {
    title: 'Weather Forecast PWA',
    description: 'Progressive Web App that provides weather forecasts and offline support.',
    tags: ['PWA', 'React', 'APIs'],
  },
];