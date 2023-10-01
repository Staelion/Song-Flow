import FooterComponent from '@/components/Global/Landing page/Footer.component'
import NavComponent from '@/components/Global/Landing page/Nav.component'
import StepsComponent from '@/components/Global/Steps.component'
import React, { useContext } from 'react'
import { StepsContext } from '@/providers/stepsContext'
import Step01Component from '@/components/Global/Steps/Step01.component'
import Step02Component from '@/components/Global/Steps/Step02.component'
import Step03Component from '@/components/Global/Steps/Step03.component'

function Step(props) {
	const { steps, stepsCount, nextStep, previousStep, clickOnStep } =
		useContext(StepsContext)

	const currentStep = steps.find(step => step.status === 'current')

	return (
		<>
			<main className={'h-full w-full'}>
				<NavComponent />
				{/* todo : comme steps, tu veux lui passer les fonctions de changement */}
				<StepsComponent steps={steps} clickOnStep={clickOnStep} />
				{currentStep.id === '01' && <Step01Component />}
				{currentStep.id === '02' && <Step02Component />}
				{currentStep.id === '03' && <Step03Component />}
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

export default Step
