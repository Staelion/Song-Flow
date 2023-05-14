import Image from 'next/image'

const tiers = [
	{
		name: 'Gratuit',
		id: 'tier-gratuit',
		href: '#',
		description:
			'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
		features: [
			'50 titres',
			'Evoi de la playlist sur spotify',
			'Historique de la playlist crée la plus récente',
			'Tremplins de jeunes artistes français',
		],
	},
	{
		name: 'Premium',
		id: 'tier-premium',
		href: '#',
		description:
			'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
		features: [
			'100 titres',
			'Evoi de la playlist sur spotify',
			'Historique de toutes les playlists crées',
			'Tremplins de jeunes artistes français',
			'Création d’une playlist personnalisable à 100%',
			'Accès a l’espace communautaire de partage',
			'Statistiques d’écoutes personnelles',
		],
	},
]

export default function Features() {
	return (
		<>
			<div className="isolate overflow-hidden ">
				<div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
					<div className="mx-auto max-w-4xl">
						<p className="mt-2 font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl">
							Amateurs de musique avant tout, nous avons crées des offres qui
							s'adapteront au mieux a votre profil de fan de musique{' '}
							<br className="hidden sm:inline lg:hidden" />
							et cela, peut importe votre choix !
						</p>
					</div>
					<div className="relative mt-6"></div>
				</div>
				<div className="flow-root pb-24 sm:pb-32">
					<div className="-mt-80">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
								{tiers.map(tier => (
									<div
										key={tier.id}
										className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl sm:p-10"
									>
										<div>
											<h3
												id={tier.id}
												className="flex justify-center text-3xl font-semibold leading-7 text-black"
											>
												{tier.name}
											</h3>

											<p className="mt-6 text-center text-xl leading-7 text-black">
												{tier.description}
											</p>
											<ul
												role="list"
												className="mt-10 space-y-4 text-lg text-lg leading-6 text-gray-600"
											>
												{tier.features.map(feature => (
													<li
														key={feature}
														className="flex gap-x-3 font-bold text-mainorange-500"
													>
														<Image
															src={'Images/casque-de-musique.svg'}
															alt={'logo'}
															height={'30'}
															width={'30'}
														></Image>
														{feature}
													</li>
												))}
											</ul>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={'flex w-full justify-center'}>
				<button className="shadow-inner-[0_-4px5px#7c20ef] flex items-center rounded-2xl border-2 border-mainorange-500/0 bg-mainorange-500/100 px-12 py-4 text-2xl font-bold text-black shadow-[0_4px5px#31066f] transition delay-100 ease-in-out hover:border-mainorange-500 hover:bg-mainorange-500/0 hover:text-mainorange-500 hover:shadow-none">
					Passer à SongFlow Plus
				</button>
			</div>
		</>
	)
}
