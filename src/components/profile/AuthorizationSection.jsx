import React from 'react';

const AuthorizationSection = () => {
  return (
    <div className="authorization-section">
      <div className="authorization-header">
        <h3><i className="fas fa-user-shield"></i> Yetkilendirme İşlemleri</h3>
        <div className="authorization-count" id="user-count">
          <i className="fas fa-users"></i> 0/5 Kullanıcı
        </div>
      </div>

      <div className="authorization-buttons">
        <button className="authorization-add-btn" id="add-user-btn">
          <i className="fas fa-user-plus"></i> Yeni Kullanıcı Ekle
        </button>
      </div>

      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Kullanıcı</th>
              <th>E-posta</th>
              <th>Rol</th>
              <th>Durum</th>
              <th>Eklenme Tarihi</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody id="user-table-body">
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorizationSection;
