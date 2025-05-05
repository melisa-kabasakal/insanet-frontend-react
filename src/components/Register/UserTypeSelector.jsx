import React from 'react';
import "../../css/UserTypeSelector.css";

const UserTypeSelector = ({ selectedUserType, onSelectUserType }) => {
  return (
    <div className="user-type-selector">
      <div className="form-group">
        <label>Kullanıcı Tipi</label>
        <div className="user-type-buttons">
          {['MUTEAHHIT', 'TEDARIKCI', 'LOJISTIKCI'].map(type => (
            <button
              type="button"
              key={type}
              className={`user-type-btn ${selectedUserType === type ? 'active' : ''}`}
              onClick={() => {
                console.log("Butona tıklandı:", type); 
                onSelectUserType(type);
              }}
            >
              <i className={`fas fa-${type === 'MUTEAHHIT' ? 'hard-hat' : type === 'TEDARIKCI' ? 'store' : 'truck-loading'}`}></i>
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelector;
