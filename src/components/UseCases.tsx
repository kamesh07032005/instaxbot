import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Coffee, Shirt, Camera, Gift, Cake } from 'lucide-react';

const useCases = [
  {
    icon: ShoppingBag,
    title: 'E-commerce Stores',
    description: 'Handle product inquiries and orders automatically'
  },
  {
    icon: Coffee,
    title: 'Cafes & Restaurants',
    description: 'Manage table reservations and food orders efficiently'
  },
  {
    icon: Shirt,
    title: 'Fashion Boutiques',
    description: 'Answer sizing questions and process clothing orders'
  },
  {
    icon: Camera,
    title: 'Photography Studios',
    description: 'Book photography sessions and manage client inquiries'
  },
  {
    icon: Gift,
    title: 'Gift Shops',
    description: 'Handle custom gift requests and delivery scheduling'
  },
  {
    icon: Cake,
    title: 'Bakeries',
    description: 'Process cake orders and custom dessert requests'
  }
];

const UseCases = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Perfect for Every Business
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how different businesses are using Instaxbot to grow
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{useCase.title}</h3>
              <p className="mt-2 text-gray-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;