import React from 'react';
import { FaTasks, FaDonate, FaHandshake, FaUsers, FaChartLine } from 'react-icons/fa'; // Importing icons
import '../styles/JoinUs.css';

const WhyJoinUs = () => {
  const features = [
    {
      icon: <FaTasks />,
      title: 'Efficient Project Management',
      description: 'Manage multiple projects, track progress, and generate detailed reports with ease.',
    },
    {
      icon: <FaDonate />,
      title: 'Donor and Fund Management',
      description: 'Tools to track donations, maintain transparency, and streamline fundraising efforts.',
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration & Networking',
      description: 'Connect with NGOs, partners, and stakeholders to collaborate on impactful projects.',
    },
    // {
    //   icon: <FaUsers />,
    //   title: 'Volunteer Management',
    //   description: 'Organize and recruit volunteers for different initiatives through our dedicated tools.',
    // },
    {
      icon: <FaChartLine />,
      title: 'Analytics and Reports',
      description: 'Generate data-driven reports to showcase project success and areas for improvement.',
    },
  ];

  return (
    <section className="why-join-us">
      <div className="container">
        <h2 className="section-title">Why join us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        <a href="/features" className="cta-button">Learn More About Us</a>
      </div>
    </section>
  );
};

export default WhyJoinUs;
