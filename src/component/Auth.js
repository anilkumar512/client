import React, { Component, useContext, useEffect, useState } from 'react'
import axios from 'axios'
const AuthContext=React.createContext(null)
const AuthProvider=(props)=> {
  const [user,setUser]=useState(null)
  const [userlist,setUserlist]=useState([])
  const login=(user)=>{
    setUser(user)
  }
  useEffect(()=>{
     axios.get('http://localhost:3000/Users')
     .then(res=>{
      setUserlist(res.data)
     })
     .catch(err=>{
        console.log(err)
     })
  })
  const logout=()=>{
    setUser(null)
  }
  const Signup=(email,pass,firstName,lastName)=>{
    axios.post('http://localhost:3000/Users',{
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:pass
    })
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
  }
  
    return <AuthContext.Provider value={{user,login,logout,Signup,userlist}}> 
        {props.children}
    </AuthContext.Provider>
}
    const useAuth=()=>{
      return useContext(AuthContext)
    }
export{AuthProvider,useAuth}