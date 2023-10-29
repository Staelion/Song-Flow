import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { StepsProvider } from '@/providers/stepsContext'
import ProfilProvider from '@/providers/profilContext'

export default function App({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<ProfilProvider>
				<StepsProvider>
					<Component {...pageProps} />
				</StepsProvider>
			</ProfilProvider>
		</NextUIProvider>
	)
}
