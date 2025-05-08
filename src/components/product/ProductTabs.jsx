import React, { useState } from 'react';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('details');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <>
            <h3>Ürün Detayları</h3>
            <p>{product.description}</p>
            <p>Bu ürün, İnşanet platformunda satışa sunulmaktadır. Ürün hakkında daha fazla bilgi için tedarikçi ile iletişime geçebilirsiniz.</p>
          </>
        );
      case 'specs':
        return (
          <>
            <h3>Teknik Özellikler</h3>
            <table className="specs-table">
              <tbody>
                <tr>
                  <th>Özellik</th>
                  <th>Değer</th>
                </tr>
                <tr>
                  <td>Ürün Kodu</td>
                  <td>PRD-{product.id}</td>
                </tr>
                <tr>
                  <td>Stok Durumu</td>
                  <td>Mevcut</td>
                </tr>
                <tr>
                  <td>Teslimat Süresi</td>
                  <td>3-5 iş günü</td>
                </tr>
              </tbody>
            </table>
          </>
        );
      case 'reviews':
        return (
          <>
            <h3>Değerlendirmeler</h3>
            <p>Bu ürün için henüz değerlendirme bulunmamaktadır.</p>
            <button className="btn-secondary">Değerlendirme Yap</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="product-tabs">
      <div className="tab-header">
        <button
          className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Ürün Detayları
        </button>
        <button
          className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
          onClick={() => setActiveTab('specs')}
        >
          Teknik Özellikler
        </button>
        <button
          className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Değerlendirmeler
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default ProductTabs;
