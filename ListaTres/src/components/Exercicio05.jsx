// 5) Renderizar Imagens com Condição:

// Crie um componente que receba um array de URLs de imagens. O componente deve renderizar todas as imagens cujas URLs não estejam vazias.

function Imagens() {
    const image = [
      {
        url: "https://www.j1studios.com/wordpress/wp-content/uploads/Arcana-X-titlepic-300x150.png",
        alt: "Imagem",
      },
      { url: "https://gamingbolt.com/wp-content/uploads/2012/07/adventurer-300x150.jpg", alt: "Imagem 2" },
      {
        url: "",
        alt: "Imagem 03",
      },
    ];
  
    return (
      <div>
        {image.map((imagem, index) => {
          if (imagem.url !== "") {
            return <img key={index} src={imagem.url} alt={imagem.alt} />;
          }
          return null;
        })}
      </div>
    );
  }
  
  export default Imagens;
  
