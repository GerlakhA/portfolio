export interface ISkills {
	id: number
	name: string
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
