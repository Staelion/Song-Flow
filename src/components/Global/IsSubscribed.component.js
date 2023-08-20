import React from 'react'

export const showbanner = true
const Banner = ({ type }) => {
	return (
		<div className="banner">
			{type === 'first' ? (
				<div
					className={'flex h-[300px] w-4/5 border-4 border-black bg-green-600'}
				>
					<div
						className={
							'text-bold flex w-full items-center justify-center font-sans text-4xl'
						}
					>
						Abonnement premium actif ! j{"'"}usqu{"'"}au 01/01/2050
					</div>
				</div>
			) : (
				<div
					className={'flex h-[300px] w-4/5 border-4 border-black bg-red-600'}
				>
					<div
						className={
							'text-bold flex w-full items-center justify-center font-sans text-4xl'
						}
					>
						Pas d{"'"}abonnemenmt actif !
					</div>
				</div>
			)}
		</div>
	)
}

export default Banner
