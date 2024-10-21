// 1) Renderizar Lista Dinâmica com Map:

// Crie um componente que receba um array de nomes como propriedade e renderize cada nome em um item de lista (<li>) dentro de uma lista não ordenada (<ul>), usando o método map().

import React from 'react';

function MarcasRoupas(props) {
  return <li>Eu sou da marca {props.mark}</li>;
}

function GuardaRoupas() {
  const marks = ["Nike", "Adidas", "Mizuno", "Supreme", "Oakley"];
  
  return (
    <>
      <h1>De quais marcas são minhas roupas:</h1>
      <ul>
        {marks.map((mark) => (
          <MarcasRoupas  key={mark} mark={mark} />
        ))}
      </ul>
    </>
  );
}

export default GuardaRoupas;