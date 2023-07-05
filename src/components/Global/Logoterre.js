import React from 'react'
import Image from 'next/image'

function Logoterre(props) {
	return (
		<>
			<div className="bottom-30 fixed -right-72 -z-10 flex h-[800px] w-[800px] ">
				<Image
					className={'logoterre'}
					src={'/images/planete-terre.svg'}
					alt={'Logo planète terre'}
					width={'600'}
					height={'600'}
				></Image>
			</div>
		</>
	)
}

export default Logoterre
