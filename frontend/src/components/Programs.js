import React from 'react';
import '../styles/Programs.css';
import image1 from "../assets/Home1.jpg"

const OngoingPrograms = () => {
  const programs = [
    {
      title: 'Healthcare for All',
      description: 'Providing essential healthcare services for underprivileged communities.',
      imageUrl: image1,
      link: '/programs/healthcare',
    },
    {
      title: 'Youth Education',
      description: 'Ensuring education opportunities for children in marginalized areas.',
      imageUrl: '/images/education.jpg',
      link: '/programs/education',
    },
    {
      title: 'Environmental Sustainability',
      description: 'Promoting sustainable development and environmental conservation.',
      imageUrl: '/images/environment.jpg',
      link: '/programs/environment',
    },
    {
      title: 'Women Empowerment',
      description: 'Supporting women in gaining financial independence and leadership opportunities.',
      imageUrl: '/images/women-empowerment.jpg',
      link: '/programs/women-empowerment',
    },
  ];

  return (
    <section className="ongoing-programs">
      <div className="container">
        <h2 className="section-title">Ongoing Programs</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-item" key={index}>
              <div className="program-image-wrapper">
                <img src={program.imageUrl} alt={program.title} className="program-image" />
              </div>
              <div className="program-content">
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <a href={program.link} className="program-link">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingPrograms;





