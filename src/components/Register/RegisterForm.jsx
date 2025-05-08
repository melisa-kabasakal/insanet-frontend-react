import React, { useState } from 'react';
import axios from 'axios';
import UserTypeSelector from './UserTypeSelector';
import AuthMethodSelector from './AuthMethodSelector';
import PasswordSection from './PasswordSection';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterForm = ({ selectedAuthMethod, selectedUserType, emailOrPhone, otpCode, isVerified }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert("Lütfen önce telefon ya da e-posta doğrulamasını tamamlayın.");
      return;
    }

    if (!selectedUserType || selectedUserType.trim() === '') {
      alert("Lütfen bir kullanıcı tipi seçin.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor.");
      return;
    }

    axios.post('http://localhost:8082/insanet/api/auth/register', {
      emailOrPhone,
      otpCode,                
      password,
      userType: selectedUserType
    })
    .then(response => {
      console.log('Kayıt başarılı:', response.data);
      toast.success('Kayıt başarılı! Giriş yapabilirsiniz.');
      navigate('/login');
    })
    .catch(error => {
      console.error('Kayıt başarısız:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <UserTypeSelector
        selectedUserType={selectedUserType}
        onSelectUserType={() => {}}
      />

      <AuthMethodSelector
        selectedAuthMethod={selectedAuthMethod}
        onSelectAuthMethod={() => {}}
      />

      <PasswordSection
        password={password}
        confirmPassword={confirmPassword}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
      />

      <button type="submit" className="btn-primary">Kaydol</button>
    </form>
  );
};

export default RegisterForm;
