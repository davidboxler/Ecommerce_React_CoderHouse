import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/NavBar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CategoryPage from './pages/CategoryPage';
import Footer from './components/footer/Footer';
import { CartProvider } from "./context/CartContext";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/productos/:id" element={<ProductPage />} />
          <Route exact path="/categoria/:categoria" element={<CategoryPage />} />
          <Route exact path="/nosotros" element={<ContactPage />} />
          <Route exact path="/login" element={<NotFoundPage />} />
          <Route exact path="/registro" element={<NotFoundPage />} />
          <Route exact path="/carrito" element={<CartPage />} />
          <Route exact path="*" element={<NotFoundPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
