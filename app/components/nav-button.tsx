import { cn } from '@/lib/utils'
import React from 'react'

interface NavButtonProps {
    title: string,
    isActive?: boolean
    onClick?: () => void
}

function NavButton({ title, isActive, onClick }: NavButtonProps) {
    return (
        <button
            onClick={onClick}
            className={
                cn('font-bold text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors',
                    isActive && 'bg-purple-400')
            }
        >{title}</button>
    )
}

export default NavButton