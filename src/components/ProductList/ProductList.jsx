import { Link } from 'react-router-dom';
import classes from './productList.module.scss';
import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import FilterSelector from '../FilterSelector/FilterSelector';
import SortBySelector from '../SortBy/SortBy';

const ProductList = (props) => {
  const { products } = props;

  const { userName } = useContext(UserContext);
  const { addToCart, isItemInCart } = useContext(CartContext);

  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  let filteredProducts = products;
  if (filter) {
    filteredProducts = products.filter(
      (product) => product.category === filter
    );
  }

  if (sortBy) {
    filteredProducts.sort((a, b) => {
      if (sortBy === 'interestRate') {
        return a.interestRate - b.interestRate;
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }

  return (
    <>
      {userName}, comparez nos différents produits bancaires :
      <div>
        <FilterSelector filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div>
        <SortBySelector sortBy={sortBy} onSortByChange={handleSortByChange} />
      </div>
      <ul className={classes.productList}>
        {filteredProducts.map((product) => (
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
