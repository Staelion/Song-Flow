import React from 'react'
import Link from 'next/link'

// rsf : stateless function rapide

const menu = [
	{
		name: 'Qui sommes-nous ?',
		href: '/qui_sommes_nous',
	},
	{
		name: 'FAQ',
		href: '/faq',
	},
	{
		name: 'Mon compte',
		href: '/mon_compte',
	},
]

function Nav(props) {
	return (
		<div className={'sticky flex h-[80px] w-screen bg-black'}>
			<div className={'flex w-1/5'}>
				<p
					className={
						'flex items-center justify-start p-3.5 text-4xl font-semibold text-orange-500'
					}
				>
					Song Flow
				</p>
			</div>

			<div className={'flex w-4/5 items-center justify-end gap-10 p-3.5'}>
				{menu.map((item, index) => {
					return (
						<Link
							href={item.href}
							className={
								'text-xl font-semibold text-orange-500 hover:text-purple-600 '
							}
						>
							{item.name}
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Nav
