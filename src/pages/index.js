import Image from 'next/image'
import { Inter } from 'next/font/google'
// import {Head} from "next/document";
import NavComponent from '@/components/Global/Nav.component'
import React from 'react'
import FooterComponent from '@/components/Global/Footer.component'
import BackgroundtemplateComponent from '@/components/Global/Backgroundtemplate.component'
import HeroComponent from '@/components/Global/Hero.component'
import FeaturesComponent from '@/components/Global/Features.component'
import FlashcardComponent from '@/components/Global/Flashcard.component'
import LogoterreComponent from '@/components/Global/Logoterre.component'
import ScriptTerreComponent from '@/components/Global/ScriptTerre.component'

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
