import * as motion from 'motion/react-client'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { SkillIcons } from '../skilllsIcon'

export const About = async () => {
	const t = await getTranslations('AboutPage')

	return (
		<>
			<div className='flex justify-between items-center'>
				<div className='flex flex-col gap-10 w-[850px]'>
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className='text-5xl font-bold'
					>
						{t('presentation')}
					</motion.p>
					<div>
						<h2 className='text-4xl font-bold mb-4'>{t('skills')}</h2>
						<SkillIcons />
					</div>
				</div>
				<Image
					src={'/me.jpeg'}
					width={500}
					height={620}
					className='rounded-full shadow-lg shadow-black dark:shadow-white'
					alt='me'
				/>
			</div>
		</>
	)
}
