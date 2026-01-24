'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
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

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "Aria's textile designs brought a unique elegance to our Spring collection. Her attention to detail and understanding of fabric is unparalleled.",
      name: "Sophie Laurent",
      title: "Creative Director, Maison Étoile"
    },
    {
      quote: "Working with Aria was transformative. She didn't just design a pattern—she captured the soul of our brand in fabric form.",
      name: "Marcus Chen",
      title: "Founder, Heritage Textiles Co."
    },
    {
      quote: "Her mastery of both traditional techniques and modern aesthetics is rare. The embroidery work she created for us became the centerpiece of our exhibition.",
      name: "Dr. Elena Rossi",
      title: "Curator, International Textile Museum"
    },
    {
      quote: "Aria combines artistic vision with practical expertise. Every collaboration has exceeded our expectations and elevated our design standards.",
      name: "James Thompson",
      title: "Head of Design, Urban Nomad"
    }
  ];

  return (
    <section id="testimonials" className="testimonials" style={{
      backgroundColor: '#fafafa',
      padding: '80px 0',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px', color: '#222' }}>What Clients Say</h2>
        <p style={{ textAlign: 'center', fontSize: '1rem', color: '#666', marginBottom: '60px' }}>
          Trusted by fashion houses, boutiques, and creative professionals worldwide
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'transform 0.6s ease, opacity 0.6s ease, box-shadow 0.3s ease',
                // 👇 HOVER EFFECT
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = isVisible 
                  ? 'translateY(-5px) scale(1.02)' 
                  : 'translateY(30px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = isVisible 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(30px) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ fontSize: '2rem', color: '#d67a2b', marginBottom: '20px' }}>"</div>
              <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>{t.quote}</p>
              <div style={{ fontWeight: 'bold', color: '#222', marginBottom: '5px' }}>{t.name}</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}