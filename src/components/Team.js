import React from 'react';
import '../styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      image: 'https://picsum.photos/150/150?random=12',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://picsum.photos/150/150?random=13',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'Product Manager',
      image: 'https://picsum.photos/150/150?random=14',
    },
  ];

  return (
    <div className="team">
      <h2>Our Team</h2>
      <div className="team-list">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;