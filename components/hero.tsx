"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Phone, Github, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

// Array of background images for the carousel
const backgroundImages = [
  "https://s7280.pcdn.co/wp-content/uploads/2021/12/introduction-of-dbms.webp",
  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220416200936/Top-10-Front-End-Developer-Skills-That-You-Need-in-2022.png",
  "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg",
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
];

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        /* Mesh Overlay - Faded version */
        .mesh-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="1" fill="rgba(180,180,180,0.3)"/></svg>') repeat;
          z-index: 1;
          pointer-events: none;
          opacity: 0.7;
        }

        .mesh-overlay-subtle {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0.5px, transparent 0.5px);
          background-size: 60px 60px;
          background-position: 0 0, 30px 30px;
        }

        /* Enhanced animations */
        .glass-card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 h-[70vh] flex items-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBgIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-black/50"></div>
          
          {/* Faded Mesh/Pattern Overlay */}
          <div className="mesh-overlay-subtle"></div>
          <div className="mesh-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <motion.div
                style={{ y }}
                className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white glass-card"
              >
                <Image
                  src="/Mwatheka.jpg"
                  alt="Mwatheka John"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-950 via-purple-950 to-gray-800 bg-clip-text  font-bold text-transparent">
                  Mwatheka John
                </span>
              </h1>

              <p className="text-lg md:text-xl text-blue-950 mb-6 max-w-3xl mx-auto leading-relaxed">
                Junior Full Stack Developer | <span className="text-white">Next.js Developer</span> | <span className="text-white">Laravel Developer</span>
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+254757909044"
                  className="flex items-center gap-2 glass-card px-5 py-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-blue-800" />
                  <span className="font-medium text-gray-950 text-sm">+254 757 909044</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:abrahammwatheka@gmail.com"
                  className="flex items-center gap-2 glass-card px-5 py-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-blue-800" />
                  <span className="font-medium text-gray-950 text-sm">abrahammwatheka@gmail.com</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/JohnMwatheka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass-card px-5 py-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-blue-950" />
                  <span className="font-medium text-white text-sm">GitHub</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="animate-bounce"
            >
              <ChevronDown className="w-6 h-6 mx-auto text-white/70" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}