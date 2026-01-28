"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBrain, FaRocket, FaGraduationCap, FaChalkboardTeacher, FaLightbulb, FaTools } from "react-icons/fa";

const features = [
  {
    icon: FaBrain,
    title: "AI-Powered Personalization",
    description: "Our advanced AI creates custom learning paths tailored to your strengths, weaknesses, and career goals. Adapt and grow at your own pace.",
  },
  {
    icon: FaRocket,
    title: "Accelerated Skill Mastery",
    Leverage: "Adaptive algorithms and interactive modules to quickly master new skills and stay ahead in your industry.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Expert-Led Content",
    description: "Access a vast library of courses and resources curated by industry leaders and subject matter experts.",
  },
  {
    icon: FaLightbulb,
    title: "Real-World Application",
    description: "Engage with practical projects, case studies, and simulations to apply your knowledge directly to real-world challenges.",
  },
  {
    icon: FaTools,
    title: "Continuous Professional Development",
    description: "Stay relevant with constantly updated content, new courses, and certifications that align with evolving industry demands.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-blue-950 text-gray-50 antialiased">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/hero-bg.svg" // Placeholder for a futuristic background SVG/image
            alt="Abstract AI background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight"
          >
            QuantumLeap AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Unlock your full potential with AI-powered personalized learning paths for rapid professional advancement.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Start Your Quantum Leap
          </motion.button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-400">
          Why QuantumLeap AI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-800/60 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 flex flex-col items-center text-center"
            >
              <feature.icon className="text-6xl text-blue-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-gray-100">{feature.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{feature.description || feature.Leverage}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-tl from-gray-950 to-blue-900/40 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Join thousands of professionals already accelerating their growth with QuantumLeap AI. Sign up today and experience learning re-imagined.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(74, 222, 128, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-green-500 to-cyan-600 text-white text-xl font-bold rounded-full shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-70"
          >
            Get Started Free
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} QuantumLeap AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
