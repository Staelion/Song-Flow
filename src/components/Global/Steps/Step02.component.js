import { useContext, useState } from 'react'
import { StepsContext } from '@/providers/stepsContext'
import { Switch } from '@headlessui/react'
import React from 'react'
import { Select, SelectItem, Chip, Input, Slider } from '@nextui-org/react'

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

const OptionsQ1 = [
	{
		id: 1,
		name: 'Tony Reichert',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
	},
	{
		id: 2,
		name: 'Zoey Lang',
		role: 'Tech Lead',
		team: 'Development',
		status: 'paused',
		age: '25',
	},
	{
		id: 3,
		name: 'Jane Fisher',
		role: 'Sr. Dev',
		team: 'Development',
		status: 'active',
		age: '22',
	},
	{
		id: 4,
		name: 'William Howard',
		role: 'C.M.',
		team: 'Marketing',
		status: 'vacation',
		age: '28',
	},
	{
		id: 5,
		name: 'Kristen Copper',
		role: 'S. Manager',
		team: 'Sales',
		status: 'active',
		age: '24',
	},
	{
		id: 6,
		name: 'Brian Kim',
		role: 'P. Manager',
		team: 'Management',
		age: '29',
	},
	{
		id: 7,
		name: 'Michael Hunt',
		role: 'Designer',
		team: 'Design',
		status: 'paused',
		age: '27',
	},
	{
		id: 8,
		name: 'Samantha Brooks',
		role: 'HR Manager',
		team: 'HR',
		status: 'active',
		age: '31',
	},
	{
		id: 9,
		name: 'Frank Harrison',
		role: 'F. Manager',
		team: 'Finance',
		status: 'vacation',
		age: '33',
	},
	{
		id: 10,
		name: 'Emma Adams',
		role: 'Ops Manager',
		team: 'Operations',
		status: 'active',
		age: '35',
	},
]

const OptionsQ2 = [
	{
		id: 1,
		name: 'NICO Reichert',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
	},
	{
		id: 2,
		name: 'KARINE Lang',
		role: 'Tech Lead',
		team: 'Development',
		status: 'paused',
		age: '25',
	},
	{
		id: 3,
		name: 'Jane Fisher',
		role: 'Sr. Dev',
		team: 'Development',
		status: 'active',
		age: '22',
	},
	{
		id: 4,
		name: 'KYLIAN Howard',
		role: 'C.M.',
		team: 'Marketing',
		status: 'vacation',
		age: '28',
	},
	{
		id: 5,
		name: 'CLEMENCE Copper',
		role: 'S. Manager',
		team: 'Sales',
		status: 'active',
		age: '24',
	},
	{
		id: 6,
		name: 'Brian Kim',
		role: 'P. Manager',
		team: 'Management',
		age: '29',
	},
	{
		id: 7,
		name: 'Michael Hunt',
		role: 'Designer',
		team: 'Design',
		status: 'paused',
		age: '27',
	},
	{
		id: 8,
		name: 'Samantha Brooks',
		role: 'HR Manager',
		team: 'HR',
		status: 'active',
		age: '31',
	},
	{
		id: 9,
		name: 'Frank Harrison',
		role: 'F. Manager',
		team: 'Finance',
		status: 'vacation',
		age: '33',
	},
	{
		id: 10,
		name: 'Emma Adams',
		role: 'Ops Manager',
		team: 'Operations',
		status: 'active',
		age: '35',
	},
]

// qustions a input multiples

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

	const [chip1, setChip1] = React.useState([])
	const [name1, setName1] = useState('')

	const [chip2, setChip2] = React.useState([])
	const [name2, setName2] = useState('')

	const handleClose1 = chipToRemove => {
		setChip1(chip1.filter(chip => chip !== chipToRemove))
		if (chip1.length === 1) {
			setChip1([])
		}
	}

	const handleClose2 = chipToRemove => {
		setChip2(chip2.filter(chip => chip !== chipToRemove))
		if (chip2.length === 1) {
			setChip2([])
		}
	}

	let nextId = 1

	return (
		<>
			<section
				className={
					'mx-auto flex w-full max-w-7xl flex-col justify-center gap-8 py-16'
				}
			>
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
				<div
					className={'flex h-[50px]  w-1/2 rounded-medium bg-white shadow-sm'}
				>
					{/*Numéro de la question*/}
					<div className={'flex w-full items-center justify-between'}>
						<div className={'flex items-center justify-center px-3'}>
							<div className="flex h-11 w-11 items-center justify-center rounded-full bg-mainaccent-700 text-white ">
								01
							</div>
						</div>

						{/*titre de la question */}
						<div
							className={
								'flex  max-w-full items-center justify-center  pl-5 font-oswald text-black'
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
								} relative inline-flex h-6 w-12 items-center rounded-full`}
							>
								<span className="sr-only">Enable this option</span>
								<span
									className={`${
										toggleState1 ? 'translate-x-7' : 'translate-x-1'
									} inline-block h-4 w-4 transform rounded-full bg-white transition`}
								/>
							</Switch>
						</div>
					</div>
				</div>
				<p>template question libre</p>

				<div className=" flex w-1/2 flex-wrap gap-2">
					<Input
						type="Genre"
						label="Genre"
						defaultValue=""
						className="max-w-xs"
						onChange={e => setName1(e.target.value)}
					/>
					<button
						className={
							'm-1 w-[80px] rounded-2xl bg-mainorange-900/70 p-1 hover:bg-mainaccent-700/70'
						}
						onClick={() => {
							setChip1([...chip1, { id: nextId++, name: name1 }])
						}}
					>
						Ajouter
					</button>

					{chip1.map((chipItem, index) => (
						<Chip
							key={index}
							onClose={() => handleClose1(chipItem)}
							variant="solid"
							radius={'md'}
						>
							{chipItem.name}
						</Chip>
					))}
				</div>

				{/*SECOND TEST*/}

				<div className=" flex w-1/2 flex-wrap gap-2">
					<Input
						type="Sous-genre"
						label="Sous-genre"
						defaultValue=""
						className="max-w-xs"
						onChange={e => setName2(e.target.value)}
					/>
					<button
						className={
							'm-1 w-[80px] rounded-2xl bg-mainorange-900/70 p-1 hover:bg-mainaccent-700/70'
						}
						onClick={() => {
							setChip2([...chip2, { id: nextId++, name: name2 }])
						}}
					>
						Ajouter
					</button>

					{chip2.map((chipItem, index) => (
						<Chip
							key={index}
							onClose={() => handleClose2(chipItem)}
							variant="solid"
							radius={'md'}
						>
							{chipItem.name}
						</Chip>
					))}
				</div>

				<p>template question a slider / slider double</p>

				<p>Slider simple </p>

				<Slider
					label="BPM"
					showTooltip={true}
					step={1}
					color={'secondary'}
					size={'sm'}
					maxValue={200}
					minValue={60}
					marks={[
						{
							value: 140,
							label: '140 BPM',
						},
						{
							value: 100,
							label: '100 BPM',
						},
						{
							value: 175,
							label: '175 BPM',
						},
					]}
					defaultValue={140}
					className="max-w-md"
				/>

				<p>template question a choix multiples </p>

				<Select
					items={OptionsQ1}
					label="Question 1"
					variant="underlined"
					isMultiline={true}
					selectionMode="multiple"
					placeholder="Select a user"
					labelPlacement="outside"
					classNames={{
						base: 'max-w-xs',
						trigger: 'min-h-unit-12 py-2',
					}}
					renderValue={items => {
						return (
							<div className="flex flex-wrap gap-2">
								{items.map(item => (
									<Chip key={item.key}>{item.data.name}</Chip>
								))}
							</div>
						)
					}}
				>
					{user => (
						<SelectItem key={user.id} textValue={user.name}>
							<div className="flex items-center gap-2">
								<div className="flex flex-col">
									<span className="text-small">{user.name}</span>
									<span className="text-tiny text-default-400">
										{user.email}
									</span>
								</div>
							</div>
						</SelectItem>
					)}
				</Select>

				<Select
					items={OptionsQ2}
					label="Question 2"
					variant="underlined"
					isMultiline={true}
					selectionMode="multiple"
					placeholder="Select a user"
					labelPlacement="outside"
					classNames={{
						base: 'max-w-xs',
						trigger: 'min-h-unit-12 py-2',
					}}
					renderValue={items => {
						return (
							<div className="flex flex-wrap gap-2">
								{items.map(item => (
									<Chip key={item.key}>{item.data.name}</Chip>
								))}
							</div>
						)
					}}
				>
					{user => (
						<SelectItem key={user.id} textValue={user.name}>
							<div className="flex items-center gap-2">
								<div className="flex flex-col">
									<span className="text-small">{user.name}</span>
									<span className="text-tiny text-default-400">
										{user.email}
									</span>
								</div>
							</div>
						</SelectItem>
					)}
				</Select>
			</section>
		</>
	)
}

export default Step02Component
