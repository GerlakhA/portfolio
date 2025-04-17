'use client'

import { Link as LinkI18n } from '@/config/i18n/navigation'
import { ROUTES } from '@/config/routes'
import { useThemeMode } from '@/shared/hooks/useThemeMode'
import { useLinkStore } from '@/shared/store/links'
import cn from 'clsx'
import { Github, Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaTelegram } from 'react-icons/fa'
import { LanguageSelect } from '../language-select'

export const Header = () => {
	const { themeMode, toggleTheme } = useThemeMode()

	const t = useTranslations('Navbar')

	const getLinkId = useLinkStore(state => state.linkId)

	const Icon = themeMode === 'dark' ? <Moon /> : <Sun />

	return (
		<header className='sticky top-0 p-10 border-b-1 border-b-neutral-400 flex items-center gap-10 z-10 shadow-md bg-white dark:border-b-slate-400/50 dark:bg-black'>
			<Link href={'/'}>
				<Image
					src={'/me.jpeg'}
					width={60}
					height={60}
					alt='logo'
					className='rounded-full mr-20'
				/>
			</Link>
			<nav className='flex items-center gap-5'>
				{ROUTES.map((route, i) => (
					<LinkI18n
						href={`/#${route.name.toLowerCase()}`}
						key={route.id}
						className={cn(
							'h-8',
							getLinkId === route.id && 'border-b-3 border-black dark:border-b-blue-500'
						)}
					>
						<span className='font-bold text-xl'>{t(route.name.toLowerCase())}</span>
					</LinkI18n>
				))}
			</nav>

			<div className='absolute right-40 flex items-center gap-10'>
				<div className='flex items-center gap-4'>
					<Link
						href='https://github.com/GerlakhA'
						target='_blank'
						rel='noopener noreferrer'
						className='dark:text-zinc-400 transition-colors dark:hover:text-zinc-50 hover:text-black/50'
					>
						<Github size={25} />
						<span className='sr-only'>GitHub</span>
					</Link>
					<Link
						href='https://t.me/donTT_WorrY'
						target='_blank'
						rel='noopener noreferrer'
						className='dark:text-zinc-400 transition-colors dark:hover:text-zinc-50 hover:text-black/50'
					>
						<FaTelegram size={25} />
						<span className='sr-only'>Telegram</span>
					</Link>
				</div>
				<LanguageSelect />
				<button
					onClick={toggleTheme}
					className='bg-transparent shadow-sm dark:shadow-white w-12 h-12 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all rounded-full cursor-pointer flex justify-center items-center'
				>
					{Icon}
				</button>
			</div>
		</header>
	)
}
