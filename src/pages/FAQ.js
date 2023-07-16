import React from 'react'
import NavComponent from '@/components/Global/Nav.component'
import ProfilComponent from '@/components/Global/Profil.component'
import FAQComponant from '@/components/Global/FAQ.component'

function Profil(props) {
	return (
		<>
			<main className={'h-full w-full'}>
				<NavComponent stickyMode={false} />
				<FAQComponant />
			</main>
		</>
	)
}

export default Profil
