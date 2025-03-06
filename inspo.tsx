"use client"

import type React from "react"

import { useRef } from "react"
// @ts-ignore
import { motion, useInView } from "framer-motion"
import { ChevronDown, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@nextui-org/react"

export default function Portfolio() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const educationInView = useInView(educationRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#777fcf]">John Doe</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-zinc-400">Full Stack Developer</h2>
          <Button onClick={() => scrollToSection(aboutRef)} className="bg-[#777fcf] hover:bg-[#5a62b5] text-white">
            View My Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce cursor-pointer" size={32} onClick={() => scrollToSection(aboutRef)} />
        </motion.div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#777fcf]/10 to-transparent z-0" />
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-zinc-950/80 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-[#777fcf]">JD</div>
            <ul className="flex space-x-6">
              <li>
                <button onClick={() => scrollToSection(aboutRef)} className="hover:text-[#777fcf] transition-colors">
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(educationRef)}
                  className="hover:text-[#777fcf] transition-colors"
                >
                  Education
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(projectsRef)} className="hover:text-[#777fcf] transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(contactRef)} className="hover:text-[#777fcf] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 border-b border-[#777fcf] pb-2 inline-block">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-zinc-300">
                  Hello! I'm John, a passionate full-stack developer with expertise in building modern web applications.
                  I specialize in React, Node.js, and cloud technologies.
                </p>
                <p className="text-zinc-300">
                  With 5+ years of experience, I've worked on projects ranging from small business websites to complex
                  enterprise applications. I'm dedicated to creating clean, efficient, and user-friendly solutions.
                </p>
                <div className="pt-4">
                  <Button className="bg-[#777fcf] hover:bg-[#5a62b5] text-white">Download Resume</Button>
                </div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                <h3 className="text-xl font-semibold mb-4 text-[#777fcf]">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SkillBar skill="JavaScript" percentage={90} />
                  <SkillBar skill="React" percentage={85} />
                  <SkillBar skill="Node.js" percentage={80} />
                  <SkillBar skill="TypeScript" percentage={75} />
                  <SkillBar skill="Next.js" percentage={85} />
                  <SkillBar skill="CSS/Tailwind" percentage={90} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationRef} className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={educationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 border-b border-[#777fcf] pb-2 inline-block">Education</h2>
            <div className="space-y-8">
              <TimelineItem
                year="2018 - 2020"
                degree="Master of Computer Science"
                institution="Stanford University"
                description="Specialized in Artificial Intelligence and Web Technologies. Graduated with honors."
              />
              <TimelineItem
                year="2014 - 2018"
                degree="Bachelor of Science in Computer Science"
                institution="MIT"
                description="Focused on Software Engineering and Data Structures. Participated in multiple hackathons."
              />
              <TimelineItem
                year="2020 - 2021"
                degree="Full Stack Web Development"
                institution="Udacity Nanodegree"
                description="Completed intensive program covering modern web development technologies and practices."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 border-b border-[#777fcf] pb-2 inline-block">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-featured online store with payment processing, user authentication, and inventory management."
                technologies={["React", "Node.js", "MongoDB", "Stripe"]}
                image="/placeholder.svg?height=300&width=500"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management tool with real-time updates, file sharing, and team communication features."
                technologies={["Next.js", "Firebase", "Tailwind CSS", "WebSockets"]}
                image="/placeholder.svg?height=300&width=500"
              />
              <ProjectCard
                title="Health Tracking Dashboard"
                description="An interactive dashboard for visualizing health metrics with customizable widgets and data analysis."
                technologies={["React", "D3.js", "Express", "PostgreSQL"]}
                image="/placeholder.svg?height=300&width=500"
              />
              <ProjectCard
                title="AI Content Generator"
                description="A tool that uses machine learning to generate marketing content based on user inputs and preferences."
                technologies={["Python", "TensorFlow", "React", "FastAPI"]}
                image="/placeholder.svg?height=300&width=500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 border-b border-[#777fcf] pb-2 inline-block">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-zinc-300">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#777fcf]" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex gap-4">
                    <Link href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-[#777fcf] transition-colors">
                      <Github size={20} />
                    </Link>
                    <Link href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-[#777fcf] transition-colors">
                      <Linkedin size={20} />
                    </Link>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#777fcf]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#777fcf]"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#777fcf]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#777fcf]"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#777fcf] hover:bg-[#5a62b5] text-white">Send Message</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-zinc-950 border-t border-zinc-800 text-center text-zinc-400 text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Component for skill bars
function SkillBar({ skill, percentage }: { skill: string; percentage: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full bg-[#777fcf] rounded-full"
        />
      </div>
    </div>
  )
}

// Component for education timeline items
function TimelineItem({
  year,
  degree,
  institution,
  description,
}: {
  year: string
  degree: string
  institution: string
  description: string
}) {
  return (
    <div className="relative pl-8 border-l-2 border-[#777fcf] pb-8 last:pb-0">
      <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-[#777fcf] rounded-full" />
      <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
        <div className="text-sm text-[#777fcf] font-semibold mb-2">{year}</div>
        <h3 className="text-xl font-semibold mb-1">{degree}</h3>
        <div className="text-zinc-400 mb-3">{institution}</div>
        <p className="text-zinc-300">{description}</p>
      </div>
    </div>
  )
}

// Component for project cards
function ProjectCard({
  title,
  description,
  technologies,
  image,
}: {
  title: string
  description: string
  technologies: string[]
  image: string
}) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-zinc-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-zinc-700 text-[#777fcf] px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <Link href="#" className="inline-flex items-center text-[#777fcf] hover:underline">
          View Project <ExternalLink size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  )
}

