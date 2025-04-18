'use client'

import type { IProject } from '@/config/types'
import { cn } from '@/lib/utils'
import { Badge } from '@/shared/components/ui/badge'
import * as motion from 'motion/react-client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

interface IProjectItem {
	project: IProject
}

export const ProjectItem = ({ project }: IProjectItem) => {
	const t = useTranslations('Project')
	const characters = t(`description.${project.id}`).split('')
	const isEven = project.id % 2 === 0

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className={cn('w-[40%] flex')}
		>
			<div className='group relative overflow-hidden rounded-xl bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-primary/5 hover:dark:shadow-primary/10'>
				<div className='absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl filter group-hover:bg-primary/20 dark:bg-primary/5 dark:group-hover:bg-primary/10' />

				<div className='relative overflow-hidden'>
					<Link href={project.link} target='_blank'>
						<div className='relative h-48 w-full overflow-hidden sm:h-64'>
							<Image
								src={project.imgUrl}
								fill
								alt={project.name}
								className='object-cover transition-transform duration-500 group-hover:scale-105'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-card/80 to-transparent' />
						</div>
					</Link>
				</div>

				<div className='flex flex-col h-full gap-4 p-6 bg-gradient-to-r from-white to-indigo-100 dark:from-black dark:to-emerald-800'>
					<div className='space-y-2'>
						<motion.h2
							className='text-2xl font-bold tracking-tight text-card-foreground'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							{project.name}
						</motion.h2>

						<motion.p className='text-neutral-600 dark:text-neutral-400'>
							{t(`description.${project.id}`)}
						</motion.p>
					</div>

					<div className='mt-2'>
						<h3 className='mb-2 text-xs font-medium uppercase text-muted-foreground'>
							{t('skills')}
						</h3>
						<div className='flex flex-wrap gap-2'>
							{project.skills.map(skill => (
								<Badge
									key={skill.id}
									variant='secondary'
									className='bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-colors'
								>
									{skill.name}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
