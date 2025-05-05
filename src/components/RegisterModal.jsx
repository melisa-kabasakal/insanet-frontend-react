import React from 'react';

const RegisterModal = () => {
    return (
        <div className="register-type-modal" id="registerTypeModal">
            <div className="register-type-modal-content">
                <span className="close-modal">&times;</span>
                <h3>Kayıt Olmak İstediğiniz Kullanıcı Tipini Seçin</h3>
                <div className="register-type-options">
                    <a href="#/register?type=supplier" className="register-type-option">
                        <i className="fa-solid fa-industry"></i>
                        <h4>Tedarikçi</h4>
                        <p>Ürünlerinizi satmak için tedarikçi olarak kayıt olun</p>
                    </a>
                    <a href="#/register?type=contractor" className="register-type-option">
                        <i className="fa-solid fa-hammer"></i>
                        <h4>Müteahhit</h4>
                        <p>İnşaat ve tadilat işleri için müteahhit olarak kayıt olun</p>
                    </a>
                    <a href="#/register?type=logistics" className="register-type-option">
                        <i className="fa-solid fa-truck"></i>
                        <h4>Lojistik Firma</h4>
                        <p>Lojistik hizmetlerinizi sunmak için kayıt olun</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
