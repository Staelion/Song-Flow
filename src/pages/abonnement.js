import React, { useContext } from 'react'
import NavComponent from '@/components/Global/Landing page/Nav.component'
import ProfilComponent from '@/components/Profil/Profil.component'
import AbonnementComponent from '@/components/Profil/Abonnement.component'
import { profilContext } from '@/providers/profilContext'

function Profil(props) {
	// -> utiliser les éléments liés à la navigation depuis le provider
	// const { navigation, profileinfo } = useContext(profilContext)
	//
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
