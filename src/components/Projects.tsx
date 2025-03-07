import React from 'react';
import { Wallet, Code2, Sparkles, ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { Button } from "./ui/button";

const projects = [
  {
    name: "Zenith",
    description: "Finance Analytics and Planning Application with advanced data visualization and predictive analytics.",
    technologies: ["Expo", "React", "TensorFlow"],
    status: "In Progress",
    icon: <Wallet className="w-6 h-6" />,
    url: "#"
  },
  {
    name: "Nova",
    description: "Coming soon - An innovative mobile application focused on productivity.",
    technologies: ["Flutter", "Firebase"],
    status: "In Progress",
    icon: <Sparkles className="w-6 h-6" />,
    url: "#"
  },
  {
    name: "CodeVault",
    description: "Coming soon - A secure code sharing and collaboration platform.",
    technologies: ["TypeScript", "Node.js"],
    status: "Planning",
    icon: <Code2 className="w-6 h-6" />,
    url: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-zinc-950" id="projects">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-100">
            Featured Projects
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={index}>
              <div className="bg-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-zinc-700">
                <div className="text-[#777fcf] mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                  {project.name}
                </h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Button
                      key={i}
                      variant="secondary"
                      size="sm"
                      className="rounded-full bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                    >
                      {tech}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="default"
                    size="sm"
                    className={`rounded-full cursor-default ${project.status === "Completed" ? "bg-green-900/20 text-green-300 hover:bg-green-900/30" : "bg-yellow-900/20 text-yellow-300 hover:bg-yellow-900/30"}`}
                  >
                    {project.status}
                  </Button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#777fcf] hover:text-[#5a62b5] transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}