// 8) Renderizar Componente usando children: 

// Crie um componente Card que tenha um contorno e receba qualquer conteúdo passado como children, renderizando esse conteúdo dentro do card

// Definindo o componente Card
function Card({ children }) {
  const cardStyle = {
    width: '500px',
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '16px',
    maxWidth: '400px',
  };
  children = "Aqui está sendo renderizado"

  return <div style={cardStyle}>{children}</div>;
}

export default Card;
