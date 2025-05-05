import React, { useState } from 'react';
import ProfileMenu from './ProfileMenu';
import ProfileContent from './ProfileContent';
import "../../css/Profile.css";

const ProfileContainer = () => {
  const [section, setSection] = useState('account');

  return (
    <div className="profile-container">
      <div className="profile-layout">
        <ProfileMenu setSection={setSection} />
        <ProfileContent section={section} />
      </div>
    </div>
  );
};

export default ProfileContainer;
