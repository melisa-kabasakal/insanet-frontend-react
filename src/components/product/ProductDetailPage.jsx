import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = 'http://localhost:8082/insanet/api';

  useEffect(() => {
    const hashParts = window.location.hash.split('/');
    const productId = hashParts.length > 2 ? hashParts[2] : null;

    if (!productId) {
      window.location.hash = '/404';
      return;
    }

    loadProductDetails(productId);
  }, []);

  const loadProductDetails = async (productId) => {
    try {
      const response = await axios.get(`${apiUrl}/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Ürün detayları yüklenirken hata:', error);
      setError('Ürün yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Ürün yükleniyor...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <ProductImage image={product.image} name={product.name} />
        <ProductInfo product={product} />
      </div>
      <ProductTabs product={product} />
    </div>
  );
};

export default ProductDetailPage;
