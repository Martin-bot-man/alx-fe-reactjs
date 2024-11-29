import React from 'react';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';

const ProfileDetails =()=><h1>Profile Details</h1>;
const ProfileSettings =()=> <h1>Profile Settings</h1>

const Profile = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/profile/details" >Profile Details</Link>
                </li>
                <li>
                    <Link to="/profile/settings">Profile Settings</Link>
                </li>
            </ul>
        </nav>
        <div>
            <Routes>
                <Route path="/details" element={<ProfileDetails/>} />
                <Route path="/settings" element={<ProfileSettings/>} />
            </Routes>
        </div>
    </div>
  )
}

export default Profile