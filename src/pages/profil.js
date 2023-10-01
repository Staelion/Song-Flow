import React, { useContext } from 'react'
import NavComponent from '@/components/Global/Landing page/Nav.component'
import ProfilComponent from '@/components/Profil/Profil.component'
import AbonnementComponent from '@/components/Profil/Abonnement.component'
import PaiementComponent from '@/components/Profil/Paiement.component'
import FAQComponent from '@/components/Profil/FAQ.component'
import { ProfilContext } from '@/providers/profilContext'

function Profil(props) {
	// find
	const { navigation, profileinfo } = useContext(ProfilContext)

	const currentProfilPage = navigation.find(
		child_navigation => child_navigation.current === true
	)

	// const currentProfil = find
	return (
		<>
			<main className={'h-full w-full'}>
				<NavComponent stickyMode={false} />
				{currentProfilPage.name === 'Profil' && <ProfilComponent />}
				{currentProfilPage.name === 'Abonnement' && <AbonnementComponent />}
				{currentProfilPage.name === 'paiement' && <PaiementComponent />}
				{currentProfilPage.name === 'FAQ' && <FAQComponent />}
				{/*{currentProfil.name === "Se déconnecter" && <Compon />}*/}
			</main>
		</>
	)
}

export default Profil
