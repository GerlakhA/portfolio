import * as motion from 'motion/react-client'
import { getTranslations } from 'next-intl/server'
import { AnimatedSteps } from './animated-steps'

export const Experience = async () => {
	const t = await getTranslations('Experience')

	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
		>
			<AnimatedSteps
				items={[
					{
						title: <strong className='dark:text-[#ededed]'>{t('start')}</strong>,
						description: <p className='dark:text-[#ededed] w-[70%]'>{t('descriptionFirst')}</p>
					},
					{
						title: <strong className='dark:text-[#ededed]'>{t('start')}</strong>,
						description: (
							<p className='dark:text-[#ededed] w-[70%]'>{t('descriptionSecond')}</p>
						)
					},
					{
						title: <strong className='dark:text-[#ededed]'>{t('start')}</strong>,
						description: <p className='dark:text-[#ededed] w-[70%]'>{t('descriptionThird')}</p>
					}
				]}
			/>
		</motion.div>
	)
}
