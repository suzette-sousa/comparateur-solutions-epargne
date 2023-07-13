import { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Header.scss';
import logo from '/public/ca-Nord_Est-h-RVB.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContent from '../Cart/Cart';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsCartOpen(true);
    }
  }, [cartItems]);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__logo-link">
          <img
            src={logo}
            alt="Logo Crédit Agricole Nord Est"
            className="header__logo-svg"
          />
        </Link>
      </div>
      <nav className="header__nav">
        <span className="header__nav-list">
          <div className="header__cart-wrapper" ref={cartRef}>
            <button
              className="header__cart-link"
              onClick={handleCartClick}
              aria-expanded={isCartOpen}
              aria-controls="cart-content"
            >
              <span className="header__cart-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              <span
                className="header__cart-badge"
                data-count={cartItems.length}
              >
                {cartItems.length}
              </span>
            </button>
            {isCartOpen && <CartContent />}
          </div>
        </span>
      </nav>
    </header>
  );
};

export default Header;
