"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Terminal, Activity, Layers, Rocket, Brain, Handshake, Gem, TrendingUp, Cpu, Zap, ArrowDown } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

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
    <div className="min-h-screen bg-black text-gray-50 antialiased overflow-x-hidden relative font-sans">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-neural-network-pattern opacity-30"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-almost-black via-blue-900/10 to-purple-900/10 opacity-70 animate-gradient-shift"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      {/* Hero Section */}
      <motion.section
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden border-b border-gray-900"
      >
        <div className="relative z-10 max-w-6xl mx-auto py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut", type: "spring" }}
            className={`${spaceGrotesk.className} text-7xl sm:text-8xl lg:text-9xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight drop-shadow-neon`}
          >
            QuantumLeap AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Orchestrating high-frequency operations and experience economy with quantum-speed AI.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100, damping: 10 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 255, 255, 0.4)", y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-cyan-electric to-bright-green text-black text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-electric focus:ring-opacity-50 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Solutions</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-electric to-bright-green opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-glitch-effect"></span>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 z-10 text-cyan-electric"
        >
          <ArrowDown className="text-4xl animate-bounce" />
        </motion.div>
      </motion.section>

      {/* Features Section (Bento Grid with Neon Glass) */}
      <section className="py-20 px-4 md:px-8 bg-black">
        <h2 className={`${spaceGrotesk.className} text-5xl sm:text-6xl font-extrabold text-center mb-16 text-gradient-neon bg-gradient-to-r from-cyan-electric to-bright-green drop-shadow-neon`}>
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
              whileHover={{ y: -5, boxShadow: "0 0 30px rgba(0,255,255,0.6), 0 0 60px rgba(128,0,128,0.4)", transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-transparent bg-gradient-to-br from-cyan-electric/50 to-vibrant-purple/50 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group hover:ring-2 hover:ring-cyan-electric shadow-neon-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/10 to-vibrant-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
              <feature.icon className="text-6xl text-cyan-electric mb-6 relative z-10" />
              <h3 className="text-3xl font-bold mb-4 text-gray-100 relative z-10">{feature.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Global Impact Section (Enhanced) */}
      <section className="py-20 px-4 md:px-8 bg-black border-t border-gray-900">
        <h2 className={`${spaceGrotesk.className} text-5xl sm:text-6xl font-extrabold text-center mb-16 text-gradient-neon bg-gradient-to-r from-vibrant-purple to-cyan-electric drop-shadow-neon`}>
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/20 to-vibrant-purple/20 rounded-full blur-3xl opacity-50 animate-pulse-light"></div>
          </motion.div>
        </div>
      </section>

      {/* New Contact Form Section */}
      <section
        className="py-20 px-4 md:px-8 bg-zinc-950 text-center border-t border-gray-900"
      >
        <div className="max-w-xl mx-auto">
          <h2 className={`${spaceGrotesk.className} text-5xl sm:text-6xl font-extrabold mb-8 text-gradient-neon bg-gradient-to-r from-bright-green to-cyan-electric drop-shadow-neon`}>
            Connect for a Quantum Leap
          </h2>
          <p className="text-lg md:text-xl text-white mb-12 leading-relaxed">
            Ready to explore how AI-driven operations can revolutionize your business? Fill out the form below.
          </p>
          <form className="w-full max-w-lg mx-auto text-left space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border border-cyan-electric rounded w-full py-3 px-4 bg-zinc-800 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-electric placeholder-gray-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border border-cyan-electric rounded w-full py-3 px-4 bg-zinc-800 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-electric placeholder-gray-200"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="businessNeed" className="block text-white text-sm font-bold mb-2">Business Need</label>
              <textarea
                id="businessNeed"
                name="businessNeed"
                rows={5}
                className="shadow appearance-none border border-cyan-electric rounded w-full py-3 px-4 bg-zinc-800 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-electric placeholder-gray-200"
                placeholder="Describe your operational challenges or project goals..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)", y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-12 py-4 bg-cyan-400 text-black text-xl font-bold rounded-full shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-electric focus:ring-opacity-70 relative overflow-hidden group"
            >
              <span className="relative z-10">Send Inquiry</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-electric to-bright-green opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-glitch-effect"></span>
            </motion.button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 border-t border-gray-900">
        <p>&copy; {new Date().getFullYear()} QuantumLeap AI. All rights reserved.</p>
      </footer>
    </div>
  );
}