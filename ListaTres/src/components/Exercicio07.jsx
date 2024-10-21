// 7) Renderizar uma Lista com Chave (key):

// Crie um componente que renderize uma lista de tarefas a partir de um array, onde cada item tenha uma chave única (key), e mostre um botão "Remover" para remover o item da lista.

import React, { useState } from 'react';

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: 'Estudar React' },
    { id: 2, nome: 'Fazer compras' },
    { id: 3, nome: 'Ir à academia' },
  ]);

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.nome}
            <button className="remover-botao" onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
