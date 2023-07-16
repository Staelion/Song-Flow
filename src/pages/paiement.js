import React from 'react'
import NavComponent from '@/components/Global/Nav.component'
import ProfilComponent from '@/components/Global/Profil.component'
import PaiementComponent from '@/components/Global/Paiement.component'

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
