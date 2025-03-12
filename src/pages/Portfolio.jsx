import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Portfolio() {
  const aiSection = useScrollAnimation();
  const webSection = useScrollAnimation();
  const customSection = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            Our Portfolio
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* AI & ML Projects */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gradient-animate">
            AI & Machine Learning Projects
          </h2>
          <div ref={aiSection} className="grid md:grid-cols-2 gap-8 stagger-children">
            {aiProjects.map((project, index) => (
              <div key={index} className="card card-hover">
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{project.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Challenge:</h4>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Solution:</h4>
                  <p className="text-gray-300">{project.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-background-light/30 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-accent font-bold mb-2">Results:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web & Mobile Projects */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gradient-animate">
            Web & Mobile Development Projects
          </h2>
          <div ref={webSection} className="grid md:grid-cols-2 gap-8 stagger-children">
            {webProjects.map((project, index) => (
              <div key={index} className="card card-hover">
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{project.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Challenge:</h4>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Solution:</h4>
                  <p className="text-gray-300">{project.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-background-light/30 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-accent font-bold mb-2">Results:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software Solutions */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gradient-animate">
            Custom Software Solutions
          </h2>
          <div ref={customSection} className="grid md:grid-cols-2 gap-8 stagger-children">
            {customProjects.map((project, index) => (
              <div key={index} className="card card-hover">
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{project.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Challenge:</h4>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Solution:</h4>
                  <p className="text-gray-300">{project.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-background-light/30 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-accent font-bold mb-2">Results:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div className="card p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise in AI, web development, and custom software solutions
              can help you achieve your business goals.
            </p>
            <button className="button-primary">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const aiProjects = [
  {
    title: "Predictive Maintenance System",
    challenge: "A leading manufacturing company was experiencing unexpected equipment failures resulting in costly downtime.",
    solution: "We developed an ML-powered predictive maintenance system that analyzes sensor data to forecast equipment failures before they occur.",
    technologies: ["TensorFlow", "IoT sensors", "Custom Dashboard"],
    results: [
      "78% reduction in unplanned downtime",
      "45% decrease in maintenance costs"
    ]
  },
  {
    title: "Intelligent Customer Service Assistant",
    challenge: "An e-commerce company needed to improve customer support while reducing operational costs.",
    solution: "We created a custom RAG-based AI assistant that handles customer inquiries, processes returns, and escalates complex issues to human agents.",
    technologies: ["OpenAI APIs", "Vector Databases", "Knowledge Management System"],
    results: [
      "65% of inquiries now handled automatically",
      "40% reduction in response time",
      "92% customer satisfaction"
    ]
  }
];

const webProjects = [
  {
    title: "Enterprise Resource Planning Platform",
    challenge: "A growing business needed to integrate disparate systems across departments.",
    solution: "We designed and developed a comprehensive ERP solution with custom modules for inventory, HR, finance, and customer management.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    results: [
      "60% improvement in cross-departmental workflow efficiency",
      "Complete data integration across all business functions"
    ]
  },
  {
    title: "Cross-Platform Delivery Management App",
    challenge: "A logistics company needed a seamless solution for delivery tracking and management.",
    solution: "We built a cross-platform application for real-time tracking, route optimization, and delivery confirmation.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Custom Backend"],
    results: [
      "35% reduction in delivery times",
      "99.8% delivery confirmation accuracy"
    ]
  }
];

const customProjects = [
  {
    title: "Automated Document Processing System",
    challenge: "A financial services firm was manually processing thousands of documents daily.",
    solution: "We developed an AI-powered document processing system that automatically extracts, categorizes, and stores information from various document types.",
    technologies: ["Computer Vision", "NLP", "Custom OCR"],
    results: [
      "90% reduction in manual processing time",
      "99.2% accuracy in data extraction"
    ]
  },
  {
    title: "Healthcare Data Analytics Platform",
    challenge: "A healthcare provider needed better insights from patient data while maintaining strict privacy compliance.",
    solution: "We created a secure analytics platform with anonymization capabilities and predictive health insights.",
    technologies: ["Python", "Secure Cloud Infrastructure", "HIPAA-compliant Architecture"],
    results: [
      "Identified trends leading to 23% improvement in preventative care measures",
      "Maintained complete data security"
    ]
  }
];
