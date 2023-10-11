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
	// ma fonction

	// const menuChange = () => {
	// 	let current = navigation
	//
	// 	for (const current of [navigation]) {
	// 		{
	// 			if (current !== true)
	// 				return {
	// 					current: 'true',
	// 				}
	// 		}
	// 	}
	// }

	// la fonction de bobby
	const menuChange = clickedMenuItem => {
		const updatedNavigation = navigation.map(menuItem => {
			if (menuItem.name === clickedMenuItem.name) {
				return { ...menuItem, current: true }
			} else {
				return { ...menuItem, current: false }
			}
		})

		setNavigation(updatedNavigation)
	}
	// appeler cette fonction dans le onclick des component

	return (
		<ProfilContext.Provider value={{ navigation, menuChange }}>
			{children}
		</ProfilContext.Provider>
	)
}

export default ProfilProvider

export class profilContext {}
