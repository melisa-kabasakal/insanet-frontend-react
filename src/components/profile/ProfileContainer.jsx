import React, { useState } from 'react';
import ProfileMenu from './ProfileMenu';
import ProfileContent from './ProfileContent';
import FileUpload from './FileUpload';
import "../../css/Profile.css";
import axios from 'axios';
import ProfileAccount from './ProfileAccount';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const removeNullByte = (data) => {
  return data.replace(new RegExp(String.fromCharCode(0), 'g'), '');
};

const sanitizeProfileData = (obj) => {
  const cleaned = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string') {
      cleaned[key] = removeNullByte(value);
    } else {
      cleaned[key] = value;
    }
  }
  return cleaned;
};

const ProfileContainer = () => {
  const [profileData, setProfileData] = useState({
    companyName: '',
    companyFullName: '',
    taxId: '',
  });
  const [profilePic, setProfilePic] = useState(null);
  const [documents, setDocuments] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!profileData?.companyName?.trim()) {
      toast.error('Firma adı boş olamaz.', { position: toast.POSITION.TOP_RIGHT });
      return;
    }
    if (!profileData?.companyFullName?.trim()) {
      toast.error('Firma tam ünvanı boş olamaz.', { position: toast.POSITION.TOP_RIGHT });
      return;
    }
    if (!profileData?.taxId?.trim()) {
      toast.error('Vergi kimlik numarası boş olamaz.', { position: toast.POSITION.TOP_RIGHT });
      return;
    }
    if (!/^\d{10}$/.test(profileData?.taxId?.trim())) {
      toast.error('Vergi kimlik numarası 10 haneli olmalıdır.', { position: toast.POSITION.TOP_RIGHT });
      return;
    }

    const cleanedProfileData = sanitizeProfileData(profileData);

    const formData = new FormData();


    formData.append('profileDTO', JSON.stringify(cleanedProfileData));
    console.log('FormData içeriği:', Array.from(formData.entries()).map(([key, value]) => ({ key, value })));

   
    const documentKeys = [
      { key: 'taxCertificate', formKey: 'taxCertificate' },
      { key: 'tradeRegistryGazette', formKey: 'tradeRegistry' },
      { key: 'signatureCircular', formKey: 'signatureCertificate' },
      { key: 'activityCertificate', formKey: 'chamberOfCommerce' }
    ];


    documentKeys.forEach(({ key, formKey }) => {
      if (documents[key]) {
        formData.append(formKey, documents[key]);
      }
    });


    if (profilePic) {
      formData.append('profilePicture', profilePic);
    }

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        'http://localhost:8082/insanet/api/profile/update',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          withCredentials: true
        }
      );
      console.log('Başarılı yanıt:', response.data);
      toast.success('Profil başarıyla güncellendi!', { position: toast.POSITION.TOP_RIGHT });
    } catch (error) {
      console.error('Hata:', error.response ? error.response.data : error.message);


      if (error.response && error.response.data) {
        console.log('Backend Hata:', error.response.data); 
        toast.error(error.response.data, { position: toast.POSITION.TOP_RIGHT });
      } else {
        toast.error('Bir hata oluştu. Lütfen tekrar deneyin.', { position: toast.POSITION.TOP_RIGHT });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProfileAccount
        onDataChange={setProfileData}
        onProfilePicChange={setProfilePic}
        initialData={{}}
      />
      <FileUpload onFilesChange={setDocuments} />
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Yükleniyor...' : 'Kaydet'}
      </button>

      <ToastContainer />
    </form>
  );
};

export default ProfileContainer;