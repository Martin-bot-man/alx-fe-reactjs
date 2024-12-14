import {useState} from 'react';
import GitHubService from '../services/GitHubService';//(custom hook)

const Search = ()=>{
    const[username, setUsername] =useState('');
    const {data, isLoading, error} =GitHubService(username);

    const handleSubmit=(e)=>{
        e.preventDefault();
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {isLoading?(
                <p>Loading...</p>
            ) :error?(
                <p>{error}</p>
            ): userData?(
                <div>
                    <h2>{userDat.login}</h2>
                    <img src={userData.avatar_url} alt={userData.login}/>
                    <p>{userData.bio}</p>
                    <a href={userData.html_url} targer="_blank" rel="noopener noreferrer">View Github Profile</a>
                </div>
            ):null}
        </div>
    )
};
export default Search;
