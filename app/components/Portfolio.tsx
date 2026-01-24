'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock data — replace with real image paths later
  const portfolioItems = [
    {
      id: 1,
      category: 'Textile Patterns',
      title: 'Ethereal Blooms',
      year: '2025',
      img: '/textile1.jpeg'
    },
    {
      id: 2,
      category: 'Textile Patterns',
      title: 'Geometric Weaves',
      year: '2024',
      img: '/textile2.jpeg'
    },
    {
      id: 3,
      category: 'Textile Patterns',
      title: ' Weaves',
      year: '2024',
      img: '/textilee.jpeg'
    },
    
    {
      id: 4,
      category: 'Fashion Collections',
      title: 'Urban Nomad',
      year: '2024',
      img: '/fashion1.jpeg'
    },
    {
      id: 16,
      category: 'Fashion Collections',
      title: 'Urban Nomad',
      year: '2024',
      img: '/fashion3.jpeg'
    },
    {
      id: 5,
      category: 'Fashion Collections',
      title: 'Coastal Drift',
      year: '2025',
      img: '/fashion2.jpeg'
    },
    {
      id: 6,
      category: 'Sketches & Concepts',
      title: 'Spring 2025 Line',
      year: '2024',
      img: '/sketch1.jpeg'
    },
    {
      id: 7,
      category: 'Sketches & Concepts',
      title: 'Evening Silhouettes',
      year: '2024',
      img: '/sketch2.jpeg'
    },
    {
      id: 14,
      category: 'Sketches & Concepts',
      title: 'Evening Silhouettes',
      year: '2024',
      img: '/sketch3.jpeg'
    },
    

    {
      id: 8,
      category: 'Embroidery',
      title: 'Botanical Embellishments',
      year: '2025',
      img: '/embriodery1.jpeg'
    },
    {
      id: 20,
      category: 'Embroidery',
      title: ' Embellishments',
      year: '2025',
      img: '/emb3.jpeg'
    },
    {
      id: 9,
      category: 'Embroidery',
      title: 'Threaded Memories',
      year: '2024',
      img: '/embroidery2.jpeg'
    },
    {
      id: 10,
      category: 'Fabric Experiments',
      title: 'Natural Dye Lab',
      year: '2025',
      img: '/fabric1.jpeg'
    },
    {
      id: 111,
      category: 'Fabric Experiments',
      title: 'Woven Textures',
      year: '2024',
      img: '/fabric3.jpeg'
    },
    {
  id: 112,
  category: 'Fabric Experiments',
  title: 'Woven Textures',
  year: '2024',
  img: '/txtile.jpeg'
}
    
  ];

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const categories = ['All', 'Textile Patterns', 'Fashion Collections', 'Sketches & Concepts', 'Embroidery', 'Fabric Experiments'];

  return (
    <section id="portfolio" className="portfolio" style={{ padding: '60px 0', backgroundColor: '#fafafa' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', margin: '60px 0 20px', color: '#222' }}>Collections & Work</h2>
        <p style={{ textAlign: 'center', fontSize: '1rem', color: '#666', marginBottom: '30px' }}>
          Explore a curated selection of textile designs, fashion collections, and creative experiments
        </p>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '30px'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              style={{
                padding: '10px 20px',
                backgroundColor: activeFilter === category ? '#d67a2b' : '#f0f0f0',
                color: activeFilter === category ? 'white' : '#333',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of Items */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="portfolio-item"
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                height: '400px',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '15px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                color: 'white',
                fontSize: '0.9rem',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 5px', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ margin: '0', fontSize: '0.8rem' }}>{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}