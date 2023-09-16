import React, { useState } from 'react'
import FooterComponent from '@/components/Global/Footer.component'
import NavComponent from '@/components/Global/Nav.component'
import StepsComponent from '@/components/Global/Steps.component'

function Playlistplus(props) {
	// position actuelle
	// variable de react
	const [stepsCount, setStepsCount] = useState(0)
	// [ 1 , 2 , 3 ,4 ]
	// compteur : [ 2 ]
	// stepper change le style en fonction du compteur
	const [steps, setSteps] = useState([
		{
			id: '01',
			name: 'Connexion',
			description: 'Vitae sed mi luctus laoreet.',
			status: 'current',
		},
		{
			id: '02',
			name: 'Options',
			description: 'Cursus semper viverra.',
			status: 'upcoming',
		},
		{
			id: '03',
			name: 'Données ',
			description: 'Penatibus eu quis ante.',
			status: 'upcoming',
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
	// to do : function de changement du tableau : steps ( comme previous / next, mais par rapport à un élément spécifique )
	// [
	//     {
	//         id: '01',
	//         name: 'Connexion',
	//         description: 'Vitae sed mi luctus laoreet.',
	//         href: '#',
	//         status: 'complete',
	//     },
	//     {
	//         id: '02',
	//         name: 'Options',
	//         description: 'Cursus semper viverra.',
	//         href: '#',
	//         status: 'current',
	//     },
	//     {
	//         id: '03',
	//         name: 'Données ',
	//         description: 'Penatibus eu quis ante.',
	//         href: '#',
	//         status: 'upcoming',
	//     },
	// ]
	const completeToCurrent = () => {
		if (stepsCount !== 0) {
			setStepsCount(0)
			let newStepper = [...steps]
			newStepper[stepsCount].status = 'current'
			newStepper[stepsCount + 1].status = 'upcoming'

			setSteps(newStepper)
		}
	}

	return (
		<>
			<main className={'h-full w-full'}>
				<NavComponent />
				{/* todo : comme steps, tu veux lui passer les fonctions de changement */}
				<StepsComponent steps={steps} completeToCurrent={completeToCurrent} />
				{/* formulaire */}
				<button
					className={'flex rounded-full'}
					disabled={stepsCount === steps.length - 1}
					onClick={() => {
						nextStep()
					}}
				>
					Etape suivante
				</button>
				<br />
				<button
					disabled={stepsCount === 0}
					onClick={() => {
						previousStep()
					}}
				>
					Etape précédente
				</button>

				{/* todo boutton de fin */}
				<FooterComponent />
			</main>
		</>
	)
}

export default Playlistplus
