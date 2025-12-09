"use client"
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const menuOption=[
    {
        id:1,
        name:'Home',
        path:'/dashboard'
    },
    {
        id:2,
        name:'History',
        path:'/dashboard/history'
    },
    {
        id:3,
        name:"Prices",
        path:'/dashboard/price'
    },
    {
        id:4,
        name:'Contact',
        path:'/dashboard/contact'
    }
]

const Appheader = () => {
    const pathname = usePathname();
    return (
        <div className='flex items-center justify-between p-4 shadow px-4 md:px-10 lg:px-10 xl:px-10'>
            <Image src={'/logo.png'} alt="logo" width={90} height={50} />
            <nav className='hidden md:flex gap-12 items-center'>
                {menuOption.map(option => {
                    const active = pathname === option.path;
                    return (
                        <Link key={option.id} href={option.path} className={active ? 'font-bold text-blue-600' : 'hover:font-bold'}>
                            {option.name}
                        </Link>
                    )
                })}
            </nav>
            <UserButton />
        </div>
    )
}

export default Appheader