'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function Navbar() {
	const { setTheme } = useTheme()
	const pathname = usePathname()
	const [float, setFloat] = useState<boolean>(false)
	const [activePage, setActivePage] = useState<string>('')

	useEffect(() => {
		function handleScroll(): void {
			const isFloat: boolean = window.scrollY > 0
			float !== isFloat && setFloat(isFloat)
		}

		const currentPage: string = pathname
		setActivePage(currentPage)

		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [pathname, float])

	return (
		<header
			className={`py-5 flex items-center sticky dark:bg-[#121212] bg-[#ffffff] top-0 z-50 justify-between ${
				float
					? 'm-10 top-5 px-[248px] shadow-lg dark:shadow-dark-lg rounded-xl transition-all duration-300'
					: 'px-72 transition-all duration-300'
			}`}
		>
			<h1>
				<Link
					className="font-semibold dark:text-white"
					href="/"
				>
					Repiyann
				</Link>
			</h1>
			<nav>
				<ul className="hidden md:flex md:justify-between md:relative gap-2">
					<li>
						<Link
							className={`font-semibold px-2 py-1 ${
								activePage === '/'
									? 'text-[#264480] hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
									: 'dark:text-white hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
							}`}
							href="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className={`font-semibold px-2 py-1 ${
								activePage === '/portfolio'
									? 'text-[#264480] hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
									: 'dark:text-white hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
							}`}
							href="/portfolio"
						>
							Portfolio
						</Link>
					</li>
					<li>
						<Link
							className={`font-semibold px-2 py-1 ${
								activePage === '/about'
									? 'text-[#264480] hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
									: 'dark:text-white hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
							}`}
							href="/about"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className={`font-semibold px-2 py-1 ${
								activePage === '/contact'
									? 'text-[#264480] hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
									: 'dark:text-white hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
							}`}
							href="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			<DropdownMenu>
				<DropdownMenuTrigger className="dark:text-white px-2 py-1 hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md">
					<Moon className="dark:block hidden" />
					<Sun className="block dark:hidden" />
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{['Light', 'Dark'].map((option, index) => (
						<DropdownMenuItem
							onSelect={() => setTheme(option.toLowerCase())}
							key={index}
						>
							{option === 'Dark' ? <Moon className="mr-2" /> : <Sun className="mr-2" />}
							{option}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	)
}
