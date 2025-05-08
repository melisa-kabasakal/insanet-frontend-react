import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1);
  const [identifier, setIdentifier] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    const cleanedIdentifier = identifier.trim();
    try {
      const response = await axios.post('http://localhost:8082/insanet/api/auth/request-otp', {
        emailOrPhone: cleanedIdentifier
      });

      if (response.data.success) {
        setMessage('Doğrulama kodu gönderildi!');
        setStep(2);
      } else {
        setError('Doğrulama kodu gönderilemedi.');
      }
    } catch (err) {
      console.error(err);
      setError('Doğrulama kodu gönderilirken hata oluştu.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const response = await axios.post('http://localhost:8082/insanet/api/auth/verify-otp', {
        emailOrPhone: identifier.trim(),
        otpCode
      });

      if (response.data.success) {
        setMessage('Doğrulama başarılı!');
        setStep(3);
      } else {
        setError('Geçersiz OTP');
      }
    } catch (err) {
      console.error(err);
      setError('OTP doğrulama sırasında hata oluştu.');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError('Şifreler eşleşmiyor');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8082/insanet/api/auth/reset-password', {
        emailOrPhone: identifier.trim(),
        token: otpCode,
        newPassword
      });

      if (response.data.success) {
        setMessage('Şifreniz başarıyla sıfırlandı!');
        setStep(1);
        setIdentifier('');
        setOtpCode('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError(response.data.message || 'Şifre sıfırlama başarısız oldu.');
      }
    } catch (err) {
      console.error(err);
      setError('Şifre sıfırlama sırasında hata oluştu.');
    }
  };

  return (
    <div className="forgot-password-container auth-container">
      <h2>Şifremi Unuttum</h2>
      <p className="form-hint">Lütfen hesabınızı kurtarmak için kullanmak istediğiniz doğrulama yöntemini seçin ve ilgili bilgiyi girin.</p>

      <div className="login-method-selector">
        <button className="login-method-btn active" onClick={() => setStep(1)}>E-posta veya Telefon ile Sıfırla</button>
      </div>

      {step === 1 && (
        <form onSubmit={handleRequestOtp}>
          <div className="form-group">
            <label htmlFor="identifier">E-posta Adresi veya Telefon Numarası:</label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Doğrulama Kodu Gönder</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyOtp}>
          <p className="code-sent-message">{message}</p>
          <div className="form-group">
            <label htmlFor="otp-code">Doğrulama Kodu:</label>
            <input
              type="text"
              id="otp-code"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
              required
              pattern="[0-9]{6}"
              maxLength="6"
            />
          </div>
          <button type="submit" className="btn-primary">Doğrulama Kodu Doğrula</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleResetPassword}>
          <div className="form-group">
            <label htmlFor="new-password">Yeni Şifre:</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Yeni Şifre (Tekrar):</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength="6"
            />
            {confirmPassword && newPassword !== confirmPassword && (
              <p className="password-mismatch-error" style={{ color: 'red' }}>
                Şifreler eşleşmiyor
              </p>
            )}
          </div>
          <button type="submit" className="btn-primary">Şifreyi Sıfırla</button>
          <button type="button" className="btn-secondary" onClick={() => setStep(1)}>Geri</button>
        </form>
      )}

      {error && <div className="form-feedback" style={{ color: 'red' }}>{error}</div>}
      {message && <div className="form-feedback" style={{ color: 'green' }}>{message}</div>}

      <div className="auth-links">
        <a href="/login">Giriş sayfasına dön</a>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
