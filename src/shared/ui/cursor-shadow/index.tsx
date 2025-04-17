'use client'

import { useTheme } from '@/shared/store/theme'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Position = {
	x: number
	y: number
}

export const CursorShadow = () => {
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
	const { theme } = useTheme()

	const isDarkTheme = theme === 'dark'

	useEffect(() => {
		let animationFrameId: number

		const updatePosition = (e: MouseEvent) => {
			animationFrameId = requestAnimationFrame(() => {
				setPosition({ x: e.clientX, y: e.clientY })
			})
		}

		window.addEventListener('mousemove', updatePosition)

		return () => {
			window.removeEventListener('mousemove', updatePosition)
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId)
			}
		}
	}, [])

	return (
		<motion.div
			className='fixed top-0 left-0 pointer-events-none z-50'
			animate={{
				x: position.x - 240,
				y: position.y - 240
			}}
			transition={{
				type: 'spring',
				damping: 25,
				stiffness: 150,
				mass: 0.5
			}}
		>
			<div
				className={`w-120 h-120 rounded-full opacity-20 blur-3xl ${
					isDarkTheme ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-tarnsparent'
				}`}
			/>
		</motion.div>
	)
}
