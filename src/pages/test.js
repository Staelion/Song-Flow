import React from 'react'

function Test(props) {
	return (
		<div className={'h-screen w-screen bg-white p-36'}>
			<section className={'mx-auto max-w-7xl bg-amber-50'}>
				<div className={'text-slate-900'}>page de test</div>
				<button
					className={
						'flex items-center justify-center rounded shadow-2xl ' +
						'border-2 border-blue-950 bg-cyan-900 px-6 py-3 text-xs text-white'
					}
				>
					Boutton de test
				</button>
			</section>
		</div>
	)
}

export default Test
