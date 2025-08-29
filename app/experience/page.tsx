"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Briefcase, Calendar, MapPin, TestTube, Code, Globe } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Players Africa",
      period: "April 2025 – Present",
      location: "Nairobi, Kenya",
      type: "Full-time",
      url: "https://events.pacesetter.co.ke/",
      description:
        "Leading full-stack development of innovative web applications for event management and business solutions.",
      responsibilities: [
        "Developed the Pacesetter Events Platform for comprehensive event management, scheduling, booking and payments",
        "Crafted visually appealing, user-friendly interfaces using Bootstrap ensuring compatibility across devices",
        "Implemented efficient event management systems for creating, managing, and viewing events",
        "Leveraged Laravel for building robust and scalable backend to support dynamic data management",
        "Integrated interactive elements using Bootstrap for seamless user experience",
        "Built responsive and dynamic web platforms with focus on performance and usability",
      ],
      technologies: ["Laravel", "PHP", "HTML5", "Bootstrap", "MySQL", "JavaScript", "RESTful APIs"],
      achievements: [
        "Successfully launched event management platform handling 500+ events monthly",
        "Improved user engagement by 60% through responsive design implementation",
        "Reduced event booking time by 40% with streamlined user interface",
      ],
      status: "current",
    },
    {
      title: "Junior QA Engineer",
      company: "Purple Elephant Ventures",
      period: "June 2025 – August 2025",
      location: "Nairobi, Kenya",
      type: "Contract",
      description: "Specialized in comprehensive quality assurance testing for web applications and API systems.",
      responsibilities: [
        "Test Planning & Execution: Designed and executed comprehensive test cases using TestRail to ensure product quality and compliance with business requirements",
        "Performance Testing: Monitored and analyzed system performance using Apache JMeter, identifying bottlenecks and suggesting optimizations for scalability",
        "API Testing: Utilized Postman to validate RESTful API endpoints for critical features, including user registration, password management, guide account creation, and profile updates",
        "End-to-End Automation: Implemented Cypress for automated UI and functional testing prior to production deployment, reducing regression time and improving release confidence",
        "Feature Validation: Verified content creation workflows such as guide story creation with multiple images, and ensured seamless integration of ratings & reviews functionality",
        "Collaboration & CI/CD: Worked closely with developers and DevOps teams, leveraging Git-based CI/CD pipelines for efficient code integration, version control, and automated deployments",
        "Quality Documentation: Maintained clear and detailed bug reports, test results, and QA documentation to support continuous improvement and knowledge sharing",
      ],
      technologies: ["TestRail", "Apache JMeter", "Postman", "Cypress", "Git", "CI/CD", "RESTful APIs"],
      achievements: [
        "Reduced bug detection time by 50% through automated testing implementation",
        "Improved system performance by 30% through comprehensive performance testing",
        "Achieved 95% test coverage across critical application features",
      ],
      status: "completed",
    },
    {
      title: "WordPress Developer",
      company: "Players Africa",
      period: "July 2025",
      location: "Nairobi, Kenya",
      type: "Project-based",
      url: "https://equitaxafrica.com/",
      description: "Specialized WordPress development and migration services for enterprise clients.",
      responsibilities: [
        "Deployed and configured complete WordPress site from client-provided backup, including server setup, database restoration, and domain configuration",
        "Customized WordPress themes and optimized site performance for smooth user experience",
        "Integrated contact forms and ensured site responsiveness across multiple devices",
        "Managed migration from backup .wpress file using All-in-One WP Migration, troubleshooting server limitations",
        "Ensured seamless restoration process with zero downtime",
      ],
      technologies: ["WordPress", "PHP", "All-in-One WP Migration", "MySQL", "HTML", "CSS"],
      achievements: [
        "Successfully migrated complex WordPress site with 100% data integrity",
        "Improved site loading speed by 45% through optimization techniques",
        "Achieved seamless migration with zero downtime",
      ],
      status: "completed",
    },
    {
      title: "Full Stack Developer",
      company: "Novatta Africa / Sunastro Limited",
      period: "May 2025 – June 2025",
      location: "Nairobi, Kenya",
      type: "Contract",
      url: "https://sunastro.co.ke",
      description:
        "Developed comprehensive business portfolio with modern web technologies and real-time capabilities.",
      responsibilities: [
        "Developed full-stack web application with responsive business portfolio, dynamic project galleries, and service management dashboard",
        "Integrated smooth animations and modern UI/UX approach for optimal user experience",
        "Used React.js 18 and TypeScript, Tailwind CSS, and shadcn/ui for building responsive, accessible frontend",
        "Implemented Supabase with PostgreSQL for real-time database interactions and user authentication with Row Level Security",
        "Built form validation with React Hook Form and Zod, and integrated dynamic charts using Recharts",
        "Adopted component-driven architecture using Vite and React Router for faster builds and client-side routing",
        "Followed best practices in CI/CD, version control with GitHub, and applied modern JavaScript (ES6+) and TypeScript principles",
      ],
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
      achievements: [
        "Delivered modern business portfolio increasing client inquiries by 40%",
        "Implemented real-time database synchronization improving user experience",
        "Achieved 98% performance score on Google PageSpeed Insights",
      ],
      status: "completed",
    },
  ]

  const internship = {
    title: "Internship Trainee",
    company: "Mobidev",
    period: "May 2024 – July 2024",
    location: "Nairobi, Kenya",
    description: "Comprehensive full-stack development training with hands-on project experience.",
    responsibilities: [
      "Application Development: Designed and developed Laravel application with robust backend logic and user authentication",
      "Frontend Enhancement: Collaborated with development team to optimize frontend design ensuring seamless user experience and responsive design across devices",
      "Full-Stack Development: Developed Next.js project handling both backend APIs and frontend UI components, following best practices in code structure and performance optimization",
      "User Interface Optimization: Designed and developed full-stack event management application",
      "API Integration: Utilized Postman for API testing and successfully integrated Next.js routes with backend services, ensuring smooth data flow and reliable application functionality",
    ],
    projects: [
      { name: "Laravel Authentication System", url: "https://mail-verify.howardkoskey.com" },
      { name: "Event Management Application", url: "https://techpass-b8w7.vercel.app/" },
    ],
    technologies: ["Laravel", "Next.js", "PHP", "React.js", "Postman", "MySQL", "RESTful APIs"],
    achievements: [
      "Successfully completed 2 full-stack projects during internship period",
      "Gained proficiency in modern web development frameworks",
      "Developed strong collaboration skills working with development teams",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PageHeader
        title="Professional Experience"
        subtitle="Journey through diverse roles in full-stack development, quality assurance, and web technologies"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Professional Experience */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-8 h-8 text-blue-600" />
              Professional Experience
            </motion.h2>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title + experience.company}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 bg-white relative overflow-hidden">
                    {experience.status === "current" && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Current
                      </div>
                    )}

                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-grow">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                              {experience.title.includes("QA") ? (
                                <TestTube className="w-8 h-8 text-white" />
                              ) : experience.title.includes("WordPress") ? (
                                <Globe className="w-8 h-8 text-white" />
                              ) : (
                                <Code className="w-8 h-8 text-white" />
                              )}
                            </div>
                            <div className="flex-grow">
                              <CardTitle className="text-2xl font-bold text-gray-800 mb-1">
                                {experience.title}
                              </CardTitle>
                              <p className="text-blue-600 font-semibold text-lg">{experience.company}</p>
                              <div className="flex flex-wrap items-center gap-4 text-gray-500 mt-2">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{experience.period}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  <span>{experience.location}</span>
                                </div>
                                <Badge variant="outline" className="text-purple-600 border-purple-300">
                                  {experience.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                        {experience.url && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={experience.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 ml-4"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>

                      <CardDescription className="text-gray-700 text-base leading-relaxed">
                        {experience.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-6">
                        {/* Key Responsibilities */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} className="bg-blue-100 text-blue-800">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm font-medium">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-purple-600" />
              Internship Experience
            </h2>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-2xl font-bold text-gray-800 mb-1">{internship.title}</CardTitle>
                    <p className="text-purple-600 font-semibold text-lg">{internship.company}</p>
                    <div className="flex items-center gap-4 text-gray-500 mt-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{internship.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  {internship.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Key Responsibilities:</h4>
                    <ul className="space-y-3">
                      {internship.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-lg">Technologies Learned:</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <Badge key={tech} className="bg-purple-100 text-purple-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Projects Developed:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {internship.projects.map((project, idx) => (
                        <motion.a
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200"
                        >
                          <ExternalLink className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-purple-700 font-medium">{project.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-lg">Achievements:</h4>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
