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

			<button
				className={
					'shadow-inner-[0_-4px_5px_#7c20ef] flex items-center rounded-2xl border-2 border-solid border-mainaccent-700 border-opacity-0 bg-mainaccent-700 bg-opacity-100 px-12 py-4 text-2xl text-white shadow-[0_4px_5px_#31066f] transition delay-100 ease-in-out' +
					'delay-100 ease-in-out hover:border-opacity-100 hover:bg-opacity-0 hover:shadow-none hover:transition'
				}
			>
				Je me lance
			</button>

			<button
				className={
					' flex items-center rounded-2xl border-2 border-solid border-mainaccent-700 border-opacity-0 bg-mainaccent-700 bg-opacity-0 px-12 py-4 text-2xl text-white transition delay-100 ease-in-out' +
					'delay-100 ease-in-out hover:border-opacity-100 hover:bg-opacity-0 hover:transition'
				}
			>
				Esssayer gratuitement
			</button>
		</div>
	)
}

export default Hero
