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
		isDifferentColor: true,
		LogoIsDifferentColor: true,
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
		isDifferentColor: false,
		LogoIsDifferentColor: false,
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
												className="flex justify-center text-3xl font-semibold leading-7 text-black font-oswald"
											>
												{tier.name}
											</h3>

											<p className="mt-6 text-center text-xl leading-7 text-black font-oswald">
												{tier.description}
											</p>
											<ul
												role="list"
												className="mt-10 space-y-4 text-lg text-lg leading-6 text-gray-600"
											>
												{tier.features.map(feature => (
													<li
														key={feature}
														className={
															'flex gap-x-3 font-bold' +
															(tier.isDifferentColor
																? ' text-mainaccent-700'
																: ' text-mainorange-500')
														}
													>
														<div
															className={
																'h-[30px] w-[30px]' +
																(tier.LogoIsDifferentColor
																	? ' fill-mainaccent-700 '
																	: ' fill-mainorange-500 ')
															}
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="30"
																height="30"
																viewBox="0 0 16.933 16.933"
															>
																<g transform="translate(0 -280.067)">
																	<path
																		d="M8.466 281.655a6.605 6.605 0 00-6.615 6.613c0 .168.154.294.318.26l1.323-.264a.265.265 0 00.213-.26c0-2.479 2.282-4.761 4.761-4.761s4.764 2.282 4.764 4.761c0 .126.088.235.211.26l1.324.264a.265.265 0 00.317-.26 6.606 6.606 0 00-6.616-6.613zm-.003 6.478a.265.265 0 00-.26.267v6.35c0 .354.53.354.53 0v-6.35a.265.265 0 00-.27-.267zm-4.495.664c-.728 0-1.322.596-1.322 1.324v3.44c0 .728.594 1.322 1.322 1.322.729 0 1.325-.594 1.325-1.322v-3.44c0-.728-.596-1.324-1.325-1.324zm8.997 0c-.729 0-1.323.596-1.323 1.324v3.44c0 .728.594 1.322 1.323 1.322.728 0 1.321-.594 1.321-1.322v-3.44c0-.728-.593-1.324-1.321-1.324zm-5.82.662v4.233c-.009.36.536.36.528 0v-4.233a.263.263 0 00-.28-.268.262.262 0 00-.249.268zm2.116 0v4.233c-.034.384.562.384.528 0v-4.233a.263.263 0 00-.282-.268.261.261 0 00-.246.268zm-7.402.662a.79.79 0 00-.8.794v1.851c0 .435.357.795.792.795h.266v-3.44zm12.957 0v3.44h.266c.435 0 .792-.36.792-.795v-1.851a.797.797 0 00-.792-.794zm-4.236.127a.264.264 0 00-.262.27v2.117c0 .353.53.353.53 0v-2.117a.265.265 0 00-.268-.27zm-4.235.53a.265.265 0 00-.26.27v2.117c0 .353.53.353.53 0v-2.118a.265.265 0 00-.27-.27z"
																		vectorEffect="none"
																	></path>
																</g>
															</svg>
														</div>
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
