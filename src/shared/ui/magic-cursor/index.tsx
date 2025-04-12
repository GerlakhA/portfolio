'use client'

import { useEffect, useRef, useState } from 'react'

export const MagicCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [hidden, setHidden] = useState(true)
	const [particles, setParticles] = useState<
		Array<{
			x: number
			y: number
			size: number
			color: string
			life: number
			id: number
			rotation: number
			points: number
			scale: number
			vx: number
			vy: number
		}>
	>([])
	const [isHovering, setIsHovering] = useState(false)
	const prevPosition = useRef({ x: 0, y: 0 })
	const velocityRef = useRef({ x: 0, y: 0 })
	const frameRef = useRef(0)
	const [isDarkTheme, setIsDarkTheme] = useState(false)
	const lastParticleTime = useRef(0)

	// Light theme stardust colors
	const lightThemeColors = [
		'#C5CAE9', // Indigo 100
		'#9FA8DA', // Indigo 200
		'#7986CB', // Indigo 300
		'#D1C4E9', // Purple 100
		'#B39DDB', // Purple 200
		'#E8EAF6', // Indigo 50
		'#EDE7F6', // Purple 50
		'#FFFFFF' // White
	]

	// Dark theme stardust colors
	const darkThemeColors = [
		'#7986CB', // Indigo 300
		'#5C6BC0', // Indigo 400
		'#9575CD', // Deep Purple 300
		'#7E57C2', // Deep Purple 400
		'#B39DDB', // Purple 200
		'#E8EAF6', // Indigo 50
		'#D1C4E9', // Purple 100
		'#FFFFFF' // White
	]

	useEffect(() => {
		const updatePosition = (e: MouseEvent) => {
			// Calculate velocity (direction and speed)
			velocityRef.current = {
				x: e.clientX - prevPosition.current.x,
				y: e.clientY - prevPosition.current.y
			}

			// Update position
			setPosition({ x: e.clientX, y: e.clientY })
			prevPosition.current = { x: e.clientX, y: e.clientY }
			setHidden(false)
		}

		const handleMouseLeave = () => setHidden(true)
		const handleMouseEnter = () => setHidden(false)

		// Check if hovering over interactive elements
		const handleHoverCheck = () => {
			const element = document.elementFromPoint(position.x, position.y)
			if (element?.closest('.cursor-none')) {
				setIsHovering(true)
			} else {
				setIsHovering(false)
			}
		}

		window.addEventListener('mousemove', updatePosition)
		window.addEventListener('mouseenter', handleMouseEnter)
		window.addEventListener('mouseleave', handleMouseLeave)

		const hoverInterval = setInterval(handleHoverCheck, 100)

		// Animation frame for smooth particle creation and animation
		const animateParticles = () => {
			// Calculate the speed of movement
			const speed = Math.sqrt(
				velocityRef.current.x * velocityRef.current.x +
					velocityRef.current.y * velocityRef.current.y
			)

			// Create particles at regular intervals, more when moving faster
			const now = Date.now()
			const interval = speed > 5 ? 10 : speed > 2 ? 20 : 30
			if (now - lastParticleTime.current > interval) {
				createStardustParticles(speed)
				lastParticleTime.current = now
			}

			// Update existing particles
			setParticles(prevParticles =>
				prevParticles
					.map(particle => {
						// Apply velocity to position (drift effect)
						const x = particle.x + particle.vx
						const y = particle.y + particle.vy

						// Slow down velocity over time
						const vx = particle.vx * 0.98
						const vy = particle.vy * 0.98

						// Gradually reduce scale and rotate
						const rotation = particle.rotation + (Math.random() * 2 - 1)
						const scale = Math.max(0.1, particle.scale - 0.01)

						// Reduce life
						const life = particle.life - (isDarkTheme ? 0.01 : 0.015)

						return {
							...particle,
							x,
							y,
							vx,
							vy,
							rotation,
							scale,
							life
						}
					})
					.filter(particle => particle.life > 0)
			)

			frameRef.current = requestAnimationFrame(animateParticles)
		}

		frameRef.current = requestAnimationFrame(animateParticles)

		return () => {
			window.removeEventListener('mousemove', updatePosition)
			window.removeEventListener('mouseenter', handleMouseEnter)
			window.removeEventListener('mouseleave', handleMouseLeave)
			clearInterval(hoverInterval)
			cancelAnimationFrame(frameRef.current)
		}
	}, [position, isDarkTheme])

	useEffect(() => {
		// Check if the document has a dark class or prefers-color-scheme is dark
		const isDarkTheme = () => {
			return (
				document.documentElement.classList.contains('dark') ||
				window.matchMedia('(prefers-color-scheme: dark)').matches
			)
		}

		// Initial theme check
		const updateThemeColors = () => {
			const darkMode = isDarkTheme()
			setIsDarkTheme(darkMode)
		}

		// Set up listeners for theme changes
		const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		darkModeMediaQuery.addEventListener('change', updateThemeColors)

		// Also listen for class changes on the html element
		const observer = new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				if (
					mutation.attributeName === 'class' &&
					mutation.target === document.documentElement
				) {
					updateThemeColors()
				}
			})
		})

		observer.observe(document.documentElement, { attributes: true })

		// Initial call
		updateThemeColors()

		return () => {
			darkModeMediaQuery.removeEventListener('change', updateThemeColors)
			observer.disconnect()
		}
	}, [])

	// Create stardust particles
	const createStardustParticles = (speed: number) => {
		// Create 3-8 particles based on speed
		const particleCount = Math.min(Math.floor(speed / 2) + 3, 8)
		const newParticles = []

		// Choose color palette based on theme
		const colorPalette = isDarkTheme ? darkThemeColors : lightThemeColors

		for (let i = 0; i < particleCount; i++) {
			// Random position near the cursor
			const angle = Math.random() * Math.PI * 2
			const distance = Math.random() * 10 + (isHovering ? 10 : 5)

			const x = position.x + Math.cos(angle) * distance
			const y = position.y + Math.sin(angle) * distance

			// Random velocity (for drift effect)
			const vx = (Math.random() - 0.5) * 0.5 + velocityRef.current.x * 0.05
			const vy = (Math.random() - 0.5) * 0.5 + velocityRef.current.y * 0.05

			// Random rotation
			const rotation = Math.random() * 360

			// Random number of points (4-7)
			const points = Math.floor(Math.random() * 4) + 4

			// Create the particle
			const newParticle = {
				x,
				y,
				size: Math.random() * 6 + 2 + speed / 20, // Smaller size for dust-like effect
				color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
				life: Math.random() * 0.5 + 0.5,
				id: Date.now() + Math.random(),
				rotation,
				points,
				scale: Math.random() * 0.5 + 0.5, // Varied initial scale
				vx,
				vy
			}

			newParticles.push(newParticle)
		}

		setParticles(prev => [...prev.slice(-40), ...newParticles]) // Keep only the last 40 particles
	}

	// Function to generate star shape SVG path
	const generateStarPath = (points: number, innerRadius: number, outerRadius: number) => {
		let path = ''
		const angleIncrement = (Math.PI * 2) / points

		for (let i = 0; i < points; i++) {
			// Outer point
			const outerX = Math.cos(i * angleIncrement) * outerRadius
			const outerY = Math.sin(i * angleIncrement) * outerRadius

			// Inner point
			const innerX = Math.cos((i + 0.5) * angleIncrement) * innerRadius
			const innerY = Math.sin((i + 0.5) * angleIncrement) * innerRadius

			// Add to path
			if (i === 0) {
				path += `M ${outerX},${outerY} `
			} else {
				path += `L ${outerX},${outerY} `
			}

			path += `L ${innerX},${innerY} `
		}

		path += 'Z' // Close the path
		return path
	}

	if (hidden) return null

	return (
		<>
			{/* Stardust particles */}
			{particles.map(particle => (
				<div
					key={particle.id + crypto.randomUUID()}
					className='fixed pointer-events-none z-40'
					style={{
						left: `${particle.x}px`,
						top: `${particle.y}px`,
						transform: `translate(-50%, -50%) rotate(${particle.rotation}deg) scale(${particle.scale})`,
						width: `${particle.size}px`,
						height: `${particle.size}px`,
						opacity: particle.life,
						filter: `blur(0.5px) drop-shadow(0 0 1px ${particle.color})`
					}}
				>
					<svg
						width='100%'
						height='100%'
						viewBox='-10 -10 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d={generateStarPath(particle.points, 3, 10)}
							fill={particle.color}
							stroke={isDarkTheme ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.6)'}
							strokeWidth='0.5'
						/>
					</svg>
				</div>
			))}

			{/* Custom cursor style for the whole page */}
			<style jsx global>{`
				body {
					cursor: none;
				}
			`}</style>
		</>
	)
}
