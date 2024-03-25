// ProfileCreation.js
import  { useState } from 'react';
import { firestore } from '../firebaseConfig';
import PropTypes from  "prop-types";
const ProfileCreation = ({ userId }) => {
  const [profileName, setProfileName] = useState('');

  const handleCreateProfile = async () => {
    if (!profileName) return;

    try {
      await firestore.collection('profiles').add({
        userId,
        profileName,
        // Add more profile settings here if needed
      });
      console.log('Profile created successfully');
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <div>
      <h2>Create Profile</h2>
      <input type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} placeholder="Enter Profile Name" />
      <button onClick={handleCreateProfile}>Create Profile</button>
    </div>
  );
};
ProfileCreation.propTypes = {
    userId: PropTypes.string.isRequired, // Validate userId prop as a required string
  };
export default ProfileCreation;
