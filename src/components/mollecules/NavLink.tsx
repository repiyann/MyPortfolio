import Link from "next/link"

export default function NavLink({
	href,
	activePage,
	children,
}: {
	href: string
	activePage: string
	children: React.ReactNode
}) {
	return (
		<Link
			href={href}
			className={`font-semibold px-2 py-1 ${
				activePage === href
					? 'text-[#264480] dark:text-[#839FD8] hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f]'
					: 'dark:text-white hover:bg-[#dde6fa] dark:hover:bg-[#1b1c1f]'
			}`}
		>
			{children}
		</Link>
	)
}
