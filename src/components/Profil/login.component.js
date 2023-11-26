import React from 'react'
import Image from 'next/image'
import {
	Tabs,
	Tab,
	Input,
	Link,
	Button,
	Card,
	CardBody,
	CardHeader,
} from '@nextui-org/react'

function LoginComponent(props) {
	const [selected, setSelected] = React.useState('login')

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-center text-3xl font-bold leading-9 tracking-tight text-white">
						Connecte toi à ton compte !
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[575px]">
					<div className="w-full bg-mainorange-500 px-6 py-12 shadow sm:rounded-lg sm:px-12">
						<form className="space-y-6" action="#" method="POST">
							<div>
								<label
									htmlFor="email"
									className="block font-sans text-lg font-bold leading-6 text-black"
								>
									Adresse Email
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block font-sans text-lg font-bold leading-6 text-black"
								>
									Mot de passe
								</label>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="remember-me"
										className="ml-3 block font-oswald text-sm leading-6 text-black"
									>
										Se souvenir de moi
									</label>
								</div>

								<div className="text-sm leading-6">
									<a
										href="#"
										className="font-semibold text-mainorange-900 hover:text-white"
									>
										Mot de passe oublié ?
									</a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-mainorange-900 px-3 py-1.5 text-lg font-bold leading-6 text-black shadow-sm hover:bg-mainaccent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									S{"'"}enregistrer
								</button>
							</div>
						</form>

						<div>
							<div className="relative mt-10">
								<div
									className="absolute inset-0 flex items-center"
									aria-hidden="true"
								>
									<div className="w-full border-t border-gray-200" />
								</div>
								<div className="relative flex justify-center text-lg font-medium leading-6">
									<span className="bg-white px-6 text-black">
										Ou connecte toi avec
									</span>
								</div>
							</div>

							<div className="mt-6 grid grid-cols-2 gap-4">
								<a
									href="#"
									className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1DB954] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
								>
									<svg
										className="h-5 w-5"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
									</svg>
									<span className="text-sm font-semibold leading-6">
										Spotify
									</span>
								</a>

								<a
									href="#"
									className="flex w-full items-center justify-center gap-3 rounded-md bg-[#4267B2] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
								>
									<svg
										className={'invert'}
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										viewBox="0 0 100 100"
									>
										<g>
											<path d="M40.4 55.2h-9.9c-1.6 0-2.1-.6-2.1-2.1V41c0-1.6.6-2.1 2.1-2.1h9.9v-8.8c0-4 .7-7.8 2.7-11.3 2.1-3.6 5.1-6 8.9-7.4 2.5-.9 5-1.3 7.7-1.3h9.8c1.4 0 2 .6 2 2v11.4c0 1.4-.6 2-2 2-2.7 0-5.4 0-8.1.1-2.7 0-4.1 1.3-4.1 4.1-.1 3 0 5.9 0 9h11.6c1.6 0 2.2.6 2.2 2.2V53c0 1.6-.5 2.1-2.2 2.1H57.3v32.6c0 1.7-.5 2.3-2.3 2.3H42.5c-1.5 0-2.1-.6-2.1-2.1V55.2z"></path>
										</g>
									</svg>
									<span className="text-sm font-semibold leading-6">
										Facebook
									</span>
								</a>
							</div>
						</div>
					</div>

					<p className="mt-10 text-center text-lg text-white">
						Pas encore inscrit ?{' '}
						<a
							href="#"
							className="font-semibold leading-6 text-mainorange-900 hover:text-mainorange-500"
						>
							Essaye gratuitement
						</a>
					</p>
				</div>
			</div>
			================================
			<div className="flex min-h-full w-full flex-1 flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
				<Card className=" max-w-full">
					<CardBody className="w-full overflow-hidden bg-mainorange-500 px-6 py-12 shadow sm:rounded-lg sm:px-12">
						<Tabs
							fullWidth
							size="md"
							aria-label="Tabs form"
							selectedKey={selected}
							onSelectionChange={setSelected}
						>
							<Tab key="login" title="Login">
								<form className="space-y-6" action="#" method="POST">
									<div>
										<label
											htmlFor="email"
											className="block font-sans text-lg font-bold leading-6 text-black"
										>
											Adresse Email
										</label>
										<div className="mt-2">
											<input
												id="email"
												name="email"
												type="email"
												autoComplete="email"
												required={true}
												className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="password"
											className="block font-sans text-lg font-bold leading-6 text-black"
										>
											Mot de passe
										</label>
										<div className="mt-2">
											<input
												id="password"
												name="password"
												type="password"
												autoComplete="current-password"
												required={true}
												className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
											/>
										</div>
									</div>

									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<input
												id="remember-me"
												name="remember-me"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
											/>
											<label
												htmlFor="remember-me"
												className="ml-3 block font-oswald text-sm leading-6 text-black"
											>
												Se souvenir de moi
											</label>
										</div>

										<div className="text-sm leading-6">
											<a
												href="#"
												className="font-semibold text-mainorange-900 hover:text-white"
											>
												Mot de passe oublié ?
											</a>
										</div>
									</div>

									<div>
										<button
											type="submit"
											className="flex w-full justify-center rounded-md bg-mainorange-900 px-3 py-1.5 text-lg font-bold leading-6 text-black shadow-sm hover:bg-mainaccent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											S{"'"}enregistrer
										</button>
									</div>
								</form>
							</Tab>
							<Tab key="sign-up" title="Sign up">
								<form className="flex h-[300px] flex-col gap-4">
									<Input
										isRequired
										label="Name"
										placeholder="Enter your name"
										type="password"
									/>
									<Input
										isRequired
										label="Email"
										placeholder="Enter your email"
										type="email"
									/>
									<Input
										isRequired
										label="Password"
										placeholder="Enter your password"
										type="password"
									/>
									<p className="text-center text-small">
										Already have an account?{' '}
										<Link size="sm" onPress={() => setSelected('login')}>
											Login
										</Link>
									</p>
									<div className="flex justify-end gap-2">
										<Button fullWidth color="primary">
											Sign up
										</Button>
									</div>
								</form>
							</Tab>
						</Tabs>
					</CardBody>
				</Card>
			</div>
		</>
	)
}

export default LoginComponent
