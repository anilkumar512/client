import React from 'react'
import { Outlet } from 'react-router-dom'

export default function User() {
  return (
    <div>
        <h1>User1</h1>
        <h1>User2</h1>
        <h1>User3</h1>
        <h1>User4</h1>
        <h1>User5</h1>
        <h1>User6</h1>
        <Outlet/>
        </div>
  )
}
