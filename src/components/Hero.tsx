import React from 'react';
import { Code2, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#777FCF] to-[#545AA7]">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center gap-4 mb-6">
            <Code2 className="w-12 h-12 text-white/90 animate-float" />
            <Terminal className="w-12 h-12 text-white/90 animate-float-delayed" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Mohammed Saad
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            Student Developer
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. 
            Specializing in Python development with a growing expertise in 
            mobile and cross-platform applications.
          </p>
        </div>
      </div>
    </section>
  );
}