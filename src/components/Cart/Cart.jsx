import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.scss';

const CartContent = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart-content" id="cart-content">
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="delete-btn"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-content__footer-btns">
            {cartItems.length > 1 && (
              <button onClick={clearCart} className="delete-btn">
                Vider le panier
              </button>
            )}
            <button onClick={clearCart}>Valider mon panier</button>
            {/* Fonctionnalité non implémentée */}
          </div>
        </>
      )}
    </div>
  );
};

export default CartContent;
