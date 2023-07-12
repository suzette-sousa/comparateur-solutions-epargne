import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
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
            <Link to="/panier">Panier {cartItems.length}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
