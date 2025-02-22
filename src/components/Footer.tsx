import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Linkedin, Send, MessageSquareMore } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ["Features", "Pricing", "Case Studies", "Reviews", "Updates"],
    Company: ["About", "Careers", "Press", "News", "Contact"],
    Resources: ["Blog", "Newsletter", "Help Center", "Tutorials", "API"],
    Legal: ["Privacy", "Terms", "Security", "Cookies", "Compliance"],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.a 
              href="/" 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur" />
                <MessageSquareMore className="w-8 h-8 text-primary relative" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">Insta</span>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">xbot</span>
              </div>
            </motion.a>
            <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
              Transform your Instagram business with automated messaging and
              intelligent customer engagement tools powered by cutting-edge AI technology.
            </p>
            <div className="mt-8 flex space-x-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <motion.li 
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-primary transition-colors relative group"
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 border-t border-gray-200/50 pt-8"
        >
          <div className="max-w-md">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-gray-600">
              Get the latest updates and news directly in your inbox.
            </p>
            <form className="mt-4 sm:flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300 focus:bg-white"
              />
              <motion.button
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-3 btn-primary px-5 py-2 flex items-center justify-center space-x-2 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Subscribe</span>
                <Send className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 border-t border-gray-200/50 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} InstaBot. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-8">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ y: -2 }}
                  >
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
