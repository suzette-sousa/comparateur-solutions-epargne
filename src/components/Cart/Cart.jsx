import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Vider le panier</button>
    </div>
  );
};

export default Cart;
