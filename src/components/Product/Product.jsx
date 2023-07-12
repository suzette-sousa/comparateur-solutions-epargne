import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { getProduct } from '../../api/api';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { userName } = useContext(UserContext);
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
      {/*       <button onClick={() => addToCart(product)}>Ajouter au panier</button> */}
    </div>
  );
};

export default Product;
