import { useContext } from 'react'
import { StepsContext } from '@/providers/stepsContext'

function Step01Component() {
	const { steps, stepsCount, nextStep, previousStep, clickOnStep } =
		useContext(StepsContext)

	return
}

export default Step01Component
