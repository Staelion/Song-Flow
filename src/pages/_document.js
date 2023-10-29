import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="fr" className={'light'}>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css"
				/>
			</Head>

			<body className="min-w-screen clear-both box-border min-h-screen bg-gradient-to-b from-mainorange-500 via-mainorange-950 via-70% to-black to-90%">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
