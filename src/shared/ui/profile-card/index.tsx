import { tags } from '@/config/skills'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import { Badge } from '@/shared/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card'
import { Separator } from '@/shared/components/ui/separator'
import { Github, Mail, MapPin, User } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { FaTelegram } from 'react-icons/fa'

export const ProfileCard = async () => {
	const t = await getTranslations('AboutPage')

	return (
		<Card className='w-full max-w-md overflow-hidden border-zinc-800 bg-zinc-950 text-zinc-100 shadow-md dark:shadow-neutral-600'>
			<CardHeader className='relative h-32 bg-gradient-to-r from-slate-500 to-slate-700 dark:from-zinc-800 dark:to-zinc-700'>
				<div className='absolute -bottom-12 left-0 w-full px-6'>
					<Avatar className='h-24 w-24 border-4 border-zinc-950'>
						<AvatarImage src={'/me.jpeg'} alt={'me'} />
						<AvatarFallback className='bg-zinc-800 text-zinc-400'>
							<User className='h-12 w-12' />
						</AvatarFallback>
					</Avatar>
				</div>
			</CardHeader>

			<CardContent className='mt-14 space-y-4 p-6'>
				<div>
					<h2 className='text-2xl font-bold text-zinc-100'>{t('name')}</h2>
					<div className='mt-1 flex items-center text-zinc-400'>
						<MapPin className='mr-1 h-4 w-4' />
						<span>{t('from')}</span>
						<span className='mx-2'>•</span>
						<span>{t('years')}</span>
					</div>
				</div>

				<p className='text-zinc-300'>{t('cardDescription')}</p>

				<Separator className='bg-zinc-800' />

				<div>
					<h3 className='mb-2 text-sm font-medium uppercase text-zinc-400'>{t('skills')}</h3>
					<div className='flex flex-wrap gap-2'>
						{tags.map((tag, index) => (
							<Badge
								key={index}
								variant='secondary'
								className='bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
							>
								{tag}
							</Badge>
						))}
					</div>
				</div>
			</CardContent>

			<CardFooter className='flex justify-between gap-2 border-t border-zinc-800 bg-zinc-900 p-4'>
				<Link
					href={'/#contact'}
					className='flex-1 border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 flex justify-center items-center border rounded-lg p-1'
				>
					<Mail className='mr-2 h-4 w-4' />
					{t('cardContact')}
				</Link>
				<Link
					href='https://github.com/GerlakhA'
					target='_blank'
					rel='noopener noreferrer'
					className='border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 h-9 w-9 rounded-lg border flex items-center justify-center'
				>
					<Github className='h-5 w-5' />
				</Link>
				<Link
					href='https://t.me/donTT_WorrY'
					target='_blank'
					rel='noopener noreferrer'
					className='border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 h-9 w-9 rounded-lg border flex items-center justify-center'
				>
					<FaTelegram className='h-5 w-5' />
				</Link>
			</CardFooter>
		</Card>
	)
}
