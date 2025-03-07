import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-b from-[#777fcf]/35 via-[#777fcf]/10 to-transparent z-0" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-[#777fcf]">Mohammed Saad</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-zinc-400">Student. Developer.</h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          A passionate student and developer with a creative edge, blending technology with design. 
          From crafting sleek visuals to capturing the cosmos through astrophotography, I thrive at the intersection of art and code. 
          Constantly exploring new ideas, I turn imagination into reality through design, development, and a love for innovation. 
          </p>
        </div>
      </div>
    </section>
  );
}