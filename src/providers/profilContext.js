import React, { createContext, useState } from 'react'

export const ProfilContext = createContext()

function ProfilProvider({ children }) {
	const [navigation, setNavigation] = useState([
		{
			name: 'Profil',
			icon: <i className="fi fi-br-user"></i>,
			current: true,
		},
		{
			name: 'Abonnement',
			icon: <i className="fi fi-br-star"></i>,
			current: false,
		},
		{
			name: 'paiement',
			icon: <i className="fi fi-br-wallet"></i>,
			current: false,
		},
		{
			name: 'FAQ',
			icon: <i className="fi fi-br-bookmark"></i>,
			current: false,
		},
		{
			name: 'Se déconnecter',
			icon: <i className="fi fi-br-arrow-right-to-bracket"></i>,
			current: false,
		},
	])

	// Fonction qui change la valeur boolean ' current ' en true quand je clique dessus

	// appeler cette fonction dans le onclick des component

	return (
		<ProfilContext.Provider value={{ navigation }}>
			{children}
		</ProfilContext.Provider>
	)
}

export default ProfilProvider
