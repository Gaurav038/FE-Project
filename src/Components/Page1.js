import React from 'react'
import { Link } from 'react-router-dom'

function Page1() {
  return (
    <div>
        <h1>Enter into Student Info System</h1>
        <Link to="chat"><button style={{fontSize: '30px'}}>Enroll Now!</button></Link>
    </div>
  )
}

export default Page1