import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
    let navigate = useNavigate();
    let { username } = useParams();
  return (
    <div>
        THIS IS THE PROFILE PAGE FOR {username}!
        <button 
            onClick={() => {
                navigate("/about");
                }}> 
                {" "}
                Change to about Page 
        </button>
    </div>
  )
}

export default Profile;