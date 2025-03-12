import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Aaditya Sharma',
    role: 'Chief Executive Officer',
    image: 'avatars//userimages//Aaditya.jpg',
    description: 'A visionary leader with extensive experience in AI and software development, driving innovation and growth at Maruti Solutions.',
  },
  {
    name: 'Somya Sharma',
    role: 'Chief Technology Officer',
    image: 'avatars//userimages//Somya.jpg',
    description: 'An expert in cutting-edge technologies, leading our technical initiatives and ensuring excellence in all our solutions.',
  },
  {
    name: 'Lavesh Jain',
    role: 'Chief Operations Officer',
    image: 'avatars//userimages//Lavesh.jpg',
    description: 'A strategic thinker with a proven track record in optimizing business operations and delivering exceptional results.',
  },
  {
    name: 'Vivek Raikwar',
    role: 'Head of AI Research',
    image: 'avatars//userimages//Vivek.jpg',
    description: 'Leading our AI research initiatives and developing innovative solutions for complex business challenges.',
  },
  {
    name: 'Vansh Vyas',
    role: 'Head of Product Development',
    image: 'avatars//userimages//Vansh.jpg',
    description: 'A product visionary focused on creating user-centric solutions that transform businesses.',
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl"
          >
            Our Leadership Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Meet the visionaries driving innovation at Maruti Solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-80 w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Photo';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 mt-1">{member.role}</p>
                <p className="mt-3 text-gray-600">{member.description}</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 