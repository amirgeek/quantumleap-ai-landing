"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Terminal, Activity, Layers, Rocket, Brain, Handshake, Gem, TrendingUp, Cpu, Zap } from "lucide-react"; // Lucide React Icons

const features = [
  {
    icon: Cpu,
    title: "AI-Driven Operational Intelligence",
    description: "Leverage advanced AI to design, build, and deploy intelligent operational workflows tailored for the experience economy.",
  },
  {
    icon: TrendingUp,
    title: "High-Frequency Trading Architecture",
    description: "Architect and implement ultra-low-latency trading bots for Bybit and Binance, focusing on real-time data and robust slippage management.",
  },
  {
    icon: Layers,
    title: "Modular Solution Design",
    description: "Craft scalable and maintainable digital solutions, from web applications and SaaS tools to intricate internal automation systems.",
  },
  {
    icon: Terminal,
    title: "Technical Strategy & Execution",
    description: "Define technical architectures, optimize data flows, engineer prompts, and manage complex integrations with a focus on practical value.",
  },
  {
    icon: Activity,
    title: "Real-Time Performance Validation",
    description: "Implement rigorous validation processes and real-time monitoring to ensure operational excellence and measurable business impact.",
  },
  {
    icon: Handshake,
    title: "Integrated AI Development",
    description: "Seamlessly integrate cutting-edge AI models into custom applications to drive innovation and provide a competitive edge.",
  },
];

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const staggerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-50 antialiased overflow-x-hidden relative">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-blue-900/10 to-purple-900/10 opacity-70 animate-gradient-shift"></div>
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5"></div>

      {/* Hero Section */}
      <motion.section
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden border-b border-gray-800"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black"></div>

        <div className="relative z-10 max-w-5xl mx-auto py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut", type: "spring" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-green-500 to-emerald-500 leading-tight drop-shadow-lg"
          >
            QuantumLeap AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Pioneering AI-driven operational suites for the experience economy and high-frequency trading.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100, damping: 10 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 255, 0, 0.4)", y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-emerald-600 text-black text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            Explore Solutions
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 z-10 text-cyan-400"
        >
          <FaArrowDown className="text-3xl animate-bounce" /> {/* Keeping FaArrowDown for simple visual */} 
        </motion.div>
      </motion.section>

      {/* Features Section (Bento Grid) */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-green-400 drop-shadow-lg">
          Our Core Capabilities
        </h2>
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 255, 0, 0.3)", transition: { duration: 0.3 } }}
              className="bg-gray-900/50 backdrop-filter backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-green-500 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
              <feature.icon className="text-6xl text-green-400 mb-6 relative z-10" />
              <h3 className="text-3xl font-bold mb-4 text-gray-100 relative z-10">{feature.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Global Impact Section (Enhanced) */}
      <section className="py-20 px-4 md:px-8 bg-black border-t border-gray-800">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500 drop-shadow-lg">
          Impact & Reach
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-xl text-gray-300 leading-relaxed space-y-6"
          >
            <p>
              Our cutting-edge solutions drive efficiency and innovation across diverse industries, from optimizing supply chains in the experience economy to powering real-time decision-making in high-frequency trading. We build the future of operational intelligence.
            </p>
            <p>
              With a global footprint, QuantumLeap AI empowers businesses and individuals to master complex challenges, unlock new opportunities, and achieve unprecedented growth. Join our network of innovators.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full max-w-md h-64 md:h-80 mx-auto relative flex items-center justify-center"
          >
            <Image
              src="/globe.svg"
              alt="Animated Globe representing global reach"
              layout="fill"
              objectFit="contain"
              className="animate-spin-slow opacity-80 z-10 drop-shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-full blur-3xl opacity-50 animate-pulse-light"></div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-4 md:px-8 bg-gradient-to-tl from-black to-blue-900/20 text-center border-t border-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500 drop-shadow-lg">
            Ready for Your Next Quantum Leap?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed">
            Connect with us to explore how AI-driven operations can revolutionize your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 255, 0, 0.4)", y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-green-500 to-cyan-600 text-black text-xl font-bold rounded-full shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-70"
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} QuantumLeap AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
