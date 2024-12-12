import React from 'react'
import {useState} from react;

const Search = () => {
    const[userName, setUserName] = useState('');

    const handleSubmit = async (e)=> {e.preventDefault()
       
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type ="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <div>
                <button type ="submit">Submit</button>
            </div>

        </form>

    </div>
  )
}

export default Search