/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import NavButton from './nav-button'
import { Menu } from 'lucide-react'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
            <div className='flex items-center space-x-2'>
                <img
                    src='https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    className='rounded-full h-20 w-20'
                />
                <div>
                    <h1 className='text-lg text-white font-bold'>RAPID DRAW</h1>
                    <p className='text-xs text-primary truncate'>User...</p>
                </div>
            </div>

            <div className='hidden md:col-span-3 md:flex items-center justify-center rounded-md'>
                <div className='bg-background p-4 space-x-2'>
                    <NavButton isActive title='buy tickets' />
                    <NavButton title='logout' />
                </div>
            </div>

            <div className='flex flex-col ml-auto text-right'>
                <div>
                    <Menu className="h-8 w-8 mx-auto text-white hover:cursor-pointer" />
                </div>
                <span className='md:hidden'>
                    <NavButton title='logout' />
                </span>
            </div>
        </header>
    )
}

export default Header