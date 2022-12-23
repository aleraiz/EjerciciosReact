import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/ejercicio1/Welcome";
import Title from "./components/ejercicio2/Title";
import Subtitle from "./components/ejercicio2/Subtitle";
import Description from "./components/ejercicio2/Description";
import Persona from "./components/ejercicio3/Persona";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "./components/ejercicio4/Card";
import Card from "./components/ejercicio8/Card";
// import Pokemon from "./components/ejercicio5/Pokemon";
import infoPokemon from "../src/components/ejercicio5/infoPokemones";
import Formulario from "./components/ejercicio6/Formulario";
import ListaProductos from "./components/ejercicio7/ListaProductos";
import MovieSection from "./components/ejercicio8/MovieSection";
const srcImgSpiderman =
  "https://i.pinimg.com/550x/a9/d4/3f/a9d43fd80202d3b01a4d661ebf0c512c.jpg";
const srcImgBatman =
  "https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png";
const srcImgBatmanRobin =
  "https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg";

function App() {
  return (
    <div className="App">
      <MovieSection />
      {/* <ListaProductos /> */}

      {/* <Formulario /> */}
      {/* <div className="d-flex justify-content-around">
        {infoPokemon.map((pokemon) => {
          return (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type}
            />
          );
        })}
      </div> */}
      {/* <Pokemon /> */}
      {/* <div className="d-flex justify-content-center mt-5">
        <Card
          nombre="Spider-man"
          año={2019}
          imagen={srcImgSpiderman}
          puntaje="No la vi aún"
        />
        <Card
          nombre="Batman"
          año={1989}
          imagen={srcImgBatman}
          puntaje="Excelente"
        />
        <Card
          nombre="Batman & Robin"
          año={1997}
          imagen={srcImgBatmanRobin}
          puntaje="Regular"
        />
      </div> */}
      {/* <Persona nombre="Carlitos" edad={40} />
        <Persona nombre="Martin" edad={17} /> */}
      {/* <Title />
        <Subtitle />
        <Description nombre="Pepito" /> */}
      {/* <Welcome nombre="Carlitos" /> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
