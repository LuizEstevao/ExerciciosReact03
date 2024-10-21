import "./App.css";
import GuardaRoupas from "./components/Exercicio01";
import Pai from "./components/Exercicio02";
import Sumidao from "./components/Exercicio03";
import Imagens from "./components/Exercicio05";
import Usuarios from "./components/Exercicio04";
import Estilo from "./components/Exercicio06";
import Lista from "./components/Exercicio07";
import Card from "./components/Exercicio8";
import Mercado from "./components/Exercicio09";
import AltImage from "./components/Exercicio10";

function App() {
  return (
    <>
      <h1
        style={{
          color: "black",
          textShadow:
            "-2px -2px 0 White, 2px -2px 0 White, -2px 2px 0 White, 2px 2px 0 White",
        }}
      >
        Lista de Exercicios
      </h1>
      <h3
        style={{
          color: "black",
          textShadow:
            "-1px -1px 0 White, 1px -1px 0 White, -1px 1px 0 White, 1px 1px 0 White",
        }}
      >
        Exercicio 1
      </h3>
      <div className="box">
        <GuardaRoupas />
      </div>
      <h3>Exercicio 2</h3>
      <div className="box">
        <Pai />
      </div>
      <h3>Exercicio 3</h3>
      <div className="box">
        <Sumidao invisivel={true} />
      </div>
      <h3>Exercicio 4</h3>
      <div className="box">
        <Usuarios />
      </div>
      <h3>Exercicio 5</h3>
      <div className="box">
        <Imagens />
      </div>
      <h3>Exercicio 6</h3>
      <div className="box">
        <Estilo cor={false} />
      </div>
      <h3>Exercicio 7</h3>
      <div className="box">
        <Lista />
      </div>
      <h3>Exercicio 8</h3>
      <div className="box">
        <Card />
      </div>
      <h3>Exercicio 9</h3>
      <div className="box">
        <Mercado />
      </div>
      <h3>Exercicio 10</h3>
      <div id="box10">
        <AltImage />
      </div>
    </>
  );
}

export default App;
