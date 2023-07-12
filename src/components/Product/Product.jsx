import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Product = (props) => {
  const { products, productId } = props;

  const product = products.find((product) => product.id === 2);
  const { userName } = useContext(UserContext);

  if (!product) {
    return <p>Produit non trouvé.</p>;
  }

  return (
    <div>
      <h2>
        {userName}, les détails de notre produit : {product.name}
      </h2>
      <p>{product.descr}</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default Product;
