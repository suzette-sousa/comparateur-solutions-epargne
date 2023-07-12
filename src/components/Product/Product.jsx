import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { getProduct } from '../../api/api';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ContactModal from '../ContactModal/ContactModal';

const Product = () => {
  const { userName } = useContext(UserContext);
  const { addToCart, isItemInCart, removeFromCart } = useContext(CartContext);

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProduct(productId).then((productData) => {
      setProduct(productData);
    });
  }, [productId]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
      <button onClick={handleShowModal}>Contactez-nous</button>
      <ContactModal
        show={showModal}
        handleClose={handleCloseModal}
        productName={product.name}
      />
    </div>
  );
};

export default Product;
