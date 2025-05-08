import React, { useState } from 'react';
import axios from 'axios';
import "../../css/EmailVerification.css";

const PhoneVerification = ({ onVerifyPhone }) => {
  const [phone, setPhone] = useState('');
  const [otpCode, setOtpCode] = useState('');

  const handleRequestOtp = () => {
    axios.post('http://localhost:8082/insanet/api/auth/request-otp', { emailOrPhone: phone })
      .then(response => {
        console.log('Telefon OTP gönderildi: ', response.data);
        document.getElementById('otpSection').style.display = 'block';
      })
      .catch(error => {
        console.error('Telefon OTP gönderimi başarısız: ', error);
      });
  };

  const handleVerifyPhoneOtp = () => {
    axios.post('http://localhost:8082/insanet/api/auth/verify-otp', { emailOrPhone: phone, otpCode: otpCode })
      .then(response => {
        console.log('Telefon doğrulandı: ', response.data);
        onVerifyPhone(phone, otpCode);
      })
      .catch(error => {
        console.error('Telefon doğrulama başarısız: ', error);
      });
  };

  return (
    <div className="auth-tab-content active" id="phoneAuthTab">
      <div className="form-group">
        <label htmlFor="phone">Telefon Numarası</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="5XXXXXXXXX"
          pattern="^5\d{9}$"
        />
        <small>Başında 0 olmadan 10 haneli olarak girin (5XXXXXXXXX)</small>
      </div>
      <div className="form-group">
        <button type="button" className="btn-primary" onClick={handleRequestOtp}>
          Doğrulama Kodu Gönder
        </button>
      </div>
      <div id="otpSection" style={{ display: 'none' }}>
        <div className="form-group">
          <label htmlFor="otpCode">Doğrulama Kodu</label>
          <input
            type="text"
            id="otpCode"
            name="otpCode"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            required
            placeholder="Gönderilen 6 haneli kodu girin"
            maxLength="6"
            pattern="[0-9]{6}"
          />
          <button type="button" className="btn-primary" onClick={handleVerifyPhoneOtp}>
            Doğrula
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerification;
