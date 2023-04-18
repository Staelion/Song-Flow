import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="fr">
			<Head />
			<body className="max-w-screen clear-both box-border min-h-screen truncate bg-gradient-to-b from-mainorange-500 via-mainorange-950 via-70% to-black to-90%">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
