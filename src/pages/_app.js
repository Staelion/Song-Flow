import '@/styles/globals.css'
import { StepsProvider } from '@/providers/stepsContext'
import ProfilProvider from '@/providers/profilContext'

export default function App({ Component, pageProps }) {
	return (
		<ProfilProvider>
			<StepsProvider>
				<Component {...pageProps} />
			</StepsProvider>
		</ProfilProvider>
	)
}
