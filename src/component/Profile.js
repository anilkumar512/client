import React, { useState } from 'react'
import { useEffect } from 'react'
import { useAuth } from './Auth'
import axios from 'axios'
import Bmidb from './Bmidb'


export const Profile = () => {
  const auth=useAuth()
  const [post,setPost]=useState(null)
  const handlelogout=()=>{
    auth.logout()
  }


  useEffect(()=>{
    axios.get("http://localhost:3000/bmi/")
    .then(res=>{
      setPost(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  return (
    <div>
      <h1>Welcome User!</h1><br></br>
      <Bmidb/>
       <button onClick={handlelogout} className='profilelogout'>Logout</button>



    </div>
  )}

