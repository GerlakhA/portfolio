'use client'

import { useLinkStore } from '@/shared/store/links'
import * as motion from 'motion/react-client'
import { useTranslations } from 'next-intl'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

interface IContent {
	linkId: number
	id: string
	title: string
	children: React.ReactNode
}

export const Content = ({ linkId, title, children, id }: IContent) => {
	const setLinkId = useLinkStore(state => state.setLinkId)
	const t = useTranslations('ContentTitle')

	const intersectionRef = useRef<any>(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.8
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setLinkId(linkId)
		}
	}, [linkId, intersection?.isIntersecting, title])

	return (
		<motion.div
			id={id}
			ref={intersectionRef}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='p-25 w-full'
		>
			<motion.h1
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5 }}
				className='mb-15 text-7xl font-bold dark:text-purple-700'
			>
				{t(title)}
			</motion.h1>
			{children}
		</motion.div>
	)
}
