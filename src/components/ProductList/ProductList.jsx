import { Link } from 'react-router-dom';
import './ProductList.scss';
import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import FilterSelector from '../FilterSelector/FilterSelector';
import SortBySelector from '../SortBy/SortBy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import ProductAddedIcon from '../ProductAddedIcon/ProductAddedIcon';

const ProductList = (props) => {
  const { products } = props;

  const { userName } = useContext(UserContext);
  const { addToCart, isItemInCart } = useContext(CartContext);

  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  let filteredProducts = products;
  if (filter) {
    filteredProducts = products.filter(
      (product) => product.category === filter
    );
  }

  if (sortBy) {
    filteredProducts.sort((a, b) => {
      if (sortBy === 'interestRateAsc') {
        return a.interestRate - b.interestRate;
      } else if (sortBy === 'interestRateDesc') {
        return b.interestRate - a.interestRate;
      } else if (sortBy === 'nameAsc') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'nameDesc') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  }

  return (
    <>
      <h1>{userName}, comparez nos différents produits bancaires</h1>

      <div className="productFilters">
        <FilterSelector filter={filter} onFilterChange={handleFilterChange} />
        <SortBySelector sortBy={sortBy} onSortByChange={handleSortByChange} />
      </div>

      <div className="productList">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h2 className="product-card__title">
              <Link to={`/nos-produits/${product.id}`}>{product.name}</Link>
            </h2>

            <p className="product-card__line">
              <span className="product-card__line-label">Taux d’intérêt :</span>
              <span className="product-card__line-value">
                {product.interestRate}%
              </span>
            </p>

            <p className="product-card__line">
              <span className="product-card__line-label">
                Versement initial :
              </span>
              <span className="product-card__line-value">
                {product.initialDeposit} €
              </span>
            </p>

            <p className="product-card__line">
              <span className="product-card__line-label">Plafond :</span>
              <span className="product-card__line-value">
                {product.ceiling ? `${product.ceiling} €` : 'Aucun'}
              </span>
            </p>

            <p className="product-card__line">
              <span className="product-card__line-label">Catégorie :</span>
              <span className="product-card__line-value">
                {product.category}
              </span>
            </p>

            <p className="product-card__line">
              <span className="product-card__line-label">
                Nature du placement :
              </span>
              <span className="product-card__line-value">
                {product.investmentType}
              </span>
            </p>

            <p className="product-card__line">
              <span className="product-card__line-label">
                Objectif de l’utilité de l’épargne :
              </span>
              <span className="product-card__line-value">{product.goal}</span>
            </p>

            <div className="product-card__button-container">
              <Link
                to={`/nos-produits/${product.id}`}
                className="product-card__link"
              >
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="product-card__link-icon"
                />
                Voir la fiche
              </Link>
              {!isItemInCart(product.id) ? (
                <button
                  className="product-card__button"
                  onClick={() => addToCart(product)}
                >
                  <span className="product-card__button-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
                  Ajouter au panier
                </button>
              ) : (
                <button className="product-card__button" disabled>
                  <span className="product-card__button-icon">
                    <ProductAddedIcon />
                  </span>
                  Déjà ajouté au panier
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
