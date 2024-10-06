"use client"

import { useAccordionStore } from "@/hooks/accordionState"
import { usePathname } from "next/navigation"
import React from "react"

export default function Footer() {
	const pathname = usePathname()
	const { openAccordion } = useAccordionStore()

	const isAbout = pathname === "/about"
	const isAccordionEmpty = !openAccordion || openAccordion.length === 0
	const isAccordionFirst = openAccordion && openAccordion.length === 1

	console.log("Currently open accordion:", openAccordion)
	return (
		<footer
			className={`dark:bg-[#121212] bg-white bottom-0 w-full ${
				isAbout && isAccordionEmpty ? "md:fixed lg:mt-10 lg:fixed" : isAbout && isAccordionFirst ? "lg:fixed" : !isAbout && "lg:fixed"
			}`}
		>
			<p className="text-center dark:text-white">
				Copyright © 2024 - All Right Reserved by Muhamad Repiyan Riski.
			</p>
		</footer>
	)
}
