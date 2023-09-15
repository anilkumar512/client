import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'



export default function Navbar() {
  const auth=useAuth()
  return (
    <div>
      <header>
       <nav>
            
            <img class="img1" src={require('./logo2.png')}/>
            <h1 className='lt'>NUTRIFITCART</h1>
            
            <div className='head1'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/bmicalculator'>BMICalculator</NavLink>
            <NavLink to='/Service'>Services</NavLink>
    
            <NavLink to='/Product'>Products</NavLink>
            <NavLink to='/Profile'>Profile</NavLink>
            {!auth.user &&
            <NavLink to='/Login'>login</NavLink>}
            
            </div>
        </nav>
        </header>
    </div>
    
  )
}
