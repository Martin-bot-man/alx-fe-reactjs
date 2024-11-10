import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent'
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };


  const [ theme, setTheme ] = useState('dark');
  const [ count, setCount ] = useState(0);

  return (
  <>
  <UserContext.Provider value={userData}>
    <ProfilePage />
    </UserContext.Provider>.
  </>
  )
}

export default App
