import React from 'react'
import { Head } from 'next/document'
import Nav from '@/components/Global/Nav'
import Footer from '@/components/Global/Footer'
import Login from '@/components/Global/Login'

function Indexlogin(props) {
	return (
		<>
			<main>
				{/* alt + entrée -> import */}
				<Nav />
				<Login />
				<Footer />
			</main>
		</>
	)
}

export default Indexlogin
