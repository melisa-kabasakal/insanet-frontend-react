import React from 'react';

const ProductImage = ({ image, name }) => (
  <div className="product-image-container">
    <img id="productImage" src={`./img/${image}`} alt={name} />
  </div>
);

export default ProductImage;
