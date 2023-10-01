import { createContext, useState } from 'react'

export const StepsContext = createContext()

export function StepsProvider({ children }) {
	const [stepsCount, setStepsCount] = useState(0)
	const [steps, setSteps] = useState([
		{
			id: '01',
			name: 'Connexion',
			description: 'Vitae sed mi luctus laoreet.',
			status: 'current',
			href: '/step01',
		},
		{
			id: '02',
			name: 'Options',
			description: 'Cursus semper viverra.',
			status: 'upcoming',
			href: '/step02',
		},
		{
			id: '03',
			name: 'Données ',
			description: 'Penatibus eu quis ante.',
			status: 'upcoming',
			href: '/step03',
		},
	]) // Vos données initiales pour "steps"

	// ... Toutes vos fonctions liées aux étapes ...
	const nextStep = () => {
		if (stepsCount !== steps.length - 1) {
			setStepsCount(stepsCount + 1)
			let newStepper = [...steps]

			newStepper[stepsCount].status = 'complete'
			newStepper[stepsCount + 1].status = 'current'

			setSteps(newStepper)
		}
	}

	const previousStep = () => {
		if (stepsCount !== 0) {
			setStepsCount(stepsCount - 1)
			let newStepper = [...steps]
			newStepper[stepsCount].status = 'upcoming'
			newStepper[stepsCount - 1].status = 'current'

			setSteps(newStepper)
		}
	}

	const clickOnStep = id_step => {
		// 	id_step : le step sur le quel tu click
		// 	loop on steps
		// 	-> elem < id_step => complete
		// 	-> elem > id_step => upcoming
		// 	-> elem = id_step => current

		let newStepper = [...steps]

		for (const step of newStepper) {
			if (step.id < id_step) {
				step.status = 'complete'
			} else if (step.id > id_step) {
				step.status = 'upcoming'
			} else {
				step.status = 'current'
			}
		}
		setSteps(newStepper)
		setStepsCount(id_step - 1)
		console.log(stepsCount)
	}

	return (
		<StepsContext.Provider
			value={{ steps, stepsCount, nextStep, previousStep, clickOnStep }}
		>
			{children}
		</StepsContext.Provider>
	)
}
