import React, { Fragment, useContext, useState } from 'react'

import Link from 'next/link'
import { ProfilContext } from '@/providers/profilContext'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function ProfilComponent() {
	const { navigation } = useContext(ProfilContext)

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

	return (
		<>
			<div>
				{/* Static sidebar for desktop */}
				<div className="fixed inset-y-0 z-30 flex w-96 flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className=" flex grow flex-col gap-y-5 overflow-y-auto border-r-4 border-black px-6 pt-[80px]">
						{/*LOGO PROFIL AVEC MAIL ET ABONNEMENT EN COURS */}

						<nav className="flex flex-1 flex-col pt-20">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-3">
										{navigation.map(item => (
											<li key={item.name}>
												<button
													className={classNames(
														item.current
															? ' w-full bg-mainaccent-500 text-black'
															: 'w-full text-black hover:bg-mainaccent-500 hover:text-black',
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
												</button>
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

				<main className="ml-96 h-full pt-[80px]">
					<div className="">
						<div className="m-6 flex h-full flex-col">
							{/* Main area */}
							<h4 className={'flex items-start font-sans text-3xl '}>
								Votre profil
							</h4>

							<div className={'flex text-2xl text-black'}>
								<ul
									role={'infos'}
									className={'mt-16 flex h-full w-full flex-col'}
								>
									<div className={'grid w-full grid-cols-12 gap-8'}>
										{profileinfo.map(item => (
											<li
												key={item.name}
												className={
													'col-span-7 col-start-3 flex w-full items-center justify-between '
												}
											>
												<div className={''}>
													<p className={'font-sans font-bold text-black'}>
														{item.name}
													</p>
												</div>
												<div className={''}>
													<p className={'font-sans font-bold text-black'}>
														{item.value}
													</p>
												</div>
											</li>
										))}
									</div>
								</ul>
							</div>

							<div className={'flex h-full w-full justify-center '}>
								<div
									className={
										'flex h-[85px] w-[1000px] justify-center gap-20 pt-8'
									}
								>
									<Link
										href={'/profil_edit'}
										className={
											'flex items-center rounded-2xl bg-mainaccent-700/100 px-12 py-4 text-xl text-white shadow-[0_4px_5px_#31066f] transition delay-100 ease-in-out hover:brightness-125'
										}
									>
										Modifier mes informations
									</Link>

									<Link
										href={'#'}
										className={
											'flex items-center rounded-2xl border-2 border-solid border-mainaccent-700 px-12 py-4 text-xl text-white transition delay-100 ease-in-out hover:brightness-125 '
										}
									>
										Changer le mot de passe
									</Link>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default ProfilComponent
