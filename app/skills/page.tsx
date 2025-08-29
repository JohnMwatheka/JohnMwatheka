"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Globe, Cloud, Wrench, TestTube, GitBranch } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function Skills() {
  const skills = {
    technical: [
      {
        category: "Full-Stack Development",
        icon: <Code className="w-8 h-8 text-white" />,
        items: ["Laravel", "Next.js", "Node.js", "RESTful APIs", "PHP"],
        color: "from-blue-500 to-cyan-600",
      },
      {
        category: "Frontend Development",
        icon: <Globe className="w-8 h-8 text-white" />,
        items: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Bootstrap", "Tailwind CSS"],
        color: "from-green-500 to-emerald-600",
      },
      {
        category: "Databases",
        icon: <Database className="w-8 h-8 text-white" />,
        items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM", "Prisma Client"],
        color: "from-purple-500 to-violet-600",
      },
      {
        category: "Cloud & Deployment",
        icon: <Cloud className="w-8 h-8 text-white" />,
        items: ["Vercel CLI", "Truehost", "HostPinnacle", "GitHub", "Git"],
        color: "from-orange-500 to-red-600",
      },
      {
        category: "API Integration",
        icon: <Server className="w-8 h-8 text-white" />,
        items: ["Postman", "Third-Party APIs", "Payment Gateways (M-Pesa)", "RESTful Services"],
        color: "from-indigo-500 to-blue-600",
      },
      {
        category: "Project Management",
        icon: <Wrench className="w-8 h-8 text-white" />,
        items: ["Agile methodology", "Scrum", "Kanban methodologies"],
        color: "from-pink-500 to-rose-600",
      },
      {
        category: "Quality Assurance",
        icon: <TestTube className="w-8 h-8 text-white" />,
        items: ["TestRail", "Apache JMeter", "Cypress", "Unit Testing", "Integration Testing"],
        color: "from-teal-500 to-cyan-600",
      },
      {
        category: "Development Practices",
        icon: <GitBranch className="w-8 h-8 text-white" />,
        items: ["Code Review", "CI/CD", "Version Control", "GitHub", "Bitbucket"],
        color: "from-slate-500 to-gray-600",
      },
      {
        category: "CMS & Backend",
        icon: <Server className="w-8 h-8 text-white" />,
        items: ["WordPress", "Theme Customization", "Plugin Configuration", "Backup Migration"],
        color: "from-emerald-500 to-green-600",
      },
    ],
    soft: [
      "Problem-Solving: Diagnosing and resolving technical issues",
      "Collaboration: Teamwork in cross-functional environments",
      "Communication: Translating technical concepts for diverse audiences",
      "Adaptability: Quick learner of new technologies",
      "Time Management: Efficiently handling multiple tasks and deadlines",
      "Critical Thinking: Analytical skills for anticipating and addressing challenges",
    ],
    operatingSystems: ["Arch Linux", "Windows"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PageHeader
        title="Technical Expertise"
        subtitle="Comprehensive skill set spanning modern web development, quality assurance, and project management"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.technical.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skillGroup.color} rounded-full flex items-center justify-center`}
                    >
                      {skillGroup.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <motion.div key={skill} whileHover={{ scale: 1.05 }}>
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-16"
          >
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                  Soft Skills & Personal Qualities
                </CardTitle>
                <p className="text-gray-600">Essential skills that complement technical expertise</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.soft.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Operating Systems */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-green-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">Operating Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.operatingSystems.map((os) => (
                    <motion.div key={os} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Badge className="bg-green-100 text-green-800 text-lg py-2 px-6 hover:bg-green-200 transition-colors duration-300">
                        {os}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
