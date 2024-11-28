import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const ProfileDetail =()=><h1>Profile Details</h1>;
const Profilesettings =()=> <h1>Profile Settings</h1>

const ProfileDetails = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <link to="/profile/detail" >Profile Details</link>
                </li>
                <li>
                    <link to="/profile/settings">Profile Settings</link>
                </li>
            </ul>
        </nav>
        <div>
            <Routes>
                <Route path="/details" element={<ProfileDetail/>} />
                <Route path="/settings" element={<Profilesettings/>} />
            </Routes>
        </div>
    </div>
  )
}

export default ProfileDetails