import React from 'react'
import Link from 'next/link'

function Footer(props) {
	return (
		<>
			<div className={'mt-60 border-t-8 border-mainorange-500 pt-20'}>
				<div className="m-auto max-w-screen-2xl">
					<div className={'flex max-w-full justify-between font-oswald'}>
						<div>
							<h4 className="mb-4 p-3.5 text-4xl font-semibold text-white ">
								l{"'"}entreprise
							</h4>
							<div className="flex justify-center">
								<Link
									href={'/qui_sommes_nous'}
									className={
										'pb-1("&0 pt-5 text-2xl font-semibold text-white hover:text-mainaccent-700'
									}
								>
									Qui sommes-nous
								</Link>
							</div>
						</div>

						<div>
							<h4 className={'mb-4 p-3.5 text-4xl font-semibold text-white '}>
								Obtenir de l{"'"}aide
							</h4>
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
