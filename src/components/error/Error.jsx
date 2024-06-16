import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div align='center'>
        Oops! loooks like you enter an invalid link <Link to='/'>Home</Link>
    </div>
  )
}

export default Error