import React, { useState } from 'react';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(q => Math.min(q + 1, 999));
  const decreaseQuantity = () => setQuantity(q => Math.max(q - 1, 1));

  const addToCart = () => alert(`${quantity} adet ürün sepete eklendi.`);
  const addToAuction = () => alert(`${quantity} adet ürün ihale listenize eklendi.`);

  return (
    <div className="product-info-container">
      <h2 id="productName">{product.name}</h2>
      <p id="productDescription" className="product-description">{product.description}</p>
      <p id="productPrice" className="product-price">{product.price.toLocaleString('tr-TR')} ₺</p>
      <p id="productSupplier" className="product-supplier">Tedarikçi: {product.supplier}</p>
      <p id="productCategory" className="product-category">Kategori: {product.category}</p>

      <div className="product-actions">
        <div className="quantity-selector">
          <button id="decreaseQuantity" className="quantity-btn" onClick={decreaseQuantity}>-</button>
          <input type="number" id="quantity" value={quantity} min="1" max="999" readOnly />
          <button id="increaseQuantity" className="quantity-btn" onClick={increaseQuantity}>+</button>
        </div>
        <button id="addToCart" className="btn-primary" onClick={addToCart}>Sepete Ekle</button>
        <button id="addToAuction" className="btn-secondary" onClick={addToAuction}>İhaleye Ekle</button>
      </div>
    </div>
  );
};

export default ProductInfo;
