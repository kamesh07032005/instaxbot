import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquareMore, UserPlus, LogIn, Check } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [signupStep, setSignupStep] = useState(1);
  const [businessDetails, setBusinessDetails] = useState({
    category: '',
    monthlyOrders: '',
    challenges: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleSignup = () => {
    setShowSignupModal(true);
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

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

  const renderModal = (isLogin: boolean) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={closeModals}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full shadow-2xl border border-white/20 relative overflow-hidden ${isLogin ? 'bg-gradient-to-br from-primary/5 to-secondary/5' : 'bg-gradient-to-br from-secondary/5 to-primary/5'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated background gradients */}
          <div className={`absolute -top-1/2 -right-1/2 w-96 h-96 ${isLogin ? 'bg-primary/10' : 'bg-secondary/10'} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute -bottom-1/2 -left-1/2 w-96 h-96 ${isLogin ? 'bg-secondary/10' : 'bg-primary/10'} rounded-full blur-3xl animate-pulse delay-1000`} />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg ${isLogin ? 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]' : 'bg-gradient-to-br from-[#FCB045] via-[#FD1D1D] to-[#833AB4]'}`}
            >
              {isLogin ? (
                <LogIn className="w-8 h-8 text-white" />
              ) : (
                <UserPlus className="w-8 h-8 text-white" />
              )}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-center mb-2"
            >
              {isLogin ? "Welcome Back" : "Join InstaXBot"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 text-center mb-6"
            >
              {isLogin
                ? "Sign in to manage your Instagram business"
                : "Start growing your Instagram presence today"}
            </motion.p>

            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <input
                  type="email"
                  id={`${isLogin ? 'login' : 'signup'}-email`}
                  className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 placeholder-transparent focus:border-primary focus:ring-0 transition-colors bg-white/50 backdrop-blur-sm"
                  placeholder="Email"
                />
                <label
                  htmlFor={`${isLogin ? 'login' : 'signup'}-email`}
                  className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                >
                  Email address
                </label>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <input
                  type="password"
                  id={`${isLogin ? 'login' : 'signup'}-password`}
                  className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 placeholder-transparent focus:border-primary focus:ring-0 transition-colors bg-white/50 backdrop-blur-sm"
                  placeholder="Password"
                />
                <label
                  htmlFor={`${isLogin ? 'login' : 'signup'}-password`}
                  className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                >
                  Password
                </label>
              </motion.div>

              {!isLogin && signupStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <input
                    type="password"
                    id="confirm-password"
                    className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 placeholder-transparent focus:border-primary focus:ring-0 transition-colors bg-white/50 backdrop-blur-sm"
                    placeholder="Confirm Password"
                  />
                  <label
                    htmlFor="confirm-password"
                    className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Confirm Password
                  </label>
                </motion.div>
              )}

              {!isLogin && signupStep === 2 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <select
                      id="business-category"
                      value={businessDetails.category}
                      onChange={(e) => setBusinessDetails(prev => ({ ...prev, category: e.target.value }))}
                      className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white/50 backdrop-blur-sm"
                      required
                    >
                      <option value="">Select your business category</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="food">Food & Beverage</option>
                      <option value="fashion">Fashion & Apparel</option>
                      <option value="beauty">Beauty & Wellness</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                  >
                    <input
                      type="number"
                      id="monthly-orders"
                      value={businessDetails.monthlyOrders}
                      onChange={(e) => setBusinessDetails(prev => ({ ...prev, monthlyOrders: e.target.value }))}
                      className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 placeholder-transparent focus:border-primary focus:ring-0 transition-colors bg-white/50 backdrop-blur-sm"
                      placeholder="Monthly Orders"
                      required
                    />
                    <label
                      htmlFor="monthly-orders"
                      className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Average Monthly Orders
                    </label>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                    <textarea
                      id="challenges"
                      value={businessDetails.challenges}
                      onChange={(e) => setBusinessDetails(prev => ({ ...prev, challenges: e.target.value }))}
                      className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 placeholder-transparent focus:border-primary focus:ring-0 transition-colors bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Challenges"
                      rows={3}
                      required
                    />
                    <label
                      htmlFor="challenges"
                      className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Current Instagram Sales Challenges
                    </label>
                  </motion.div>
                </>
              )}

              {isLogin && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between text-sm"
                >
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-4 h-4 border-2 border-gray-300 rounded group-hover:border-primary peer-checked:border-primary peer-checked:bg-primary transition-colors" />
                      <motion.div
                        initial={false}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute inset-0 flex items-center justify-center text-white transform scale-0 peer-checked:scale-100"
                      >
                        <Check className="w-3 h-3" />
                      </motion.div>
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-800">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    Forgot password?
                  </a>
                </motion.div>
              )}

              <div className="flex space-x-4">
                {!isLogin && signupStep === 2 && (
                  <motion.button
                    type="button"
                    onClick={() => setSignupStep(1)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex-1 py-3 rounded-lg text-gray-800 font-medium border-2 border-gray-200 hover:border-primary transition-all duration-300"
                  >
                    Back
                  </motion.button>
                )}
                <motion.button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!isLogin && signupStep === 1) {
                      setSignupStep(2);
                    }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`flex-1 py-3 rounded-lg text-white font-medium shadow-lg transition-all duration-300 relative overflow-hidden ${isLogin ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:shadow-purple-500/25 transition-all duration-300' : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:shadow-violet-500/25 transition-all duration-300'}`}
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  <span className="relative">
                    {isLogin ? "Sign In" : (signupStep === 1 ? "Next" : "Create Account")}
                  </span>
                </motion.button>
              </div>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {["google", "github", "twitter"].map((provider) => (
                  <motion.button
                    key={provider}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg border-2 border-gray-200 hover:border-primary/20 hover:bg-primary/5 transition-colors"
                  >
                    <img
                      src={`/icons/${provider}.svg`}
                      alt={provider}
                      className="w-5 h-5 mx-auto"
                    />
                  </motion.button>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-sm text-gray-600"
              >
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => {
                    closeModals();
                    setTimeout(() => {
                      isLogin ? setShowSignupModal(true) : setShowLoginModal(true);
                    }, 100);
                  }}
                  className="font-medium text-primary hover:text-secondary transition-colors"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </motion.p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
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
                  <div className="absolute -inset-3 bg-gradient-to-r from-[#833AB4]/20 to-[#FD1D1D]/20 rounded-full blur" />
                  <MessageSquareMore className="w-8 h-8 text-primary relative" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] rounded-full"
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
                  <span className="text-xl font-bold bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text">
                    Insta
                  </span>
                  <span className="text-xl font-bold bg-gradient-to-r from-[#FD1D1D] to-[#833AB4] text-transparent bg-clip-text">
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
                      ${activeLink === href
                        ? `text-gray-900 ${isScrolled ? "bg-white/60" : "bg-white/20"}`
                        : `text-gray-800 hover:text-gray-900 ${isScrolled
                            ? "hover:bg-white/50"
                            : "hover:bg-white/20"}`
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                    {activeLink === href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#833AB4] to-[#FD1D1D]"
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
                    className="px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:shadow-[#FD1D1D]/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.button>
                  <motion.button
                    onClick={handleSignup}
                    className="px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#FCB045] via-[#FD1D1D] to-[#833AB4] hover:shadow-[#833AB4]/25 transition-all duration-300"
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
                      className="block px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-white/60"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {label}
                    </motion.a>
                  ))}
                  <div className="flex flex-col space-y-2 mt-4">
                    <motion.button
                      onClick={handleLogin}
                      className="w-full px-6 py-3 rounded-lg border border-gray-800 text-gray-800 font-medium hover:bg-gray-800 hover:text-white"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Login
                    </motion.button>
                    <motion.button
                      onClick={handleSignup}
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium"
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

      <AnimatePresence>
        {showLoginModal && renderModal(true)}
        {showSignupModal && renderModal(false)}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
