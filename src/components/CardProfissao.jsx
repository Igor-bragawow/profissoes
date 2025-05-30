import React from 'react';
import './CardProfissao.css'; // Vamos criar este arquivo de CSS

function CardProfissao({ nome, descricao, habilidades }) {
  return (
    <div className="card-profissao">
      <h3 className="card-title">{nome}</h3>
      <p className="card-description">{descricao}</p>
      <div className="card-habilidades">
        <h4>Habilidades Chave:</h4>
        <ul>
          {habilidades.map((habilidade, index) => (
            <li key={index}>{habilidade}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardProfissao;