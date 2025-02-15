import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { handleGetStarted } from "../utils/navigation";

const plans = {
  monthly: {
    starter: 999,
    professional: 1999,
    enterprise: 4999,
  },
  annually: {
    starter: 9990, // 999 * 12 - 2 months free
    professional: 19990, // 1999 * 12 - 2 months free
    enterprise: 49990, // 4999 * 12 - 2 months free
  },
};

const features = {
  starter: [
    { name: "Basic Auto-Replies", description: "Pre-set message templates" },
    { name: "Instagram DM Integration", description: "Connect 1 account" },
    { name: "Basic Analytics", description: "Message & response metrics" },
  ],
  professional: [
    { name: "Advanced Auto-Replies", description: "AI-powered responses" },
    { name: "Multi-Account Support", description: "Connect up to 3 accounts" },
    { name: "Order Management", description: "Track and process orders" },
    { name: "CRM Integration", description: "Connect with your CRM" },
    {
      name: "Advanced Analytics",
      description: "Detailed performance insights",
    },
    { name: "Priority Support", description: "24/7 dedicated support" },
  ],
  enterprise: [
    { name: "Custom Auto-Replies", description: "Tailored AI responses" },
    { name: "Unlimited Accounts", description: "No account limits" },
    { name: "Custom Integration", description: "Connect with any platform" },
    { name: "Dedicated Manager", description: "Personal account manager" },
  ],
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const calculatePrice = (basePrice: number) => {
    const monthlyPrice = isAnnual ? basePrice / 12 : basePrice;
    return {
      monthly: Math.round(monthlyPrice),
      total: isAnnual ? basePrice : basePrice * 12,
    };
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-purple-50 to-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Simple Pricing
          </span>
          <h2 className="mt-4 text-4xl font-bold">
            Choose Your <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span
            className={`text-sm ${
              !isAnnual ? "text-primary font-semibold" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <motion.button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-16 h-8 rounded-full bg-primary/20 p-1 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-primary shadow-lg"
              animate={{ x: isAnnual ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.button>
          <div className="flex items-center space-x-2">
            <span
              className={`text-sm ${
                isAnnual ? "text-primary font-semibold" : "text-gray-500"
              }`}
            >
              Annual
            </span>
            <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredPlan("starter")}
            onHoverEnd={() => setHoveredPlan(null)}
            className="relative p-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl"
          >
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900">Starter</h3>
              <p className="mt-2 text-gray-500">Perfect for small businesses</p>

              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">
                    ₹
                    {
                      calculatePrice(
                        plans[isAnnual ? "annually" : "monthly"].starter
                      ).monthly
                    }
                  </span>
                  <span className="ml-2 text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <p className="mt-1 text-sm text-gray-500">
                    Billed annually (₹
                    {calculatePrice(plans.annually.starter).total})
                  </p>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {features.starter.map((feature, index) => (
                  <motion.li
                    key={feature.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {feature.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={handleGetStarted}
                className="mt-8 w-full py-3 px-4 rounded-lg border-2 border-gray-200 text-gray-700 font-medium hover:border-primary hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Professional Plan (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredPlan("professional")}
            onHoverEnd={() => setHoveredPlan(null)}
            className="relative p-1 bg-gradient-to-r from-primary to-secondary rounded-2xl"
          >
            <div className="bg-white rounded-xl p-6">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-gray-900">Professional</h3>
              <p className="mt-2 text-gray-500">
                Perfect for growing businesses
              </p>

              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">
                    ₹
                    {
                      calculatePrice(
                        plans[isAnnual ? "annually" : "monthly"].professional
                      ).monthly
                    }
                  </span>
                  <span className="ml-2 text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <p className="mt-1 text-sm text-gray-500">
                    Billed annually (₹
                    {calculatePrice(plans.annually.professional).total})
                  </p>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {features.professional.map((feature, index) => (
                  <motion.li
                    key={feature.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {feature.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={handleGetStarted}
                className="mt-8 w-full btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={
                    hoveredPlan === "professional"
                      ? { scale: [1, 1.5], opacity: [0, 0.2, 0] }
                      : {}
                  }
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredPlan("enterprise")}
            onHoverEnd={() => setHoveredPlan(null)}
            className="relative p-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl"
          >
            <div className="bg-white rounded-xl p-6">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full">
                  Custom Support
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
              <p className="mt-2 text-gray-500">For large-scale operations</p>

              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">
                    ₹
                    {
                      calculatePrice(
                        plans[isAnnual ? "annually" : "monthly"].enterprise
                      ).monthly
                    }
                  </span>
                  <span className="ml-2 text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <p className="mt-1 text-sm text-gray-500">
                    Billed annually (₹
                    {calculatePrice(plans.annually.enterprise).total})
                  </p>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {features.enterprise.map((feature, index) => (
                  <motion.li
                    key={feature.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-gray-900 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {feature.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={handleGetStarted}
                className="mt-8 w-full py-3 px-4 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Money-back guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-gray-600"
        >
          🎉 14-day money-back guarantee • No credit card required • Cancel
          anytime
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
