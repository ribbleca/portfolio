import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail: string;
}

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getAllProjects(): Project[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    const projects = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => {
        const slug = name.replace(/\.mdx$/, '');
        const fullPath = path.join(projectsDirectory, name);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          metadata: data as ProjectMetadata,
          content,
        };
      })
      .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

    return projects;
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: data as ProjectMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export function getProjectSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => name.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading project slugs:', error);
    return [];
  }
}