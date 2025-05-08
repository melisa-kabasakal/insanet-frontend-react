import React from 'react';

const FileUpload = ({ onFilesChange }) => {
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    onFilesChange((prev) => ({
      ...prev,
      [name]: files[0]
    }));
  };

  return (
    <div className="profile-section">
      <h2>Firma Belgeleri</h2>
      <div className="form-group">
        <label>Vergi Levhası</label>
        <input type="file" name="taxCertificate" onChange={handleFileChange} accept="application/pdf,image/*" />
      </div>
      <div className="form-group">
        <label>Ticaret Sicil Gazetesi</label>
        <input type="file" name="tradeRegistryGazette" onChange={handleFileChange} accept="application/pdf,image/*" />
      </div>
      <div className="form-group">
        <label>İmza Sirküsü</label>
        <input type="file" name="signatureCircular" onChange={handleFileChange} accept="application/pdf,image/*" />
      </div>
      <div className="form-group">
        <label>Faaliyet Belgesi</label>
        <input type="file" name="activityCertificate" onChange={handleFileChange} accept="application/pdf,image/*" />
      </div>
    </div>
  );
};

export default FileUpload;
