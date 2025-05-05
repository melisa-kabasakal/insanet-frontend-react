import React from 'react';
import "../../css/AuthMethodSelector.css";
;

const AuthMethodSelector = ({ selectedAuthMethod, onSelectAuthMethod }) => {
  return (
    <div className="auth-method-selector">
      <div className="auth-tabs">
        {['phone', 'email'].map(method => (
          <button
            type="button"
            key={method}
            className={`auth-tab ${selectedAuthMethod === method ? 'active' : ''}`}
            data-method={method}
            onClick={() => onSelectAuthMethod(method)}
          >
            {method === 'phone' ? 'Telefon ile Doğrula' : 'E-posta ile Doğrula'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AuthMethodSelector;
