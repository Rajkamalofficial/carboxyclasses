import React from 'react'
import NavSearch from './navbar/NavSearch'
import NavLogin from './navbar/NavLogin'
import NavLogo from './navbar/NavLogo'


function NavBar() {
  return (
    <div className='navbar bg-white'>
      <NavLogo />
      <NavSearch />
      <NavLogin />
    </div>
  )
}

export default NavBar