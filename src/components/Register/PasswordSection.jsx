import React from 'react';

const PasswordSection = ({ password, confirmPassword, setPassword, setConfirmPassword }) => {
  return (
    <div className="password-section">
      <div className="form-group">
        <label htmlFor="password">Şifre</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Şifrenizi girin"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Şifre (Tekrar)</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Şifrenizi tekrar girin"
        />
      </div>
    </div>
  );
};

export default PasswordSection;
