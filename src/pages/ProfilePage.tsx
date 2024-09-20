import { useEffect, useState } from "react";
import axios from "../api/axios";

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get("/auth/profile");
        setUserProfile;
      } catch (error) {}
    };
  });
  return <div>dsafd</div>;
};

export default ProfilePage;
