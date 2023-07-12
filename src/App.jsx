import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { getProducts } from './api/api';
import ProductList from './components/ProductList/ProductList';
import './App.css';
import Product from './components/Product/Product';

const products = await getProducts();

const App = () => {
  return (
    <Router>
      <header>
        <h1>Comparateur de solutions d’épargne</h1>
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/nos-produits">Produits</Link>
          </li>
          <li>
            <Link to="/panier">Panier</Link>
          </li>
        </ul>
      </nav>

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
      </Routes>
    </Router>
  );
};

export default App;
