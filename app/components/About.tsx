export default function About() {
  return (
    <section id="about" className="about" style={{ padding: '60px 0', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
      <div className="about-image" style={{ flex: 1, minWidth: '300px' }}>
        <img src="about.png" alt="Zahra Ishfaq" style={{ width: '70%', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
      </div>
      <div className="about-content" style={{ flex: 1, minWidth: '300px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#222' }}>About the Designer</h2>
        <h3 style={{ fontSize: '1rem', color: '#d67a2b', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Zahra Ishfaq</h3>
        <p style={{ color: '#555', marginBottom: '20px' }}>
          I am zahra Ishfaq, 24 years old,I recently completed my Bachelor's in Textile Designing . For my final thesis, I worked on nature sustainability and designed a sustainable art cafe for my display. 
        </p>
        <p style={{ color: '#555' }}>
         Alhamdulillah , I secured 2nd position in my 2021-2025 batch for my work. My passion lies in creating unique textile patterns and fashion pieces that tell a story. I believe in the power of design to inspire change and bring beauty into everyday life.
        </p>
      </div>
    </section>
  );
}