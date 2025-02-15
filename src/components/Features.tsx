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

const additionalFeatures = [
  {
    icon: Store,
    title: "E-commerce Integration",
    description:
      "Perfect for online stores managing product inquiries and orders through Instagram",
    useCase: "Fashion retailers automating size and availability queries",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: ShoppingBag,
    title: "Order Processing",
    description:
      "Streamline your order management workflow from inquiry to fulfillment",
    useCase: "Food businesses managing daily order volumes efficiently",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Inbox,
    title: "Message Organization",
    description:
      "Smart categorization of messages based on intent and priority",
    useCase: "Service providers managing multiple client conversations",
    color: "from-emerald-500 to-green-500",
  },
];

const useCases = [
  {
    title: "Retail & E-commerce",
    description:
      "Handle product inquiries, process orders, and manage customer support automatically",
    stats: "3x faster response time",
  },
  {
    title: "Service Providers",
    description:
      "Schedule appointments, answer FAQs, and maintain client relationships effortlessly",
    stats: "80% reduction in manual tasks",
  },
  {
    title: "Content Creators",
    description:
      "Engage with followers, manage collaborations, and automate responses to common questions",
    stats: "2x engagement rate",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-gray-50 relative overflow-hidden px-4 sm:px-6 lg:px-8"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Feature Card Header */}
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary font-medium">
                    {feature.stats}
                  </p>
                </div>
              </div>

              {/* Feature Description */}
              <p className="mt-4 text-gray-600">{feature.description}</p>

              {/* Learn More Link */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-4 flex items-center text-primary font-medium group-hover:text-secondary transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => scrollToSection("pricing")}
            className="btn-primary group"
          >
            <span>View Pricing</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Real-World Applications
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            See how businesses are transforming their Instagram presence with
            Instaxbot
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h4 className="text-xl font-semibold text-gray-900">
                {useCase.title}
              </h4>
              <p className="mt-2 text-gray-600">{useCase.description}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-primary font-medium">
                  {useCase.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color}`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h4>
              <p className="mt-2 text-gray-600">{feature.description}</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Use Case:</span>{" "}
                  {feature.useCase}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => scrollToSection("pricing")}
            className="btn-primary group"
          >
            <span>Start Automating Today</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
