import React from 'react'
import NavComponent from '@/components/Global/Nav.component'
import FooterComponent from '@/components/Global/Footer.component'
import LoggeddashboardComponent from '@/components/Global/Loggeddashboard.component'

function Client_logged(props) {
	return (
		<>
			<main className={'h-full w-full bg-black bg-opacity-90'}>
				<NavComponent />
				<LoggeddashboardComponent />
				<FooterComponent />
			</main>
		</>
	)
}

export default Client_logged
