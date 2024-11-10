import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent'
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'
function App(){
  const [ theme, setTheme ] = useState('dark');
  const [ count, setCount ] = useState(0);

  return (
  <>
    <UserProfile name="Alice" age="25 " bio="Loves playing football"/>
     <Header />
     <MainContent />
     <Footer />
  </>
  )
}

export default App