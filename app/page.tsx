"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Github,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react"
import Hero from "@/components/hero"
import Link from "next/link"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const skills = {
    technical: [
      {
        category: "Frontend",
        items: ["React.js", "Next.js", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
      },
      { category: "Backend", items: ["Laravel", "Node.js", "PHP", "RESTful APIs"] },
      { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM"] },
      { category: "Cloud & Tools", items: ["Vercel", "GitHub", "Git", "Postman", "WordPress"] },
    ],
    soft: ["Problem-Solving", "Collaboration", "Communication", "Adaptability", "Time Management", "Critical Thinking"],
  }

  const projects = [
    {
      title: "Pacesetter Events Platform",
      company: "Players Africa",
      period: "04/2025 - present",
      url: "https://events.pacesetter.co.ke/",
      description: "An innovative web application for event management, scheduling, booking and payments.",
      technologies: ["Laravel", "PHP", "HTML", "Bootstrap"],
      features: ["Responsive Design", "Event Management System", "Backend Development", "Interactive Frontend"],
    },
    {
      title: "Equitax Africa Website",
      company: "Players Africa",
      period: "07/2025",
      url: "https://equitaxafrica.com/",
      description: "Complete WordPress site deployment and configuration from client backup.",
      technologies: ["WordPress", "PHP", "All-in-One WP Migration"],
      features: ["Server Setup", "Database Restoration", "Theme Customization", "Performance Optimization"],
    },
    {
      title: "Sunastro Limited",
      company: "Novatta Africa",
      period: "05/2025 - 06/2025",
      url: "https://sunastro-limited.vercel.app/",
      description: "Full-stack business portfolio with dynamic project galleries and service management.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
      features: ["Responsive Design", "Real-time Database", "User Authentication", "Dynamic Charts"],
    },
    {
      title: "Bettcash Betting Platform",
      period: "02/2025 - 04/2025",
      url: "https://github.com/JohnMwatheka/bettcash.git",
      description: "Comprehensive web application for managing online betting with secure payment processing.",
      technologies: ["Laravel", "React.js", "PHP", "Tailwind CSS"],
      features: ["API-Driven Architecture", "Payment Gateway Integration", "Responsive UI", "Real-time Experience"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Left Column - Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/4 flex justify-center lg:justify-end"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center lg:text-right">
                About Me
              </h2>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-6 md:p-8">
                  <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                    I am a skilled Full-Stack Developer with experience in Laravel, Next.js, React.js, PHP, JavaScript, Prisma, PostgreSQL, and MySQL, focused on creating reliable and user-friendly applications. I have built projects such as a mail verification system, a Learning Management System (LMS), and an event management platform, using clean coding practices and RESTful APIs. I am also experienced in manual and automated testing with tools like Cypress, Postman, and JMeter to make sure software works well. In addition, I bring strengths in teamwork, research, and deployment with Vercel, delivering practical and effective solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skills.technical.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      {skillGroup.category === "Frontend" && <Globe className="w-8 h-8 text-white" />}
                      {skillGroup.category === "Backend" && <Server className="w-8 h-8 text-white" />}
                      {skillGroup.category === "Databases" && <Database className="w-8 h-8 text-white" />}
                      {skillGroup.category === "Cloud & Tools" && <Code className="w-8 h-8 text-white" />}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-3">
                  {skills.soft.map((skill) => (
                    <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Badge
                        variant="outline"
                        className="text-lg py-2 px-4 border-blue-300 text-blue-700 hover:bg-blue-50 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience & Projects
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-gray-800">{project.title}</CardTitle>
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
                    </div>
                    {project.company && <p className="text-blue-600 font-semibold">{project.company}</p>}
                    <p className="text-gray-500 text-sm">{project.period}</p>
                    <CardDescription className="text-gray-700 mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} className="bg-blue-100 text-blue-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-sm">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Internship */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800">Internship Trainee</CardTitle>
                    <p className="text-purple-600 font-semibold">Mobidev</p>
                    <p className="text-gray-500">05/2024 – 07/2024 | Nairobi, Kenya</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Designed and developed a Laravel application with robust backend logic and user authentication
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Collaborated with the development team to optimize frontend design and ensure responsive design
                      across devices
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed a Next.js project handling both backend APIs and frontend UI components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Utilized Postman for API testing and integrated Next.js routes with backend services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education & Certification
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800">Secondary Education</CardTitle>
                      <p className="text-blue-600 font-semibold">Kenya Certificate of Secondary School (KCSE)</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    <strong>School:</strong> Katwala Mixed Secondary School
                  </p>
                  <p className="text-gray-700">
                    <strong>Period:</strong> 01/2017 - 04/2021
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800">Professional Certification</CardTitle>
                      <p className="text-green-600 font-semibold">Agile and Scrum Project Management</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Comprehensive training in modern project management methodologies:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Agile Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Scrum Methodology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Kanban Methodology</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your next project to life? I'm committed to continuous learning and delivering robust,
              maintainable solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+254757909044"
                    className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600">+254 757 909044</p>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:abrahammwatheka@gmail.com"
                    className="flex flex-col items-center text-center p-6  rounded-xl hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">abrahammwatheka@gmail.com</p>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/JohnMwatheka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center p-6  rounded-xl hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
                    <p className="text-gray-600">JohnMwatheka</p>
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
