import { ThemeMode } from '@/config/types'
import { useEffect, useState } from 'react'

export const useThemeMode = () => {
	const [themeMode, setThemeMode] = useState<ThemeMode>('dark')

	useEffect(() => {
		const localTheme = localStorage.getItem('themeMode')

		if (themeMode === 'dark') {
			setThemeMode(localTheme as ThemeMode)
			document.documentElement.classList.add('dark')
		} else {
			setThemeMode(localTheme as ThemeMode)
			document.documentElement.classList.remove('dark')
		}
	}, [themeMode])

	const toggleTheme = () => {
		const newTheme = themeMode === 'light' ? 'dark' : 'light'
		setThemeMode(newTheme)
		localStorage.setItem('themeMode', newTheme)
	}

	return { themeMode, toggleTheme }
}
