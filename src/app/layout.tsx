import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/mollecules/ThemeProvider"
import Navbar from "@/components/organism/Navbar"
import Footer from "@/components/mollecules/Footer"
import { Suspense } from "react"
import Loading from "@/components/mollecules/Loading"

const roboto = Roboto({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Repiyann's Portfolio",
	description: "Muhamad Repiyan's personal portfolio"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${roboto.className} dark:bg-[#121212] bg-white`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					<Suspense fallback={<Loading />}>
						<Navbar />
						<main>{children}</main>
						<Footer />
					</Suspense>
				</ThemeProvider>
			</body>
		</html>
	)
}
