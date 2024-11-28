import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const ProfileDetails =()=><h1>Profile Details</h1>;
const Profilesettings =()=> <h1>Profile Settings</h1>

const Profile = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <link to="/profile/details" >Profile Details</link>
                </li>
                <li>
                    <link to="/profile/settings">Profile Settings</link>
                </li>
            </ul>
        </nav>
        <div>
            <Routes>
                <Route path="/details" element={<ProfileDetails/>} />
                <Route path="/settings" element={<Profilesettings/>} />
            </Routes>
        </div>
    </div>
  )
}

export default Profile