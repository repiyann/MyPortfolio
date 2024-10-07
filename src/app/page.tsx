import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
	title: "Repiyann's Portfolio",
	description: "Muhamad Repiyan's personal portfolio"
}

export default function Home() {
	return (
		<div className="px-5 py-2 md:px-20 md:py-24 lg:px-72 lg:pt-[119.5px] flex flex-col-reverse dark:bg-[#121212] bg-white justify-center items-center md:grid md:grid-cols-2 md:gap-10">
			<div className="col-start-1 col-end-1 m-auto text-center md:text-left">
				<header>
					<h1 className="text-[33px] font-bold dark:text-white">
						Muhamad Repiyan Riski
					</h1>
					<h2 className="text-2xl font-medium text-[#264480] dark:text-[#839FD8]">
						Student & Full-Stack Developer
					</h2>
				</header>
				<p className="text-lg mt-3 dark:text-white">
					Welcome to my personal website
				</p>
			</div>
			<div className="col-start-2 col-end-2 m-auto">
				<Image
					src={"/homeImage.png"}
					height={300}
					width={300}
					style={{ width: "auto", height: "auto" }}
					priority
					alt="Home Image Ilustration"
				/>
			</div>
		</div>
	)
}
