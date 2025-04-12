import { create } from 'zustand'

export type PropsStore = {
	linkId: number
	setLinkId: (id: number) => void
}

export const useLinkStore = create<PropsStore>(set => ({
	linkId: 1,
	setLinkId: (linkId: number) => set({ linkId })
}))
