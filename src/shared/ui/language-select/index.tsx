'use client'

import { Globe } from 'lucide-react'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/components/ui/select'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

const languages = [
	{ code: 'en', name: 'English (En)' },
	{ code: 'ru', name: 'Русский (Ru)' }
]

export const LanguageSelect = () => {
	const locale = useLocale()
	const router = useRouter()

	return (
		<div className='flex items-center'>
			<Globe className='h-7 w-7 mr-2 dark:text-zinc-400' />
			<Select defaultValue={locale} onValueChange={value => router.push(value)}>
				<SelectTrigger className='w-[140px] bg-zinc-900 border-zinc-800 focus:ring-zinc-700'>
					<SelectValue placeholder='Select language' />
				</SelectTrigger>
				<SelectContent className='bg-zinc-900 border-zinc-800'>
					{languages.map(language => (
						<SelectItem
							key={language.code}
							value={language.code}
							className='text-zinc-200 focus:bg-zinc-800 focus:text-zinc-50 cursor-pointer'
						>
							{language.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
