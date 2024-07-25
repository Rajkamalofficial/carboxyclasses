import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function NavLogo() {
    return (
        <div className='navbar-a'>
            <Link href="/">
                <Image
                    src="/carboxylogo.png"
                    width={50}
                    height={50}
                    alt="Carboxy Classes"
                    className='main-logo'
                />
            </Link>
            {/* <div >
        <p className="website-name">Carboxy Classes</p>
      </div> */}
        </div>
    )
}

export default NavLogo