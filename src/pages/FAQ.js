import React from 'react'
import NavComponent from '@/components/Global/Landing page/Nav.component'
import ProfilComponent from '@/components/Profil/Profil.component'
import FAQComponant from '@/components/Profil/FAQ.component'

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
