// 3) Renderizar Elementos Condicionalmente com Props: 

// Crie um componente que receba uma prop booleana isVisible. Baseado no valor de isVisible,
//  o componente deve renderizar um parágrafo apenas se isVisible for true. 

function Sumidao (props) {
    const isVisible =  props.invisivel;
    
    function Aparece(){
        return <p>Eu apareci!</p>
    }
    
    function Some(){
        return null
    }

    function Renderizar() {
        if(isVisible === true) {
            return <Aparece/> ;
        }
        return <Some/> ;
    }


    return (
        <>
        <Renderizar/>
        </>
    )
        
}

export default Sumidao

