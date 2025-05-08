import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onEdit, onDelete }) => (
  <div id="productList" className="card-grid">
    {products.map(product => (
      <ProductItem key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </div>
);

export default ProductList;
