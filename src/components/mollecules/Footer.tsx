'use client'

import { useAccordionStore } from '@/hooks/accordionState'
import { usePathname } from 'next/navigation'

export default function Footer() {
	const pathname = usePathname()
	const { openAccordion } = useAccordionStore()

	const isAbout = pathname === '/about'
	const isAccordionEmpty = !openAccordion || openAccordion.length === 0
	const isAccordionFirst = openAccordion && openAccordion.length === 1

	return (
		<footer
			className={`dark:bg-[#121212] bg-white lg:mt-40 bottom-0 w-full ${
				isAbout && isAccordionEmpty
					? 'md:fixed lg:fixed'
					: isAbout && isAccordionFirst
					? 'lg:fixed'
					: !isAbout && 'lg:fixed'
			}`}
		>
			<p className="text-center dark:text-white">
				Copyright © 2024 - All Right Reserved by Muhamad Repiyan Riski.
			</p>
		</footer>
	)
}
