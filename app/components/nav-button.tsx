import { cn } from '@/lib/utils'
import React from 'react'

interface NavButtonProps {
    title: string,
    isActive?: boolean
}

function NavButton({ title, isActive }: NavButtonProps) {
    return (
        <button className={cn('font-bold text-white px-4 py-2 rounded hover:bg-primary', isActive && 'bg-primary')}>{title}</button>
    )
}

export default NavButton