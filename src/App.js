import "./App.css";
import Navbar from "./components/navBar/NavBar";
import CardProducts from "./components/cardProducts/CardProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="listCards">
        <CardProducts title="Zapatillas Nike" precio={15500.99} />
        <CardProducts title="Zapatillas Nike" precio={12500.99} />
        <CardProducts title="Zapatillas Nike" precio={14500.99} />
        <CardProducts title="Zapatillas Nike" precio={16500.99} />
      </div>
    </div>
  );
}

export default App;
