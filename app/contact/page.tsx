"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import { useState } from "react"
import Image from "next/image"

export default function Contact() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-white" />, // Reduced size for better centering
      title: "Phone",
      value: "+254 757 909044",
      shortValue: "0757...44",
      href: "tel:+254757909044",
      description: "Available for calls during business hours",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Mail className="w-5 h-5 text-white" />, // Reduced size for better centering
      title: "Email",
      value: "abrahammwatheka@gmail.com",
      shortValue: "abra...@gmail.com",
      href: "mailto:abrahammwatheka@gmail.com",
      description: "Best way to reach me for detailed discussions",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      title: "GitHub",
      value: "JohnMwatheka",
      shortValue: "JM",
      href: "https://github.com/JohnMwatheka",
      description: "View my code repositories and contributions",
      color: "from-purple-500 to-violet-600",
    },
  ]

  const availability = {
    timezone: "East Africa Time (EAT)",
    workingHours: "Monday - Friday: 8:00 AM - 6:00 PM",
    responseTime: "Usually responds within 24 hours",
    location: "Nairobi, Kenya",
  }

  const services = [
    "Full-Stack Web Development",
    "Laravel Application Development",
    "Next.js & React.js Projects",
    "Database Design & Optimization",
    "API Development & Integration",
    "WordPress Development & Migration",
    "Technical Consulting",
    "Code Review & Optimization",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare message for WhatsApp
    const message = `Hello! I'm interested in working with you. Here are my project details:
    
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Description: ${formData.description}
    
Please let me know if you're available to discuss this project.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/254757909044?text=${encodedMessage}`, '_blank');
    
    // Close the modal
    setIsWhatsAppModalOpen(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* WhatsApp Modal */}
      {isWhatsAppModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Chat on WhatsApp</h3>
                <button 
                  onClick={() => setIsWhatsAppModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select project type</option>
                    <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                    <option value="Laravel Application">Laravel Application</option>
                    <option value="Next.js/React Project">Next.js/React Project</option>
                    <option value="Database Design">Database Design</option>
                    <option value="API Integration">API Integration</option>
                    <option value="WordPress Development">WordPress Development</option>
                    <option value="Technical Consulting">Technical Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                    <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3+ months">3+ months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please describe your project requirements, goals, and any specific technologies or features you need..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsWhatsAppModalOpen(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
                  >
                    {/* WhatsApp logo image instead of icon */}
                    <div className="w-5 h-5 mr-2 relative">
                      <svg viewBox="0 0 32 32" className="w-full h-full">
                        <path d="M17.6 17.4h-.3c-.4 0-.7-.2-1.2-.7-.4-.4-.8-.8-1.1-1-.3-.2-.6-.3-.9-.1l-.4.3c-.6.4-1.1.9-1.6 1.4-.2.1-.3.3-.1.5.2.4.5.8.8 1.1.4.4.8.8 1.3 1.1.6.4 1.1.7 1.8.9.3.1.5.1.7-.1.3-.3.6-.6.9-.9l.4-.5c.2-.2.2-.4.1-.6-.1-.2-.3-.4-.5-.5-.2 0-.3-.1-.5-.2z" fill="#fff"/>
                        <path d="M16.9 13.7c-.2-.2-.4-.3-.7-.3h-.7c-.2 0-.4.1-.6.3-.2.2-.7.7-.7 1.7 0 .9.7 1.9.8 2 .1.1 1.4 2.1 3.4 2.9.5.2.9.3 1.2.4.5.1.9.1 1.3.1.5 0 .9-.1 1-.4.2-.2.3-.6.2-1 0-.2-.3-.4-.5-.6-.2-.2-.6-.3-.7-.5-.1-.2-.1-.4 0-.6.1-.2.5-.8.6-1.1.1-.3.1-.5 0-.6-.1-.1-.3-.2-.6-.3-.3-.1-1.1-.3-1.3-.3s-.4-.1-.6.1c-.2.2-.7.7-.8.8-.1.1-.3.2-.5.1-.2 0-.5-.2-.9-.3-.4-.2-.7-.3-1.1-.5-.7-.4-1.2-.8-1.6-1.3-.2-.3-.4-.6-.6-.9-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5-.1-.1-.5-1.2-.6-1.6z" fill="#fff"/>
                        <path d="M16 30c7.7 0 14-6.3 14-14S23.7 2 16 2 2 8.3 2 16c0 2.7.8 5.3 2.2 7.5l-1.4 5.2 5.4-1.4C10.7 29.2 13.3 30 16 30z" fill="#4caf50"/>
                        <path d="M16 2C8.3 2 2 8.3 2 16c0 2.7.8 5.3 2.2 7.5l-1.4 5.2 5.4-1.4C10.7 29.2 13.3 30 16 30c7.7 0 14-6.3 14-14S23.7 2 16 2zm5.4 19.9c-.3.8-1.7 1.5-2.4 1.6-.6 0-1.4.2-4.6-1.2-3.7-1.6-6.2-5.7-6.4-6-.2-.2-1.6-2.2-1.6-4.2 0-2 .9-3.1 1.3-3.6.3-.5.8-.6 1-.6h.6c.3 0 .6 0 .8.4.3.5.9 1.7 1 1.9.1.1.1.3 0 .5-.1.1-.1.3-.3.4-.2.1-.3.3-.4.5-.1.1-.1.3.1.5.5.6 1.3 1.4 2.1 2 .5.4 1.1.8 1.6 1 .4.2.7.2.9.1.3-.1.5-.4.7-.7.2-.3.4-.6.6-.8.1-.2.3-.2.5-.1l1.9 1c.2.1.4.2.5.3.1.2.1.5-.1 1z" fill="#fff"/>
                      </svg>
                    </div>
                    Open WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      <PageHeader
        title="Let's Work Together"
        subtitle="Ready to bring your next project to life? I'm committed to delivering robust, maintainable solutions."
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Get In Touch
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="w-full"
                >
                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={contact.href}
                    target={contact.title === "GitHub" ? "_blank" : undefined}
                    rel={contact.title === "GitHub" ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                      <CardContent className="p-6 sm:p-6 lg:p-8 text-center flex flex-col items-center">
                        {/* Centered icon container */}
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                        >
                          <div className="w-5 h-5 text-white flex items-center justify-center">
                            {contact.icon}
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
                        <p className="text-sm sm:text-base lg:text-lg font-semibold text-blue-600 mb-2 break-all sm:break-normal px-2">
                          <span className="hidden sm:inline">{contact.value}</span>
                          <span className="sm:hidden">{contact.shortValue}</span>
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">{contact.description}</p>
                      </CardContent>
                    </Card>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Availability & Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Availability</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Location</p>
                        <p className="text-gray-600">{availability.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Working Hours</p>
                        <p className="text-gray-600">{availability.workingHours}</p>
                        <p className="text-gray-600 text-sm">({availability.timezone})</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Send className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Response Time</p>
                        <p className="text-gray-600">{availability.responseTime}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-green-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Services Offered</h3>
                  </div>

                  <div className="space-y-3">
                    {services.map((service, idx) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-purple-50 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Project?</h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
                  Whether you need a full-stack web application, API development, or technical consulting, I'm here to
                  help bring your ideas to life with clean, efficient, and scalable solutions.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:abrahammwatheka@gmail.com"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Send Email
                    </Button>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+254757909044"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Call Now
                    </Button>
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsWhatsAppModalOpen(true)}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-white to-white hover:from-green-700 hover:to-teal-700 text-blue-900 px-6 sm:px-8 py-3 text-base sm:text-lg flex items-center justify-center"
                    >
                      {/* WhatsApp logo image instead of SVG */}
                      <div className="w-5 h-5 mr-2 relative">
                        <Image
                          src="whatsapp-icon.png"
                          alt="WhatsApp"
                          className="object-contain"
                          height={300}
                          width={300}
                          priority
                        />
                      </div>
                     Chat
                    </Button>
                  </motion.button>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                  <p className="text-gray-700 font-medium text-justify">
                    💡 <strong>Pro Tip:</strong> Include details about your project timeline, budget range, and specific
                    requirements to get a more accurate response and project estimate.
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