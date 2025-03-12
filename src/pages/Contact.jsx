import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

export default function Contact() {
  const formRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    source: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be implemented here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            Get in Touch
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with intelligent technology solutions? Contact our team to discuss your challenges.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={contactRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {contactInfo.map((info, index) => (
              <div key={index} className="card card-hover text-center p-8">
                <div className="text-accent text-3xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-300">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div ref={formRef} className="card p-8">
              <h2 className="text-3xl font-bold mb-8 text-gradient-animate text-center">
                Request Free Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company*
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type*
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description*
                  </label>
                  <textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                {/* Additional Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select Source</option>
                    {sources.map((source, index) => (
                      <option key={index} value={source}>{source}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="button-primary w-full">
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient-animate">Follow Us</h2>
          <div className="flex justify-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <span className="text-3xl">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const contactInfo = [
  {
    icon: "📍",
    title: "Address",
    value: "Tech Innovation Park, Vijay Nagar, Indore, MP, India"
  },
  {
    icon: "📧",
    title: "Email",
    value: "info@marutisolutions.com"
  },
  {
    icon: "📞",
    title: "Phone",
    value: "+91 (731) XXX-XXXX"
  },
  {
    icon: "🕒",
    title: "Hours",
    value: "Monday-Friday, 9:00 AM - 6:00 PM IST"
  }
];

const projectTypes = [
  "AI Solutions",
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "IT Consulting",
  "Other"
];

const budgetRanges = [
  "₹5-10 Lakhs",
  "₹10-25 Lakhs",
  "₹25-50 Lakhs",
  "₹50 Lakhs - 1 Crore",
  "Above 1 Crore"
];

const timelines = [
  "Less than 1 month",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "More than 12 months"
];

const sources = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Conference/Event",
  "Other"
];

const socialLinks = [
  {
    icon: "🔗",
    url: "https://linkedin.com/company/maruti-solutions"
  },
  {
    icon: "🐦",
    url: "https://twitter.com/maruti_solutions"
  },
  {
    icon: "📝",
    url: "https://medium.com/@maruti-solutions"
  },
  {
    icon: "💻",
    url: "https://github.com/maruti-solutions"
  }
];
