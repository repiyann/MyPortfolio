import React from 'react'
import { Facebook, Github, Linkedin, Mail, Instagram } from 'lucide-react'

export default function page() {
	return (
		<div className="px-5 py-2 md:px-20 lg:px-80 lg:pt-5 flex flex-col dark:bg-[#121212] bg-white">
			<h1 className="text-4xl font-bold dark:text-white"> Contact Me </h1>
			<p className="dark:text-white">
				I&apos;m excited to connect with everyone so please don&apos;t hesitate to get in touch with me by following my
				social media bellow:
			</p>
			<br />
			<ul>
				<li className="dark:text-white text-lg flex flex-row">
					<Mail className="mr-3" />
					Email: <a href="mailto:muhrepiyan26@gmail.com">muhrepiyan26@gmail.com</a>
				</li>
				<li className="dark:text-white text-lg flex flex-row">
					<Instagram className="mr-3" />
					Instagram:{' '}
					<a
						href="https://instagram.com/repiyann"
						target="_blank"
					>
						@repiyann
					</a>
				</li>
				<li className="dark:text-white text-lg flex flex-row">
					<Github className="mr-3" />
					GitHub:{' '}
					<a
						href="https://github.com/repiyann"
						target="_blank"
					>
						repiyann
					</a>
				</li>
				<li className="dark:text-white text-lg flex flex-row">
					<Linkedin className="mr-3" />
					LinkedIn:{' '}
					<a
						href="https://linkedin.com/in/muhamad-repiyan"
						target="_blank"
					>
						Muhamad Repiyan Riski
					</a>
				</li>
			</ul>
		</div>
	)
}
