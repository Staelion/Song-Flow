import React from 'react'
import NavComponent from '@/components/Global/Landing page/Nav.component'
import ProfilEditComponent from '@/components/Global/Profil_edit.component'

function ProfilEdit(props) {
	return (
		<>
			<main className={'h-full w-full'}>
				<NavComponent stickyMode={false} />
				<ProfilEditComponent />
			</main>
		</>
	)
}

export default ProfilEdit
