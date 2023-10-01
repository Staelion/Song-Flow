import { useContext } from 'react'
import { StepsContext } from '@/providers/stepsContext'

function Step02Component() {
	const { steps, stepsCount, nextStep, previousStep, clickOnStep } =
		useContext(StepsContext)

	return <div>step 02</div>
}

export default Step02Component
