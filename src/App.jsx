import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { getProducts } from './api/api';
import ProductList from './components/ProductList/ProductList';
import './App.css';
import Product from './components/Product/Product';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

const products = await getProducts();

const App = () => {
  return (
    <Router>
      <CartProvider>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route
              path="/nos-produits"
              element={<ProductList products={products} />}
            />
            <Route
              path="/nos-produits/:productId"
              element={<Product products={products} />}
            />
            <Route path="/panier" element={<Cart />} />
          </Routes>
        </UserProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
