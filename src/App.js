import "./App.scss";
import Navbar from "./components/navBar/NavBar";
import ListProductsContainer from "./components/listProductsContainer/ListProductsContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListProductsContainer />
    </div>
  );
}

export default App;
