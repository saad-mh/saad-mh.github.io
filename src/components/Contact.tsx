import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import FadeInSection from './FadeInSection';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.FORM3_ACCESS_TOKEN,
          name: formData.name,
          email: form.email.value,
          message: form.message.value
        })
      });

      const result = await response.json();
      if (result.success) {
        console.log('Form submitted successfully:', result);
        form.reset();
      } else {
        console.error('Form submission failed:', result);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  }

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-100">
            Get In Touch
          </h2>
        </FadeInSection>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeInSection>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-100">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
              <div className="flex gap-4 mb-8">
                <a
                  href="https://github.com/saad-mh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#777FCF] transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/saadmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#777FCF] transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:hello@msaad.me"
                  className="text-gray-400 hover:text-[#777FCF] transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input type="hidden" name='access_key' value="d89e83d3-6b53-4836-9a18-a1115f333954" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#777FCF] focus:border-transparent text-gray-100"
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#777FCF] focus:border-transparent text-gray-100"
                  required
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#777FCF] focus:border-transparent text-gray-100"
                  required
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-[#777FCF] text-white rounded-lg transition-colors hover:bg-[#656BB0]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}