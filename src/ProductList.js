import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;