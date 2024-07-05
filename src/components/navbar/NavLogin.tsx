import Link from 'next/link'
import React from 'react'


function NavLogin() {
  return (
    <div>
      <Link href="/" className="pointer-events-auto ml-0 mr-3 rounded-md bg-rose-600 px-4 py-3 text-[0.9rem] font-semibold leading-5 text-white hover:bg-rose-700" >
        Login
      </Link>
    </div>
  )
}

export default NavLogin