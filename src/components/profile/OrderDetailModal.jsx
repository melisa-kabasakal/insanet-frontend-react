import React from 'react';

const OrderDetailModal = () => {
  return (
    <div id="order-detail-modal" className="order-detail-modal">
      <div className="order-detail-content">
        <div className="order-detail-header">
          <h3>Sipariş Detayı</h3>
          <span className="close-order-detail">&times;</span>
        </div>
        <div id="order-detail-body" className="order-detail-body">
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
