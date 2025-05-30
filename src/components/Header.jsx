import React from 'react';
import './Header.css'; // Vamos criar este arquivo de CSS

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Guia de Profissões</h1>
        <nav>
          <ul>
            <li><a href="#profissoes">Profissões</a></li>
            <li><a href="#categorias">Categorias</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;