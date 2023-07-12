import { Link } from 'react-router-dom';
import classes from './productList.module.scss';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductList = (props) => {
  const { products } = props;

  const { userName } = useContext(UserContext);
  const { addToCart, isItemInCart } = useContext(CartContext);

  return (
    <>
      {userName}, comparez nos différents produits bancaires :
      <ul className={classes.productList}>
        {products.map((product) => (
          <li className={classes.productList_item} key={product.id}>
            <h3>{product.name}</h3>
            <p>Taux d’intérêt : {product.interestRate}%</p>
            <p>Versement initial : {product.initialDeposit} €</p>
            <p>
              Plafond : {product.ceiling ? `${product.ceiling} €` : 'Aucun'}
            </p>
            <p>Objectif de l’utilité de l’épargne : {product.goal}</p>
            <p>Catégorie : {product.category}</p>
            <p>Nature du placement : {product.investmentType}</p>
            <Link to={`/nos-produits/${product.id}`}>Voir la fiche</Link>
            {!isItemInCart(product.id) ? (
              <button onClick={() => addToCart(product)}>
                Ajouter au panier
              </button>
            ) : (
              'déjà ajouté'
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
