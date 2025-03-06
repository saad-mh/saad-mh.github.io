import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { supabase } from '../lib/supabase';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Form data:', formData);
      console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString()
        }])
        .select();

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint
        });
        throw error;
      }

      console.log('Form submission successful:', data);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-800/50 text-green-100' : 'bg-red-800/50 text-red-100'}`}
                >
                  {submitStatus.message}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#777FCF] focus:border-transparent text-gray-100"
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#777FCF] focus:border-transparent text-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#777FCF] focus:border-transparent text-gray-100"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center gap-2 px-6 py-3 bg-[#777FCF] text-white rounded-lg transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#656BB0]'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}