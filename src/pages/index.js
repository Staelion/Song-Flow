import Image from 'next/image'
import { Inter } from 'next/font/google'
// import {Head} from "next/document";
import NavComponent from '@/components/Global/Landing page/Nav.component'
import React from 'react'
import FooterComponent from '@/components/Global/Landing page/Footer.component'
import BackgroundtemplateComponent from '@/components/Global/Backgroundtemplate.component'
import HeroComponent from '@/components/Global/Landing page/Hero.component'
import FeaturesComponent from '@/components/Global/Landing page/Features.component'
import FlashcardComponent from '@/components/Global/Landing page/Flashcard.component'
import LogoterreComponent from '@/components/Global/Landing page/Logoterre.component'
import ScriptTerreComponent from '@/components/Global/Landing page/ScriptTerre.component'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<NavComponent />
			<LogoterreComponent />
			<ScriptTerreComponent />
			<BackgroundtemplateComponent />
			<HeroComponent />
			<FlashcardComponent />
			<FeaturesComponent />
			<FooterComponent />
		</>
	)
}
