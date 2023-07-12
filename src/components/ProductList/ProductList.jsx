import { useState, useEffect } from 'react';
import { getProducts } from '../../api/api';
import classes from './productList.module.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={classes.productList}>
      {products.map((product) => (
        <li className={classes.productList_item} key={product.id}>
          <h3>{product.name}</h3>
          <p>Taux d’intérêt : {product.interestRate}%</p>
          <p>Versement initial : {product.initialDeposit} €</p>
          <p>Plafond : {product.ceiling ? `${product.ceiling} €` : 'Aucun'}</p>
          <p>Objectif de l’utilité de l’épargne : {product.goal}</p>
          <p>Catégorie : {product.category}</p>
          <p>Nature du placement : {product.investmentType}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
