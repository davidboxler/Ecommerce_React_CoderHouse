import "./App.css";
import Navbar from "./components/navBar/NavBar";
import CardProducts from "./components/cardProducts/CardProducts";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Modal title="Productos más vendidos" />
      <div className="listCards">
        <CardProducts title="Zapatillas Nike" precio={15500.99} stock={5} />
        <CardProducts title="Zapatillas Nike" precio={12500.99} stock={6} />
        <CardProducts title="Zapatillas Nike" precio={14500.99} stock={7} />
        <CardProducts title="Zapatillas Nike" precio={16500.99} stock={3} />
      </div>
    </div>
  );
}

export default App;
