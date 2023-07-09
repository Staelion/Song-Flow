import React from 'react'
import Link from 'next/link'

function Hero(props) {
	return (
		<>
			{/* container */}
			<section className={'mx-auto flex h-[calc(100vh-80px)] max-w-7xl'}>
				<div
					className={
						'flex w-full flex-col flex-wrap items-start justify-center gap-10 text-start lg:w-3/5'
					}
				>
					<p className={'text-6xl text-white'}>
						Explorez un monde musical inconnu avec votre&nbsp;
						<span className={'text-black'}>Mix Personnalisé</span>&nbsp;!
					</p>

					<div className={'flex gap-4'}>
<<<<<<< Updated upstream
         
						<Link href="/login">
							<button
								className={
									'shadow-inner-[0_-4px_5px_#7c20ef] flex items-center rounded-2xl border-2 border-mainaccent-700/0 bg-mainaccent-700/100 px-12 py-4 text-2xl text-white shadow-[0_4px_5px_#31066f] transition delay-100 ease-in-out hover:border-mainaccent-700 hover:bg-mainaccent-700/0 hover:text-mainaccent-700  hover:shadow-none'
								}
							>
								Je me lance
							</button>
=======
						<Link
							href={'/login'}
							className={
								'shadow-inner-[0_-4px_5px_#7c20ef] flex items-center rounded-2xl border-2 border-mainaccent-700/0 bg-mainaccent-700/100 px-12 py-4 text-2xl text-white shadow-[0_4px_5px_#31066f] transition delay-100 ease-in-out hover:border-mainaccent-700 hover:bg-mainaccent-700/0 hover:text-mainaccent-700  hover:shadow-none'
							}
						>
							Je me lance
>>>>>>> Stashed changes
						</Link>

						<button
							className={
								'flex items-center rounded-2xl border-2 border-solid border-mainaccent-700/0  px-12 py-4 text-2xl text-white transition delay-100 ease-in-out hover:border-mainaccent-700 '
							}
						>
							Esssayer gratuitement
						</button>
					</div>
				</div>
				<div className={'hidden lg:flex lg:w-2/5'}>{/* Background here	*/}</div>
			</section>
		</>
	)
}

export default Hero
