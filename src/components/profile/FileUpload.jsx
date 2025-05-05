import React, { useState } from 'react';

const FileUpload = ({ label, fileId, onFileChange }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || '');
    onFileChange(e.target.files[0]);
  };

  return (
    <div className="form-group file-upload-group">
      <label htmlFor={fileId}>{label}:</label>
      <div className="file-upload-container">
        <label htmlFor={fileId} className="custom-file-upload">
          <i className="fas fa-cloud-upload-alt"></i> Dosya Seç
        </label>
        <input
          type="file"
          id={fileId}
          name={fileId}
          className="hidden-file-input"
          accept=".pdf,.jpg,.jpeg,.png,.docx"
          onChange={handleFileChange}
          required
        />
        <span className="file-name-display">{fileName}</span>
      </div>
    </div>
  );
};

export default FileUpload;
