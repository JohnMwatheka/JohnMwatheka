"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PageHeader
        title="About Me"
        subtitle="Passionate developer committed to creating robust, maintainable solutions"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* First Paragraph Card */}
              <motion.div whileHover={{ scale: 1.02 }} className="h-full">
                <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-blue-50 h-full">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Foundation</h3>
                    <p className="text-gray-700 text-justify">
                      I am a highly motivated junior developer with a strong foundation in computer science principles and
                      practical experience in developing and maintaining both front-end and back-end systems. I excel in
                      object-oriented programming, database administration, and full-stack web development, with
                      proficiency in PHP, Laravel, Node.js, Next.js, HTML, CSS, JavaScript, and Bootstrap.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Second Paragraph Card */}
              <motion.div whileHover={{ scale: 1.02 }} className="h-full">
                <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-blue-50 h-full">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Skills</h3>
                    <p className="text-gray-700 text-justify">
                      I am skilled in managing MySQL and PostgreSQL databases and have experience integrating systems with
                      third-party APIs and payment platforms. Familiar with tools such as Vercel, Prisma ORM, Prisma
                      Client, Prisma CLI, and Postman API, I thrive in collaborative environments, solving complex
                      challenges, and delivering robust, maintainable solutions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Third Paragraph Card */}
              <motion.div whileHover={{ scale: 1.02 }} className="h-full">
                <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-blue-50 h-full">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Commitment</h3>
                    <p className="text-gray-700 text-justify">
                      I am committed to continuous learning and staying current with the latest industry trends to
                      contribute effectively to dynamic ICT and systems teams. My approach combines technical expertise
                      with strong problem-solving skills and effective communication.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Core Strengths Card (Existing) */}
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Core Strengths</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Full-Stack Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Database Administration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Problem Solving</span>
                  </li>
                </ul>
              </motion.div>

              {/* Approach Card (Existing) */}
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Approach</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Continuous Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Collaborative Teamwork</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Quality-Focused</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Industry Best Practices</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}