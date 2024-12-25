import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h4>{product.title}</h4>
      <p>{product.author}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
