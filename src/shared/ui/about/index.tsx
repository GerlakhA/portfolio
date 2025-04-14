import * as motion from 'motion/react-client'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export const About = async () => {
	const t = await getTranslations('AboutPage')

	return (
		<div className='flex justify-between items-center'>
			<motion.p
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5 }}
				className='text-5xl font-bold w-[50%]'
			>
				{t('presentation')}
			</motion.p>
			<Image
				src={'/me.jpeg'}
				width={600}
				height={720}
				className='rounded-full shadow-lg shadow-black dark:shadow-white'
				alt='me'
			/>
		</div>
	)
}
