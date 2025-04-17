import * as motion from 'motion/react-client'
import { getTranslations } from 'next-intl/server'
import { ProfileCard } from '../profile-card'

export const About = async () => {
	const t = await getTranslations('AboutPage')

	return (
		<>
			<div className='flex items-center justify-center gap-50 w-full'>
				<ProfileCard />
				<div className='flex flex-col gap-10 w-[850px]'>
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className='text-6xl font-bold min-w-[400px]'
					>
						{t('presentation')}
					</motion.p>
				</div>
			</div>
		</>
	)
}
