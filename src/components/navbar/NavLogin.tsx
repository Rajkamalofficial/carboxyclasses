import Link from 'next/link'
import React from 'react'


function NavLogin() {
  return (
      <Link href="/" className="pointer-events-auto rounded-md bg-rose-600 px-3 py-2 text-[0.9rem] ml-2 md:ml-4 lg:ml-4 font-semibold leading-5 text-white hover:bg-rose-700" >
        Login
      </Link>
  )
}

export default NavLogin