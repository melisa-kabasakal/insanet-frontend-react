import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

const LoginPage = () => {
    const [selectedAuthMethod, setSelectedAuthMethod] = useState('email');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSelectAuthMethod = (method) => {
        setSelectedAuthMethod(method);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const requestData = {
                emailOrPhone,
                password,
            };

            const response = await axios.post('http://localhost:8082/insanet/auth/login', requestData);

            const token = response.data.token;
            localStorage.setItem('authToken', token);
            console.log('Login successful', response.data);
        } catch (err) {
            setError('Giriş işlemi başarısız. Lütfen bilgilerinizi kontrol edin.');
            console.error('Login failed:', err.response ? err.response.data : err.message);
        }
    };

    return (
        <div className="login-container auth-container">
            <h2>Giriş Yap</h2>

            <div className="login-method-selector">
                <button 
                    className={`login-method-btn ${selectedAuthMethod === 'email' ? 'active' : ''}`} 
                    onClick={() => handleSelectAuthMethod('email')}
                >
                    E-posta ile Giriş
                </button>
                <button 
                    className={`login-method-btn ${selectedAuthMethod === 'phone' ? 'active' : ''}`} 
                    onClick={() => handleSelectAuthMethod('phone')}
                >
                    Telefon ile Giriş
                </button>
            </div>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {selectedAuthMethod === 'email' && (
                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">E-posta Adresi</label>
                        <input 
                            type="email" 
                            id="email" 
                            required 
                            placeholder="E-posta adresinizi girin"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Şifre</label>
                        <input 
                            type="password" 
                            id="password" 
                            required 
                            placeholder="Şifrenizi girin"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="form-options">
                        <a href="#/forgot-password" className="forgot-password-link">Şifremi Unuttum</a>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-submit">Giriş Yap</button>
                    </div>
                    <div className="form-links">
                        <span>Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link></span> 
                    </div>
                </form>
            )}

            {selectedAuthMethod === 'phone' && (
                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Telefon Numarası</label>
                        <input 
                            type="tel" 
                            id="phoneNumber" 
                            required 
                            placeholder="5XXXXXXXXX" 
                            pattern="5[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" 
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)} 
                        />
                        <small>Başında 0 olmadan 10 haneli olarak girin (5XXXXXXXXX)</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordPhone">Şifre</label>
                        <input 
                            type="password" 
                            id="passwordPhone" 
                            required 
                            placeholder="Şifrenizi girin"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-submit">Giriş Yap</button>
                    </div>
                    <div className="form-links">
                        <span>Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link></span> 
                    </div>
                </form>
            )}
        </div>
    );
};

export default LoginPage;
