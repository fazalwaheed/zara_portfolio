'use client';

import { useState, useEffect } from 'react';

export default function Services() {
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

    const section = document.getElementById('services');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '👕',
      title: 'Custom Garment Design',
      description: 'Bespoke fashion pieces tailored to your vision, from concept sketches to final garment construction.',
      items: [
        'One-on-one design consultation',
        'Custom pattern development',
        'Fabric sourcing and selection',
        'Artisan craftsmanship'
      ]
    },
    {
      icon: '🎨',
      title: 'Textile Pattern Development',
      description: 'Original textile designs for fashion brands, home décor, and commercial applications.',
      items: [
        'Digital and hand-drawn patterns',
        'Color palette development',
        'Scalable repeat patterns',
        'Print-ready file preparation'
      ]
    },
    {
      icon: '✨',
      title: 'Styling Consultation',
      description: 'Expert styling advice for editorials, campaigns, and personal branding projects.',
      items: [
        'Wardrobe curation',
        'Photoshoot styling',
        'Brand aesthetic development',
        'Trend forecasting'
      ]
    },
    {
      icon: '🤝',
      title: 'Freelance Collaborations',
      description: 'Partnership opportunities for brands, studios, and creative agencies on special projects.',
      items: [
        'Collection development',
        'Creative direction',
        'Workshop facilitation',
        'Product line consulting'
      ]
    }
  ];

  return (
    <section id="services" className="services" style={{
      backgroundColor: 'white',
      padding: '80px 0',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px', color: '#222' }}>How I Can Help</h2>
        <p style={{ textAlign: 'center', fontSize: '1rem', color: '#666', marginBottom: '60px' }}>
          Offering comprehensive textile and fashion design services for individuals and brands
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px'
        }}>
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#f9f9f9',
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
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#d67a2b',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white',
                marginBottom: '20px'
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#222' }}>{s.title}</h3>
              <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>{s.description}</p>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: '#555' }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ marginBottom: '5px' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}