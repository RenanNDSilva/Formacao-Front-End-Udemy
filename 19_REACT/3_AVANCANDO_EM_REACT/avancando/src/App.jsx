import "./App.css";
import night from "./assets/night.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessage from "./components/ChangeMessage";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import Data from "./components/Data";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragment from "./components/Fragment";
import ListRender from "./components/ListRender";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";

const cars = [
  { id: 1, brand: "Ferrari", color: "Amarela", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 34343 },
  { id: 3, brand: "Renault", color: "Azul", km: 234 },
];

function App() {

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMassage] = useState("");

  const handleMessage = (msg) => {
    setMassage(msg);
  };

  return <div className="App">
    <h1>Fundamentos do React - Avançado</h1>
    <img src="/img.jpg" alt="Imagem de exemplo" />
    <img src={night} alt="Imagem de exemplo" />
    <Data />
    <ListRender />
    <ConditionalRender />
    <ShowUserName name="Maria" />
    <CarDetails brand="Ford" km={100000} color="Azul" />
    <CarDetails brand="Fiat" km={50000} color="Preto" />
    {cars.map((car) => (
      <CarDetails
        key={car.id}
        brand={car.brand}
        km={car.km}
        color={car.color}
      />
    ))}
    <Fragment />
    <Container>
      <p>Este é o conteúdo</p>
    </Container>
    <ExecuteFunction myFunction={showMessage} />
    <Message text={message} />
    <ChangeMessage handleMessage={handleMessage} />
  </div>
}

export default App;