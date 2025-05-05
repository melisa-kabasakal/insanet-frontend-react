import React, { useState } from 'react';

const ProfileAccount = () => {
  const [profilePic, setProfilePic] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyFullName, setCompanyFullName] = useState('');
  const [taxId, setTaxId] = useState('');

  return (
    <div className="profile-section" id="account-section">
      <h2>Hesap / Firma Bilgileri</h2>
      <form id="account-details-form" enctype="multipart/form-data">
        <fieldset className="form-fieldset">
          <legend>Kişisel Bilgiler</legend>
          <div className="form-group profile-picture-section">
            <label>Profil Fotoğrafı</label>
            <img src={profilePic || 'img/default-avatar.png'} alt="Profil Fotoğrafı" id="profile-pic-preview" width="100" height="100" />
            <input type="file" id="profile-pic-upload" name="profilePicture" accept="image/*" onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))} />
            <button type="button" id="upload-pic-btn">Yükle/Değiştir</button>
          </div>
          <div className="form-row">
            <div className="form-group form-group-half">
              <label htmlFor="username">Kullanıcı Adı:</label>
              <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="form-group form-group-half">
              <label htmlFor="name">Ad Soyad:</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group form-group-half">
              <label htmlFor="email">E-posta:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group form-group-half">
              <label htmlFor="phone">Telefon:</label>
              <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="5XXXXXXXXX" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="role">Görevi:</label>
            <input type="text" id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} />
          </div>
        </fieldset>

        <fieldset className="form-fieldset">
          <legend>Firma Bilgileri</legend>
          <div className="form-group">
            <label htmlFor="companyName">Firma Kısa Adı:</label>
            <input type="text" id="companyName" name="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="companyFullName">Firma Tam Ünvanı:</label>
            <input type="text" id="companyFullName" name="companyFullName" value={companyFullName} onChange={(e) => setCompanyFullName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="taxId">Firma Vergi Kimlik Numarası (VKN):</label>
            <input type="text" id="taxId" name="taxId" value={taxId} onChange={(e) => setTaxId(e.target.value)} required pattern="[0-9]{10}" title="10 haneli VKN giriniz" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ProfileAccount;
