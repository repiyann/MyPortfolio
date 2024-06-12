'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

export default function Footer() {
	const pathname = usePathname()
	const isHomeOrContact = pathname === '/' || pathname === '/contact'

	return (
		<footer className={`dark:bg-[#121212] bg-white py-1 bottom-0 w-full ${isHomeOrContact && 'fixed'}`}>
			<p className="text-center dark:text-white">Copyright © 2024 - All Right Reserved by Muhamad Repiyan Riski.</p>
		</footer>
	)
}
