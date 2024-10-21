// 2) Renderizar Componentes com Props:

// Crie um componente pai que passe uma propriedade (props) para um componente filho, e o componente filho deve renderizar essa propriedade no JSX.

function Pai() {
  return (
    <div>
      <Filho nome="luiz" sobrenome="Miguel"/>
    </div>
  );
}
function Filho(props) {
  return (
    <div>
      <p>Nome: {props.nome}</p>
      <p>Sobrenome: {props.sobrenome}</p>
    </div>
  );
}

export default Pai
