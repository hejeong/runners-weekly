import React from 'react';
import jon from '../assets/jon.jpg';
const Profile = (props) => {
    return(
        <div className="profile-show">
            <div className="profile-username">{props.user.username}</div>
            <div className="picture-container"><img className="profile-picture" src={jon} alt="Ash" /></div>
            <div className="profile-name">{props.user.name}</div>
        </div>
    )
}

export default Profile;