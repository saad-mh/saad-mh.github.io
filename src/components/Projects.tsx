import React from 'react';
import { Wallet, Code2, Sparkles } from 'lucide-react';
import FadeInSection from './FadeInSection';

const projects = [
  {
    name: "Zenith",
    description: "Finance Analytics and Planning Application with advanced data visualization and predictive analytics.",
    technologies: ["Python", "React", "TensorFlow"],
    status: "Completed",
    icon: <Wallet className="w-6 h-6" />
  },
  {
    name: "Project Nova",
    description: "Coming soon - An innovative mobile application focused on productivity.",
    technologies: ["Flutter", "Firebase"],
    status: "In Progress",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    name: "CodeVault",
    description: "Coming soon - A secure code sharing and collaboration platform.",
    technologies: ["TypeScript", "Node.js"],
    status: "Planning",
    icon: <Code2 className="w-6 h-6" />
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-800" id="projects">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-100">
            Featured Projects
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={index}>
              <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <div className="text-[#777FCF] mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      project.status === "Completed"
                        ? "bg-green-900 text-green-300"
                        : "bg-yellow-900 text-yellow-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}