import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function NavLogo() {
    return (
            <Link href="/">
                <Image
                    src="/carboxylogo.png"
                    width={40}
                    height={40}
                    alt="Carboxy Classes"
                    className='main-logo'
                />
            </Link>
    )
}

export default NavLogo