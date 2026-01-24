'use client';

import { useState, useEffect } from 'react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      year: 2025,
      type: 'Work Experience',
      title: 'Kohinoor Textile Mills Ltd., Rawalpindi',
      company: 'Maison Lumière',
      description: 'Worked in Lab, CAD, Digital Printing, and Product development department.',
      icon: '💼',
      color: '#2563eb'
    },
    {
      year: 2024,
      type: 'Exhibitions',
      title: 'Solo Exhibition',
      company: 'Naqsh Art Society Competitions',
      description: '"Threads of Time" - winner of GIK Winner – Still Life.',
      icon: '🏅',
      color: '#f59e0b'
    },
    {
      year: 2023,
      type: 'Collaborations',
      title: 'Collaborative Collection',
      company: 'Training Session at GIK',
      description: 'Training Session at GIK Mastering the Business Model Canvas.',
      icon: '👥',
      color: '#10b981'
    },
    {
      year: 2025,
      type: 'Work Experience',
      title: 'Lecturer at National Textile Institute',
      company: 'institute Islamabad',
      description: 'Year-long residency exploring traditional French textile techniques and modern applications.',
      icon: '💼',
      color: '#2563eb'
    },
    {
      year: 2025,
      type: 'Exhibitions',
      title: 'Final Thesis Exhibition',
      company: 'Women University Swabi',
      description: '2nd Position, Textile Design Batch 2021–2025.',
      icon: '🏅',
      color: '#f59e0b'
    },
    
    {
      year: 2024,
      type: 'Collaborations',
      title: 'Café Interior Design',
      company: 'Women University Swabi',
      description: 'Created exclusive resin art tables and trays, transforming raw materials into functional art pieces.',
      icon: '👥',
      color: '#10b981'
    },
    {
      year: 2025,
      type: 'Work Experience',
      title: 'Textile Lab Assistant',
      company: 'National Textile Institute',
      description: 'Worked in Lab, CAD, Digital Printing, and Product development department.',
      icon: '💼',
      color: '#2563eb'
    }
  ];

  const legend = [
    { type: 'Work Experience', color: '#2563eb', icon: '💼' },
    { type: 'Exhibitions', color: '#f59e0b', icon: '🏅' },
    { type: 'Collaborations', color: '#10b981', icon: '👥' }
  ];

  return (
    <section id="experience" className="experience" style={{
      backgroundColor: '#fafafa',
      padding: '80px 0',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px', color: '#222' }}>Experience & Exhibitions</h2>
        <p style={{ textAlign: 'center', fontSize: '1rem', color: '#666', marginBottom: '40px' }}>
          A timeline of professional milestones, exhibitions, and creative collaborations
        </p>

        {/* Legend */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {legend.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem'
            }}>
              <span style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: item.color,
                display: 'inline-block'
              }}></span>
              <span>{item.icon} {item.type}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{
          position: 'relative',
          paddingLeft: '60px',
          paddingRight: '60px'
        }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: '#ddd',
            transform: 'translateX(-50%)'
          }}></div>

          {events.map((event, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                marginBottom: '60px',
                display: 'flex',
                justifyContent: event.year % 2 === 0 ? 'flex-start' : 'flex-end'
              }}
            >
              {/* Event Dot */}
              <div style={{
                position: 'absolute',
                left: event.year % 2 === 0 ? 'calc(50% - 15px)' : 'auto',
                right: event.year % 2 !== 0 ? 'calc(50% - 15px)' : 'auto',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: event.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                zIndex: 1
              }}>
                {event.icon}
              </div>

              {/* Event Card — WITH HOVER EFFECT */}
              <div
                style={{
                  width: '40%',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  transform: isVisible ? 'translateX(0)' : event.year % 2 === 0 ? '-100px' : '100px',
                  opacity: isVisible ? 1 : 0,
                  transition: 'transform 0.6s ease, opacity 0.6s ease, box-shadow 0.3s ease, transform 0.3s ease',
                  // 👇 HOVER EFFECT
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = isVisible 
                    ? (event.year % 2 === 0 ? 'translateX(0) scale(1.03)' : 'translateX(0) scale(1.03)')
                    : (event.year % 2 === 0 ? '-100px scale(1.03)' : '100px scale(1.03)');
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = isVisible 
                    ? (event.year % 2 === 0 ? 'translateX(0)' : 'translateX(0)')
                    : (event.year % 2 === 0 ? '-100px' : '100px');
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ color: '#d67a2b', fontWeight: 'bold', marginBottom: '5px' }}>{event.year}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#222' }}>{event.title}</h3>
                <div style={{ fontSize: '1rem', color: '#666', marginBottom: '10px' }}>{event.company}</div>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}