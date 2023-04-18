import React from 'react'

function Footer(props) {
	return (
		<>
			<div className={'mt-60 border-t-8 border-mainorange-500 pt-20'}>
				<div className="m-auto max-w-screen-2xl">
					<div className={'flex max-w-full justify-between font-oswald'}>
						<div>
							<h4 className="mb-4 p-3.5 text-4xl font-semibold text-white ">
								l'entreprise
							</h4>
						</div>
						<div>
							<h4 className={'mb-4 p-3.5 text-4xl font-semibold text-white '}>
								Obtenir de l'aide
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
