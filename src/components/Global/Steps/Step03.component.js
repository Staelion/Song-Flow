import { useContext } from 'react'
import { StepsContext } from '@/providers/stepsContext'

function Step03Component() {
	const { steps, stepsCount, nextStep, previousStep, clickOnStep } =
		useContext(StepsContext)

	return <div>step 03</div>
}

export default Step03Component
