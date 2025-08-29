"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function Education() {
  const education = {
    degree: "Kenya Certificate of Secondary School (KCSE)",
    school: "Katwala Mixed Secondary School",
    period: "01/2017 - 04/2021",
    location: "Kenya",
    description:
      "Completed secondary education with a strong foundation in mathematics, sciences, and languages, preparing for advanced studies in technology and computer science.",
  }

  const certification = {
    title: "Agile and Scrum Project Management Methodologies",
    description:
      "Comprehensive training in modern project management approaches essential for software development teams.",
    skills: [
      {
        name: "Agile Development",
        description:
          "Learned iterative development processes, continuous improvement, and adaptive planning methodologies.",
      },
      {
        name: "Scrum Methodology",
        description:
          "Mastered sprint planning, daily standups, sprint reviews, and retrospectives for effective team collaboration.",
      },
      {
        name: "Kanban Methodology",
        description:
          "Understood visual workflow management, work-in-progress limits, and continuous delivery principles.",
      },
    ],
    benefits: [
      "Enhanced team collaboration and communication skills",
      "Improved project delivery timelines and quality",
      "Better understanding of client requirements and feedback integration",
      "Effective backlog management and prioritization techniques",
    ],
  }

  const continuousLearning = [
    "Modern JavaScript (ES6+) and TypeScript",
    "React.js ecosystem and Next.js framework",
    "Laravel framework and PHP best practices",
    "Database design and optimization",
    "Cloud deployment and DevOps practices",
    "API design and integration patterns",
    "UI/UX design principles",
    "Testing methodologies and quality assurance",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PageHeader title="Education & Learning" subtitle="Academic foundation and continuous professional development" />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Formal Education */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-8 h-8 text-blue-600" />
              Formal Education
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{education.degree}</CardTitle>
                      <p className="text-blue-600 font-semibold text-lg mb-2">{education.school}</p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{education.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{education.description}</p>

                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Core Subjects</h4>
                      <p className="text-blue-700 text-sm">Mathematics, Sciences, Languages</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Skills Developed</h4>
                      <p className="text-purple-700 text-sm">Analytical thinking, Problem-solving</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Foundation</h4>
                      <p className="text-green-700 text-sm">Technology and Computer Science</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Professional Certification */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3"
            >
              <Award className="w-8 h-8 text-green-600" />
              Professional Certification
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-green-50">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{certification.title}</CardTitle>
                      <p className="text-gray-700 leading-relaxed">{certification.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Methodologies Mastered:</h4>
                    <div className="grid md:grid-cols-1 gap-4">
                      {certification.skills.map((skill, idx) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500"
                        >
                          <h5 className="font-semibold text-green-800 mb-2">{skill.name}</h5>
                          <p className="text-gray-700 text-sm">{skill.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Professional Benefits:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {certification.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Continuous Learning */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-purple-600" />
              Continuous Learning & Development
            </h2>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  Self-Directed Learning & Skill Development
                </CardTitle>
                <p className="text-gray-700 leading-relaxed">
                  Committed to staying current with rapidly evolving technology trends through continuous learning and
                  hands-on practice. Actively pursuing knowledge in emerging technologies and industry best practices.
                </p>
              </CardHeader>

              <CardContent>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Current Learning Focus Areas:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {continuousLearning.map((area, idx) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{area}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Learning Philosophy</h4>
                  <p className="text-gray-700 leading-relaxed">
                    "Technology evolves rapidly, and staying relevant requires a commitment to lifelong learning. I
                    believe in learning by doing, contributing to open-source projects, and sharing knowledge with the
                    developer community. Every project is an opportunity to learn something new and improve existing
                    skills."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
