import React from 'react';
import './Footer.css'; // Vamos criar este arquivo de CSS

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Guia de Profissões. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#privacidade">Política de Privacidade</a>
          <a href="#termos">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;