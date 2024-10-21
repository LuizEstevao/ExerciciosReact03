// 10) Renderizar Imagens com Texto Alternativo Dinâmico: 

// Crie um componente que receba um array de objetos representando imagens, onde cada objeto tem uma url e um altText. Renderize essas imagens com o atributo alt dinâmico com base no valor de altText. 

function GiroImagens(props) {
    return (
        <img src={props.src} alt={props.alt} />
    )
}

function AltImage() {
    const images = [
        {
            url: "https://sound.peal.io/soundboards/covers/000/008/734/medium/uploads_2F1620003517048-xa60g002jm-c0dd22efc2b1f00e639db7f4d563c38f_2F63fiic43g0o51.jpg?1620003535", alt:"dababy car"
        },
        {
            url: "https://www.meme-arsenal.com/memes/5a541d517e18bb5339cccb661feaa8da.jpg", alt:"tony esterco"
        },
        {
            url: "https://assets.faceit-cdn.net/avatars/ac5cd08d-fe2c-497f-bc02-6b30f2a3ae7c_1550554765260.png", alt:"Carl Jhonson"
        },
    ]

    return(
        <>
        {images.map((images) => <GiroImagens src={images.url} alt={images.alt}/>)}
        </>
    );
}

export default AltImage
