import React from 'react';
import '../styles/CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Boosting Productivity with AI',
      description: 'How we helped a leading company increase productivity by 200%.',
      image: 'https://picsum.photos/400/300?random=15',
    },
    {
      id: 2,
      title: 'Seamless Collaboration',
      description: 'A case study on improving team collaboration with our tools.',
      image: 'https://picsum.photos/400/300?random=16',
    },
    {
      id: 3,
      title: 'Real-Time Analytics Success',
      description: 'How real-time analytics transformed a business.',
      image: 'https://picsum.photos/400/300?random=17',
    },
  ];

  return (
    <div className="case-studies">
      <h2>Case Studies</h2>
      <div className="case-studies-list">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.id} className="case-study-item">
            <img src={caseStudy.image} alt={caseStudy.title} />
            <h3>{caseStudy.title}</h3>
            <p>{caseStudy.description}</p>
            <a href="/">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;