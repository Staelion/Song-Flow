import React from 'react'
import NavComponent from '@/components/Global/Nav.component'
import LoggeddashboardComponent from '@/components/Global/Loggeddashboard.component'

function Client_logged(props) {
	return (
		<>
			<main className={'h-full w-full'}>
				<NavComponent stickyMode={false} />
				<LoggeddashboardComponent />
			</main>
		</>
	)
}

export default Client_logged
