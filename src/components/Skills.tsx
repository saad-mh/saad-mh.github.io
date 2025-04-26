import React from 'react';
import { BrainCircuit, Code, Smartphone, Laptop, GitBranch, Parentheses, MonitorSmartphone, Apple, Component, Gamepad2 } from 'lucide-react';
import FadeInSection from './FadeInSection';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: "Advanced", icon: <Code className="w-6 h-6" /> },
      { name: "C++", level: "Intermediate", icon: <Code className="w-6 h-6" /> },
      { name: "Java", level: "Intermediate", icon: <Code className="w-6 h-6" /> }
    ]
  },
  {
    category: "Mobile App Development",
    items: [
      { name: "Kotlin (Android)", level: "Intermediate", icon: <Smartphone className="w-6 h-6" /> },
      { name: "Swift (iOS)", level: "Intermediate", icon: <Apple className="w-6 h-6" /> },
      { name: "Flutter", level: "Intermediate", icon: <MonitorSmartphone className="w-6 h-6" /> }
    ]
  },
  {
    category: "Tech Stack & Tools",
    items: [
      { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
      { name: "VS Code", icon: <Laptop className="w-6 h-6" /> },
      { name: "Android Studio", icon: <Smartphone className="w-6 h-6" /> },
      { name: "XCode", icon: <Smartphone className="w-6 h-6" /> },
      { name: "TouchDesigner", icon: <Component className="w-6 h-6" /> },
      { name: "Unity" , icon: <Gamepad2 className="w-6 h-6" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-zinc-950" id="skills">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-100">
            Technical Skills
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <FadeInSection key={index}>
              <div className="p-6 rounded-lg bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-zinc-700 h-full">
                <h3 className="text-xl font-semibold mb-4 text-zinc-100">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-[#777fcf]">{skill.icon}</div>
                        <span className="text-zinc-300">{skill.name}</span>
                      </div>
                      {'level' in skill && (
                        <span className={`text-sm font-medium ${skill.level === "Advanced" ? "text-green-400" : "text-[#777fcf]"}`}>
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}