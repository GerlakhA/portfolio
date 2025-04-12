export interface ISkills {
	id: number
	name: string
	// icon: IconType
}

export interface IProject {
	id: number
	name: string
	skills: ISkills[]
	link: string
	imgUrl: string
	description: string
}

export type ThemeMode = 'dark' | 'light'
