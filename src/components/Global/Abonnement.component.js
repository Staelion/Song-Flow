import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	CalendarIcon,
	ChartPieIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
	{ name: 'Profil', href: '#', icon: HomeIcon, current: false },
	{ name: 'Abonnement', href: '#', icon: UsersIcon, current: true },
	{ name: 'Paiment', href: '#', icon: FolderIcon, current: false },
	{ name: 'FAQ', href: '#', icon: CalendarIcon, current: false },
	{
		name: 'Se déconnecter',
		href: '#',
		icon: DocumentDuplicateIcon,
		current: false,
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
				<div className="fixed inset-y-0 z-30 flex w-72 flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6 pt-[80px]">
						{/*LOGO PROFIL AVEC MAIL ET ABONNEMENT EN COURS */}

						<nav className="flex flex-1 flex-col pt-20">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-3">
										{navigation.map(item => (
											<li key={item.name}>
												<a
													href={item.href}
													className={classNames(
														item.current
															? 'bg-mainaccent-500 text-black'
															: ' text-black hover:bg-mainaccent-500 hover:text-black',
														'group flex gap-x-3 rounded-md p-2 font-sans text-lg font-semibold leading-6'
													)}
												>
													<item.icon
														className={classNames(
															item.current
																? 'text-black'
																: 'text-black group-hover:text-black',
															'h-6 w-6 shrink-0'
														)}
														aria-hidden="true"
													/>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</li>

								<li className="-mx-6 mt-auto">
									<a
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
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				{/*ZONE PRINCIPALE DINFORMATIONS CLIENT*/}
				<main className="h-full pl-72 pt-[80px]">
					<div className="">
						<div className="flex h-full flex-col gap-10 px-8 py-6">
							{/* Main area */}
							<div className="h-96 w-full bg-red-500"></div>
							<div className="h-96 w-full bg-red-500"></div>
							<div className="h-96 w-full bg-red-500"></div>
							<div className="h-96 w-full bg-red-500"></div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default ProfilComponent
