import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Owner",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content:
      "Instaxbot transformed how we handle Instagram messages. Our response time improved by 80% and sales increased significantly!",
    rating: 5,
  },
  {
    name: "Mike Richards",
    role: "Digital Marketing Manager",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    content:
      "The automated responses are incredibly natural. Our customers can't tell they're talking to a bot initially. It's been a game-changer.",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    role: "Fashion Boutique Owner",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    content:
      "Managing orders through Instagram has never been easier. Instaxbot handles everything automatically and keeps our customers informed.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold">TESTIMONIALS</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Loved by <span className="gradient-text">Businesses</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our customers have to say about Instaxbot
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100" />
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
