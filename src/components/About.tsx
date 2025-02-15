import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Clock,
  MessageSquareMore,
  Zap,
  BarChart3,
} from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const features = [
    {
      icon: MessageSquareMore,
      title: "Automated Responses",
      description:
        "Instant DM replies and comment responses to keep your audience engaged",
    },
    {
      icon: Zap,
      title: "Time-Saving Solutions",
      description:
        "Streamlined social media communication that saves hours every day",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Comprehensive insights to track and improve your Instagram growth",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-purple-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold">ABOUT US</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Powered by <span className="gradient-text">Tech Vaseegrah</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Background and Mission
            </h3>
            <p className="text-lg text-gray-600">
              Tech Vaseegrah is dedicated to transforming businesses through
              cutting-edge website development, artificial intelligence, and
              innovative software solutions. Our mission is to enhance
              productivity, drive growth, and ensure exceptional efficiency for
              our clients.
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mt-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Tech Vaseegrah Team"
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Why We Built Instaxbot
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Instaxbot was created to address the challenges businesses face in
            managing their Instagram presence, helping them grow their audience
            and engage with followers effectively—all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h4>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
