import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function StepsComponent({ steps, clickOnStep }) {
	// [ 1 , 2 , 3 , 4 , 5 ]
	// +1
	// -1
	// -> go sur le 1 / 2 / 3 / 4 / 5
	// -> go sur le 2 -> passer 3 / 4 / 5 à upcoming + 2 à current + 1 à complete

	return (
		<div className={'flex justify-center'}>
			<div className="mt-4 w-[1200px] overflow-hidden rounded-full border-2  border-black">
				<nav
					className=" max-w-7xl rounded-full bg-white bg-opacity-60"
					aria-label="Progress"
				>
					<ol role="list" className="  rounded-md lg:flex lg:rounded-none">
						{/* .map((elem, index)=>{+declanche_ça+})*/}
						{steps.map((step, stepIdx) => (
							<li key={step.id} className="relative overflow-hidden lg:flex-1">
								<div
									className={classNames(
										stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
										stepIdx === steps.length - 1
											? 'rounded-b-md border-t-0'
											: '',
										'overflow-hidden  lg:border-0'
									)}
								>
									{/*CSS statut complete*/}
									{step.status === 'complete' ? (
										<Link
											href={'/step' + step.id}
											className={' group w-full'}
											onClick={() => {
												clickOnStep(step.id)
											}}
										>
											<span
												className=" absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-mainaccent-700 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
												aria-hidden="true"
											/>
											<span
												className={classNames(
													stepIdx !== 0 ? 'lg:pl-9' : '',
													'flex items-start px-6 py-5 text-sm font-medium '
												)}
											>
												<span className="flex-shrink-0">
													<span className="flex h-10 w-10 items-center justify-center rounded-full bg-mainaccent-700">
														<CheckIcon
															className="h-6 w-6 text-white"
															aria-hidden="true"
														/>
													</span>
												</span>
												<span className="ml-4 mt-0.5 flex min-w-0 flex-col">
													<span className="text-md font-oswald font-bold text-black">
														{step.name}
													</span>
													<span className="text-md font-oswald font-medium text-black">
														{step.description}
													</span>
												</span>
											</span>
										</Link>
									) : // CSS statut current
									step.status === 'current' ? (
										<Link
											href={'/step' + step.id}
											className={'w-full'}
											onClick={() => {
												clickOnStep(step.id)
											}}
											aria-current="step"
										>
											<span
												className="absolute left-0 top-0 h-full bg-mainaccent-700 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
												aria-hidden="true"
											/>
											<span
												className={classNames(
													stepIdx !== 0 ? 'lg:pl-9' : '',
													'flex items-start px-6 py-5 text-sm font-bold'
												)}
											>
												<span className="flex-shrink-0">
													<span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-mainaccent-700">
														<span className="text-mainaccent-700">
															{step.id}
														</span>
													</span>
												</span>
												<span className="ml-4 mt-0.5 flex min-w-0 flex-col">
													<span className="font-oswald text-sm font-bold text-mainaccent-700">
														{step.name}
													</span>
													<span className="font-oswald text-sm font-medium text-mainaccent-700">
														{step.description}
													</span>
												</span>
											</span>
										</Link>
									) : (
										// CSS statut autre ( upcoming )
										<Link
											href={'/step' + step.id}
											onClick={() => {
												clickOnStep(step.id)
											}}
											className="group w-full"
										>
											<span
												className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-mainorange-900 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
												aria-hidden="true"
											/>
											<span
												className={classNames(
													stepIdx !== 0 ? 'lg:pl-9' : '',
													'flex items-start px-6 py-5 text-sm font-bold '
												)}
											>
												<span className="flex-shrink-0">
													<span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-mainorange-900">
														<span className="text-gray-500">{step.id}</span>
													</span>
												</span>
												<span className="ml-4 mt-0.5 flex min-w-0 flex-col">
													<span className="font-oswald text-sm font-bold text-gray-600">
														{step.name}
													</span>
													<span className="font-oswald text-sm font-medium text-gray-600">
														{step.description}
													</span>
												</span>
											</span>
										</Link>
									)}

									{stepIdx !== 0 ? (
										<>
											{/* Separator */}
											<div
												className="absolute inset-0 left-0 top-0 hidden w-3  lg:block"
												aria-hidden="true"
											>
												<svg
													className=" h-full w-full  text-black"
													viewBox="0 0 12 82"
													fill="none"
													preserveAspectRatio="none"
												>
													<path
														d="M0.5 0V31L10.5 41L0.5 51V82"
														stroke="currentcolor"
														vectorEffect="non-scaling-stroke"
													/>
												</svg>
											</div>
										</>
									) : null}
								</div>
							</li>
						))}
					</ol>
				</nav>
			</div>
		</div>
	)
}

export default StepsComponent
