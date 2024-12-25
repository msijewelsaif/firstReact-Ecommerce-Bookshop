import React from 'react';
import ProductItem from './ProductItem';

function ProductList() {
  const products = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 10 },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 15 },
    { id: 3, title: 'Book 3', author: 'Author 3', price: 20 },
    { id: 4, title: 'Book 4', author: 'Author 4', price: 12 },
    { id: 5, title: 'Book 5', author: 'Author 5', price: 18 },
    { id: 6, title: 'Book 6', author: 'Author 6', price: 22 },
    { id: 7, title: 'Book 7', author: 'Author 7', price: 25 },
    { id: 8, title: 'Book 8', author: 'Author 8', price: 13 },
    { id: 9, title: 'Book 9', author: 'Author 9', price: 17 },
    { id: 10, title: 'Book 10', author: 'Author 10', price: 30 },
    { id: 11, title: 'Book 11', author: 'Author 11', price: 16 },
    { id: 12, title: 'Book 12', author: 'Author 12', price: 24 },
    { id: 13, title: 'Book 13', author: 'Author 13', price: 28 },
    { id: 14, title: 'Book 14', author: 'Author 14', price: 35 },
    { id: 15, title: 'Book 15', author: 'Author 15', price: 40 }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
