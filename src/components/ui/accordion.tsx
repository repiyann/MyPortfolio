'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { useAccordionStore } from '@/hooks/accordionState'
import { cn } from '@/lib/utils'

const Accordion = ({ children }: { children: React.ReactNode }) => {
	const { openAccordion, setOpenAccordion } = useAccordionStore() // Zustand store access

	return (
		<AccordionPrimitive.Root
			type="multiple"
			value={openAccordion}
			onValueChange={(value) =>
				setOpenAccordion(value === openAccordion ? undefined : value)
			}
		>
			{children}
		</AccordionPrimitive.Root>
	)
}

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, value, ...props }, ref) => {
	return (
		<div>
			<div className="px-[0.7rem]">
				<div className="w-1 h-14 dark:bg-white bg-black absolute">
					<div className="circle bg-black dark:bg-white"></div>
				</div>
			</div>
			<AccordionPrimitive.Item
				ref={ref}
				className={cn(
					'border-b',
					'dark:border-white',
					'border-black',
					className
				)}
				value={value}
				{...props}
			/>
		</div>
	)
})
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
				className
			)}
			{...props}
		>
			{children}
			<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

interface AccordionContentProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
	'data-state'?: 'open' | 'closed'
}

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	AccordionContentProps
>(({ className, children, ...props }, ref) => {
	const { 'data-state': dataState } = props

	const dynamicLineClass =
		dataState === 'open' ? 'line-compress' : 'line-expand'

	return (
		<AccordionPrimitive.Content
			ref={ref}
			className={cn('overflow-hidden text-sm transition-all dura', {
				'data-[state=closed]:animate-accordion-up': dataState === 'closed',
				'data-[state=open]:animate-accordion-down': dataState === 'open',
			})}
			{...props}
		>
			<div className="px-[0.7rem]">
				<div className={dynamicLineClass}></div>
			</div>
			<div className={cn('pb-4 pt-0', className)}>{children}</div>
		</AccordionPrimitive.Content>
	)
})

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
