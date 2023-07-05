import Image from 'next/image'
import { Inter } from 'next/font/google'
// import {Head} from "next/document";
import Nav from '@/components/Global/Nav'
import React from 'react'
import Footer from '@/components/Global/Footer'
import Backgroundtemplate from '@/components/Global/Backgroundtemplate'
import Hero from '@/components/Global/Hero'
import Features from '@/components/Global/Features'
import Flashcard from '@/components/Global/Flashcard'
import Logoterre from '@/components/Global/Logoterre'
import ScriptTerre from '@/components/Global/ScriptTerre'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Nav />
			<Logoterre />
			<ScriptTerre />
			<Backgroundtemplate />
			<Hero />
			<Flashcard />
			<Features />
			<Footer />
		</>
	)
}
