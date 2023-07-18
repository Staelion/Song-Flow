import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'

const navigation = [
	{
		name: 'Profil',
		href: '/profil',
		icon: <i className="fi fi-br-user"></i>,
		current: true,
	},
	{
		name: 'Abonnement',
		href: '/abonnement',
		icon: <i className="fi fi-br-star"></i>,
		current: false,
	},
	{
		name: 'paiement',
		href: '/paiement',
		icon: <i className="fi fi-br-wallet"></i>,
		current: false,
	},
	{
		name: 'FAQ',
		href: '/FAQ',
		icon: <i className="fi fi-br-bookmark"></i>,
		current: false,
	},
	{
		name: 'Se déconnecter',
		href: '#',
		icon: <i className="fi fi-br-arrow-right-to-bracket"></i>,
		current: false,
	},
]

const profileinfo = [
	{
		name: "Nom d'utilisateur",
		value: '#',
	},
	{
		name: 'Nom prénom',
		value: '#',
	},
	{
		name: 'Date de naissance',
		value: '#',
	},
	{
		name: 'E-mail',
		value: '#',
	},
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function ProfilComponent(props) {
	return (
		<>
			<div>
				{/* Static sidebar for desktop */}
				<div className="fixed inset-y-0 z-30 flex w-96 flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r-4 border-black  px-6 pt-[80px]">
						{/*LOGO PROFIL AVEC MAIL ET ABONNEMENT EN COURS */}

						<nav className="flex flex-1 flex-col pt-20">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-3">
										{navigation.map(item => (
											<li key={item.name}>
												<Link
													href={item.href}
													className={classNames(
														item.current
															? 'bg-mainaccent-500 text-black'
															: ' text-black hover:bg-mainaccent-500 hover:text-black',
														'group flex gap-x-3 rounded-md p-2 font-sans text-lg font-semibold leading-6'
													)}
												>
													<p
														className={
															'flex items-center gap-2  text-xl text-black'
														}
													>
														{item.icon}
													</p>
													<span>{item.name}</span>
												</Link>
											</li>
										))}
									</ul>
								</li>

								<li className="-mx-6 mt-auto">
									<Link
										href="#"
										className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
									>
										{/*<img*/}
										{/*	className="h-8 w-8 rounded-full bg-gray-50"*/}
										{/*	src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
										{/*	alt=""*/}
										{/*/>*/}
										<span className="sr-only">Your profile</span>
										<span aria-hidden="true">Mathéo le boss</span>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				{/*ZONE PRINCIPALE DINFORMATIONS CLIENT*/}

				<main className="h-full pt-[80px]">
					<div className="">
						<div className="m-6 flex h-full flex-col">
							{/* Main area */}
							<h4 className={'flex items-start pl-[500px] font-sans text-3xl '}>
								Votre profil
							</h4>

							<div className={'flex bg-red-400 text-2xl text-black'}>
								<ul
									role={'infos'}
									className={'mt-16 flex h-full w-full flex-col '}
								>
									{profileinfo.map(item => (
										<li key={item.name} className={'flex justify-evenly'}>
											<p className={'font-sans font-bold text-black'}>
												{item.name}
											</p>
											<p className={'font-sans font-bold text-black'}>
												{item.value}
											</p>
										</li>
									))}

									{/*{profileinfo.map(item => (*/}
									{/*	<li className={'text-black'} key={item.name}></li>*/}
									{/*))}*/}

									{/*{profileinfo.map(item => (*/}
									{/*	<li key={item.value}></li>*/}
									{/*))}*/}
								</ul>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default ProfilComponent
