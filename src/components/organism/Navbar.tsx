'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import NavLink from '@/components/mollecules/NavLink'

export default function Navbar() {
	const { setTheme } = useTheme()
	const pathname = usePathname()

	const [float, setFloat] = useState<boolean>(false)
	const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)

	useEffect(() => {
		function handleScroll() {
			setFloat(window.scrollY > 0)
		}

		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [pathname, float])

	return (
		<header
			className={`px-1 py-4 md:px-16 md:py-2 lg:py-5 flex items-center sticky dark:bg-[#121212] bg-[#ffffff] top-0 z-50 justify-between ${
				float
					? 'lg:m-10 lg:top-5 lg:px-[248px] shadow-lg dark:shadow-dark-lg rounded-xl transition-all duration-300'
					: 'lg:px-72 transition-all duration-300'
			}`}
		>
			<h1 className="hidden text-xl md:block md:mx-2">
				<Link className="font-semibold dark:text-white" href="/">
					Repiyann
				</Link>
			</h1>
			<div className="flex items-center mx-3 md:hidden">
				<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
					<SheetTrigger aria-label="Open Sheet">
						<Menu className="dark:text-white" />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle className="text-2xl pb-3">Repiyann</SheetTitle>
							{['/', '/portfolio', '/about', '/contact'].map((link) => (
								<div key={link}>
									<Link
										href={link}
										onClick={() => setIsSheetOpen(false)}
										className={`text-lg font-semibold ${
											pathname === link
												? 'text-[#264480] dark:text-[#839FD8]'
												: 'dark:text-white'
										}`}
									>
										{link === '/'
											? 'Home'
											: link.charAt(1).toUpperCase() + link.slice(2)}
									</Link>
								</div>
							))}
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
			<nav className="hidden md:flex md:gap-2">
				<ul className="flex gap-2">
					{['/', '/portfolio', '/about', '/contact'].map((link) => (
						<li key={link}>
							<NavLink href={link} activePage={pathname}>
								{link === '/'
									? 'Home'
									: link.charAt(1).toUpperCase() + link.slice(2)}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<DropdownMenu>
				<DropdownMenuTrigger
					aria-label="Open Theme Dropdown"
					className="dark:text-white px-2 py-1 hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f] hover:rounded-md"
				>
					<Moon className="dark:block hidden" />
					<Sun className="block dark:hidden" />
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{['Light', 'Dark'].map((option, index) => (
						<DropdownMenuItem
							onSelect={() => setTheme(option.toLowerCase())}
							key={index}
						>
							{option === 'Dark' ? (
								<Moon className="mr-2" />
							) : (
								<Sun className="mr-2" />
							)}
							{option}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	)
}
