import React, { useState, useEffect } from 'react';

const ProfileAccount = ({ onDataChange, onProfilePicChange, initialData }) => {
  const [profilePic, setProfilePic] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    role: '',
    companyName: '',
    companyFullName: '',
    taxId: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(prevFormData => ({ ...prevFormData, ...initialData }));
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    onDataChange(updated);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
      onProfilePicChange(file);
    }
  };

  return (
    <div className="profile-section" id="account-section">
      <h2>Hesap / Firma Bilgileri</h2>
      <fieldset className="form-fieldset">
        <legend>Kişisel Bilgiler</legend>
        <div className="form-group profile-picture-section">
          <label>Profil Fotoğrafı</label>
          <img src={profilePic || 'img/default-avatar.png'} alt="Profil Fotoğrafı" width="100" height="100" />
          <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        </div>

        <div className="form-row">
          <div className="form-group form-group-half">
            <label htmlFor="username">Kullanıcı Adı:</label>
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
          </div>
          <div className="form-group form-group-half">
            <label htmlFor="fullName">Ad Soyad:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group form-group-half">
            <label htmlFor="email">E-posta:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group form-group-half">
            <label htmlFor="phoneNumber">Telefon:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="5XXXXXXXXX" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="role">Görevi:</label>
          <input type="text" name="role" value={formData.role} onChange={handleInputChange} />
        </div>
      </fieldset>

      <fieldset className="form-fieldset">
        <legend>Firma Bilgileri</legend>
        <div className="form-group">
          <label htmlFor="companyName">Firma Kısa Adı:</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="companyFullName">Firma Tam Ünvanı:</label>
          <input type="text" name="companyFullName" value={formData.companyFullName} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="taxId">Firma Vergi Kimlik Numarası (VKN):</label>
          <input type="text" name="taxId" value={formData.taxId} onChange={handleInputChange} required pattern="[0-9]{10}" title="10 haneli VKN giriniz" />
        </div>
      </fieldset>
    </div>
  );
};

export default ProfileAccount;
