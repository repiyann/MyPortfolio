import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
	title: "Repiyann's Portfolio",
	description: "Muhamad Repiyan's personal portfolio"
}

export default function Portfolio() {
	return (
		<div className="px-5 pt-5 pb-20 md:px-20 lg:px-80 flex flex-col dark:bg-[#121212] bg-white">
			<h1 className="text-4xl font-bold dark:text-white"> My Portfolio </h1>
			<p className="dark:text-white"> All the projects that I&apos;ve been created for quite some time</p>
			<div className="mt-10 md:grid md:grid-cols-2 md:gap-5">
				<div className="col-start-1 col-end-1">
					<Card className="h-[180px] mb-3 md:mb-0">
						<CardHeader>
							<CardTitle className="flex justify-between relative">
								Text To Speech
								<Link
									href="https://github.com/repiyann/Text-To-Speech"
									target="_blank"
								>
									<Github className="hover:text-[#264480]" />
								</Link>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Simple Text To Speech website created using an API from VoiceRSS</p>
						</CardContent>
					</Card>
				</div>
				<div className="col-start-2 col-end-2">
					<Card className="h-[180px] mb-3 md:mb-0">
						<CardHeader>
							<CardTitle className="flex justify-between relative">
								Laravel Web Scraper
								<Link
									href="https://github.com/repiyann/Laravel-Web-Scraper"
									target="_blank"
								>
									<Github className="hover:text-[#264480]" />
								</Link>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Laravel web scraper that scrapes from &quot;Masak Apa Hari ini?&quot; website</p>
						</CardContent>
					</Card>
				</div>
				<div className="col-start-1 col-end-1">
					<Card className="h-[180px] mb-3 md:mb-0">
						<CardHeader>
							<CardTitle className="flex justify-between relative">
								Scraping and GIS
								<Link
									href="https://github.com/repiyann/Scraping-and-GIS-with-Python"
									target="_blank"
								>
									<Github className="hover:text-[#264480]" />
								</Link>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Scrapping Data in Python and use that data to simulate GIS or Geographic Information System also using
								Python
							</p>
						</CardContent>
					</Card>
				</div>
				<div className="col-start-2 col-end-2">
					<Card className="h-[180px] mb-3 md:mb-0">
						<CardHeader>
							<CardTitle className="flex justify-between relative">
								MyPortfolio
								<div className="flex flex-row gap-5">
									<Link
										href="https://github.com/repiyann/MyPortfolio"
										target="_blank"
									>
										<Github className="hover:text-[#264480]" />
									</Link>
									<Link
										href="https://repiyann.vercel.app/"
										target="_blank"
									>
										<ExternalLink className="hover:text-[#264480]" />
									</Link>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>My personal website, built with ReactJS, TailwindCSS, FontAwesome, and shadcn/ui components</p>
						</CardContent>
					</Card>
				</div>
				<div className="col-start-1 col-end-1">
					<Card className="h-[180px] mb-3 md:mb-0">
						<CardHeader>
							<CardTitle className="flex justify-between relative">
								Freelance
								<div className="flex flex-row gap-5">
									<Link
										href="https://github.com/repiyann/freelance"
										target="_blank"
									>
										<Github className="hover:text-[#264480]" />
									</Link>
									<Link
										href="https://freelance-lake.vercel.app/"
										target="_blank"
									>
										<ExternalLink className="hover:text-[#264480]" />
									</Link>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Freelance frontend website, created to fullfill mini project of MBKM</p>
						</CardContent>
					</Card>
				</div>
				<div className="col-start-2 col-end-2">
					<Card className="h-[180px] mb-3 md:mb-0">
						<CardHeader>
							<CardTitle className="flex justify-between relative">
								ReactJS - BookStore
								<Link
									href="https://github.com/repiyann/React-MySQL---BookStore"
									target="_blank"
								>
									<Github className="hover:text-[#264480]" />
								</Link>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Simple CRUD book store created using ReactJS, ExpressJS, and TailwindCSS</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
