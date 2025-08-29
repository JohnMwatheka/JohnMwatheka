"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Calendar, MapPin, Users, Code, Database, Globe } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Pacesetter Events Platform",
      company: "Players Africa",
      role: "Full Stack Developer",
      period: "April 2025 – Present",
      location: "Nairobi, Kenya",
      url: "https://events.pacesetter.co.ke/",
      status: "Live",
      description: "An innovative web application designed for event management, scheduling, booking and payments.",
      longDescription:
        "The Pacesetter Events Platform is a comprehensive event management solution that streamlines the entire event lifecycle from creation to payment processing. Built with modern web technologies, it provides a seamless experience for both event organizers and attendees.",
      technologies: ["Laravel", "PHP", "HTML5", "Bootstrap", "MySQL", "JavaScript"],
      features: [
        "Responsive Design: Crafted a visually appealing, user-friendly interface using Bootstrap to ensure compatibility across devices",
        "Event Management System: Implemented features for creating, managing, and viewing events efficiently",
        "Backend Development: Leveraged Laravel for building a robust and scalable backend to support dynamic data management",
        "Interactive Frontend: Integrated interactive elements using Bootstrap for a seamless user experience",
        "Payment Integration: Secure payment processing for event bookings",
        "Real-time Updates: Live event status and booking updates",
      ],
      challenges: [
        "Implementing real-time event updates across multiple user sessions",
        "Designing a scalable payment processing system",
        "Ensuring responsive design across various device sizes",
      ],
      impact: "Streamlined event management process, reducing booking time by 60% and improving user satisfaction",
      category: "Full-Stack Web Application",
    },
    {
      id: 2,
      title: "Sunastro Limited Portfolio",
      company: "Novatta Africa / Sunastro Limited",
      role: "Full Stack Developer",
      period: "May 2025 – June 2025",
      location: "Nairobi, Kenya",
      url: "https://sunastro.co.ke",
      status: "Live",
      description:
        "Full-stack web application with responsive business portfolio, dynamic project galleries, and service management dashboard.",
      longDescription:
        "A modern business portfolio website featuring dynamic content management, real-time database interactions, and a comprehensive service management system. Built with cutting-edge technologies for optimal performance and user experience.",
      technologies: [
        "React.js 18",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Vite",
        "React Router",
        "Recharts",
      ],
      features: [
        "Integrated smooth animations and modern UI/UX approach for optimal user experience",
        "Implemented Supabase with PostgreSQL for real-time database interactions",
        "User authentication with Row Level Security",
        "Built form validation with React Hook Form and Zod",
        "Integrated dynamic charts using Recharts",
        "Component-driven architecture using Vite and React Router",
        "CI/CD best practices with GitHub integration",
      ],
      challenges: [
        "Implementing real-time database synchronization",
        "Creating a flexible content management system",
        "Optimizing performance for dynamic chart rendering",
      ],
      impact: "Enhanced business presence with 40% increase in client inquiries and improved user engagement",
      category: "Business Portfolio",
    },
    {
      id: 3,
      title: "Bettcash Betting Platform",
      role: "Full Stack Developer",
      period: "February 2025 - April 2025",
      location: "Nairobi, Kenya",
      url: "https://bettcash.com/",
      githubUrl: "https://github.com/JohnMwatheka/bettcash.git",
      status: "Live",
      description: "Comprehensive web application for managing online betting with secure payment processing.",
      longDescription:
        "A sophisticated betting platform that combines modern web technologies with secure payment processing. The application features real-time betting updates, comprehensive user management, and robust security measures.",
      technologies: ["Laravel", "React.js", "PHP", "Tailwind CSS", "MySQL", "RESTful APIs"],
      features: [
        "API-Driven Architecture: Leveraged APIs for seamless integration with external services and dynamic data handling",
        "Payment Gateway Integration: Implemented secure and efficient payment processing for smooth financial transactions",
        "Responsive UI Design: Mobile-first and accessible user experience using Tailwind CSS and React.js",
        "Backend Development: Robust backend using Laravel for efficient data management and system scalability",
        "Interactive Frontend: Real-time, engaging user experience with interactive components",
        "Security Features: Advanced security measures for financial transactions",
      ],
      challenges: [
        "Implementing secure payment gateway integration",
        "Managing real-time betting data synchronization",
        "Ensuring regulatory compliance for betting operations",
      ],
      impact: "Successfully launched platform handling thousands of daily transactions with 99.9% uptime",
      category: "E-commerce Platform",
    },
    {
      id: 4,
      title: "Equitax Africa Website",
      company: "Players Africa",
      role: "WordPress Developer",
      period: "July 2025",
      location: "Nairobi, Kenya",
      url: "https://equitaxafrica.com/",
      status: "Live",
      description: "Complete WordPress site deployment and configuration from client-provided backup.",
      longDescription:
        "A comprehensive WordPress migration and optimization project involving complete site restoration, performance optimization, and custom theme development to meet client specifications.",
      technologies: ["WordPress", "PHP", "All-in-One WP Migration", "MySQL", "HTML", "CSS"],
      features: [
        "Deployed and configured complete WordPress site from client backup",
        "Server setup, database restoration, and domain configuration",
        "Customized WordPress themes and optimized site performance",
        "Integrated contact forms and ensured site responsiveness across devices",
        "Managed migration troubleshooting and seamless restoration process",
      ],
      challenges: [
        "Resolving server compatibility issues during migration",
        "Optimizing large database for improved performance",
        "Ensuring zero downtime during the migration process",
      ],
      impact: "Successfully migrated complex WordPress site with improved loading speeds and enhanced user experience",
      category: "WordPress Development",
    },
  ]

  const categories = [
    "All",
    "Full-Stack Web Application",
    "Business Portfolio",
    "E-commerce Platform",
    "WordPress Development",
  ]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PageHeader
        title="Projects Portfolio"
        subtitle="Showcasing innovative solutions and technical expertise across diverse web development projects"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 shadow-md"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white relative overflow-hidden">
                  {project.status === "Live" && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Live
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-gray-800 pr-4">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        {project.url && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                          >
                            <Code className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {project.company && <p className="text-blue-600 font-semibold">{project.company}</p>}
                    {project.role && <p className="text-purple-600 font-medium">{project.role}</p>}

                    <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                      <span>•</span>
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>

                    <CardDescription className="text-gray-700 mt-2">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} className="bg-blue-100 text-blue-800">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-gray-600">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
                                {project.title}
                              </DialogTitle>
                              {project.company && (
                                <p className="text-blue-600 font-semibold text-lg">{project.company}</p>
                              )}
                              {project.role && <p className="text-purple-600 font-medium">{project.role}</p>}
                            </div>
                            <div className="flex gap-2">
                              {project.url && (
                                <Button variant="outline" size="sm" asChild>
                                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Site
                                  </a>
                                </Button>
                              )}
                              {project.githubUrl && (
                                <Button variant="outline" size="sm" asChild>
                                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Code className="w-4 h-4 mr-2" />
                                    GitHub
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                          <DialogDescription className="text-gray-700 text-base leading-relaxed mt-4">
                            {project.longDescription}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6 mt-6">
                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                              <Database className="w-5 h-5 text-blue-600" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} className="bg-blue-100 text-blue-800">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                              <Globe className="w-5 h-5 text-green-600" />
                              Key Features & Achievements
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Challenges */}
                          {project.challenges && (
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <Users className="w-5 h-5 text-orange-600" />
                                Technical Challenges Solved
                              </h4>
                              <ul className="space-y-2">
                                {project.challenges.map((challenge, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm">{challenge}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Impact */}
                          {project.impact && (
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 mb-2">Project Impact</h4>
                              <p className="text-gray-700 text-sm">{project.impact}</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
