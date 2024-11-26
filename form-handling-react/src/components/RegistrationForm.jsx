import React from 'react'
import {useState} from 'react'; 

const RegistrationForm = () => {
  
  const[username, setUserName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('')
  const[errors, setErrors] = useState({});

  const handleSubmit = (event)=>{
    event.preventDefault();

    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if(!email) newErrors.email = 'Email is required';
    if(!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if(Object.keys(newErrors).length > 0){
        return;
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
                {errors.username && <span className = "error">{errors.username}</span>}
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
                {errors.email && <span className ="error">{errors.email}</span>}
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
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit">Register</button>

        </form>
  )
}

export default RegistrationForm