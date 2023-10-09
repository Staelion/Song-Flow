import React, { Fragment, useContext, useState } from 'react'
import Link from 'next/link'
import Banner from '../Global/IsSubscribed.component'
import { profilContext } from '@/providers/profilContext'

// const HomePage = () => {
// 	const showBanner = true; // Mettez ici votre condition

const IsSubscribed = false
const showbanner = IsSubscribed

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function ProfilComponent(props) {
	const { navigation, profileinfo } = useContext(profilContext)

	return (
		<>
			<div>
				{/* Static sidebar for desktop */}
				<div className="fixed inset-y-0 z-30 flex w-96 flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r-4 border-black px-6 pt-[80px]">
						{/* LOGO PROFIL AVEC MAIL ET ABONNEMENT EN COURS */}

						<nav className="flex flex-1 flex-col pt-20">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-3">
										{navigation.map(item => (
											<li key={item.name}>
												{/* todo : Link -> button : onClick( qui déclenche une fonction qui vient du vient du provider ) */}
												{/* href -> l'élément dans navigation */}
												{/* abonnement // truc / bidule / check navigation : rendre le composant qui dépend de l'état de navigation */}
												{/* comme ça a été fait dans steps */}

												<button
													className={classNames(
														item.current
															? 'w-full bg-mainaccent-500 text-black'
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
				<main className="ml-96 h-full min-h-[1500px] pt-[80px]">
					<div className="">
						<div className="flex h-full flex-col gap-10 px-8 py-6">
							{/* Main area */}
							<h4 className="text-bold flex justify-start font-sans text-3xl">
								Votre abonnement
							</h4>
							{/*Fonction javascript pour afficher abonnement actif ou non */}

							<div className={' '}>
								{showbanner ? (
									<Banner type="first" />
								) : (
									<Banner type="second" />
								)}
							</div>

							<div>
								{showbanner ? (
									<div></div>
								) : (
									<div
										className={
											'flex w-full flex-col  items-center justify-center'
										}
									>
										<div className={' p-8 text-center text-2xl'}>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</div>
										<Link
											href={'#'}
											className={
												' mt-4 flex w-1/3 justify-center rounded-2xl bg-mainaccent-700/100 px-12 py-4 text-xl text-white shadow-[0_4px_5px_#31066f] transition delay-100 ease-in-out hover:brightness-125'
											}
										>
											Découvre l{"'"}abonnement premium
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default ProfilComponent
