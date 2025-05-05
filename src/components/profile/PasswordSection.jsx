import React from 'react';

const PasswordSection = () => {
  return (
    <div className="password-operations">
      <div className="password-change-form">
        <h3>Şifre Değiştir</h3>
        <form id="change-password-form">
          <div className="form-group">
            <label htmlFor="current-password">Mevcut Şifre:</label>
            <input type="password" id="current-password" name="currentPassword" required />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">Yeni Şifre:</label>
            <input type="password" id="new-password" name="newPassword" required />
            <div className="password-strength-meter">
              <div className="strength-bar"></div>
            </div>
            <div className="password-requirements">
              <p>Şifreniz şunları içermelidir:</p>
              <ul>
                <li>En az 8 karakter</li>
                <li>En az 1 büyük harf</li>
                <li>En az 1 küçük harf</li>
                <li>En az 1 rakam</li>
                <li>En az 1 özel karakter</li>
              </ul>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Yeni Şifre (Tekrar):</label>
            <input type="password" id="confirm-password" name="confirmPassword" required />
          </div>
          <button type="submit" className="btn-primary">Şifreyi Güncelle</button>
        </form>
      </div>

      <div className="password-reset-section">
        <h3>Şifremi Unuttum</h3>
        <div className="reset-options">
          <div className="reset-option">
            <h4>E-posta ile Sıfırlama</h4>
            <form id="email-reset-form">
              <div className="form-group">
                <label htmlFor="reset-email">E-posta Adresiniz:</label>
                <input type="email" id="reset-email" name="email" required />
              </div>
              <button type="submit" className="btn-secondary">E-posta Gönder</button>
            </form>
          </div>
          <div className="reset-option">
            <h4>SMS ile Sıfırlama</h4>
            <form id="sms-reset-form">
              <div className="form-group">
                <label htmlFor="reset-phone">Telefon Numaranız:</label>
                <input type="tel" id="reset-phone" name="phone" required />
              </div>
              <button type="submit" className="btn-secondary">SMS Gönder</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSection;
