import React from 'react';
import React, {createContext, useContext, useState, useEffect} from 'react';


const AuthContext = createContext(null);

export const AuthProvider =({children}) => {
    const[isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const storedToken = localStorage.getItem('token');
        if(storedToken){
            fetch('/api/verify-token',{
                headers:{Authorization:`Bearer ${storedToken}`}
            })
            .then(res.ok){
                setIsAuthenticated(true);
                return res.json();
            }
        }else{
           localStorage.removeItem('token'); 
        }
    }) 
    .then(userData => {
        if(userData){
            setUser(userData);
        }
    })
    .catch(error=> {
        console.error('Error verifying token:', error);
    });

    },
    const login =async (credentials)=> {
        try{
            const response =await fetch('/api/login',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(credentials),
            });
            if(response.ok){
                const data =await response.json();
                localStorage.setItem('token', data.token);

                setIsAuthenticated(true);
                setUser(data.user);
            }else{
                console.error('login failed');
            }

        }catch(error){
            console.error('Error during login:', error)
        };
        const logout=()=> {
            localStorage.removeItem('token');
            setIsAuthenticated(false);
            setUser(null);
        };

    }
return(
    <AuthContext.Provider value={{isAuthenticated, user, login, logout}}>
        {children}
    </AuthContext.Provider>
);

};

export const useAuth =()=>{
    return useContext(AuthContext);
};