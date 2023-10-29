import { useContext, useState } from 'react'
import { StepsContext } from '@/providers/stepsContext'
import { Switch } from '@headlessui/react'
import { Select, SelectItem } from '@nextui-org/react'

const animals = [
	{
		label: 'Cat',
		value: 'cat',
		description: 'The second most popular pet in the world',
	},
	{
		label: 'Dog',
		value: 'dog',
		description: 'The most popular pet in the world',
	},
	{
		label: 'Elephant',
		value: 'elephant',
		description: 'The largest land animal',
	},
	{ label: 'Lion', value: 'lion', description: 'The king of the jungle' },
	{ label: 'Tiger', value: 'tiger', description: 'The largest cat species' },
	{
		label: 'Giraffe',
		value: 'giraffe',
		description: 'The tallest land animal',
	},
	{
		label: 'Dolphin',
		value: 'dolphin',
		description: 'A widely distributed and diverse group of aquatic mammals',
	},
	{
		label: 'Penguin',
		value: 'penguin',
		description: 'A group of aquatic flightless birds',
	},
	{
		label: 'Zebra',
		value: 'zebra',
		description: 'A several species of African equids',
	},
	{
		label: 'Shark',
		value: 'shark',
		description:
			'A group of elasmobranch fish characterized by a cartilaginous skeleton',
	},
	{
		label: 'Whale',
		value: 'whale',
		description: 'Diverse group of fully aquatic placental marine mammals',
	},
	{
		label: 'Otter',
		value: 'otter',
		description: 'A carnivorous mammal in the subfamily Lutrinae',
	},
	{
		label: 'Crocodile',
		value: 'crocodile',
		description: 'A large semiaquatic reptile',
	},
]

function Step02Component() {
	const { steps, stepsCount, nextStep, previousStep, clickOnStep } =
		useContext(StepsContext)

	const [toggleState1, setToggleState1] = useState(false)
	// une ligne par toggle différent
	// const [toggleState2, setToggleState2] = useState(false)

	const [serviceList, setServiceList] = useState([{ service: '' }])

	const handleServiceChange = (e, index) => {
		const { name, value } = e.target
		const list = [...serviceList]
		list[index][name] = value
		setServiceList(list)
	}

	const handleServiceRemove = index => {
		const list = [...serviceList]
		list.splice(index, 1)
		setServiceList(list)
	}

	const handleServiceAdd = () => {
		setServiceList([...serviceList, { service: '' }])
	}

	return (
		<>
			<section className={'mx-auto flex max-w-3xl flex-col gap-8 py-16'}>
				<div>step 02</div>
				<div>
					<Select
						isRequired
						label="Favorite Animal"
						placeholder="Select an animal"
						defaultSelectedKeys={['cat']}
						className="max-w-xs"
					>
						{animals.map(animal => (
							<SelectItem key={animal.value} value={animal.value}>
								{animal.label}
							</SelectItem>
						))}
					</Select>
				</div>
				<p>template question oui / non</p>
				<div className={'flex h-[45px] '}>
					{/*Numéro de la question*/}
					<div
						className={
							' flex h-10 w-10 items-center justify-center rounded-full bg-mainaccent-700 text-white'
						}
					>
						01
					</div>
					{/*titre de la question */}
					<div
						className={
							'flex w-1/3 max-w-full items-center justify-center  pl-5 font-oswald text-white'
						}
					>
						Utilisation de samples ?
					</div>
					{/*switch oui non */}
					<div className={' flex items-center justify-center px-5'}>
						<Switch
							checked={toggleState1}
							onChange={setToggleState1}
							className={`${
								toggleState1 ? 'bg-mainaccent-700' : 'bg-amber-950'
							} relative inline-flex h-5 w-10 items-center rounded-full`}
						>
							<span className="sr-only">Enable this option</span>
							<span
								className={`${
									toggleState1 ? 'translate-x-5' : 'translate-x-1'
								} inline-block h-4 w-4 transform rounded-full bg-white transition`}
							/>
						</Switch>
					</div>
				</div>
				<p>template question libre</p>
				<form className="App" autoComplete="off">
					<div className="form-field">
						<label htmlFor="service">Service(s)</label>
						{serviceList.map((singleService, index) => (
							<div key={index} className="services">
								<div className="first-division">
									<input
										name="service"
										type="text"
										id="service"
										value={singleService.service}
										onChange={e => handleServiceChange(e, index)}
										required
									/>
									{serviceList.length - 1 === index &&
										serviceList.length < 5 && (
											<button
												type="button"
												onClick={handleServiceAdd}
												className="add-btn"
											>
												<span>Add a Service</span>
											</button>
										)}
								</div>
								<div className="second-division">
									{serviceList.length !== 1 && (
										<button
											type="button"
											onClick={() => handleServiceRemove(index)}
											className="remove-btn"
										>
											<span>Remove</span>
										</button>
									)}
								</div>
							</div>
						))}
					</div>
					<div className="output">
						<h2>Output</h2>
						{serviceList &&
							serviceList.map((singleService, index) => (
								<ul key={index}>
									{singleService.service && <li>{singleService.service}</li>}
								</ul>
							))}
					</div>
				</form>
				<p>template question a slider / slider double</p>
				<p>template question a choix multiples (combobox Headless UI)</p>
			</section>
		</>
	)
}

export default Step02Component
