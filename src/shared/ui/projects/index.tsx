import { PROJECTS } from '@/config/projects'
import * as motion from 'motion/react-client'
import { ProjectItem } from './projectItem'

export const Projects = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col gap-10 mt-10'
		>
			<motion.div className='w-full flex flex-wrap gap-20 ml-25'>
				{PROJECTS.map(project => (
					<ProjectItem key={project.id} project={project} />
				))}
			</motion.div>
		</motion.div>
	)
}
