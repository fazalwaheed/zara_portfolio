export default function Philosophy() {
  const principles = [
    { icon: '❤️', title: 'Handcrafted', desc: 'Every piece is meticulously crafted by hand...' },
    { icon: '🌿', title: 'Sustainable', desc: 'Ethically sourced materials and eco-friendly processes...' },
    { icon: '✨', title: 'Timeless', desc: 'Designs that transcend trends and seasons...' },
    { icon: '🎨', title: 'Artistic', desc: 'Inspired by global art, culture, and nature...' }
  ];

  return (
    <section id="philosophy" className="philosophy" style={{ backgroundColor: '#fafafa', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', margin: '60px 0 20px', color: '#222' }}>Design Philosophy</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px' }}>
          My approach to textile and fashion design is guided by four core principles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {principles.map((p, i) => (
            <div
              key={i}
              className="card"
              style={{
                backgroundColor: 'white',
                padding: '30px',
                textAlign: 'center',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                // 👇 HOVER EFFECT STYLES
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#fff5d9',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem',
                color: '#d67a2b'
              }}>{p.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#222' }}>{p.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}