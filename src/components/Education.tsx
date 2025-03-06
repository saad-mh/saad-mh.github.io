import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import FadeInSection from './FadeInSection';

const educationHistory = [
  {
    level: 'Bachelor of Technology',
    institution: 'University 1',
    period: 'Sep 2023 - Ongoing',
    score: null,
    current: true
  },
  {
    level: 'Secondary Education',
    institution: 'School 2',
    period: 'Aug 2021 - Apr 2023',
    score: '75 percentile',
    current: false
  },
  {
    level: 'Primary Education',
    institution: 'School 1',
    period: 'Aug 2019 - Apr 2021',
    score: '85.1 percentile',
    current: false
  }
];

const certifications = [
  {
    name: 'Python Mastery Certificate',
    url: '#',
    platform: 'Example Platform 1'
  },
  {
    name: 'SQL Certificate',
    url: '#',
    platform: 'Example Platform 2'
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-gray-800" id="education">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-100">
            Education
          </h2>
        </FadeInSection>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-12 h-full w-0.5 bg-[#777FCF]"></div>

          {/* Education Timeline */}
          {educationHistory.map((edu, index) => (
            <FadeInSection key={index}>
              <div className="mb-12 flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-12 transform -translate-x-1/2 w-4 h-4 bg-[#777FCF] rounded-full z-10"></div>
                <div className="ml-20 flex-1">
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-5 h-5 text-[#777FCF] mr-2" />
                      <h3 className="text-xl font-semibold text-gray-100">{edu.level}</h3>
                    </div>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
                    {edu.score && (
                      <p className="text-[#777FCF] font-medium">{edu.score}</p>
                    )}
                    {edu.current && (
                      <span className="inline-block px-3 py-1 bg-[#777FCF] bg-opacity-20 text-[#777FCF] rounded-full text-sm mt-2">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Certifications Section */}
        <FadeInSection>
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-100">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-[#777FCF] transition-colors"
                >
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-[#777FCF] mr-3" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-100 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-400">{cert.platform}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}