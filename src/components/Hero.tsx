import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-b from-[#777fcf]/10 to-transparent z-0" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-[#777fcf]">Mohammed Saad</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-zinc-400">Student Developer</h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. 
            Specializing in Python development with a growing expertise in 
            mobile and cross-platform applications.
          </p>
        </div>
      </div>
    </section>
  );
}