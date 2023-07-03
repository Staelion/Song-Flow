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
		name: 'Se connecter',
		href: '/login',
	},
]

function Nav(props) {
	return (
		<div className={'sticky flex h-[80px] w-screen bg-black'}>
			<div className={'flex w-1/5'}>
				<Link href={'pages/index'}>
					<p className="flex items-center justify-start p-3.5 text-4xl font-semibold text-mainorange-500">
						Song Flow
					</p>
				</Link>
			</div>

			<div className="flex w-4/5 items-center justify-end gap-10 p-3.5">
				{menu.map((item, index) => {
					return (
						<Link
							key={index}
							href={item.href}
							className={
								'text-xl font-semibold text-mainorange-500 hover:text-mainaccent-700 '
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
