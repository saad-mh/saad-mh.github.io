import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import FadeInSection from './FadeInSection';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {

  return (
    <section className="py-20 bg-zinc-900" id="contact">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-100">
            Get In Touch
          </h2>
        </FadeInSection>
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6 text-zinc-100">
                Let's Connect
              </h3>
              <p className="text-zinc-300 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
              <div className="flex justify-center gap-8 mb-8">
                <a
                  href="https://github.com/saad-mh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#777fcf] transition-colors"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saadmm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#777fcf] transition-colors"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                  href="mailto:hello@msaad.me"
                  className="text-zinc-400 hover:text-[#777fcf] transition-colors"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}