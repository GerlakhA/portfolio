'use client'

import { formSchema } from '@/config/schema'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent } from '@/shared/components/ui/card'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { Textarea } from '@/shared/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

type FormValues = z.infer<typeof formSchema>

export const Contact = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const t = useTranslations('Contact')

	const form = useForm<FormValues>({
		mode: 'onChange',
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: 'andrey215gerlakh@gmail.com',
			message: ''
		}
	})

	async function onSubmit(values: FormValues) {
		setIsSubmitting(true)

		try {
			const response = await fetch('/api/emails', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			})

			if (response.ok) {
				toast.success("Thank you for your message. I'll get back to you soon.")
				form.reset()
			} else {
				toast.error('Something went wrong. Please try again.')
			}
		} catch (error) {
			toast.error('An error occurred while submitting the form.')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className='space-y-8'>
			<Card>
				<CardContent className='pt-6'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t('name')}</FormLabel>
										<FormControl>
											<Input placeholder={t('placeholderName')} {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t('email')}</FormLabel>
										<FormControl>
											<Input readOnly {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='message'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t('message')}</FormLabel>
										<FormControl>
											<Textarea
												placeholder={t('placeholderMessage')}
												className='min-h-[150px]'
												{...field}
											/>
										</FormControl>
										<FormDescription>{t('description')}</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type='submit'
								disabled={isSubmitting}
								className='w-full cursor-pointer p-6'
							>
								{isSubmitting ? (
									'Sending...'
								) : (
									<>
										<Send className='mr-2 h-4 w-4' />
										{t('send')}
									</>
								)}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}
