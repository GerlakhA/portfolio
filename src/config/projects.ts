import { IProject } from './types'

export const PROJECTS: IProject[] = [
	{
		id: 1,
		name: 'Next pizza',
		imgUrl: '/next-pizza.png',
		skills: [
			{
				id: 1,
				name: 'Next.js'
			},
			{
				id: 2,
				name: 'Tailwind CSS'
			},
			{
				id: 3,
				name: 'Tanstack React Query'
			},
			{
				id: 4,
				name: 'Zustand'
			},
			{
				id: 5,
				name: 'Next-auth'
			}
		],
		link: 'https://github.com/GerlakhA/next-pizza'
	},
	{
		id: 2,
		name: 'Taskify',
		imgUrl: '/taskify.png',
		skills: [
			{
				id: 1,
				name: 'Next.js'
			},
			{
				id: 2,
				name: 'Tailwind CSS'
			},
			{
				id: 3,
				name: 'Shadcn UI'
			},
			{
				id: 4,
				name: 'Tanstack React Query'
			}
		],
		link: 'https://github.com/GerlakhA/taskify'
	},
	{
		id: 3,
		name: 'Spotify',
		imgUrl: '/spotify.png',
		skills: [
			{
				id: 1,
				name: 'Next.js'
			},
			{
				id: 2,
				name: 'Tailwind CSS'
			},
			{
				id: 3,
				name: 'Tanstack React Query'
			},
			{
				id: 4,
				name: 'Zustand'
			}
		],
		link: 'https://github.com/GerlakhA/spotify-clone'
	},
	{
		id: 4,
		name: 'Planner',
		imgUrl: '/planner.png',
		skills: [
			{
				id: 1,
				name: 'Next.js'
			},
			{
				id: 2,
				name: 'Nest.js'
			},
			{
				id: 3,
				name: 'Tailwind CSS'
			},
			{
				id: 4,
				name: 'Tanstack React Query'
			}
		],
		link: 'https://github.com/GerlakhA/Full-stack-planner'
	}
]
