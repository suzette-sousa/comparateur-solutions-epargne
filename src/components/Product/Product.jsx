import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { getProduct } from '../../api/api';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ContactModal from '../ContactModal/ContactModal';
import './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductAddedIcon from '../ProductAddedIcon/ProductAddedIcon';

const Product = () => {
  const { userName } = useContext(UserContext);
  const { addToCart, isItemInCart } = useContext(CartContext);

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
    <>
      <h1>
        <strong>{product?.name}</strong>
      </h1>

      <h2> {userName}, découvrez les détails de notre produit :</h2>

      <p className="product-details">{product?.descr}</p>

      <div className="product__btn-container">
        {!isItemInCart(product.id) ? (
          <button onClick={() => addToCart(product)}>
            <FontAwesomeIcon icon={faShoppingCart} /> Ajouter au panier
          </button>
        ) : (
          <>
            <button disabled>
              <ProductAddedIcon /> Déjà ajouté au panier
            </button>
          </>
        )}

        <button
          onClick={handleShowModal}
          className="product__contact-btn"
          aria-label="Contactez-nous"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="product__contact-icon"
          />
        </button>
        <ContactModal
          show={showModal}
          handleClose={handleCloseModal}
          productName={product.name}
        />
      </div>
    </>
  );
};

export default Product;
