import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = 'http://localhost:8082/insanet/api/products'; 

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
      });
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      if (error.response) {
        console.error('API hatası:', error.response.data);
        console.error('Hata kodu:', error.response.status);
        alert('Ürünler yüklenemedi!');
        console.error('Sunucuya istek gönderilemedi', error.request);
        alert('Sunucuya istek gönderilemedi!');
      } else {
        console.error('Hata:', error.message);
        alert('Ürünler yüklenemedi!');
      }
    }
  };

  const addProduct = async (newProduct) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(apiUrl, newProduct, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      alert('Ürün başarıyla eklendi!');
      loadProducts();
    } catch (error) {
      console.error('Ürün eklenirken hata:', error);
      alert('Ürün eklenemedi!');
    }
  };

  const editProduct = async (productId) => {
    const product = products.find(p => p.id === productId);
    const newName = prompt('Yeni ürün adı:', product.name);
    if (newName) {
      try {
        const token = localStorage.getItem('token');
        await axios.put(`${apiUrl}/${productId}`, { ...product, name: newName }, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        alert('Ürün başarıyla güncellendi!');
        loadProducts();
      } catch (error) {
        console.error('Ürün güncellenirken hata:', error);
        alert('Ürün güncellenemedi!');
      }
    }
  };

  const deleteProduct = async (productId) => {
    if (window.confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${apiUrl}/${productId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        alert('Ürün başarıyla silindi!');
        loadProducts();
      } catch (error) {
        console.error('Ürün silinirken hata:', error);
        alert('Ürün silinemedi!');
      }
    }
  };

  return (
    <div className="container">
      <h1>Ürünler</h1>
      <NewProductForm onAdd={addProduct} />
      <ProductList products={products} onEdit={editProduct} onDelete={deleteProduct} />
    </div>
  );
};

export default ProductsPage;
