import { skills } from '@/config/skills'

export const SkillIcons = () => (
	<div className='flex'>
		{skills.map((skill, index) => (
			<p key={index}>
				<a href={skill.link} target='_blank' rel='noreferrer'>
					<img src={skill.imageSrc} width='36' height='36' alt={skill.altText} />
				</a>
			</p>
		))}
	</div>
)
