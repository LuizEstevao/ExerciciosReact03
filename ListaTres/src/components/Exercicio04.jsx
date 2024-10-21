// 4) Renderizar uma Tabela:

// Crie um componente que receba um array de objetos
//  como propriedade e renderize esses objetos em uma tabela HTML, com colunas para id, nome e idade.

function Tabela(props) {
  return (
    <>
      <tr style={{ border: " 3px solid white" }}>
        <th style={{ border: " 3px solid white" }}>{props.nome}</th>
        <th style={{ border: " 3px solid white" }}>{props.idade}</th>
      </tr>
    </>
  );
}

function Usuarios() {
  const caracteristicas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 31 },
    { nome: "Pedro", idade: 42 },
    { nome: "Felipe", idade: 17 },
    { nome: "Luiz", idade: 18 },

  ];

  return (
    <>
      <table style={{ border: " 3px solid white" }}>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
        {caracteristicas.map((caracteristicas) => (
          <Tabela nome={caracteristicas.nome} idade={caracteristicas.idade} />
        ))}
      </table>
    </>
  );
}
export default Usuarios;
