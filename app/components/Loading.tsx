/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { SyncLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="bg-background h-screen flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-12">
                <img
                    src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="rounded-full h-56 w-56"
                    alt="" />
            </div>
            <h1 className="text-lg text-white font-bold mb-10">Loading the Rapid Draw</h1>
            <SyncLoader color="white" size={30} />
        </div>
    )
}

export default Loading