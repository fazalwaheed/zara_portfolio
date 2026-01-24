'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const textileTechniques = [
    'Hand Weaving',
    'Screen Printing',
    'Embroidery',
    'Batik',
    'Natural Dyeing',
    'Block Printing',
    'Shibori',
    'Quilting'
  ];

  const digitalTools = [
    { name: 'Adobe Illustrator', level: 95 },
    { name: 'Adobe Photoshop', level: 90 },
    { name: 'CLO 3D', level: 85 },
    { name: 'Procreate', level: 88 },
    { name: 'InDesign', level: 80 }
  ];

  const expertiseAreas = [
    { icon: '🎨', title: 'Color Theory', desc: 'Expert in color matching and palette development' },
    { icon: '✂️', title: 'Pattern Making', desc: 'Technical pattern drafting and grading' },
    { icon: '📈', title: 'Trend Analysis', desc: 'Fashion forecasting and market research' },
    { icon: '💻', title: 'Digital Design', desc: 'CAD and 3D visualization expertise' }
  ];

  return (
    <section id="skills" className="skills" style={{
      backgroundColor: '#121212',
      padding: '80px 0',
      color: 'white',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px', color: 'white' }}>Skills & Tools</h2>
        <p style={{ textAlign: 'center', fontSize: '1rem', color: '#aaa', marginBottom: '60px' }}>
          A combination of traditional craft techniques and modern digital tools
        </p>

        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* Textile Techniques */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            backgroundColor: '#1a1a1a',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#d67a2b' }}>
              <span style={{ fontSize: '1.5rem' }}>🧶</span> Textile Techniques
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {textileTechniques.map((tech, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#222',
                    padding: '10px 15px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(214, 122, 43, 0.3)';
                    e.currentTarget.style.backgroundColor = '#2a2a2a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#222';
                  }}
                >
                  <span style={{ fontSize: '0.8rem' }}>✨</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Digital Tools */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            backgroundColor: '#1a1a1a',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#d67a2b' }}>
              <span style={{ fontSize: '1.5rem' }}>🖥️</span> Software & Digital Tools
            </h3>
            <div>
              {digitalTools.map((tool, i) => (
                <div key={i} style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span>{tool.name}</span>
                    <span style={{ color: '#d67a2b' }}>{tool.level}%</span>
                  </div>
                  <div style={{
                    height: '6px',
                    backgroundColor: '#333',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div
                      style={{
                        width: `${tool.level}%`,
                        height: '100%',
                        backgroundColor: '#d67a2b',
                        transition: 'width 1s ease',
                        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Expertise Areas */}
        <div style={{
          marginTop: '50px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {expertiseAreas.map((area, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#1a1a1a',
                padding: '25px',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{area.icon}</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>{area.title}</h4>
              <p style={{ fontSize: '0.9rem', color: '#aaa' }}>{area.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}