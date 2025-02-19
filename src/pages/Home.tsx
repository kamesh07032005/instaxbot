import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
// Import other components as needed

const Home = () => {
  return (
    <main className="pt-[65px]">
      <Hero />
      <Features />
      {/* Add other components in the order you want them to appear */}
    </main>
  );
};

export default Home;
