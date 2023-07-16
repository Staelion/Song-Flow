import React from 'react'
import NavComponent from '@/components/Global/Nav.component'
import ProfilComponent from '@/components/Global/Profil.component'
import AbonnementComponent from '@/components/Global/Abonnement.component'

function Profil(props) {
	return (
		<>
			<main className={'h-full w-full'}>
				<NavComponent stickyMode={false} />
				<AbonnementComponent />
			</main>
		</>
	)
}

export default Profil
