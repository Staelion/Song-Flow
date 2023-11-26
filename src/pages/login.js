import React from 'react'
import { Head } from 'next/document'
import NavComponent from '@/components/Global/Landing page/Nav.component'
import FooterComponent from '@/components/Global/Landing page/Footer.component'
import LoginComponent from '@/components/Profil/login.component'

function Login(props) {
	return (
		<>
			<main className={'h-full w-full bg-black bg-opacity-90'}>
				{/* alt + entrée -> import */}
				<NavComponent />
				<LoginComponent />
				<FooterComponent />
			</main>
		</>
	)
}

export default Login
