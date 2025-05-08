import React, { useState } from 'react';
import axios from 'axios';
import "../../css/EmailVerification.css";

const EmailVerification = ({ onVerifyEmail }) => {
  const [email, setEmail] = useState('');
  const [emailCode, setEmailCode] = useState('');

  const handleRequestEmailOtp = () => {
    axios.post('http://localhost:8082/insanet/api/auth/request-otp', { emailOrPhone: email })
      .then(response => {
        console.log('E-posta OTP gönderildi: ', response.data);
        document.getElementById('emailVerifySection').style.display = 'block';
      })
      .catch(error => {
        console.error('E-posta OTP gönderimi başarısız: ', error);
      });
  };

  const handleVerifyEmailOtp = () => {
    axios.post('http://localhost:8082/insanet/api/auth/verify-otp', { emailOrPhone: email, otpCode: emailCode })
      .then(response => {
        console.log('E-posta doğrulandı: ', response.data);
        onVerifyEmail(email, emailCode);
      })
      .catch(error => {
        console.error('E-posta doğrulama başarısız: ', error);
      });
  };

  return (
    <div className="auth-tab-content active" id="emailAuthTab">
      <div className="form-group">
        <label htmlFor="emailAuth">E-posta Adresi</label>
        <input
          type="email"
          id="emailAuth"
          name="emailAuth"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="E-posta adresinizi girin"
        />
      </div>
      <div className="form-group">
        <button type="button" className="btn-primary" onClick={handleRequestEmailOtp}>
          Doğrulama Kodu Gönder
        </button>
      </div>
      <div id="emailVerifySection" style={{ display: 'none' }}>
        <div className="form-group">
          <label htmlFor="emailCode">Doğrulama Kodu</label>
          <input
            type="text"
            id="emailCode"
            name="emailCode"
            value={emailCode}
            onChange={(e) => setEmailCode(e.target.value)}
            required
            placeholder="E-postanıza gönderilen kodu girin"
            maxLength="6"
            pattern="[0-9]{6}"
          />
          <button type="button" className="btn-primary" onClick={handleVerifyEmailOtp}>
            Doğrula
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;

