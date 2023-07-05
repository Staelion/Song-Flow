import React, { useEffect } from 'react'

function ScriptTerre(props) {
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

export default ScriptTerre
