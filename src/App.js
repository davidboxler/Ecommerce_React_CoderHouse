import "./App.scss";
import Navbar from "./components/navBar/NavBar";
import ListProductsContainer from "./components/listProductsContainer/ListProductsContainer";
import ListProductsDetails from "./components/listProductsDetails/ListProductsDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListProductsDetails />
    </div>
  );
}

export default App;
