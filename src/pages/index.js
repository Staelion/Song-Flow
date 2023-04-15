import Image from 'next/image'
import { Inter } from 'next/font/google'
// import {Head} from "next/document";
import Nav from '@/components/Global/Nav'
import React from 'react'
import Footer from '@/components/Global/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Nav />
			<Footer />
		</>
	)
}
