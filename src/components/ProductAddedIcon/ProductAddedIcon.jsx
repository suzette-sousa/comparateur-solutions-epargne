import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCheck } from '@fortawesome/free-solid-svg-icons';
import './ProductAddedIcon.scss';

const ProductAddedIcon = () => {
  return (
    <span className="product-added-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
      <FontAwesomeIcon icon={faCheck} />
    </span>
  );
};

export default ProductAddedIcon;
