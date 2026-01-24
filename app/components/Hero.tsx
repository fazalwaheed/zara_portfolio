export default function Hero() {
  return (
    <section 
      id="home" 
      className="hero"
      style={{
        height: '90vh',
        backgroundImage: "url('/back1.jpeg')", // ✅ Updated path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '0 20px',
        position: 'relative'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)'
      }}></div>
      
      <h1 style={{ fontSize: '4rem', marginBottom: '10px', fontWeight: 300, zIndex: 1 }}>Zahra Ishfaq</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '10px', zIndex: 1 }}>Textile & Fashion Designer</p>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px', zIndex: 1 }}>"Creating stories through fabric and form"</p>
      
      <div style={{ zIndex: 1 }}>
        {/* ✅ Task 1: Scroll to Portfolio */}
        <a 
          href="#portfolio" 
          className="btn btn-primary"
          style={{
            padding: '12px 24px',
            margin: '0 10px',
            border: '2px solid #d67a2b',
            backgroundColor: '#d67a2b',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}
        >
          View Collection →
        </a>

        {/* ✅ Task 1: Scroll to Contact */}
        <a 
          href="#contact" 
          className="btn btn-secondary"
          style={{
            padding: '12px 24px',
            margin: '0 10px',
            border: '2px solid white',
            backgroundColor: 'transparent',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}