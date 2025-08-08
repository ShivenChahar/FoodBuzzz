import React from 'react'
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#FF6B35', // Brand primary orange
        color: '#fff',
        padding: '2rem 1rem',
        marginTop: '3rem',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* About Section */}
        <div style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <h3 style={{ marginBottom: '1rem', fontWeight: 700, fontSize: '1.25rem' }}>
            FoodBuzzz
          </h3>
          <p style={{ lineHeight: 1.6 }}>
            Bringing you the freshest and most delicious meals right to your doorstep. Stay hungry, stay happy!
          </p>
        </div>

        {/* Quick Links 
        <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
          <h4 style={{ marginBottom: '1rem', fontWeight: 600, fontSize: '1.1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/menu" style={linkStyle}>Menu</a></li>
            <li><a href="/myCart" style={linkStyle}>My Orders</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div> */}

        {/* Social Media 
        <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
          <h4 style={{ marginBottom: '1rem', fontWeight: 600, fontSize: '1.1rem' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>  */}

        {/* Contact Info */}
        <div style={{ flex: '1 1 45%', minWidth: '280px', textAlign: 'right'}}>
          <h4 style={{ marginBottom: '1rem', fontWeight: 600, fontSize: '1.1rem' }}>Contact Us</h4>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Email: Shiven@foodbuzzz.com<br />
            Phone: +91 9376328004<br />
            Address: 123 FoodBuzzz Street, Flavour Town
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.3)',
          marginTop: '2rem',
          paddingTop: '1rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          opacity: 0.8,
        }}
      >
        &copy; {new Date().getFullYear()} FoodBuzzz. All rights reserved.
      </div>
    </footer>
  );
}

