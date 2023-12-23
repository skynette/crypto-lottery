import '@/styles/globals.css'
import { Inter } from "next/font/google"
import { cn } from '@/lib/utils'
import ThirdWebProvider from './providers/thirdweb-provider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
    subsets: ['latin']
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={cn('bg-background min-h-screen flex flex-col', inter.className)}>
            <ThirdWebProvider>
                <body className=''>
                    {children}
                </body>
            <Toaster />
            </ThirdWebProvider>
        </html>
    )
}
