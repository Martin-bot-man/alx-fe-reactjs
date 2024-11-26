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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">UserName:</label>
                <input 
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type= 'text'
                id='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="text"
                id="password"
                value={password}
                onChange= {(e)=>setPassword(e.target.value)}
                required

                />
            </div>
            <button type="submit">Register</button>

        </form>
  )
}

export default RegistrationForm