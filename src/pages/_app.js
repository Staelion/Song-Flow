import '@/styles/globals.css'
import { StepsProvider } from '@/providers/stepsContext'

export default function App({ Component, pageProps }) {
	return (
		<StepsProvider>
			<Component {...pageProps} />
		</StepsProvider>
	)
}
