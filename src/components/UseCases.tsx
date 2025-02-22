import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Coffee, Shirt, Camera, Gift, Cake, ArrowUp } from 'lucide-react';

const useCases = [
  {
    icon: ShoppingBag,
    title: 'E-commerce Stores',
    description: 'Handle product inquiries and orders automatically',
    username: 'VaseegrahVeda',
    likes: '1M',
    comments: 1200,
    shares: 500,
    timeAgo: '2 hours ago',
    image: 'https://vaseegrahveda.com/wp-content/uploads/2023/03/IMG_8934.jpg'
  },
  {
    icon: Coffee,
    title: 'Cafes & Restaurants',
    description: 'Manage table reservations and food orders efficiently',
    username: 'cafe_insider',
    likes: 1897,
    comments: 89,
    shares: 32,
    timeAgo: '4 hours ago',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Shirt,
    title: 'Fashion Boutiques',
    description: 'Answer sizing questions and process clothing orders',
    username: 'fashion_tech',
    likes: 3211,
    comments: 156,
    shares: 78,
    timeAgo: '6 hours ago',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Camera,
    title: 'Photography Studios',
    description: 'Book photography sessions and manage client inquiries',
    username: 'photo_master',
    likes: 1654,
    comments: 92,
    shares: 28,
    timeAgo: '8 hours ago',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Gift,
    title: 'Gift Shops',
    description: 'Handle custom gift requests and delivery scheduling',
    username: 'gift_guru',
    likes: 1232,
    comments: 67,
    shares: 23,
    timeAgo: '12 hours ago',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Cake,
    title: 'Bakeries',
    description: 'Process cake orders and custom dessert requests',
    username: 'bakery_boss',
    likes: 2876,
    comments: 134,
    shares: 56,
    timeAgo: '1 day ago',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  }
];

const UseCases = () => {
  const [displayedCases, setDisplayedCases] = useState(useCases.slice(0, 3));
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll-to-top button
      setShowScrollTop(window.scrollY > 500);

      // Check if we're near the bottom
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000 &&
        !isLoading &&
        displayedCases.length < useCases.length
      ) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedCases.length, isLoading]);

  const loadMore = async () => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const nextItems = useCases.slice(
      displayedCases.length,
      displayedCases.length + 3
    );
    setDisplayedCases(prev => [...prev, ...nextItems]);
    setIsLoading(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
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
          {displayedCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                y: -5,
                rotateX: 2,
                rotateY: 2
              }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform-gpu transition-all duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-white/98 hover:to-white/95"
            >
              {/* Instagram-style Header */}
              <div className="p-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full ring-2 ring-white flex items-center justify-center">
                    <useCase.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">@{useCase.username}</h3>
                    <span className="text-xs text-gray-500">{useCase.timeAgo}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                    <circle cx="5" cy="12" r="2" />
                  </svg>
                </button>
              </div>

              {/* Post Content with Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 group-hover:shadow-inner">
                <motion.img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/800x600?text=${useCase.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Post Caption */}
              <div className="p-4">
                <h4 className="font-semibold text-gray-900">{useCase.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{useCase.description}</p>
              </div>

              {/* Instagram-style Footer */}
              <div className="px-4 py-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-green-500 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </motion.button>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </motion.button>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-900">{useCase.likes.toLocaleString()} likes</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{useCase.comments} comments</span>
                    <span>•</span>
                    <span>{useCase.shares} shares</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading Spinner */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center mt-8"
            >
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCases;