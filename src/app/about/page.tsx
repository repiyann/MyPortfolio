import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

export const metadata: Metadata = {
	title: "Repiyann's About",
	description: "Muhamad Repiyan's personal info"
}

export default function page() {
	return (
		<div className="px-5 pt-2 pb-20 md:px-20 lg:px-80 lg:pt-5 flex flex-col dark:bg-[#121212] bg-white">
			<div className="mt-5 flex flex-col-reverse items-center justify-between md:flex-row">
				<div>
					<h1 className="text-4xl font-bold dark:text-white"> About Me </h1>
					<h2 className="text-2xl font-semibold text-[#264480] dark:text-[#839FD8] mt-2">
						{" "}
						Muhamad Repiyan Riski{" "}
					</h2>
					<br />
					<p className="dark:text-white text-justify md:pr-10">
						My name is <b>Muhamad Repiyan Riski</b>, or you could call me{" "}
						<b>Ian</b> for short. I&apos;m an active student in the 7th semester
						of the Computer Science from Indonesia Computer University. Interested in becoming a full-stack web developer and currently
						learning a lot to become one.
					</p>
					<p className="dark:text-white text-justify mt-2 md:pr-10">
						My degree is providing me with a solid foundation in both front-end
						and back-end technologies, which are crucial for becoming a
						full-stack developer. Through my coursework, I&apos;ve gained hands-on
						experience with various programming languages, frameworks, and
						development tools. This knowledge is essential for building
						comprehensive web applications from start to finish. I&apos;m
						continuously applying what I&apos;ve learned through projects and
						internships, which is helping me to develop the skills needed to
						excel in full-stack development.
					</p>
				</div>
				<Image
					src={"/photo.png"}
					width={150}
					height={150}
					priority
					style={{ width: "auto", height: "auto" }}
					alt="Muhamad Repiyan's Photo"
				/>
			</div>
			<h1 className="text-3xl font-bold dark:text-white mt-6">Timeline</h1>
			<p className="dark:text-white">
				Take a look at my timeline below, it consists of my career path, formal
				education and more.
			</p>
			<div className="mt-4">
				<Accordion type="multiple">
					<AccordionItem value="item-1">
						<AccordionTrigger className="dark:text-white pl-7 font-semibold">
							Sagara Mobile
						</AccordionTrigger>
						<AccordionContent className="dark:text-white">
							<p className="text-gray-500 pl-7">Aug 2024 - Present</p>
							<p className="pl-7">Web Developer Internship</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="dark:text-white pl-7 font-semibold">
							Freelance
						</AccordionTrigger>
						<AccordionContent className="dark:text-white">
							<p className="text-gray-500 pl-7">Jun 2024 - Jul 2024</p>
							<p className="pl-7">Frontend Developer Freelance</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className="dark:text-white pl-7 font-semibold">
							Infinite Learning Indonesia
						</AccordionTrigger>
						<AccordionContent className="dark:text-white">
							<p className="text-gray-500 pl-7">Feb 2024 - Jul 2024</p>
							<p className="pl-7">Study Independent Kampus Merdeka Batch 6</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger className="dark:text-white pl-7 font-semibold">
							Indonesia Computer University
						</AccordionTrigger>
						<AccordionContent className="dark:text-white">
							<p className="text-gray-500 pl-7">2021 - Present</p>
							<p className="pl-7">Majored in Computer Science</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger className="dark:text-white pl-7 font-semibold">
							SMAN 1 Sindang Indramayu
						</AccordionTrigger>
						<AccordionContent className="dark:text-white">
							<p className="text-gray-500 pl-7">2018 - 2021</p>
							<p className="pl-7">Majored in Math and Science</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<p className="mt-5 dark:text-white">
				You could also see{" "}
				<a
					className="font-bold"
					href="https://drive.google.com/file/d/1xhTlFUmegWyrhGeAfmYpEPgL_jusIs3e/view?usp=sharing"
					target="_blank"
				>
					my resume here
				</a>
			</p>
		</div>
	)
}
