import { About, Contact, Content, Experience, Projects } from '@/shared/ui'

export default function Home() {
	return (
		<div className='w-full h-full'>
			<Content id={'about'} linkId={1} title='about' children={<About />} />
			<Content id={'experience'} linkId={2} title='experience' children={<Experience />} />
			<Content id={'projects'} linkId={3} title='projects' children={<Projects />} />
			<Content id={'contact'} linkId={4} title='contact' children={<Contact />} />
		</div>
	)
}
