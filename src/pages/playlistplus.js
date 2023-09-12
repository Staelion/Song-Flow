import React from 'react'
import FooterComponent from '@/components/Global/Footer.component'
import NavComponent from '@/components/Global/Nav.component'
import StepsComponent from '@/components/Global/Steps.component'

function Playlistplus(props) {
	return (
		<>
			<main className={'h-full w-full'}>
				<NavComponent stickyMode={false} />
				<StepsComponent />
				<FooterComponent />
			</main>
		</>
	)
}

export default Playlistplus
