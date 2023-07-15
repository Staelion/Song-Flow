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
	{ name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
	{ name: 'Team', href: '#', icon: UsersIcon, current: false },
	{ name: 'Projects', href: '#', icon: FolderIcon, current: false },
	{ name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
	{ name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
	{ name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
	{ id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
	{ id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
	{ id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function LoggeddashboardComponent(props) {
	return (
		<>
			<div>
				{/* Static sidebar for desktop */}
				<div className="fixed inset-y-0 z-30 flex w-72 flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6 pt-[80px]">
						<nav className="flex flex-1 flex-col pt-20">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-1">
										{navigation.map(item => (
											<li key={item.name}>
												<a
													href={item.href}
													className={classNames(
														item.current
															? 'bg-gray-50 text-indigo-600'
															: 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
														'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
													)}
												>
													<item.icon
														className={classNames(
															item.current
																? 'text-indigo-600'
																: 'text-gray-400 group-hover:text-indigo-600',
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
								<li>
									<div className="text-xs font-semibold leading-6 text-gray-400">
										Your teams
									</div>
									<ul role="list" className="-mx-2 mt-2 space-y-1">
										{teams.map(team => (
											<li key={team.name}>
												<a
													href={team.href}
													className={classNames(
														team.current
															? 'bg-gray-50 text-indigo-600'
															: 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
														'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
													)}
												>
													<span
														className={classNames(
															team.current
																? 'border-indigo-600 text-indigo-600'
																: 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
															'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium'
														)}
													>
														{team.initial}
													</span>
													<span className="truncate">{team.name}</span>
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
							<div className="h-96 w-96 bg-red-500"></div>
							<div className="h-96 w-96 bg-red-500"></div>
							<div className="h-96 w-96 bg-red-500"></div>
							<div className="h-96 w-96 bg-red-500"></div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default LoggeddashboardComponent
