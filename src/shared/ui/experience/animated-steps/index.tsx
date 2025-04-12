'use client'

import type React from 'react'

import { Steps } from 'antd'
import { useEffect, useRef, useState } from 'react'

interface AnimatedStepsProps {
	items: {
		title: React.ReactNode
		description: React.ReactNode
	}[]
}

export function AnimatedSteps({ items }: AnimatedStepsProps) {
	const [currentStep, setCurrentStep] = useState(0)
	const stepsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!stepsRef.current) return

			const stepsElement = stepsRef.current
			const stepsTop = stepsElement.getBoundingClientRect().top
			const stepsHeight = stepsElement.offsetHeight
			const windowHeight = window.innerHeight

			const scrollPercentage = Math.max(
				0,
				Math.min(1, (windowHeight - stepsTop) / (stepsHeight + windowHeight * 0.5))
			)

			const newStep = Math.floor(scrollPercentage * items.length)

			if (newStep !== currentStep && newStep >= 0 && newStep < items.length) {
				setCurrentStep(newStep)
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll)
	}, [currentStep, items.length])

	return (
		<div ref={stepsRef}>
			<Steps
				direction='vertical'
				current={currentStep}
				items={items}
				style={{ height: 720 }}
				className='dark:bg-background dark:text-foreground'
			/>
		</div>
	)
}
