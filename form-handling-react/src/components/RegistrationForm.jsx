import React from 'react'
import {useState} from 'react'; 

const RegistrationForm = () => {
  
  const[username, setUserName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('')

  const handleSubmit = (event)=>{
    event.preventDefault();
if(!username|| !email || !password){
    alert('Please fill in all fields');
}
  }
    return (
    <div>RegistrationForm</div>
  )
}

export default RegistrationForm