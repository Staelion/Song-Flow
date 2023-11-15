import { useContext, useState } from 'react'
import { StepsContext } from '@/providers/stepsContext'
import { Switch } from '@headlessui/react'
import React from 'react'
import {
	Select,
	SelectItem,
	Chip,
	Input,
	Slider,
	SelectSection,
} from '@nextui-org/react'

// templates
const OptionsQ1 = [
	{
		id: 1,
		name: 'Tony Reichert',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
	},
	{
		id: 2,
		name: 'Zoey Lang',
		role: 'Tech Lead',
		team: 'Development',
		status: 'paused',
		age: '25',
	},
	{
		id: 3,
		name: 'Jane Fisher',
		role: 'Sr. Dev',
		team: 'Development',
		status: 'active',
		age: '22',
	},
	{
		id: 4,
		name: 'William Howard',
		role: 'C.M.',
		team: 'Marketing',
		status: 'vacation',
		age: '28',
	},
	{
		id: 5,
		name: 'Kristen Copper',
		role: 'S. Manager',
		team: 'Sales',
		status: 'active',
		age: '24',
	},
	{
		id: 6,
		name: 'Brian Kim',
		role: 'P. Manager',
		team: 'Management',
		age: '29',
	},
	{
		id: 7,
		name: 'Michael Hunt',
		role: 'Designer',
		team: 'Design',
		status: 'paused',
		age: '27',
	},
	{
		id: 8,
		name: 'Samantha Brooks',
		role: 'HR Manager',
		team: 'HR',
		status: 'active',
		age: '31',
	},
	{
		id: 9,
		name: 'Frank Harrison',
		role: 'F. Manager',
		team: 'Finance',
		status: 'vacation',
		age: '33',
	},
	{
		id: 10,
		name: 'Emma Adams',
		role: 'Ops Manager',
		team: 'Operations',
		status: 'active',
		age: '35',
	},
]

const OptionsQ2 = [
	{
		id: 1,
		name: 'NICO Reichert',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
	},
	{
		id: 2,
		name: 'KARINE Lang',
		role: 'Tech Lead',
		team: 'Development',
		status: 'paused',
		age: '25',
	},
	{
		id: 3,
		name: 'Jane Fisher',
		role: 'Sr. Dev',
		team: 'Development',
		status: 'active',
		age: '22',
	},
	{
		id: 4,
		name: 'KYLIAN Howard',
		role: 'C.M.',
		team: 'Marketing',
		status: 'vacation',
		age: '28',
	},
	{
		id: 5,
		name: 'CLEMENCE Copper',
		role: 'S. Manager',
		team: 'Sales',
		status: 'active',
		age: '24',
	},
	{
		id: 6,
		name: 'Brian Kim',
		role: 'P. Manager',
		team: 'Management',
		age: '29',
	},
	{
		id: 7,
		name: 'Michael Hunt',
		role: 'Designer',
		team: 'Design',
		status: 'paused',
		age: '27',
	},
	{
		id: 8,
		name: 'Samantha Brooks',
		role: 'HR Manager',
		team: 'HR',
		status: 'active',
		age: '31',
	},
	{
		id: 9,
		name: 'Frank Harrison',
		role: 'F. Manager',
		team: 'Finance',
		status: 'vacation',
		age: '33',
	},
	{
		id: 10,
		name: 'Emma Adams',
		role: 'Ops Manager',
		team: 'Operations',
		status: 'active',
		age: '35',
	},
]

// qustions a input multiples

function Step02Component() {
	const { steps, stepsCount, nextStep, previousStep, clickOnStep } =
		useContext(StepsContext)

	const [toggleState1, setToggleState1] = useState(false)
	// une ligne par toggle différent
	// const [toggleState2, setToggleState2] = useState(false)

	const [serviceList, setServiceList] = useState([{ service: '' }])

	const [chip1, setChip1] = React.useState([])
	const [name1, setName1] = useState('')

	const [chip2, setChip2] = React.useState([])
	const [name2, setName2] = useState('')

	const handleClose1 = chipToRemove => {
		setChip1(chip1.filter(chip => chip !== chipToRemove))
		if (chip1.length === 1) {
			setChip1([])
		}
	}

	const handleClose2 = chipToRemove => {
		setChip2(chip2.filter(chip => chip !== chipToRemove))
		if (chip2.length === 1) {
			setChip2([])
		}
	}

	let nextId = 1

	// Vraies fonctions du questinnaire

	const genresMusicaux = [
		{ id: 1, genre: 'Blues' },
		{ id: 2, genre: 'Classique' },
		{ id: 3, genre: 'Country' },
		{ id: 4, genre: 'Disco' },
		{ id: 5, genre: 'Électronique' },
		{ id: 6, genre: 'Funk' },
		{ id: 7, genre: 'Hip-hop / Rap' },
		{ id: 8, genre: 'Jazz' },
		{ id: 9, genre: 'Musique traditionnelle' },
		{ id: 10, genre: 'Reggae' },
		{ id: 11, genre: 'Rhythm and Blues (R&B)' },
		{ id: 12, genre: 'Rock' },
		{ id: 13, genre: 'Rock and roll' },
		{ id: 14, genre: 'Soul' },
		{ id: 15, genre: 'Swing' },
	]

	const sousGenresMusicaux = [
		{
			section: 'Classique',
			items: [
				{ item: 'Baroque' },
				{ item: 'Classique' },
				{ item: 'Romantique' },
				{ item: 'Contemporain' },
			],
		},
		{
			section: 'Jazz',
			items: [
				{ item: 'Dixieland' },
				{ item: 'Swing' },
				{ item: 'Bebop' },
				{ item: 'Cool jazz' },
			],
		},
		{
			section: 'Blues',
			items: [
				{ item: 'Delta blues', id: 1 },
				{ item: 'Chicago blues', id: 2 },
				{ item: 'Jump blues', id: 3 },
			],
		},
		{
			section: 'Rock',
			items: [
				{ item: 'Rock and roll', id: 4 },
				{ item: 'Rockabilly', id: 5 },
				{ item: 'Rock psychédélique', id: 6 },
				{ item: 'Rock progressif', id: 7 },
			],
		},
		{
			section: 'Musique traditionnelle',
			items: [
				{ item: 'Musique celtique', id: 8 },
				{ item: 'Musique folklorique', id: 9 },
				{ item: 'Musique du monde', id: 10 },
			],
		},
		{
			section: 'Soul',
			items: [
				{ item: 'Motown', id: 11 },
				{ item: 'Northern soul', id: 12 },
				{ item: 'Southern soul', id: 13 },
			],
		},
		{
			section: 'Country',
			items: [
				{ item: 'Country western', id: 14 },
				{ item: 'Country pop', id: 15 },
				{ item: 'Honky-tonk', id: 16 },
			],
		},
		{
			section: 'Reggae',
			items: [
				{ item: 'Roots reggae', id: 17 },
				{ item: 'Dub', id: 18 },
				{ item: 'Rocksteady', id: 19 },
			],
		},
		{
			section: 'Funk',
			items: [
				{ item: 'Funk originel', id: 20 },
				{ item: 'P-Funk', id: 21 },
				{ item: 'Funk rock', id: 22 },
			],
		},
		{
			section: 'Disco',
			items: [
				{ item: 'Disco originel', id: 23 },
				{ item: 'Euro disco', id: 24 },
				{ item: 'Italo disco', id: 25 },
			],
		},
		{
			section: 'Hip-hop / Rap',
			items: [
				{ item: 'Old school rap', id: 26 },
				{ item: 'Golden age hip-hop', id: 27 },
				{ item: 'East coast rap', id: 28 },
			],
		},
		{
			section: 'Rhythm and Blues (R&B)',
			items: [
				{ item: 'Doo-wop', id: 29 },
				{ item: 'Motown', id: 30 },
				{ item: 'New jack swing', id: 31 },
			],
		},
		{
			section: 'Swing',
			items: [
				{ item: 'Swing', id: 32 },
				{ item: 'Swing revival', id: 33 },
			],
		},
		{
			section: 'Rock and roll',
			items: [
				{ item: 'Rockabilly', id: 34 },
				{ item: 'Doo-wop', id: 35 },
				{ item: 'Surf rock', id: 36 },
			],
		},
		{
			section: 'Country',
			items: [
				{ item: 'Bluegrass', id: 37 },
				{ item: 'Outlaw country', id: 38 },
				{ item: 'Western swing', id: 39 },
			],
		},
		{
			section: 'Électronique',
			items: [
				{ item: 'Acid jazz', id: 40 },
				{ item: 'Ambient', id: 41 },
				{ item: 'Ambient house', id: 42 },
				{ item: 'Chillout / Ambient', id: 43 },
				{ item: 'Chiptune', id: 44 },
				{ item: 'Disco', id: 45 },
				{ item: 'Drone', id: 46 },
				{ item: 'Électroacoustique', id: 47 },
				{ item: 'Électronique', id: 48 },
				{ item: 'Fusion', id: 49 },
				{ item: 'Lounge', id: 50 },
				{ item: 'Vaporwave', id: 51 },
				{ item: 'Shatta', id: 52 },
				{ item: 'Electro-swing', id: 53 },
				{ item: 'Future house', id: 54 },
				{ item: 'Synthwave', id: 55 },
				{ item: 'Lo-fi', id: 56 },
				{ item: 'Trance', id: 57 },
				{ item: 'EDM', id: 58 },
				{ item: 'Drum&Bass', id: 59 },
				{ item: 'Uptempo', id: 60 },
				{ item: 'Breakbeat', id: 61 },
				{ item: 'Dubstep', id: 62 },
				{ item: 'House', id: 63 },
				{ item: 'Techno', id: 64 },
				{ item: 'Alternative rock', id: 65 },
				{ item: 'Indie rock', id: 66 },
				{ item: 'Indie pop', id: 67 },
				{ item: 'Pop', id: 68 },
				{ item: 'Rap', id: 69 },
				{ item: 'Trap', id: 70 },
				{ item: 'Reggae fusion', id: 71 },
			],
		},
	]

	const ambianceMusicale = [
		{ id: 1, ambiance: 'Apaisant' },
		{ id: 2, ambiance: 'Captivant' },
		{ id: 3, ambiance: 'Cinématographique' },
		{ id: 4, ambiance: 'Contemplatif' },
		{ id: 5, ambiance: 'Captivant' },
		{ id: 6, ambiance: 'Délicat' },
		{ id: 7, ambiance: 'Dynamique' },
		{ id: 8, ambiance: 'Éclatant' },
		{ id: 9, ambiance: 'Électrisant' },
		{ id: 49, ambiance: 'Électrique' },
		{ id: 50, ambiance: 'Élastique' },
		{ id: 10, ambiance: 'Émotionnel' },
		{ id: 11, ambiance: 'Enchanteur' },
		{ id: 12, ambiance: 'Enigmatique' },
		{ id: 13, ambiance: 'Enivrant' },
		{ id: 14, ambiance: 'Enjoué' },
		{ id: 15, ambiance: 'Ensoleillé' },
		{ id: 16, ambiance: 'Enthousiasmant' },
		{ id: 17, ambiance: 'Énergique' },
		{ id: 18, ambiance: 'Épique' },
		{ id: 19, ambiance: 'Éthéré' },
		{ id: 20, ambiance: 'Exaltant' },
		{ id: 21, ambiance: 'Excentrique' },
		{ id: 22, ambiance: 'Festif' },
		{ id: 23, ambiance: 'Futuriste' },
		{ id: 24, ambiance: 'Groovy' },
		{ id: 25, ambiance: 'Héroïque' },
		{ id: 26, ambiance: 'Inspirant' },
		{ id: 27, ambiance: 'Intense' },
		{ id: 28, ambiance: 'Intime' },
		{ id: 29, ambiance: 'Intriguant' },
		{ id: 30, ambiance: 'Irrésistible' },
		{ id: 31, ambiance: 'Joyeux' },
		{ id: 32, ambiance: 'Mélancolique' },
		{ id: 33, ambiance: 'Méditatif' },
		{ id: 34, ambiance: 'Minimaliste' },
		{ id: 35, ambiance: 'Mystérieux' },
		{ id: 36, ambiance: 'Nostalgique' },
		{ id: 37, ambiance: 'Nocturne' },
		{ id: 38, ambiance: 'Poignant' },
		{ id: 39, ambiance: 'Puissant' },
		{ id: 40, ambiance: 'Réconfortant' },
		{ id: 41, ambiance: 'Rêveur' },
		{ id: 42, ambiance: 'Romantique' },
		{ id: 43, ambiance: 'Sensuel' },
		{ id: 44, ambiance: 'Serein' },
		{ id: 45, ambiance: 'Spacieux' },
		{ id: 46, ambiance: 'Serein' },
		{ id: 47, ambiance: 'Vibrant' },
		{ id: 48, ambiance: 'Voluptueux' },
		{ id: 49, ambiance: 'Zen' },
		{ id: 50, ambiance: 'Zesté' },
	]

	const languesDeLaMusique = [
		{ id: 1, langue: 'Afrikaans' },
		{ id: 2, langue: 'Albanais' },
		{ id: 3, langue: 'Allemand' },
		{ id: 4, langue: 'Amharique' },
		{ id: 5, langue: 'Anglais' },
		{ id: 6, langue: 'Arabe' },
		{ id: 7, langue: 'Arménien' },
		{ id: 8, langue: 'Azerbaïdjanais' },
		{ id: 9, langue: 'Basque' },
		{ id: 10, langue: 'Bengali' },
		{ id: 11, langue: 'Birman' },
		{ id: 12, langue: 'Breton' },
		{ id: 13, langue: 'Bulgare' },
		{ id: 14, langue: 'Cantonais' },
		{ id: 15, langue: 'Catalan' },
		{ id: 16, langue: 'Cherokee' },
		{ id: 17, langue: 'Chinois (Mandarin)' },
		{ id: 18, langue: 'Choctaw' },
		{ id: 19, langue: 'Coréen' },
		{ id: 20, langue: 'Cornish' },
		{ id: 21, langue: 'Créole' },
		{ id: 22, langue: 'Croate' },
		{ id: 23, langue: 'Danois' },
		{ id: 24, langue: 'Écossais (Gaélique)' },
		{ id: 25, langue: 'Espagnol' },
		{ id: 26, langue: 'Farsi (Persan)' },
		{ id: 27, langue: 'Finlandais' },
		{ id: 28, langue: 'Français' },
		{ id: 29, langue: 'Gallois' },
		{ id: 30, langue: 'Géorgien' },
		{ id: 31, langue: 'Grec' },
		{ id: 32, langue: 'Hawaïen' },
		{ id: 33, langue: 'Hébreu' },
		{ id: 34, langue: 'Hébreu ancien' },
		{ id: 35, langue: 'Hindi' },
		{ id: 36, langue: 'Icelandic' },
		{ id: 37, langue: 'Indonésien' },
		{ id: 38, langue: 'Inuit' },
		{ id: 39, langue: 'Irlandais' },
		{ id: 40, langue: 'Italien' },
		{ id: 41, langue: 'Japonais' },
		{ id: 42, langue: 'Kazakh' },
		{ id: 43, langue: 'Khmer (Cambodge)' },
		{ id: 44, langue: 'Kirghize' },
		{ id: 45, langue: 'Kurdish' },
		{ id: 46, langue: 'Laotien' },
		{ id: 47, langue: 'Latin' },
		{ id: 48, langue: 'Macedonien' },
		{ id: 49, langue: 'Malais' },
		{ id: 50, langue: 'Malgache' },
		{ id: 51, langue: 'Maori' },
		{ id: 52, langue: 'Mandarin' },
		{ id: 53, langue: 'Manx' },
		{ id: 54, langue: 'Mongol' },
		{ id: 55, langue: 'Nahuatl (Aztec)' },
		{ id: 56, langue: 'Néerlandais' },
		{ id: 57, langue: 'Nepali' },
		{ id: 58, langue: 'Norvégien' },
		{ id: 59, langue: 'Oromo' },
		{ id: 60, langue: 'Ouzbek' },
		{ id: 61, langue: 'Pendjabi' },
		{ id: 62, langue: 'Persan (Farsi)' },
		{ id: 63, langue: 'Philippin (Tagalog)' },
		{ id: 64, langue: 'Polonais' },
		{ id: 65, langue: 'Portugais' },
		{ id: 66, langue: 'Quechua' },
		{ id: 67, langue: 'Roumain' },
		{ id: 68, langue: 'Russe' },
		{ id: 69, langue: 'Samoan' },
		{ id: 70, langue: 'Sanskrit' },
		{ id: 71, langue: 'Serbe' },
		{ id: 72, langue: 'Sinhala' },
		{ id: 73, langue: 'Slovaque' },
		{ id: 74, langue: 'Slovène' },
		{ id: 75, langue: 'Somali' },
		{ id: 76, langue: 'Suédois' },
		{ id: 77, langue: 'Swahili' },
		{ id: 78, langue: 'Swazi' },
		{ id: 79, langue: 'Tagalog' },
		{ id: 80, langue: 'Tadjik' },
		{ id: 81, langue: 'Tamoul' },
		{ id: 82, langue: 'Tahitien' },
		{ id: 83, langue: 'Tchèque' },
		{ id: 84, langue: 'Thaï' },
		{ id: 85, langue: 'Tibétain' },
		{ id: 86, langue: 'Tongan' },
		{ id: 87, langue: 'Turc' },
		{ id: 88, langue: 'Turkmène' },
		{ id: 89, langue: 'Ukrainien' },
		{ id: 90, langue: 'Urdu' },
		{ id: 91, langue: 'Vietnamien' },
		{ id: 92, langue: 'Xhosa' },
		{ id: 93, langue: 'Yiddish' },
		{ id: 94, langue: 'Yoruba' },
		{ id: 95, langue: 'Zoulou' },
	]
	return (
		<>
			<div></div>
			<section
				className={
					'mx-auto flex w-full max-w-7xl flex-col justify-center gap-12 px-10 py-10'
				}
			>
				{/*<p>template question oui / non</p>*/}
				{/*<div*/}
				{/*	className={'flex h-[50px]  w-1/2 rounded-medium bg-white shadow-sm'}*/}
				{/*>*/}
				{/*	/!*Numéro de la question*!/*/}
				{/*	<div className={'flex w-full items-center justify-between'}>*/}
				{/*		<div className={'flex items-center justify-center px-3'}>*/}
				{/*			<div className="flex h-11 w-11 items-center justify-center rounded-full bg-mainaccent-700 text-white ">*/}
				{/*				01*/}
				{/*			</div>*/}
				{/*		</div>*/}

				{/*		/!*titre de la question *!/*/}
				{/*		<div*/}
				{/*			className={*/}
				{/*				'flex  max-w-full items-center justify-center  pl-5 font-oswald text-black'*/}
				{/*			}*/}
				{/*		>*/}
				{/*			Utilisation de samples ?*/}
				{/*		</div>*/}
				{/*		/!*switch oui non *!/*/}
				{/*		<div className={' flex items-center justify-center px-5'}>*/}
				{/*			<Switch*/}
				{/*				checked={toggleState1}*/}
				{/*				onChange={setToggleState1}*/}
				{/*				className={`${*/}
				{/*					toggleState1 ? 'bg-mainaccent-700' : 'bg-amber-950'*/}
				{/*				} relative inline-flex h-6 w-12 items-center rounded-full`}*/}
				{/*			>*/}
				{/*				<span className="sr-only">Enable this option</span>*/}
				{/*				<span*/}
				{/*					className={`${*/}
				{/*						toggleState1 ? 'translate-x-7' : 'translate-x-1'*/}
				{/*					} inline-block h-4 w-4 transform rounded-full bg-white transition`}*/}
				{/*				/>*/}
				{/*			</Switch>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
				{/*<p>template question libre</p>*/}

				{/*<div className=" flex w-1/2 flex-wrap gap-2">*/}
				{/*	<Input*/}
				{/*		type="Genre"*/}
				{/*		label="Genre"*/}
				{/*		defaultValue=""*/}
				{/*		className="max-w-xs"*/}
				{/*		onChange={e => setName1(e.target.value)}*/}
				{/*	/>*/}
				{/*	<button*/}
				{/*		className={*/}
				{/*			'm-1 w-[80px] rounded-2xl bg-mainorange-900/70 p-1 hover:bg-mainaccent-700/70'*/}
				{/*		}*/}
				{/*		onClick={() => {*/}
				{/*			setChip1([...chip1, { id: nextId++, name: name1 }])*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		Ajouter*/}
				{/*	</button>*/}

				{/*	{chip1.map((chipItem, index) => (*/}
				{/*		<Chip*/}
				{/*			key={index}*/}
				{/*			onClose={() => handleClose1(chipItem)}*/}
				{/*			variant="solid"*/}
				{/*			radius={'md'}*/}
				{/*		>*/}
				{/*			{chipItem.name}*/}
				{/*		</Chip>*/}
				{/*	))}*/}
				{/*</div>*/}

				{/*/!*SECOND TEST*!/*/}

				{/*<div className=" flex w-1/2 flex-wrap gap-2">*/}
				{/*	<Input*/}
				{/*		type="Sous-genre"*/}
				{/*		label="Sous-genre"*/}
				{/*		defaultValue=""*/}
				{/*		className="max-w-xs"*/}
				{/*		onChange={e => setName2(e.target.value)}*/}
				{/*	/>*/}
				{/*	<button*/}
				{/*		className={*/}
				{/*			'm-1 w-[80px] rounded-2xl bg-mainorange-900/70 p-1 hover:bg-mainaccent-700/70'*/}
				{/*		}*/}
				{/*		onClick={() => {*/}
				{/*			setChip2([...chip2, { id: nextId++, name: name2 }])*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		Ajouter*/}
				{/*	</button>*/}

				{/*	{chip2.map((chipItem, index) => (*/}
				{/*		<Chip*/}
				{/*			key={index}*/}
				{/*			onClose={() => handleClose2(chipItem)}*/}
				{/*			variant="solid"*/}
				{/*			radius={'md'}*/}
				{/*		>*/}
				{/*			{chipItem.name}*/}
				{/*		</Chip>*/}
				{/*	))}*/}
				{/*</div>*/}

				{/*<p>template question a slider / slider double</p>*/}

				{/*<p>Slider simple </p>*/}

				{/*<Slider*/}
				{/*	label="BPM"*/}
				{/*	showTooltip={true}*/}
				{/*	step={1}*/}
				{/*	size={'sm'}*/}
				{/*	color={'secondary'}*/}
				{/*	maxValue={200}*/}
				{/*	minValue={60}*/}
				{/*	marks={[*/}
				{/*		{*/}
				{/*			value: 140,*/}
				{/*			label: '140 BPM',*/}
				{/*		},*/}
				{/*		{*/}
				{/*			value: 100,*/}
				{/*			label: '100 BPM',*/}
				{/*		},*/}
				{/*		{*/}
				{/*			value: 175,*/}
				{/*			label: '175 BPM',*/}
				{/*		},*/}
				{/*	]}*/}
				{/*	defaultValue={140}*/}
				{/*	className="max-w-md"*/}
				{/*/>*/}

				{/*<p>Slider double</p>*/}

				{/*<Slider*/}
				{/*	label="Année"*/}
				{/*	step={1}*/}
				{/*	size={'sm'}*/}
				{/*	color={'secondary'}*/}
				{/*	maxValue={2024}*/}
				{/*	minValue={1920}*/}
				{/*	defaultValue={[1980, 2010]}*/}
				{/*	className="max-w-md"*/}
				{/*/>*/}

				{/*<p>template question à choix multiples </p>*/}

				{/*<Select*/}
				{/*	items={OptionsQ1}*/}
				{/*	label="Question 1"*/}
				{/*	variant="underlined"*/}
				{/*	isMultiline={true}*/}
				{/*	selectionMode="multiple"*/}
				{/*	placeholder="Select a user"*/}
				{/*	labelPlacement="outside"*/}
				{/*	classNames={{*/}
				{/*		base: 'max-w-xs',*/}
				{/*		trigger: 'min-h-unit-12 py-2',*/}
				{/*	}}*/}
				{/*	renderValue={items => {*/}
				{/*		return (*/}
				{/*			<div className="flex flex-wrap gap-2">*/}
				{/*				{items.map(item => (*/}
				{/*					<Chip key={item.key}>{item.data.name}</Chip>*/}
				{/*				))}*/}
				{/*			</div>*/}
				{/*		)*/}
				{/*	}}*/}
				{/*>*/}
				{/*	{user => (*/}
				{/*		<SelectItem key={user.id} textValue={user.name}>*/}
				{/*			<div className="flex items-center gap-2">*/}
				{/*				<div className="flex flex-col">*/}
				{/*					<span className="text-small">{user.name}</span>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*		</SelectItem>*/}
				{/*	)}*/}
				{/*</Select>*/}

				{/*<Select*/}
				{/*	items={OptionsQ2}*/}
				{/*	label="Question 2"*/}
				{/*	variant="underlined"*/}
				{/*	isMultiline={true}*/}
				{/*	selectionMode="multiple"*/}
				{/*	placeholder="Select a user"*/}
				{/*	labelPlacement="outside"*/}
				{/*	classNames={{*/}
				{/*		base: 'max-w-xs',*/}
				{/*		trigger: 'min-h-unit-12 py-2',*/}
				{/*	}}*/}
				{/*	renderValue={items => {*/}
				{/*		return (*/}
				{/*			<div className="flex flex-wrap gap-2">*/}
				{/*				{items.map(item => (*/}
				{/*					<Chip key={item.key}>{item.data.name}</Chip>*/}
				{/*				))}*/}
				{/*			</div>*/}
				{/*		)*/}
				{/*	}}*/}
				{/*>*/}
				{/*	{user => (*/}
				{/*		<SelectItem key={user.id} textValue={user.name}>*/}
				{/*			<div className="flex items-center gap-2">*/}
				{/*				<div className="flex flex-col">*/}
				{/*					<span className="text-small">{user.name}</span>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*		</SelectItem>*/}
				{/*	)}*/}
				{/*</Select>*/}

				{/*Vrai questionnaire */}

				<h2 className={'text-2xl font-bold'}>Options principales </h2>
				<h4>
					Ici tu vas pouvoir choisir les paramètres de ta playlist personnalisée
					! tout est optionnel, mais garde en tête que plus tu aura défini d
					{"'"}otions plus la playlist répondra a tes besoins
				</h4>
				<p>
					Rassure toi, tu pourra ajouter ou supprimer des titres une fois ta
					playlist générée
				</p>

				<Select
					items={genresMusicaux}
					label="Choix du genre musical"
					variant="underlined"
					size={'lg'}
					isMultiline={true}
					selectionMode="multiple"
					placeholder="Rock, Pop, Electro, etc..."
					labelPlacement="outside"
					classNames={{
						base: 'max-w-md',
						trigger: 'min-h-unit-12 py-2',
					}}
					renderValue={items => {
						return (
							<div className="flex flex-wrap gap-2">
								{items.map(item => (
									<Chip key={item.key}>{item.data.genre}</Chip>
								))}
							</div>
						)
					}}
				>
					{user => (
						<SelectItem key={user.id} textValue={user.genre}>
							<div className="flex items-center gap-2">
								<div className="flex flex-col">
									<span className="text-small">{user.genre}</span>
								</div>
							</div>
						</SelectItem>
					)}
				</Select>

				<p>
					Sous genre musicaux avec combinaison de multi select chip et sections
				</p>

				<Select
					items={sousGenresMusicaux}
					label="Choix du sous-genre musical"
					variant="underlined"
					isMultiline={true}
					selectionMode="multiple"
					placeholder="Rock, Pop, Electro, etc..."
					labelPlacement="outside"
					classNames={{
						base: 'max-w-xs',
						trigger: 'min-h-unit-12 py-2',
					}}
					// fonctionnement du visuel du select
					renderValue={items => {
						return (
							<div className="flex flex-wrap gap-2">
								{items.map(item => {
									return <Chip key={item.key}>{item.textValue}</Chip>
								})}
							</div>
						)
					}}
				>
					{/*fonctionnement du select*/}
					{/*// affichage des genres musicaux en sections*/}
					{/*{sousGenresMusicaux.map(section => {*/}
					{/*	console.log(section)*/}
					{/*})}*/}
					{sousGenresMusicaux.map(section => {
						return (
							<SelectSection
								showDivider
								key={section[0]}
								title={section.section}
								color={'primary'}
							>
								{/*affichage des sous genres musicaux*/}
								{section.items.map(elem => {
									return (
										<SelectItem key={elem.id} title={elem.item}>
											<div className="flex items-center gap-2">
												<div className="flex flex-col">
													<span className="text-small">{elem.item}</span>
												</div>
											</div>
										</SelectItem>
									)
								})}
							</SelectSection>
						)
					})}
				</Select>

				{/*===============================================================*/}

				<Slider
					label="Tempo"
					showTooltip={true}
					step={1}
					size={'sm'}
					color={'secondary'}
					maxValue={200}
					minValue={60}
					marks={[
						{
							value: 100,
							label: '100 BPM',
						},
						{
							value: 140,
							label: '140 BPM',
						},
						{
							value: 175,
							label: '175 BPM',
						},
					]}
					defaultValue={[100, 140]}
					className="max-w-3xl"
				/>

				<p>
					{' '}
					structure musicale avec combinaison de multi selct chip et sections{' '}
				</p>

				<Select
					items={ambianceMusicale}
					label="Choix de l'anmbiance musicale"
					variant="underlined"
					size={'lg'}
					isMultiline={true}
					selectionMode="multiple"
					placeholder="Calme, Dynamique, etc..."
					labelPlacement="outside"
					classNames={{
						base: 'max-w-md',
						trigger: 'min-h-unit-12 py-2',
					}}
					renderValue={items => {
						return (
							<div className="flex flex-wrap gap-2">
								{items.map(item => (
									<Chip key={item.key}>{item.data.ambiance}</Chip>
								))}
							</div>
						)
					}}
				>
					{user => (
						<SelectItem key={user.id} textValue={user.ambiance}>
							<div className="flex items-center gap-2">
								<div className="flex flex-col">
									<span className="text-small">{user.ambiance}</span>
								</div>
							</div>
						</SelectItem>
					)}
				</Select>

				<Slider
					label="Popularité"
					showTooltip={true}
					step={1}
					showSteps={true}
					size={'sm'}
					color={'secondary'}
					maxValue={11}
					minValue={1}
					marks={[
						{ value: 1, label: 'Inconnu' },
						{ value: 2, label: 'Méconnu' },
						{ value: 3, label: 'Underground' },
						{ value: 4, label: 'Émergent' },
						{ value: 5, label: 'Niche' },
						{ value: 6, label: 'Peu importe' },
						{ value: 7, label: 'Populaire localement' },
						{ value: 8, label: 'Reconnu nationalement' },
						{ value: 9, label: 'Mainstream' },
						{ value: 10, label: 'Iconique' },
						{ value: 11, label: 'Culte' },
					]}
					defaultValue={6}
					className="max-w-full"
				/>

				<Slider
					label="Année"
					step={1}
					size={'sm'}
					color={'secondary'}
					maxValue={2024}
					minValue={1920}
					defaultValue={[1980, 2010]}
					className="max-w-md"
				/>

				<Slider
					label="Durée"
					step={0.1}
					size={'sm'}
					color={'secondary'}
					showTooltip={true}
					formatOptions={'{value} min'}
					tooltipValueFormatOptions={'{value} min'}
					maxValue={10}
					minValue={0.5}
					defaultValue={[2.5, 4]}
					marks={[
						{
							value: 0.5,
							label: '30 sec et moins',
						},
						{ value: 2, label: '2 min' },
						{
							value: 4,
							label: '4 min',
						},
						{
							value: 6,
							label: '6 min',
						},
						{
							value: 8,
							label: '8 min',
						},
						{
							value: 10,
							label: '10+ min',
						},
					]}
					className="max-w-md"
				/>

				<div className=" flex w-1/2 flex-wrap gap-2">
					<Input
						type="Genre"
						label="Origine culturelle ou géographique"
						defaultValue=""
						className="max-w-xs"
						onChange={e => setName1(e.target.value)}
					/>
					<button
						className={
							'm-1 w-[80px] rounded-2xl bg-mainorange-900/70 p-1 hover:bg-mainaccent-700/70'
						}
						onClick={() => {
							setChip1([...chip1, { id: nextId++, name: name1 }])
						}}
					>
						Ajouter
					</button>

					{chip1.map((chipItem, index) => (
						<Chip
							key={index}
							onClose={() => handleClose1(chipItem)}
							variant="solid"
							radius={'md'}
						>
							{chipItem.name}
						</Chip>
					))}
				</div>

				<Select
					label="Choix de la langue des paroles"
					variant="underlined"
					size={'lg'}
					isMultiline={true}
					selectionMode="multiple"
					items={languesDeLaMusique}
					placeholder="anglais, français, etc..."
					labelPlacement="outside"
					classNames={{
						base: 'max-w-md',
						trigger: 'min-h-unit-12 py-2',
					}}
					renderValue={items => {
						return (
							<div className="flex flex-wrap gap-2">
								{items.map(item => (
									<Chip key={item.key}>{item.data.langue}</Chip>
								))}
							</div>
						)
					}}
				>
					{user => (
						<SelectItem key={user.id} textValue={user.langue}>
							<div className="flex items-center gap-2">
								<div className="flex flex-col">
									<span className="text-small">{user.langue}</span>
								</div>
							</div>
						</SelectItem>
					)}
				</Select>
			</section>
		</>
	)
}

export default Step02Component
