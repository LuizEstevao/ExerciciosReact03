// 6) Renderizar Estilos Dinamicamente:

// Crie um componente que altere dinamicamente o estilo de um parágrafo com base no valor de uma prop, como mudar a cor do texto se a prop isHighlighted for true.

function Estilo(props) {
  const isHighlighted = props.cor;

  function CorAzul() {
    return <p style={{ color: "blue" }}>Este texto está azul.</p>;
  }
  function CorVermelha() {
    return <p style={{ color: "red" }}>Este texto está vermelho.</p>;
  }

  function VerificarCor() {
    if (isHighlighted === true) {
      return <CorAzul />;
    } else {
      return <CorVermelha />;
    }
  }

  return (
    <>
      <VerificarCor />
    </>
  );
}

export default Estilo;
