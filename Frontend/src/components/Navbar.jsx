import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-16 bg-amber-400 flex justify-between z-50'>
      <div>
        <p>LOGO</p>
      </div>
      <div className='ml-2.5'>
        <ul className='flex gap-5 mr-3 p-3 '>
          <li>About</li>
          <li>Contact</li>
          <Link to="/admin-register"><li> Admin</li></Link>
          <li>User</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar