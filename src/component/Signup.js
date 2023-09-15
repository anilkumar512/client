import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [firstName,setfirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [userBool,setUserBool]=useState(false)
  const auth=useAuth()
  const navigate=useNavigate()
  const handlesignup=(event)=>{
  const userTaken=auth.userlist.some(x=>x.email===email)
      if(userTaken){
        setUserBool(true)
      }
      else{
        
            auth.Signup(email,pass,firstName,lastName)
            navigate('/SignupSuccess')
      }
    event.preventDefault()                         //It will not refresh the page   
  }
  const change=(event)=>{
    setEmail(event.target.value)
}
const change1=(event)=>{
  setPass(event.target.value)
}



  return (
    <div>
      <form onSubmit={handlesignup} className='signup-form'>
      <label>First name</label>
      <input value={firstName} onChange={(e)=>{setfirstName(e.target.value)}} required/><br></br>
      <label>Last name</label>
      <input  value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required/><br></br>
      <label>Email</label>
      <input type='text' value={email} onChange={change} required/>
      <br></br>
      <label>Password</label>
      <input type='password' value={pass} onChange={change1} required/>
      <br></br>
      {userBool?<p>Email already Exists</p>:""}
      <br></br>
      <button type='submit'>Signup</button>
      
      </form>
    </div>
  )
}
export default Signup
