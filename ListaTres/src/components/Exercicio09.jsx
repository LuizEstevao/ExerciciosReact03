// 9) Renderizar com Fragmentos Aninhados: 

// Crie um componente que use fragmentos para renderizar múltiplos elementos, incluindo um título, uma lista de itens e um parágrafo, sem criar elementos HTML desnecessários. 


function Foods(props) {
    return <li>eu sou o produto:  { props.food }</li>;
  }
  
  function Mercado() {
    const Market = ['Nescau', 'Toddy', 'Trakinas','Leite em pó'];
    return (
      <>
        <h1>Oq está no meu carrinho?</h1>
        <ul>
          {Market.map((Market) => <Foods food={Market} />)}
        </ul>
      </>
    );
  }


  export default Mercado