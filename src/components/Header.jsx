import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('all');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleRegisterClick = () => {
        navigate('/register'); 
    };

    return (
        <header>
            <div className="container header-container">
                <div className="logo-container">
                    <a href="#/" className="logo">
                        <img src="./img/inşanet mavi.png" alt="İnşanet Ana Sayfa" width="125" height="75" />
                    </a>
                </div>
                
                <div className="search-container">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Kategori, Ürün veya Tedarikçi ara..."
                            className="searchInput"
                            value={searchInput}
                            onChange={handleSearchChange}
                        />
                        <div className="search-options">
                            <select
                                id="searchType"
                                value={searchType}
                                onChange={handleSearchTypeChange}
                            >
                                <option value="all">Tümü</option>
                                <option value="products">Ürünler</option>
                                <option value="suppliers">Tedarikçiler</option>
                                <option value="categories">Kategoriler</option>
                            </select>
                        </div>
                        <button type="button" className="searchButton">
                            <img src="./img/search.png" width="30" height="25" alt="Arama ikonu" className="searchIcon" />
                        </button>
                    </div>
                </div>
                
                <div className="user-signBox">
                    <a href="/login" className="btn-login">Giriş Yap</a>
                    <button onClick={handleRegisterClick} type="button" className="btn-register">Kayıt Ol</button> 
                </div>
            </div>
        </header>
    );
};

export default Header;
