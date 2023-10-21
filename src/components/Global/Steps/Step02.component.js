import { useContext, useState } from 'react'
import { StepsContext } from '@/providers/stepsContext'
import { Switch } from '@headlessui/react'

function Step02Component() {
	const { steps, stepsCount, nextStep, previousStep, clickOnStep } =
		useContext(StepsContext)

	const [enabled, setEnabled] = useState(true)

	return (
		<>
			<div>step 02</div>
			<br />
			<br />
			<br />
			{/*template question oui / non*/}

			<div className={'flex '}>
				<Switch
					checked={enabled}
					onChange={setEnabled}
					className={`${
						enabled ? 'bg-mainaccent-700' : 'bg-amber-950'
					} relative inline-flex h-8 w-16 items-center rounded-full`}
				>
					<span className="sr-only">Enable notifications</span>
					<span
						className={`${
							enabled ? 'translate-x-10' : 'translate-x-1'
						} inline-block h-4 w-4 transform rounded-full bg-white transition`}
					/>
				</Switch>
			</div>
		</>
	)
}

export default Step02Component
