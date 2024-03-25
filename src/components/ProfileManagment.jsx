// ProfileManagement.js
import  { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig';
import PropTypes from 'prop-types';
const ProfileManagement = ({ userId }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('profiles')
      .where('userId', '==', userId)
      .onSnapshot(snapshot => {
        const profilesData = [];
        snapshot.forEach(doc => {
          profilesData.push({ id: doc.id, ...doc.data() });
        });
        setProfiles(profilesData);
      });

    return () => unsubscribe();
  }, [userId]);

  const handleDeleteProfile = async (profileId) => {
    try {
      await firestore.collection('profiles').doc(profileId).delete();
      console.log('Profile deleted successfully');
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <div>
      <h2>Manage Profiles</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            {profile.profileName}
            <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileManagement.propTypes = {
    userId: PropTypes.string.isRequired, // Validate userId prop as a required string
  };

export default ProfileManagement;
