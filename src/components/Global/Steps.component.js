import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

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
			<div className="mt-4 w-[1200px] border-2 border-mainorange-900">
				<nav className=" max-w-7xl" aria-label="Progress">
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
										'overflow-hidden border border-mainorange-900 lg:border-0'
									)}
								>
									{/*CSS statut complete*/}
									{step.status === 'complete' ? (
										<button
											onClick={() => {
												clickOnStep(step.id)
											}}
											className="group"
										>
											<span
												className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-mainorange-900 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
												aria-hidden="true"
											/>
											<span
												className={classNames(
													stepIdx !== 0 ? 'lg:pl-9' : '',
													'flex items-start px-6 py-5 text-sm font-medium'
												)}
											>
												<span className="flex-shrink-0">
													<span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
														<CheckIcon
															className="h-6 w-6 text-white"
															aria-hidden="true"
														/>
													</span>
												</span>
												<span className="ml-4 mt-0.5 flex min-w-0 flex-col">
													<span className="text-sm font-medium text-black">
														{step.name}
													</span>
													<span className="text-sm font-medium text-black">
														{step.description}
													</span>
												</span>
											</span>
										</button>
									) : // CSS statut current
									step.status === 'current' ? (
										<button
											onClick={() => {
												clickOnStep(step.id)
											}}
											aria-current="step"
										>
											<span
												className="absolute left-0 top-0 h-full w-1 bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
												aria-hidden="true"
											/>
											<span
												className={classNames(
													stepIdx !== 0 ? 'lg:pl-9' : '',
													'flex items-start px-6 py-5 text-sm font-medium'
												)}
											>
												<span className="flex-shrink-0">
													<span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600">
														<span className="text-indigo-600">{step.id}</span>
													</span>
												</span>
												<span className="ml-4 mt-0.5 flex min-w-0 flex-col">
													<span className="font-oswald text-sm font-medium text-white">
														{step.name}
													</span>
													<span className="font-oswald text-sm font-medium text-white">
														{step.description}
													</span>
												</span>
											</span>
										</button>
									) : (
										// CSS statut autre ( upcoming )
										<button
											onClick={() => {
												clickOnStep(step.id)
											}}
											className="group"
										>
											<span
												className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-mainorange-900 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
												aria-hidden="true"
											/>
											<span
												className={classNames(
													stepIdx !== 0 ? 'lg:pl-9' : '',
													'flex items-start px-6 py-5 text-sm font-medium'
												)}
											>
												<span className="flex-shrink-0">
													<span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-mainorange-900">
														<span className="text-gray-500">{step.id}</span>
													</span>
												</span>
												<span className="ml-4 mt-0.5 flex min-w-0 flex-col">
													<span className="font-oswald text-sm font-medium text-gray-500">
														{step.name}
													</span>
													<span className="font-oswald text-sm font-medium text-gray-500">
														{step.description}
													</span>
												</span>
											</span>
										</button>
									)}

									{stepIdx !== 0 ? (
										<>
											{/* Separator */}
											<div
												className="absolute inset-0 left-0 top-0 hidden w-3  lg:block"
												aria-hidden="true"
											>
												<svg
													className=" h-full w-full  text-mainorange-900"
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
