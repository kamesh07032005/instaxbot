import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquareMore,
  ShoppingCart,
  Zap,
  BarChart3,
  Users,
  Lock,
  ArrowRight,
  Store,
  ShoppingBag,
  Inbox,
} from "lucide-react";
import { scrollToSection } from "../utils/navigation";
import ChatDemo from "./ChatDemo";

const features = [
  {
    icon: MessageSquareMore,
    title: "Smart Auto-Replies",
    description: "AI-powered responses that sound human and drive engagement",
    stats: "45% faster response time",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    description: "Track and manage orders directly from Instagram messages",
    stats: "92% order accuracy",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Multi-Agent Support",
    description: "Collaborate with your team in a unified inbox",
    stats: "Handle 3x more customers",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "Automate repetitive tasks with one-click shortcuts",
    stats: "Save 20 hours/week",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track performance metrics and customer insights",
    stats: "Data-driven decisions",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption for your business data",
    stats: "99.9% uptime",
    color: "from-cyan-500 to-blue-500",
  },
];

const additionalFeatures = [];

const useCases = [
  {
    title: "Retail & E-commerce",
    description:
      "Streamline customer support and boost sales with automated responses",
    stats: "3x faster response time",
  },
  {
    title: "Service Providers",
    description:
      "Schedule appointments and maintain client relationships effortlessly",
    stats: "80% reduction in manual tasks",
  },
  {
    title: "Content Creators",
    description:
      "Engage with followers, manage collaborations, and automate responses",
    stats: "2x engagement rate",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block p-2 bg-white rounded-2xl shadow-xl mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl text-white font-semibold">
              Features & Benefits
            </span>
          </motion.div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Everything You Need to{" "}
            <span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you manage Instagram messages
            efficiently and convert more customers.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5, rotateY: 5 }}
              className="group relative bg-white/95 backdrop-blur-lg p-6 rounded-3xl 
              shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)]
              border border-gray-100/50 transition-all duration-500 overflow-hidden
              hover:bg-gradient-to-br hover:from-white/98 hover:to-white/90
              transform perspective-1000 hover:rotate-y-3 hover:-rotate-x-3"
            >
              {/* Enhanced Gradient Background Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 
              transition-all duration-500 ease-out from-primary/40 to-secondary/40
              group-hover:scale-105 transform-gpu blur-[2px]"
              />

              {/* Enhanced Blur Effect on Hover */}
              <div
                className="absolute inset-0 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 
              transition-all duration-500 ease-out"
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-3.5
                  transform group-hover:scale-115 transition-all duration-300 
                  shadow-lg hover:shadow-2xl flex items-center justify-center
                  relative before:absolute before:inset-0 before:rounded-2xl
                  before:bg-gradient-to-br before:from-white/30 before:to-transparent/10
                  hover:rotate-6 group-hover:translate-y-[-5px]`}
                >
                  <feature.icon className="w-9 h-9 text-white relative z-10" />
                </motion.div>
              </div>

              {/* Feature Content with Enhanced Typography */}
              <div className="mt-7 relative z-10 space-y-4">
                <h3
                  className="text-2xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-primary 
                group-hover:to-secondary transition-all duration-300"
                >
                  {feature.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span
                    className="px-4 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 
                  rounded-full text-sm font-semibold text-primary"
                  >
                    {feature.stats}
                  </span>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                  {feature.description}
                </p>

                {/* Enhanced Learn More Link */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center text-primary font-medium 
                  group-hover:text-secondary transition-colors duration-500 pt-2 
                  relative overflow-hidden hover:pl-2"
                >
                  <span className="relative">
                    Learn more
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary 
                    group-hover:w-full transition-all duration-300"
                    />
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </motion.div>
              </div>

              {/* Animated Border Gradient */}
              <div
                className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 from-primary/20 via-secondary/20 to-primary/20"
              >
                <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => scrollToSection("pricing")}
            className="btn-primary group"
          >
            <span>View Pricing</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Chat Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-48"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Experience the Power of AI-Driven Conversations
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
            See how our intelligent chatbot handles real customer interactions
          </p>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chat Demo Section - Left Side */}
            <div className="max-w-[420px] mx-auto lg:ml-0">
              <ChatDemo />
            </div>

            {/* Description Section - Right Side */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Transform Your Instagram Business
                </h4>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our AI-powered chatbot understands context, maintains natural conversations, and helps you convert more customers. Experience seamless automation that feels personal and engaging.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <MessageSquareMore className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Natural Conversations</h5>
                    <p className="text-gray-600">AI-driven responses that sound human and maintain context</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Seamless Order Processing</h5>
                    <p className="text-gray-600">Handle product inquiries and orders automatically</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">24/7 Customer Support</h5>
                    <p className="text-gray-600">Never miss a customer inquiry, even outside business hours</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group inline-flex items-center space-x-2"
                onClick={() => scrollToSection("pricing")}
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Perfect for Every Business
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
            See how different businesses are using our platform to grow
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className="h-full flex flex-col">
                  <h4
                    className="text-2xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-primary to-secondary"
                  >
                    {useCase.title}
                  </h4>
                  <p className="mt-4 text-gray-600 flex-grow">
                    {useCase.description}
                  </p>
                  <motion.div
                    className="mt-6 inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 
                    to-secondary/10 rounded-full text-primary font-semibold"
                    >
                      {useCase.stats}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              whileHover={{ scale: 1.02 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
              transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color}
              transform group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h4
                className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-primary 
              transition-colors"
              >
                {feature.title}
              </h4>

              <p className="mt-4 text-gray-600">{feature.description}</p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-4 bg-gray-50 rounded-xl transform group-hover:-translate-y-1 
                transition-transform duration-300"
              >
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-primary">Use Case: </span>
                  {feature.useCase}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
