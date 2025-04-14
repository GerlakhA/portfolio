import Email from '@/emails/email'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
	const { name, email, message } = await req.json()

	const data = await resend.emails.send({
		from: `${name} <onboarding@resend.dev>`,
		to: email,
		subject: message,
		react: Email({ name, email, message })
	})

	return Response.json(data)
}
