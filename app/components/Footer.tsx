export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#222', color: 'white', fontSize: '0.9rem' }}>
      © {new Date().getFullYear()} zara. All rights reserved.
    </footer>
  );
}