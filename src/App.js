import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/navBar/NavBar";
import HomePage from "./shared/pages/HomePage";
import ContactPage from './shared/pages/ContactPage';
import NotFoundPage from './shared/pages/NotFoundPage';
import ProductPage from './shared/pages/ProductPage';
import CartPage from './shared/pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/productos/:id" element={<ProductPage />} />
        <Route exact path="/contacto" element={<ContactPage />} />
        <Route exact path="/:categoria/" element={<HomePage />} />
        <Route exact path="/carrito" element={<CartPage />} />
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
