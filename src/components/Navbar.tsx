import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquareMore } from "lucide-react";

const handleLogin = () => {
  window.location.href = "/login";
};

const handleSignup = () => {
  window.location.href = "/signup";
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const handleScroll = (href: string) => {
    setActiveLink(href);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Background overlay - only visible when scrolled */}
      <div
        className={`fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/50 to-transparent z-40 transition-opacity duration-300
          ${isScrolled ? "opacity-100" : "opacity-0"}`}
      />

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="w-full max-w-7xl mt-4"
        >
          <motion.div
            className={`mx-auto transition-all duration-500 rounded-xl border
              ${
                isScrolled
                  ? "bg-white/30 backdrop-blur-[7.5px] border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                  : "bg-transparent border-transparent"
              }`}
          >
            <div className="px-6 h-[65px] flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center space-x-2 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur" />
                  <MessageSquareMore className="w-8 h-8 text-primary relative" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                    Insta
                  </span>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    xbot
                  </span>
                </div>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map(({ href, label }) => (
                  <motion.a
                    key={href}
                    onClick={() => handleScroll(href)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all
                      ${
                        activeLink === href
                          ? `text-primary ${
                              isScrolled ? "bg-white/50" : "bg-white/10"
                            }`
                          : `text-gray-600 hover:text-primary ${
                              isScrolled
                                ? "hover:bg-white/40"
                                : "hover:bg-white/10"
                            }`
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                    {activeLink === href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                ))}
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={handleLogin}
                    className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.button>
                  <motion.button
                    onClick={handleSignup}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className={`md:hidden p-2 rounded-xl transition-colors duration-300
                  ${
                    isScrolled
                      ? "hover:bg-white/50 border border-white/20"
                      : "hover:bg-white/10"
                  }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Mobile Menu - Only show backdrop blur when scrolled */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`md:hidden mt-2 rounded-xl overflow-hidden
                  ${
                    isScrolled
                      ? "bg-white/30 backdrop-blur-[7.5px] border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                      : "bg-white/10 backdrop-blur-[3px]"
                  }`}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map(({ href, label }) => (
                    <motion.a
                      key={href}
                      onClick={() => {
                        handleScroll(href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {label}
                    </motion.a>
                  ))}
                  <div className="flex flex-col space-y-2 mt-4">
                    <motion.button
                      onClick={handleLogin}
                      className="w-full px-6 py-3 rounded-lg border border-primary text-primary font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Login
                    </motion.button>
                    <motion.button
                      onClick={handleSignup}
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign Up
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
