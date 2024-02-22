import * as React from "react";

function Contact() {
  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Get in Touch</h1>
      <p style={{ fontSize: '1.2rem', fontWeight: '' }}>
        Hello there! Whether you have a question, a collaboration idea, or just want to say hello, I'd love to hear from you. 
        Feel free to reach out using any of the methods below:
      </p>

      <div style={{ textAlign: 'center', color: 'white', fontFamily: 'Arial, sans-serif' }}>
  <p style={{ marginBottom: '20px' }}>
    Email: <a href="mailto:ccasilihan@gbox.ncf.edu.ph" style={{ color: 'white', textDecoration: 'none' }}>ccasilihan@gbox.ncf.edu.ph</a><br />
    Phone: <a href="tel:+15551234567" style={{ color: 'white', textDecoration: 'none' }}>09949224885</a>
  </p>
  <p style={{ marginBottom: '20px' }}>
    Social Media:<br />
    Facebook: <a href="https://www.facebook.com/charisse.casilihan/" style={{ color: 'white', textDecoration: 'none' }}>Charisse Charmihan Casilihan</a>
  </p>
</div>



    </div>
  );
}

export default Contact;

