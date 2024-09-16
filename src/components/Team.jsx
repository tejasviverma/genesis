import React, { useEffect, useRef } from 'react';
import teambg from '../assets/team.png';

const Team = () => {
  // Apps displayed
  const members = [
    { name: 'Debashish', type: 'President', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus pharetra condimentum, bibendum vestibulum quis dictum penatibus posuere?', img: 'debashish' },
    { name: 'Arambh', type: 'Founder', description: 'Elementum augue blandit neque ullamcorper luctus. Vestibulum justo facilisi consequat ultricies efficitur accumsan convallis metus.', img: 'arambh' },
    { name: 'Piyush', type: 'Founder', description: 'Arcu porttitor semper inceptos gravida aptent vestibulum volutpat sed tincidunt.', img: 'piyush' },
    { name: 'X', type: 'Gaming', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit augue proin libero aptent etiam felis nulla.', img: 'x.png' }
  ];

  const teamRef = useRef(null);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          } else {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  return (
    <div
    id='team'
      ref={teamRef}
      className="team-container"
      style={{
        backgroundImage: `url(${teambg})`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background with lowered opacity
        backgroundBlendMode: 'overlay',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1 className="text-6xl font-bold mt-2 mb-8" style={{ textShadow: '0 0 5px pink' }}>TEAM</h1>
      <div className="flex flex-wrap justify-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="m-4 p-4 bg-gray-800 rounded-lg inline-block transition-transform duration-300 ease-in-out"
            style={{
              width: '250px',
              boxShadow: '0 0 10px rgba(255, 20, 147, 0.8), 0 0 20px rgba(255, 165, 0, 0.6)',
              background: 'black', 
              padding: '1px', 
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={member.img}
              alt={member.name}
              style={{ width: '100%', height: '150px', borderRadius: '10px' }}
            />
            <h3 className="text-xl mt-4">{member.name}</h3>
            <p className="text-gray-400 mt-2">
              <strong>{member.type}</strong> <br />
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

