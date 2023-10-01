import React from 'react'
import NavComponent from '@/components/Global/Landing page/Nav.component'
import ProfilComponent from '@/components/Profil/Profil.component'
import PaiementComponent from '@/components/Profil/Paiement.component'

function Profil(props) {
	return (
		<>
			<main className={'h-full w-full'}>
				<NavComponent stickyMode={false} />
				<PaiementComponent />
			</main>
		</>
	)
}

export default Profil
