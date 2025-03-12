import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background-light to-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-6"
        >
          Coming soon...
        </motion.p>
      </div>
    </div>
  );
}
