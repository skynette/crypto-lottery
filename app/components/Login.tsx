'use client';
/* eslint-disable @next/next/no-img-element */
import { useMetamask } from '@thirdweb-dev/react'
import React from 'react'

const Login = () => {
    const connectWallet = useMetamask()
    return (
        <div className='bg-background min-h-screen flex flex-col items-center justify-center text-center'>
            <div className='flex flex-col items-center mb-10'>
                <img src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className='rounded-full h-56 w-56 mb-10'
                />
                <h1 className='text-5xl text-white font-bold'>Rapid Draw</h1>
                <h2 className='text-white'>Get started by connecting ypur wallet</h2>
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