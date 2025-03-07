import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardHeader, CardContent } from "./ui/card";
import FadeInSection from './FadeInSection';

const educationHistory = [
  {
    level: 'Bachelor of Technology',
    institution: 'Amity University Kolkata',
    period: 'Sep 2023 - Ongoing',
    score: null,
    current: true
  },
  {
    level: 'Secondary Education',
    institution: 'DAV Public School Bishnupur',
    period: 'Aug 2021 - Apr 2023',
    score: '75 percentile',
    current: false
  },
  {
    level: 'Primary Education',
    institution: 'Kharagpur Vision Academy',
    period: 'Aug 2019 - Apr 2021',
    score: '85.1 percentile',
    current: false
  }
];

const certifications = [
  {
    name: 'Python Mastery Certificate',
    url: 'https://www.hackerrank.com/certificates/eb7e4352921b',
    platform: 'Hackerrank'
  },
  {
    name: 'Problem Solving (Basic) Certificate',
    url: 'https://www.hackerrank.com/certificates/324861a6db5b',
    platform: 'Hackerrank'
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-zinc-950" id="education">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-100">
            Education
          </h2>
        </FadeInSection>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-12 h-full w-0.5 bg-[#777fcf]"></div>

          {/* Education Timeline */}
          {educationHistory.map((edu, index) => (
            <FadeInSection key={index}>
              <div className="mb-12 flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-12 transform -translate-x-1/2 w-3.5 h-3.5 bg-[#777fcf] rounded-full z-10"></div>
                <div className="ml-20 flex-1">
                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[#777fcf]" />
                        <h3 className="text-xl font-semibold text-zinc-100">{edu.level}</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-300 mb-1">{edu.institution}</p>
                      <p className="text-sm text-zinc-400 mb-2">{edu.period}</p>
                      {edu.score && (
                        <p className="text-[#777fcf] font-medium">{edu.score}</p>
                      )}
                      {edu.current && (
                        <span className="inline-block px-3 py-1 bg-[#777fcf] bg-opacity-20 text-[#777fcf] rounded-full text-sm mt-2">
                          Current
                        </span>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Certifications Section */}
        <FadeInSection>
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-zinc-100">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-[#777fcf] transition-colors"
                >
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-[#777fcf] mr-3" />
                    <div>
                      <h4 className="text-lg font-medium text-zinc-100 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-zinc-400">{cert.platform}</p>
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