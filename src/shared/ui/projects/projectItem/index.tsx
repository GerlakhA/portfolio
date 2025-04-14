'use client'

import { IProject } from '@/config/types'
import cn from 'clsx'
import * as motion from 'motion/react-client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { child, container } from '../config/config'

interface IProjectItem {
	project: IProject
}

export const ProjectItem = ({ project }: IProjectItem) => {
	const colors = ['#ffb8d4', '#fdc6fa', '#ffe7ff']
	const t = useTranslations('Project')

	const characters = t(`description.${project.id}`).split('')

	return (
		<motion.div
			initial={{ x: project.id % 2 === 0 ? 100 : -100 }}
			whileInView={{ x: 0 }}
			transition={{ duration: 1 }}
		>
			<div className={cn('flex items-center gap-10', project.id % 2 === 0 && 'justify-end')}>
				<div className='flex flex-col gap-6 items-center w-[450px]'>
					<motion.h2 className='text-2xl font-semibold'>{project.name}</motion.h2>
					<motion.div
						className='flex flex-wrap'
						variants={container}
						initial='hidden'
						animate='visible'
					>
						{characters.map((character, index) => (
							<motion.p
								key={index}
								variants={child}
								className='font-semibold text-lg'
								style={{
									display: character === ' ' ? 'inline-block' : 'inline-block',
									whiteSpace: 'pre'
								}}
								transition={{
									color: {
										duration: 2,
										ease: 'easeInOut',
										repeat: Number.POSITIVE_INFINITY,
										repeatType: 'loop'
									},
									delay: index * 0.08 // Stagger the color animation based on character position
								}}
							>
								{character === ' ' ? '\u00A0' : character}
							</motion.p>
						))}
					</motion.div>
				</div>
				<Link href={project.link} target='_blank'>
					<Image
						src={project.imgUrl}
						width={250}
						height={250}
						alt={project.name}
						className='hover:scale-110 transition duration-500 cursor-pointer shadow-md shadow-black dark:shadow-white rounded-lg'
					/>
				</Link>
			</div>
		</motion.div>
	)
}
