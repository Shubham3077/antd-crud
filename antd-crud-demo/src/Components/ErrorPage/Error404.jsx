import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
   <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}> 
    <img src="image.jpg" alt="error.jpg" />

    <h1>You are on a wrong route.</h1>

    <Link to={"/"}>HOME</Link>
   </div>
  )
}

export default Error404