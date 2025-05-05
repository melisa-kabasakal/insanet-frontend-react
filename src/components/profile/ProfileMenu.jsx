import React from 'react';

const ProfileMenu = ({ setSection }) => {
  return (
    <aside className="profile-menu">
      <ul>
        <li><button onClick={() => setSection('account')} className="profile-menu-item">Hesabım</button></li>
        <li><button onClick={() => setSection('messages')} className="profile-menu-item">Mesajlar</button></li>
        <li><button onClick={() => setSection('orders-list')} className="profile-menu-item">Siparişlerim</button></li>
        <li><button onClick={() => setSection('password')} className="profile-menu-item">Şifre İşlemleri</button></li>
        <li><button onClick={() => setSection('authorization')} className="profile-menu-item">Yetkilendirme</button></li>
        <li><button onClick={() => setSection('faq')} className="profile-menu-item">SSS</button></li>
        <li><a href="#/logout" className="profile-menu-item" id="logoutButton">Çıkış Yap</a></li>
      </ul>
    </aside>
  );
};

export default ProfileMenu;
