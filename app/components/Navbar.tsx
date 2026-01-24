'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#222', padding: '15px 0', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Link href="/" className="logo" style={{ color: 'white', fontSize: '18px', textDecoration: 'none' }}>
          Zara Ishfaq
        </Link>
        <div className="nav-menu" style={{ display: 'flex', gap: '20px' }}>
          {['Home', 'Philosophy', 'About', 'Portfolio', 'Contact'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}