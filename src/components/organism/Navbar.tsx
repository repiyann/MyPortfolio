'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default function Navbar() {
	const { setTheme } = useTheme()
	const pathname = usePathname()
	
	const [float, setFloat] = useState<boolean>(false)
	const [activePage, setActivePage] = useState<string>('')
	const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)

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

	const closeSheet = () => {
		setIsSheetOpen(false)
	}

	return (
		<header
			className={`px-1 py-4 md:px-16 md:py-2 lg:py-5 flex items-center sticky dark:bg-[#121212] bg-[#ffffff] top-0 z-50 justify-between ${
				float
					? 'lg:m-10 lg:top-5 lg:px-[248px] shadow-lg dark:shadow-dark-lg rounded-xl transition-all duration-300'
					: 'lg:px-72 transition-all duration-300'
			}`}
		>
			<h1 className="hidden text-xl md:block md:mx-2">
				<Link
					className="font-semibold dark:text-white"
					href="/"
				>
					Repiyann
				</Link>
			</h1>
			<div className="flex items-center mx-3 md:hidden">
				<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
					<SheetTrigger aria-label='Open Sheet'>
						<Menu className="dark:text-white" />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle className='text-2xl pb-3'>Repiyann</SheetTitle>
							<SheetDescription>
								<Link
									href={'/'}
									onClick={closeSheet}
									className={`text-lg font-semibold ${activePage === '/' ? 'text-[#264480] dark:text-[#839FD8]' : 'dark:text-white'}`}
								>
									Home
								</Link>
							</SheetDescription>
							<SheetDescription>
								<Link
									href={'/portfolio'}
									onClick={closeSheet}
									className={`text-lg font-semibold ${activePage === '/portfolio' ? 'text-[#264480] dark:text-[#839FD8]' : 'dark:text-white'}`}
								>
									Portfolio
								</Link>
							</SheetDescription>
							<SheetDescription>
								<Link
									href={'/about'}
									onClick={closeSheet}
									className={`text-lg font-semibold ${activePage === '/about' ? 'text-[#264480] dark:text-[#839FD8]' : 'dark:text-white'}`}
								>
									About
								</Link>
							</SheetDescription>
							<SheetDescription>
								<Link
									href={'/contact'}
									onClick={closeSheet}
									className={`text-lg font-semibold ${activePage === '/contact' ? 'text-[#264480] dark:text-[#839FD8]' : 'dark:text-white'}`}
								>
									Contact
								</Link>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
			<nav>
				<ul className="hidden text-lg md:flex md:justify-between md:relative gap-2">
					<li>
						<Link
							className={`font-semibold px-2 py-1 ${
								activePage === '/'
									? 'text-[#264480] dark:text-[#839FD8] hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
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
									? 'text-[#264480] dark:text-[#839FD8] hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
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
									? 'text-[#264480] dark:text-[#839FD8] hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
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
									? 'text-[#264480] dark:text-[#839FD8] hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md'
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
				<DropdownMenuTrigger aria-label='Open Theme Dropdown' className="dark:text-white px-2 py-1 hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md">
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
