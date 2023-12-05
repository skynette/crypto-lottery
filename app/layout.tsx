import '@/styles/globals.css'
import { Inter } from "next/font/google"
import { cn } from '@/lib/utils'

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
			<body className=''>
					{children}
			</body>
		</html>
	)
}
