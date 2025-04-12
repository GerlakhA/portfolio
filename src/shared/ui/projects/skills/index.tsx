import { ISkills } from '@/config/types'

interface SkillsProps {
	skills: ISkills[]
}

export const Skills = async ({ skills }: SkillsProps) => {
	return (
		<div>
			{skills.map(skill => {
				return (
					<div key={skill.id} className='flex p-6 item-center gap-4'>
						{/* <skill.icon size={40} /> */}
						<span>{skill.name}</span>
					</div>
				)
			})}
		</div>
	)
}
