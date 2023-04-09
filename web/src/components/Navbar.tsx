import Link from 'next/link'
import React from 'react'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <div className='flex justify-between border-b border-black px-4 py-1'>
            <Link href='/' className='text-2xl font-bold italic tracking-wider'>
                the cook out
            </Link>
            <div className='flex items-center gap-3'>
                <Link href='/login'>login</Link>
                <Link href='/sign-up'>sign up</Link>
            </div>
        </div>
    )
}
