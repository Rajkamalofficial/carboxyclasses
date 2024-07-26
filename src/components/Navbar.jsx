import React from 'react'
import NavSearch from './navbar/NavSearch'
import NavLogin from './navbar/NavLogin'
import NavLogo from './navbar/NavLogo'
import Notifications from '@/components/Notifications'

function NavBar() {
  return (
    <div className='navbar fixed top-0 left-0 z-[999] flex flex-row items-center justify-between gap-2 w-[100vw] h-[48px] m-0 py-1 px-2 overflow-visible box-border drop-shadow-[0_1px_6px_rgba(0,0,0,0.25)]  bg-white'>
      <NavLogo />
      <NavSearch />
      <Notifications />
      <NavLogin />
    </div>
  )
}

export default NavBar