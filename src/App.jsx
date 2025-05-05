import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainNav from './components/MainNav';
import UserTypeSelector from './components/Register/UserTypeSelector';
import AuthMethodSelector from './components/Register/AuthMethodSelector';
import PhoneVerification from './components/Register/PhoneVerification';
import EmailVerification from './components/Register/EmailVerification';
import RegisterForm from './components/Register/RegisterForm';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ProfileContainer from './components/profile/ProfileContainer'; 

const App = () => {
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [selectedAuthMethod, setSelectedAuthMethod] = useState('phone');
  const [isVerified, setIsVerified] = useState(false);  
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otpCode, setOtpCode] = useState('');
  
  const handleSelectUserType = (userType) => {
    setSelectedUserType(userType);
  };

  const handleSelectAuthMethod = (method) => {
    setSelectedAuthMethod(method);
  };

  const handleVerifyPhone = (phone, code) => {
    console.log(`Telefon: ${phone}, OTP: ${code} doğrulandı!`);
    setEmailOrPhone(phone);
    setOtpCode(code);         
    setIsVerified(true);  
  };

  const handleVerifyEmail = (email, code) => {
    console.log(`E-posta: ${email}, OTP: ${code} doğrulandı!`);
    setEmailOrPhone(email);
    setOtpCode(code); 
    setIsVerified(true);  
  };

  return (
    <Router>
      <div>
        <Header />
        <MainNav />
        <div className="register-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={
              <>
                <h2>Kayıt Ol</h2>
                <UserTypeSelector
                  selectedUserType={selectedUserType}
                  onSelectUserType={handleSelectUserType}
                />
                <AuthMethodSelector
                  selectedAuthMethod={selectedAuthMethod}
                  onSelectAuthMethod={handleSelectAuthMethod}
                />
                {selectedAuthMethod === 'phone' && !isVerified && (
                  <PhoneVerification onVerifyPhone={handleVerifyPhone} />
                )}
                {selectedAuthMethod === 'email' && !isVerified && (
                  <EmailVerification onVerifyEmail={handleVerifyEmail} />
                )}
                {isVerified && (
                  <RegisterForm
                    selectedAuthMethod={selectedAuthMethod}
                    selectedUserType={selectedUserType}
                    emailOrPhone={emailOrPhone}
                    otpCode={otpCode}            
                    isVerified={isVerified}
                  />
                )}
              </>
            } />
            <Route path="/login" element={<LoginPage />} />
         
            <Route path="/profile" element={<ProfileContainer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
