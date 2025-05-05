import React from 'react';

const OrdersListSection = () => {
  return (
    <div className="orders-list-section">
      <h3>SİPARİŞ LİSTESİ</h3>
      
      <div className="orders-list-controls">
        <div className="orders-per-page">
          <label htmlFor="orders-per-page">Gösterilen Sipariş:</label>
          <select id="orders-per-page">
            <option value="5">5</option>
            <option value="10" selected>10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="orders-total-count" id="orders-total-count">
          Toplam: 0 sipariş
        </div>
      </div>
      
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Sipariş Talep Numarası</th>
              <th>Tarih</th>
              <th>Sipariş Tutar</th>
              <th>Ürün Adedi</th>
              <th>Tedarikçi Firma</th>
              <th>Sipariş Statüsü</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody id="orders-table-body">
            <tr>
              <td colspan="7" className="orders-loading">
                <div className="loading-spinner-small"></div> Siparişler yükleniyor...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="orders-pagination" id="orders-pagination">
      </div>
    </div>
  );
};

export default OrdersListSection;
