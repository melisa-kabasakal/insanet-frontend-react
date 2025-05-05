import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footerContent">
                <div className="containers">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Kurumsal</h4>
                            <ul>
                                <li><a href="#/about">Hakkımızda</a></li>
                                <li><a href="#/contact">Bize Ulaşın</a></li>
                                <li><a href="#/faq">Sıkça Sorulan Sorular (S.S.S)</a></li>
                                <li><a href="#/privacy">Gizlilik Politikalarımız</a></li>
                                <li><a href="#/partnership">Ortaklık Programı</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Medyada İnşanet</h4>
                            <ul>
                                <li><a href="#/products">Ürünler</a></li>
                                <li><a href="#/suppliers">Onaylı Satıcılar</a></li>
                                <li><a href="#/contractors">Onaylı Müteahhitler</a></li>
                                <li><a href="#/blog">İnşanet Blog</a></li>
                                <li><a href="#/faq">Sıkça Sorulan Sorular</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Bizi Takip Edin</h4>
                            <div className="social-links">
                                <a href="https://linkedin.com/company/insanet" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://instagram.com/insanet" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://twitter.com/insanet" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="https://facebook.com/insanet" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-square-facebook"></i></a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>İletişim</h4>
                            <ul>
                                <li><a href="mailto:info@insanet.com" aria-label="E-posta"><i className="fa-regular fa-envelope"></i> info@insanet.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 İnşanet Yapı Teknoloji San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.</p>
                        <nav className="footer-links">
                            <a href="#/terms">Kullanım Koşulları</a>
                            <a href="#/privacy-notice">Aydınlatma Metni</a>
                            <a href="#/cookie-policy">Çerez Koşulları</a>
                            <a href="#/kvkk">Kişisel Verilerin Korunması Kanunu</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
