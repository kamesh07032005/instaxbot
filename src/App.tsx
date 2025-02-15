import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquareMore,
  ShoppingCart,
  Zap,
  BarChart3,
  Users,
  Lock,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import UseCases from "./components/UseCases";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <UseCases />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
