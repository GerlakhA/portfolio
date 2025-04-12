import { IProject } from './types'

export const PROJECTS: IProject[] = [
	{
		id: 1,
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
		link: 'https://github.com/GerlakhA/Full-stack-planner',
		description:
			'A planning application with functionality: statistics, a timer, creating tasks in two types (kanban or sheet), as well as a time block where you can plan your day and find out how much time is left for sleep.  The server is written in Nest js.'
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
		link: 'https://github.com/GerlakhA/taskify',
		description:
			'Task manager with functionality: copying, deleting, editing and drag and drop. The neural network generates a background tailored to your workspace with tasks.'
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
		link: 'https://github.com/GerlakhA/spotify-clone',
		description:
			'A site for listening to music with the ability to log in, you can listen to songs and add your own. It is possible to search songs by title. Added the ability to create playlists'
	}
]
