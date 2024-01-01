/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { SyncLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="bg-background h-screen flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-12">
                <Image src="/logo.png"
                    alt="logo"
                    className='mb-10'
                    height={200}
                    width={200}
                    priority={true}
                />
            </div>
            <h1 className="text-lg text-white font-bold mb-10">Loading the Rapid Draw</h1>
            <SyncLoader color="white" size={30} />
        </div>
    )
}

export default Loading