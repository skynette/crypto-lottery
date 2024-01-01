'use client';
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import NavButton from './nav-button'
import { Menu } from 'lucide-react'
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
import Image from 'next/image';

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    const address = useAddress();
    const disconnect = useDisconnect();

    return (
        <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
            <div className='flex items-center space-x-2'>
                <Image
                    src='/logo.png'
                    alt='logo'
                    className=''
                    width={50}
                    height={50}
                />
                <div>
                    <h1 className='text-lg text-white font-bold'>RAPID DRAW</h1>
                    <p className='text-sm text-purple-400 truncate'>User: {address?.substring(0,5)}...{address?.substring(address.length, address.length-5)}</p>
                </div>
            </div>

            <div className='hidden md:col-span-3 md:flex items-center justify-center rounded-md'>
                <div className='p-4 space-x-2'>
                    <NavButton isActive title='buy tickets' />
                    <NavButton onClick={disconnect} title='logout' />
                </div>
            </div>

            <div className='flex flex-col ml-auto text-right'>
                <div>
                    <Menu className="h-8 w-8 mx-auto text-white hover:cursor-pointer" />
                </div>
                <span className='md:hidden'>
                    <NavButton onClick={disconnect} title='logout' />
                </span>
            </div>
        </header>
    )
}

export default Header