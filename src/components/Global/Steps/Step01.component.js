import { useContext } from 'react'
import { StepsContext } from '@/providers/stepsContext'

function Step01Component() {
	const { steps, stepsCount, nextStep, previousStep, clickOnStep } =
		useContext(StepsContext)

	return <div>step 01</div>
}

export default Step01Component
