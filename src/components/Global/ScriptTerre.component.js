import React, { useEffect } from 'react'

function ScriptTerreComponent(props) {
	useEffect(() => {
		window.addEventListener(
			'scroll',
			() => {
				document.body.style.setProperty(
					'--scroll',
					window.scrollY / (document.body.offsetHeight - window.innerHeight)
				)
			},
			false
		)
	}, [])

	return <></>
}

export default ScriptTerreComponent
