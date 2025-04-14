import { Button, Heading, Html, Text } from '@react-email/components'

type EmailProps = {
	name: string
	message: string
	email: string
}

export function Email({ name, email, message }: EmailProps) {
	return (
		<Html lang='en'>
			<Heading>Welcome, {name}</Heading>
			<Text>{message}</Text>
			<Button>Click me</Button>
		</Html>
	)
}

export default Email
