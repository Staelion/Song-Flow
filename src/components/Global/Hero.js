import React from 'react'

function Hero(props) {
	return (
		<div
			className={
				'flex h-[50vh] w-[30vw] flex-wrap items-center justify-center text-start'
			}
		>
			<p className={'text-6xl text-white '}>
				Explorez un monde musical inconnu avec votre&nbsp;
				<span className={'text-black'}>Mix Personnalisé</span> !
			</p>
		</div>
	)
}

export default Hero
