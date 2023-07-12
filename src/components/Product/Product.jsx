import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { getProduct } from '../../api/api';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Product = () => {
  const { userName } = useContext(UserContext);
  const { addToCart, isItemInCart, removeFromCart } = useContext(CartContext);

  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(productId).then((productData) => {
      setProduct(productData);
    });
  }, [productId]);

  if (!product) {
    return <p>Chargement des détails du produit...</p>;
  }

  return (
    <div>
      <h2>
        {userName}, découvrez les détails de notre produit : {product?.name}
      </h2>
      <p>{product?.descr}</p>
      {!isItemInCart(product.id) ? (
        <button onClick={() => addToCart(product)}>Ajouter au panier</button>
      ) : (
        <>
          Déjà ajouté
          <button onClick={() => removeFromCart(product.id)}>
            Retirer du panier
          </button>
        </>
      )}
    </div>
  );
};

export default Product;
