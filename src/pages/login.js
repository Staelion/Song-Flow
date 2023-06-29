import React from 'react'
import { Head } from 'next/document'
import Nav from '@/components/Global/Nav'
import Footer from '@/components/Global/Footer'
import LoginComponent from '@/components/Global/login.component'

function Login(props) {
	return (
		<>
			<main className={'h-full w-full bg-black bg-opacity-90'}>
				{/* alt + entrée -> import */}
				<Nav />
				<LoginComponent />
				<Footer />
			</main>
		</>
	)
}

export default Login
