const Product = (props) => {
  const { products, productId } = props;
  const product = products.find((product) => product.id === 2);

  if (!product) {
    return <p>Produit non trouvé.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.descr}</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default Product;
