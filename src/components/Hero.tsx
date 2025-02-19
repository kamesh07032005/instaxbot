import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquareMore,
  ArrowRight,
  Play,
  ChevronDown,
  Instagram,
  Star,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import { handleGetStarted, scrollToSection } from "../utils/navigation";
// import VideoPlayer from "./VideoPlayer";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Animated background bubbles
  const bubbles = Array(6)
    .fill(null)
    .map((_, i) => ({
      size: Math.random() * 300 + 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
    }));

  const heroImages = {
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200",
    dashboard:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200",
    mockup: "/images/dashboard-preview.png",
  };

  const renderVideoModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setIsVideoModalOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="max-w-4xl w-full"
      >
        <VideoPlayer
          thumbnailUrl={heroImages.thumbnail}
          videoUrl="/videos/demo.mp4"
          onClose={() => setIsVideoModalOpen(false)}
        />
      </motion.div>
    </motion.div>
  );

  const renderHeroVisual = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={heroImages.dashboard}
            alt="Instagram Dashboard"
            className="object-cover transform hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.src = heroImages.mockup;
              e.currentTarget.classList.add("bg-gray-100");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />

          <motion.button
            onClick={() => setIsVideoModalOpen(true)}
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 text-primary ml-1" />
            </div>
          </motion.button>
        </div>
      </div>

      {[
        { icon: Zap, text: "Smart Automation", delay: 0.6 },
        { icon: Users, text: "10x Engagement", delay: 0.8 },
        { icon: TrendingUp, text: "Real-time Analytics", delay: 1 },
      ].map((feature, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
          style={{
            [index === 0 ? "top" : index === 1 ? "right" : "bottom"]: "10%",
            [index === 0 ? "left" : index === 1 ? "top" : "right"]: "10%",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: feature.delay }}
        >
          <feature.icon className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">{feature.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white"
    >
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20 rounded-full bg-gradient-to-r from-primary to-secondary blur-3xl"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-65px)]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left mt-10 lg:mt-0"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full pl-2 pr-4 py-2 shadow-xl mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Star className="h-4 w-4 text-white" />
              </motion.span>
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI-Powered Instagram Growth
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Boost Your{" "}
              <motion.span
                className="inline-flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Instagram className="inline-block w-14 h-14 text-pink-500 mr-2" />
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Sales
                </span>
              </motion.span>{" "}
              with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Smart Automation
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your Instagram business with intelligent automation.
              Handle orders, engage customers, and boost sales - all on
              autopilot. Join{" "}
              <span className="font-semibold text-primary">10,000+</span>{" "}
              successful businesses.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={handleGetStarted}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-secondary flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-3 gap-8 items-center pt-8 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: "2M+", label: "Messages Handled" },
                { number: "10K+", label: "Happy Businesses" },
                { number: "98%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {renderHeroVisual()}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => scrollToSection("features")}
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>

      {isVideoModalOpen && renderVideoModal()}
    </section>
  );
};

export default Hero;
