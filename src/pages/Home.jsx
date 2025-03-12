import { motion } from 'framer-motion';
import Scene from '../components/three/Scene';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const servicesRef = useScrollAnimation();
  const techStackRef = useScrollAnimation();
  const heroTextRef = useScrollAnimation({ threshold: 0.5 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Scene />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroTextRef} className="max-w-4xl fade-in">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Business Challenges with{' '}
              <span className="text-gradient-animate">Intelligent Solutions</span>
            </motion.h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-8">
              AI · Machine Learning · Software Development · Digital Transformation
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
            >
              Discover Our Solutions
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-background-light/50">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient-animate">
            Our Services
          </h2>
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card card-hover"
              >
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient-animate">
            Our Technology Stack
          </h2>
          <div ref={techStackRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="card card-hover text-center hover-lift"
              >
                <h4 className="text-lg font-bold mb-2 text-glow">{tech.name}</h4>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-background-light/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold mb-6 text-gradient-animate">
                Advanced AI Solutions
              </h2>
              <p className="text-gray-300 mb-6">
                Leverage cutting-edge artificial intelligence and machine learning technologies
                to transform your business processes and drive innovation.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-accent">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="slide-in-right">
              <div className="card card-hover p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gradient-animate">
                    Ready to Transform?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Start your digital transformation journey with our expert team.
                  </p>
                  <button className="button-secondary">
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "AI Solutions & Implementation",
    description: "Custom AI solutions tailored to your business needs, from machine learning models to natural language processing."
  },
  {
    title: "RAG Systems",
    description: "Advanced Retrieval-Augmented Generation systems for intelligent document processing and knowledge management."
  },
  {
    title: "Machine Learning Models",
    description: "Development and deployment of custom ML models for prediction, classification, and data analysis."
  },
  {
    title: "Web Application Development",
    description: "Modern, responsive web applications built with cutting-edge technologies and frameworks."
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms."
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements and challenges."
  }
];

const techStack = [
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" }
];

const features = [
  "Natural Language Processing",
  "Computer Vision Solutions",
  "Predictive Analytics",
  "Automated Decision Making",
  "Real-time Data Processing",
  "Custom AI Model Development"
];
