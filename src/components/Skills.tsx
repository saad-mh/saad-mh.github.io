import React from 'react';
import { BrainCircuit, Code, Smartphone, Laptop } from 'lucide-react';
import FadeInSection from './FadeInSection';

const skills = [
  {
    category: "Primary Expertise",
    items: ["Python"],
    icon: <BrainCircuit className="w-8 h-8" />,
    level: "Advanced"
  },
  {
    category: "Programming",
    items: ["C++", "Java"],
    icon: <Code className="w-8 h-8" />,
    level: "Intermediate"
  },
  {
    category: "Mobile Development",
    items: ["Android (Kotlin)", "iOS Development", "Flutter"],
    icon: <Smartphone className="w-8 h-8" />,
    level: "Intermediate"
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "VS Code", "Android Studio", "Xcode"],
    icon: <Laptop className="w-8 h-8" />,
    level: "Intermediate"
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-100">
            Technical Skills
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <FadeInSection key={index}>
              <div className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <div className="text-[#777FCF] mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  {skill.category}
                </h3>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <p key={i} className="text-gray-300">{item}</p>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-[#777FCF]">
                    {skill.level}
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