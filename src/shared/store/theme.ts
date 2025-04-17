import { ThemeMode } from '@/config/types'
import { create } from 'zustand'

type ThemeStore = {
	theme: ThemeMode
	setTheme: (theme: ThemeMode) => void
}

export const useTheme = create<ThemeStore>(set => ({
	theme: 'dark',
	setTheme: (theme: ThemeMode) => set({ theme })
}))
