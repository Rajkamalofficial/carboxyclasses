import Link from 'next/link'
import React from 'react'


function NavLogin() {
  return (
    <div>
      <Link href="/" className="text-sm inline-block align-text-top font-mono font-semibold text-white bg-red-600 px-5 py-2.5 m-2 rounded-md" >
        Login
      </Link>
    </div>
  )
}

export default NavLogin