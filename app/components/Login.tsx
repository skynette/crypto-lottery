'use client';
/* eslint-disable @next/next/no-img-element */
import { useMetamask } from '@thirdweb-dev/react'
import Image from 'next/image';
import React from 'react'

const Login = () => {
    const connectWallet = useMetamask()
    return (
        <div className='bg-background min-h-screen flex flex-col items-center justify-center text-center'>
            <div className='flex flex-col items-center mb-10'>
                <Image src="/logo.png"
                    alt="logo"
                    className='mb-10'
                    height={200}
                    width={200}
                    priority={true}
                />
                <h1 className='text-5xl text-white font-bold'>Rapid Draw</h1>
                <h2 className='text-white mt-2'>Get started by connecting ypur wallet</h2>
                <button
                    className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold'
                    onClick={() => connectWallet()}
                >
                    Connect Wallet
                </button>
            </div>
        </div>
    )
}

export default Login