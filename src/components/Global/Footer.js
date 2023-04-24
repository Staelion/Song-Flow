import React from 'react'
import Link from 'next/link'

function Footer(props) {
	return (
		<>
			<div className={'mt-60 border-t-8 border-mainorange-500 pt-20'}>
				<div className="m-auto max-w-screen-2xl">
					<div className={'flex max-w-full justify-around font-oswald'}>
						<div className={'flex flex-col justify-center'}>
							<h4 className="mb-4  p-3.5 text-4xl font-semibold text-white ">
								L{"'"}entreprise
							</h4>
							<div className="flex justify-center">
								<Link
									href={'/qui_sommes_nous'}
									className={
										'pt-3 text-xl font-semibold text-white hover:text-mainaccent-700'
									}
								>
									A propos de nous
								</Link>
							</div>

							<div className="flex justify-center">
								<Link
									href={'/nos_services'}
									className={
										'pt-3 text-xl font-semibold text-white hover:text-mainaccent-700'
									}
								>
									Nos services
								</Link>
							</div>

							<div className="flex justify-center">
								<Link
									href={'/politique_de_confidentialite'}
									className={
										'pb-5 pt-3 text-xl font-semibold text-white hover:text-mainaccent-700'
									}
								>
									Politique de confidentialité
								</Link>
							</div>
						</div>

						<div>
							<h4 className={'mb-4 p-3.5 text-4xl font-semibold text-white '}>
								Obtenir de l{"'"}aide
							</h4>

							<div className="flex justify-center">
								<Link
									href={'/faq'}
									className={
										'pt-3 text-xl font-semibold text-white hover:text-mainaccent-700'
									}
								>
									FAQ
								</Link>
							</div>

							<div className="flex justify-center">
								<Link
									href={'/faq'}
									className={
										'pt-3 text-xl font-semibold text-white hover:text-mainaccent-700'
									}
								>
									Options de paiment
								</Link>
							</div>
						</div>
						<div>
							<h4 className={'mb-4 p-3.5 text-4xl font-semibold text-white '}>
								Suivez-nous
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
