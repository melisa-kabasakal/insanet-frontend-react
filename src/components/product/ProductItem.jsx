import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => (
  <div className="card">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>Fiyat: {product.price} TL</p>
    <p>Kategori: {product.category}</p>
    <div className="button-group">
      <button onClick={() => onEdit(product.id)} className="btn btn-secondary">Düzenle</button>
      <button onClick={() => onDelete(product.id)} className="btn btn-danger">Sil</button>
    </div>
  </div>
);

export default ProductItem;
