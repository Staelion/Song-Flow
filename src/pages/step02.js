import FooterComponent from '@/components/Global/Footer.component'
import NavComponent from '@/components/Global/Nav.component'
import StepsComponent from '@/components/Global/Steps.component'
import { useState } from 'react'

function Step01(props) {
	// position actuelle
	// variable de react
	const [stepsCount, setStepsCount] = useState(1)

	// [ 1 , 2 , 3 ,4 ]
	// compteur : [ 2 ]
	// stepper change le style en fonction du compteur
	const [steps, setSteps] = useState([
		{
			id: '01',
			name: 'Connexion',
			description: 'Vitae sed mi luctus laoreet.',
			status: 'complete',
			href: '/step01',
		},
		{
			id: '02',
			name: 'Options',
			description: 'Cursus semper viverra.',
			status: 'current',
			href: '/step02',
		},
		{
			id: '03',
			name: 'Données ',
			description: 'Penatibus eu quis ante.',
			status: 'upcoming',
			href: '/step03',
		},
	])

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
		<>
			<main className={'h-full w-full'}>
				<NavComponent />
				{/* todo : comme steps, tu veux lui passer les fonctions de changement */}
				<StepsComponent steps={steps} clickOnStep={clickOnStep} />
				{/* formulaire */}
				<div className={'mt-20 flex justify-center'}>
					<button
						className={
							' mx-3 text-xl font-semibold text-white underline-offset-2 hover:underline disabled:text-mainaccent-900  disabled:hover:no-underline'
						}
						disabled={stepsCount === 0}
						onClick={() => {
							previousStep()
						}}
					>
						Etape précédante
					</button>
					<br />
					<button
						className={
							' mx-3 text-xl font-semibold text-white underline-offset-2 hover:underline disabled:text-mainaccent-900  disabled:hover:no-underline'
						}
						disabled={stepsCount === steps.length - 1}
						onClick={() => {
							nextStep()
						}}
					>
						Etape suivante
					</button>
				</div>
				{/* todo boutton de fin */}
				<FooterComponent />
			</main>
		</>
	)
}

export default Step01
