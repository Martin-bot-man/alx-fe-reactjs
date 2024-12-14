import React, { useReducer } from 'react'
import {useState} from react;

const Search = () => {
    const[username, setUsername] = useState('');

    const[userData, setUserData] = useState(null);
    const [isLoading, setIsLoading]= useState(false);
    cosnt[error,setError]= useState(null);
    const handleSubmit = async (e)=> {e.preventDefault();
        setIsLoading(true);
        setError(null);
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUserData(response.data);
        
        }
        catch(error){
            setError('Looks like we cant find the user');
        }
        finally{
            setIsLoading(false);
        }
       
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>

            <button type= "submit">Search</button>
        </form>
        {isLoading?(
            <p>Loading...</p>
        ):error?(
            <p>{error}</p>
        ):userData?(
            <div>
                <h2>{userData.login}</h2>
                <img src={userData.avatar_url} alt={userData.login}/>
                <P>{userData.bio}</P>
                <a href={userData.html_url} target="_blank" rel="nooopener noreferrer">View GitHub Profile</a>
            </div>
        ):null
    }
    </div>
  )
    
        
}

export default Search