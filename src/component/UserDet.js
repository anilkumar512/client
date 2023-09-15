import React from 'react'
import { useParams } from 'react-router-dom'
export const UserDet = () => {
    const params=useParams()                                            //rafc-functional component
    const id=params.userid
  return (
    <div>
        Details of the User {id}




    </div>
  )
}

