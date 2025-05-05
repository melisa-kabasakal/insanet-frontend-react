import React from 'react';

const OrdersQuerySection = () => {
  return (
    <div className="orders-query-section">
      <h3><i className="fas fa-search"></i> Sorgula</h3>
      <form id="order-query-form">
        <div className="form-row">
          <div className="form-group form-group-half">
            <label htmlFor="order-number"><i className="fas fa-hashtag"></i> Sipariş Talep No:</label>
            <input type="text" id="order-number" name="orderNumber" placeholder="Talep numarası ile arama yapın..." />
          </div>
          <div className="form-group form-group-half">
            <label htmlFor="order-status"><i className="fas fa-tag"></i> Sipariş Statü Durumu:</label>
            <select id="order-status" name="status">
              <option value="">Tümü</option>
              <option value="İptal Edilen">İptal Edilen</option>
              <option value="Kesinleşmiş Olan Sipariş">Kesinleşmiş Olan Sipariş</option>
              <option value="Ön Sipariş">Ön Sipariş</option>
              <option value="Teslim Edilen Sipariş">Teslim Edilen Sipariş</option>
              <option value="Yolda Olan Sipariş">Yolda Olan Sipariş</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group form-group-half">
            <label htmlFor="start-date"><i className="fas fa-calendar-alt"></i> Başlangıç Tarihi:</label>
            <input type="date" id="start-date" name="startDate" />
          </div>
          <div className="form-group form-group-half">
            <label htmlFor="end-date"><i className="fas fa-calendar-alt"></i> Bitiş Tarihi:</label>
            <input type="date" id="end-date" name="endDate" />
          </div>
        </div>
        <div className="order-query-buttons">
          <button type="submit" id="query-order-btn" className="order-query-btn">
            <i className="fas fa-search"></i> Sorgula
          </button>
          <button type="reset" id="clear-order-btn" className="order-clear-btn">
            <i className="fas fa-undo"></i> Temizle
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrdersQuerySection;
