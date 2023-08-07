import React from 'react'
import Link from 'next/link'
import Select from 'react-select'

const navigation = [
	{
		name: 'Profil',
		href: '/profil',
		icon: <i className="fi fi-br-user"></i>,
		current: true,
	},
	{
		name: 'Abonnement',
		href: '/abonnement',
		icon: <i className="fi fi-br-star"></i>,
		current: false,
	},
	{
		name: 'paiement',
		href: '/paiement',
		icon: <i className="fi fi-br-wallet"></i>,
		current: false,
	},
	{
		name: 'FAQ',
		href: '/FAQ',
		icon: <i className="fi fi-br-bookmark"></i>,
		current: false,
	},
	{
		name: 'Se déconnecter',
		href: '#',
		icon: <i className="fi fi-br-arrow-right-to-bracket"></i>,
		current: false,
	},
]

const pays = [
	{ value: 'Afghanistan', label: 'Afghanistan' },
	{ value: 'Afrique_Centrale', label: 'Afrique Centrale' },
	{ value: 'Afrique_du_sud', label: 'Afrique du Sud' },
	{ value: 'Albanie', label: 'Albanie' },
	{ value: 'Algerie', label: 'Algerie' },
	{ value: 'Allemagne', label: 'Allemagne' },
	{ value: 'Andorre', label: 'Andorre' },
	{ value: "Burundi", label: "Burundi" },
	{ value: "Caiman", label: "Caïman" },
	{ value: "Cambodge", label: "Cambodge" },
	{ value: "Cameroun", label: "Cameroun" },
	{ value: "Canada", label: "Canada" },
	{ value: "Canaries", label: "Canaries" },
	{ value: "Cap_Vert", label: "Cap Vert" },
	{ value: "Chili", label: "Chili" },
	{ value: "Chine", label: "Chine" },
	{ value: "Chypre", label: "Chypre" },
	{ value: "Colombie", label: "Colombie" },
	{ value: "Comores", label: "Comores" },
	{ value: "Congo", label: "Congo" },
	{ value: "Congo_democratique", label: "Congo démocratique" },
	{ value: "Cook", label: "Cook" },
	{ value: "Coree_du_Nord", label: "Corée du Nord" },
	{ value: "Coree_du_Sud", label: "Corée du Sud" },
	{ value: "Costa_Rica", label: "Costa Rica" },
	{ value: "Cote_d_Ivoire", label: "Côte d'Ivoire" },
	{ value: "Croatie", label: "Croatie" },
	{ value: "Cuba", label: "Cuba" },
	{ value: "Danemark", label: "Danemark" },
	{ value: "Djibouti", label: "Djibouti" },
	{ value: "Dominique", label: "Dominique" },
	{ value: "Egypte", label: "Égypte" },
	{ value: "Emirats_Arabes_Unis", label: "Émirats Arabes Unis" },
	{ value: "Equateur", label: "Équateur" },
	{ value: "Erythree", label: "Érythrée" },
	{ value: "Espagne", label: "Espagne" },
	{ value: "Estonie", label: "Estonie" },
	{ value: "Etats_Unis", label: "États-Unis" },
	{ value: "Ethiopie", label: "Éthiopie" },
	{ value: "Ethiopie", label: "Éthiopie" },
	{ value: "Falkland", label: "Falkland" },
	{ value: "Feroe", label: "Féroé" },
	{ value: "Fidji", label: "Fidji" },
	{ value: "Finlande", label: "Finlande" },
	{ value: "France", label: "France" },
	{ value: "Gabon", label: "Gabon" },
	{ value: "Gambie", label: "Gambie" },
	{ value: "Georgie", label: "Géorgie" },
	{ value: "Ghana", label: "Ghana" },
	{ value: "Gibraltar", label: "Gibraltar" },
	{ value: "Grece", label: "Grèce" },
	{ value: "Grenade", label: "Grenade" },
	{ value: "Groenland", label: "Groenland" },
	{ value: "Guadeloupe", label: "Guadeloupe" },
	{ value: "Guam", label: "Guam" },
	{ value: "Guatemala", label: "Guatemala" },
	{ value: "Guernesey", label: "Guernesey" },
	{ value: "Guinee", label: "Guinée" },
	{ value: "Guinee_Bissau", label: "Guinée-Bissau" },
	{ value: "Guinee_Equatoriale", label: "Guinée Équatoriale" },
	{ value: "Guyana", label: "Guyana" },
	{ value: "Guyane_Francaise", label: "Guyane Française" },
	{ value: "Haiti", label: "Haïti" },
	{ value: "Hawaii", label: "Hawaï" },
	{ value: "Honduras", label: "Honduras" },
	{ value: "Hong_Kong", label: "Hong Kong" },
	{ value: "Hongrie", label: "Hongrie" },
	{ value: "Inde", label: "Inde" },
	{ value: "Indonesie", label: "Indonésie" },
	{ value: "Iran", label: "Iran" },
	{ value: "Iraq", label: "Iraq" },
	{ value: "Irlande", label: "Irlande" },
	{ value: "Islande", label: "Islande" },
	{ value: "Israel", label: "Israël" },
	{ value: "Italie", label: "Italie" },
	{ value: "Jamaique", label: "Jamaïque" },
	{ value: "Jan_Mayen", label: "Jan Mayen" },
	{ value: "Japon", label: "Japon" },
	{ value: "Jersey", label: "Jersey" },
	{ value: "Jordanie", label: "Jordanie" },
	{ value: "Kazakhstan", label: "Kazakhstan" },
	{ value: "Kenya", label: "Kenya" },
	{ value: "Kirghizstan", label: "Kirghizstan" },
	{ value: "Kiribati", label: "Kiribati" },
	{ value: "Koweit", label: "Koweït" },
	{ value: "Laos", label: "Laos" },
	{ value: "Lesotho", label: "Lesotho" },
	{ value: "Lettonie", label: "Lettonie" },
	{ value: "Liban", label: "Liban" },
	{ value: "Liberia", label: "Libéria" },
	{ value: "Liechtenstein", label: "Liechtenstein" },
	{ value: "Lituanie", label: "Lituanie" },
	{ value: "Luxembourg", label: "Luxembourg" },
	{ value: "Lybie", label: "Libye" },
	{ value: "Macao", label: "Macao" },
	{ value: "Macedoine", label: "Macédoine" },
	{ value: "Madagascar", label: "Madagascar" },
	{ value: "Madere", label: "Madère" },
	{ value: "Malaisie", label: "Malaisie" },
	{ value: "Malawi", label: "Malawi" },
	{ value: "Maldives", label: "Maldives" },
	{ value: "Mali", label: "Mali" },
	{ value: "Malte", label: "Malte" },
	{ value: "Man", label: "Man" },
	{ value: "Marianne_du_Nord", label: "Marianne du Nord" },
	{ value: "Maroc", label: "Maroc" },
	{ value: "Marshall", label: "Marshall" },
	{ value: "Martinique", label: "Martinique" },
	{ value: "Maurice", label: "Maurice" },
	{ value: "Mauritanie", label: "Mauritanie" },
	{ value: "Mayotte", label: "Mayotte" },
	{ value: "Mexique", label: "Mexique" },
	{ value: "Micronesie", label: "Micronésie" },
	{ value: "Midway", label: "Midway" },
	{ value: "Moldavie", label: "Moldavie" },
	{ value: "Monaco", label: "Monaco" },
	{ value: "Mongolie", label: "Mongolie" },
	{ value: "Montserrat", label: "Montserrat" },
	{ value: "Mozambique", label: "Mozambique" },
	{ value: "Namibie", label: "Namibie" },
	{ value: "Nauru", label: "Nauru" },
	{ value: "Nepal", label: "Népal" },
	{ value: "Nicaragua", label: "Nicaragua" },
	{ value: "Niger", label: "Niger" },
	{ value: "Nigeria", label: "Nigéria" },
	{ value: "Niue", label: "Niue" },
	{ value: "Norfolk", label: "Norfolk" },
	{ value: "Norvege", label: "Norvège" },
	{ value: "Nouvelle_Caledonie", label: "Nouvelle-Calédonie" },
	{ value: "Nouvelle_Zelande", label: "Nouvelle-Zélande" },
	{ value: "Oman", label: "Oman" },
	{ value: "Ouganda", label: "Ouganda" },
	{ value: "Ouzbekistan", label: "Ouzbékistan" },
	{ value: "Pakistan", label: "Pakistan" },
	{ value: "Palau", label: "Palau" },
	{ value: "Palestine", label: "Palestine" },
	{ value: "Panama", label: "Panama" },
	{ value: "Papouasie_Nouvelle_Guinee", label: "Papouasie-Nouvelle-Guinée" },
	{ value: "Paraguay", label: "Paraguay" },
	{ value: "Pays_Bas", label: "Pays-Bas" },
	{ value: "Perou", label: "Pérou" },
	{ value: "Philippines", label: "Philippines" },
	{ value: "Pologne", label: "Pologne" },
	{ value: "Polynesie", label: "Polynésie" },
	{ value: "Porto_Rico", label: "Porto Rico" },
	{ value: "Portugal", label: "Portugal" },
	{ value: "Qatar", label: "Qatar" },
	{ value: "Republique_Dominicaine", label: "République Dominicaine" },
	{ value: "Republique_Tcheque", label: "République Tchèque" },
	{ value: "Reunion", label: "Réunion" },
	{ value: "Roumanie", label: "Roumanie" },
	{ value: "Royaume_Uni", label: "Royaume-Uni" },
	{ value: "Russie", label: "Russie" },
	{ value: "Rwanda", label: "Rwanda" },
	{ value: "Sahara_Occidental", label: "Sahara Occidental" },
	{ value: "Sainte_Lucie", label: "Sainte-Lucie" },
	{ value: "Saint_Marin", label: "Saint-Marin" },
	{ value: "Salomon", label: "Salomon" },
	{ value: "Salvador", label: "Salvador" },
	{ value: "Samoa_Occidentales", label: "Samoa Occidentales" },
	{ value: "Samoa_Americaine", label: "Samoa Américaine" },
	{ value: "Sao_Tome_et_Principe", label: "Sao Tomé-et-Principe" },
	{ value: "Senegal", label: "Sénégal" },
	{ value: "Seychelles", label: "Seychelles" },
	{ value: "Sierra_Leone", label: "Sierra Leone" },
	{ value: "Singapour", label: "Singapour" },
	{ value: "Slovaquie", label: "Slovaquie" },
	{ value: "Slovenie", label: "Slovénie" },
	{ value: "Somalie", label: "Somalie" },
	{ value: "Soudan", label: "Soudan" },
	{ value: "Sri_Lanka", label: "Sri Lanka" },
	{ value: "Suede", label: "Suède" },
	{ value: "Suisse", label: "Suisse" },
	{ value: "Surinam", label: "Surinam" },
	{ value: "Swaziland", label: "Swaziland" },
	{ value: "Syrie", label: "Syrie" },
	{ value: "Tadjikistan", label: "Tadjikistan" },
	{ value: "Taiwan", label: "Taïwan" },
	{ value: "Tonga", label: "Tonga" },
	{ value: "Tanzanie", label: "Tanzanie" },
	{ value: "Tchad", label: "Tchad" },
	{ value: "Thailande", label: "Thaïlande" },
	{ value: "Tibet", label: "Tibet" },
	{ value: "Timor_Oriental", label: "Timor Oriental" },
	{ value: "Togo", label: "Togo" },
	{ value: "Trinite_et_Tobago", label: "Trinité-et-Tobago" },
	{ value: "Tristan_da_Cunha", label: "Tristan da Cunha" },
	{ value: "Tunisie", label: "Tunisie" },
	{ value: "Turkmenistan", label: "Turkménistan" },
	{ value: "Turquie", label: "Turquie" },
	{ value: "Ukraine", label: "Ukraine" },
	{ value: "Uruguay", label: "Uruguay" },
	{ value: "Vanuatu", label: "Vanuatu" },
	{ value: "Vatican", label: "Vatican" },
	{ value: "Venezuela", label: "Venezuela" },
	{ value: "Vierges_Americaines", label: "Vierges Américaines" },
	{ value: "Vierges_Britanniques", label: "Vierges Britanniques" },
	{ value: "Vietnam", label: "Vietnam" },
	{ value: "Wake", label: "Wake" },
	{ value: "Wallis_et_Futuna", label: "Wallis et Futuna" },
	{ value: "Yemen", label: "Yémen" },
	{ value: "Yougoslavie", label: "Yougoslavie" },
	{ value: "Zambie", label: "Zambie" },
	{ value: "Zimbabwe", label: "Zimbabwe" }

];

// Exemple d'utilisation :
options.forEach(option => {
	console.log(`{ value: "${option.value}", label: "${option.label}" },`);
});

]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function ProfilEditComponent(props) {
	return (
		<>
			<div>
				{/* Static sidebar for desktop */}
				<div className="fixed inset-y-0 z-30 flex w-96 flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r-4 border-black  px-6 pt-[80px]">
						{/*LOGO PROFIL AVEC MAIL ET ABONNEMENT EN COURS */}

						<nav className="flex flex-1 flex-col pt-20">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-3">
										{navigation.map(item => (
											<li key={item.name}>
												<Link
													href={item.href}
													className={classNames(
														item.current
															? 'bg-mainaccent-500 text-black'
															: ' text-black hover:bg-mainaccent-500 hover:text-black',
														'group flex gap-x-3 rounded-md p-2 font-sans text-lg font-semibold leading-6'
													)}
												>
													<p
														className={
															'flex items-center gap-2  text-xl text-black'
														}
													>
														{item.icon}
													</p>
													<span>{item.name}</span>
												</Link>
											</li>
										))}
									</ul>
								</li>

								<li className="-mx-6 mt-auto">
									<Link
										href="#"
										className="text-md flex items-center gap-x-4 px-6 py-3 font-semibold leading-6 text-gray-900 hover:bg-gray-50"
									>
										{/*<img*/}
										{/*	className="h-8 w-8 rounded-full bg-gray-50"*/}
										{/*	src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
										{/*	alt=""*/}
										{/*/>*/}
										<span className="sr-only">Your profile</span>
										<span aria-hidden="true">Mathéo le boss</span>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			{/* MAIN AREA MODIFICATION DES INFORMATIONS PROFIL*/}
			<main className="ml-96 h-full pt-[80px]">
				<div className="">
					<div className="m-6 flex h-full flex-col">
						<form>
							<div className=" pb-12">
								<h2 className="font-sans text-4xl font-semibold leading-7 text-black">
									Informations personnelles
								</h2>

								<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
									<div className="sm:col-span-3 ">
										<label
											htmlFor="first-name"
											className="text-md block font-medium leading-6 text-black"
										>
											Prénom
										</label>
										<div className="mt-2 ">
											<input
												type="text"
												name="first-name"
												id="first-name"
												placeholder="Ton prénom"
												className="sm:text-md  focus: block w-full border-0 border-b-2 border-black bg-transparent py-1.5 text-black shadow-sm placeholder:placeholder:text-black/50 focus:ring-0 sm:leading-6"
											/>
										</div>
									</div>

									<div className="sm:col-span-3">
										<label
											htmlFor="last-name"
											className="text-md block font-medium leading-6 text-gray-900"
										>
											Nom
										</label>
										<div className="mt-2">
											<input
												type="text"
												name="last-name"
												id="last-name"
												placeholder="Ton nom de famille"
												className="sm:text-md focus: block w-full border-0 border-b-2 border-black bg-transparent py-1.5 text-black shadow-sm placeholder:placeholder:text-black/50 focus:ring-0 sm:leading-6"
											/>
										</div>
									</div>

									<div className="sm:col-span-4">
										<label
											htmlFor="email"
											className="text-md block font-medium leading-6 text-gray-900"
										>
											Adresse mail
										</label>
										<div className="mt-2">
											<input
												id="email"
												name="email"
												type="email"
												placeholder="ton adresse mail"
												className="sm:text-md block w-full border-0 border-b-2 border-black bg-transparent py-1.5 text-black shadow-sm placeholder:placeholder:text-black/70 focus:ring-0 sm:leading-6"
											/>
										</div>
									</div>

									<div className="sm:col-span-3">
										<label
											htmlFor="Pays"
											className="text-md block font-medium leading-6 text-gray-900"
										>
											Pays
										</label>

										{/*<div className="mt-2">*/}
										{/*	<select*/}
										{/*		id="Pays"*/}
										{/*		name="Pays"*/}
										{/*		autoComplete="Nom du pays"*/}
										{/*		className="sm:text-md block w-full    rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:leading-6"*/}
										{/*	>*/}
										{/*		<option value="France" selected="selected">*/}
										{/*			France*/}
										{/*		</option>*/}

										{/*<option value="Afghanistan">Afghanistan</option>*/}
										{/*<option value="Afrique_Centrale">*/}
										{/*	Afrique_Centrale*/}
										{/*</option>*/}
										{/*<option value="Afrique_du_sud">Afrique_du_Sud</option>*/}
										{/*<option value="Albanie">Albanie</option>*/}
										{/*<option value="Algerie">Algerie</option>*/}
										{/*<option value="Allemagne">Allemagne</option>*/}
										{/*<option value="Andorre">Andorre</option>*/}

										{/*<option value="Angola">Angola</option>*/}
										{/*<option value="Anguilla">Anguilla</option>*/}
										{/*<option value="Arabie_Saoudite">Arabie_Saoudite</option>*/}
										{/*<option value="Argentine">Argentine</option>*/}
										{/*<option value="Armenie">Armenie</option>*/}
										{/*<option value="Australie">Australie</option>*/}
										{/*<option value="Autriche">Autriche</option>*/}
										{/*<option value="Azerbaidjan">Azerbaidjan</option>*/}

										{/*<option value="Bahamas">Bahamas</option>*/}
										{/*<option value="Bangladesh">Bangladesh</option>*/}
										{/*<option value="Barbade">Barbade</option>*/}
										{/*<option value="Bahrein">Bahrein</option>*/}
										{/*<option value="Belgique">Belgique</option>*/}
										{/*<option value="Belize">Belize</option>*/}
										{/*<option value="Benin">Benin</option>*/}
										{/*<option value="Bermudes">Bermudes</option>*/}
										{/*<option value="Bielorussie">Bielorussie</option>*/}
										{/*<option value="Bolivie">Bolivie</option>*/}
										{/*<option value="Botswana">Botswana</option>*/}
										{/*<option value="Bhoutan">Bhoutan</option>*/}
										{/*<option value="Boznie_Herzegovine">*/}
										{/*	Boznie_Herzegovine*/}
										{/*</option>*/}
										{/*<option value="Bresil">Bresil</option>*/}
										{/*<option value="Brunei">Brunei</option>*/}
										{/*<option value="Bulgarie">Bulgarie</option>*/}
										{/*<option value="Burkina_Faso">Burkina_Faso</option>*/}
										{/*<option value="Burundi">Burundi</option>*/}

										{/*<option value="Caiman">Caiman</option>*/}
										{/*<option value="Cambodge">Cambodge</option>*/}
										{/*<option value="Cameroun">Cameroun</option>*/}
										{/*<option value="Canada">Canada</option>*/}
										{/*<option value="Canaries">Canaries</option>*/}
										{/*<option value="Cap_vert">Cap_Vert</option>*/}
										{/*<option value="Chili">Chili</option>*/}
										{/*<option value="Chine">Chine</option>*/}
										{/*<option value="Chypre">Chypre</option>*/}
										{/*<option value="Colombie">Colombie</option>*/}
										{/*<option value="Comores">Colombie</option>*/}
										{/*<option value="Congo">Congo</option>*/}
										{/*<option value="Congo_democratique">*/}
										{/*	Congo_democratique*/}
										{/*</option>*/}
										{/*<option value="Cook">Cook</option>*/}
										{/*<option value="Coree_du_Nord">Coree_du_Nord</option>*/}
										{/*<option value="Coree_du_Sud">Coree_du_Sud</option>*/}
										{/*<option value="Costa_Rica">Costa_Rica</option>*/}
										{/*<option value="Cote_d_Ivoire">Côte_d_Ivoire</option>*/}
										{/*<option value="Croatie">Croatie</option>*/}
										{/*<option value="Cuba">Cuba</option>*/}

										{/*<option value="Danemark">Danemark</option>*/}
										{/*<option value="Djibouti">Djibouti</option>*/}
										{/*<option value="Dominique">Dominique</option>*/}

										{/*<option value="Egypte">Egypte</option>*/}
										{/*<option value="Emirats_Arabes_Unis">*/}
										{/*	Emirats_Arabes_Unis*/}
										{/*</option>*/}
										{/*<option value="Equateur">Equateur</option>*/}
										{/*<option value="Erythree">Erythree</option>*/}
										{/*<option value="Espagne">Espagne</option>*/}
										{/*<option value="Estonie">Estonie</option>*/}
										{/*<option value="Etats_Unis">Etats_Unis</option>*/}
										{/*<option value="Ethiopie">Ethiopie</option>*/}

										{/*<option value="Falkland">Falkland</option>*/}
										{/*<option value="Feroe">Feroe</option>*/}
										{/*<option value="Fidji">Fidji</option>*/}
										{/*<option value="Finlande">Finlande</option>*/}
										{/*<option value="France">France</option>*/}

										{/*<option value="Gabon">Gabon</option>*/}
										{/*<option value="Gambie">Gambie</option>*/}
										{/*<option value="Georgie">Georgie</option>*/}
										{/*<option value="Ghana">Ghana</option>*/}
										{/*<option value="Gibraltar">Gibraltar</option>*/}
										{/*<option value="Grece">Grece</option>*/}
										{/*<option value="Grenade">Grenade</option>*/}
										{/*<option value="Groenland">Groenland</option>*/}
										{/*<option value="Guadeloupe">Guadeloupe</option>*/}
										{/*<option value="Guam">Guam</option>*/}
										{/*<option value="Guatemala">Guatemala</option>*/}
										{/*<option value="Guernesey">Guernesey</option>*/}
										{/*<option value="Guinee">Guinee</option>*/}
										{/*<option value="Guinee_Bissau">Guinee_Bissau</option>*/}
										{/*<option value="Guinee equatoriale">*/}
										{/*	Guinee_Equatoriale*/}
										{/*</option>*/}
										{/*<option value="Guyana">Guyana</option>*/}
										{/*<option value="Guyane_Francaise ">*/}
										{/*	Guyane_Francaise*/}
										{/*</option>*/}

										{/*<option value="Haiti">Haiti</option>*/}
										{/*<option value="Hawaii">Hawaii</option>*/}
										{/*<option value="Honduras">Honduras</option>*/}
										{/*<option value="Hong_Kong">Hong_Kong</option>*/}
										{/*<option value="Hongrie">Hongrie</option>*/}

										{/*<option value="Inde">Inde</option>*/}
										{/*<option value="Indonesie">Indonesie</option>*/}
										{/*<option value="Iran">Iran</option>*/}
										{/*<option value="Iraq">Iraq</option>*/}
										{/*<option value="Irlande">Irlande</option>*/}
										{/*<option value="Islande">Islande</option>*/}
										{/*<option value="Israel">Israel</option>*/}
										{/*<option value="Italie">italie</option>*/}

										{/*<option value="Jamaique">Jamaique</option>*/}
										{/*<option value="Jan Mayen">Jan Mayen</option>*/}
										{/*<option value="Japon">Japon</option>*/}
										{/*<option value="Jersey">Jersey</option>*/}
										{/*<option value="Jordanie">Jordanie</option>*/}

										{/*<option value="Kazakhstan">Kazakhstan</option>*/}
										{/*<option value="Kenya">Kenya</option>*/}
										{/*<option value="Kirghizstan">Kirghizistan</option>*/}
										{/*<option value="Kiribati">Kiribati</option>*/}
										{/*<option value="Koweit">Koweit</option>*/}

										{/*<option value="Laos">Laos</option>*/}
										{/*<option value="Lesotho">Lesotho</option>*/}
										{/*<option value="Lettonie">Lettonie</option>*/}
										{/*<option value="Liban">Liban</option>*/}
										{/*<option value="Liberia">Liberia</option>*/}
										{/*<option value="Liechtenstein">Liechtenstein</option>*/}
										{/*<option value="Lituanie">Lituanie</option>*/}
										{/*<option value="Luxembourg">Luxembourg</option>*/}
										{/*<option value="Lybie">Lybie</option>*/}

										{/*<option value="Macao">Macao</option>*/}
										{/*<option value="Macedoine">Macedoine</option>*/}
										{/*<option value="Madagascar">Madagascar</option>*/}
										{/*<option value="Madère">Madère</option>*/}
										{/*<option value="Malaisie">Malaisie</option>*/}
										{/*<option value="Malawi">Malawi</option>*/}
										{/*<option value="Maldives">Maldives</option>*/}
										{/*<option value="Mali">Mali</option>*/}
										{/*<option value="Malte">Malte</option>*/}
										{/*<option value="Man">Man</option>*/}
										{/*<option value="Mariannes du Nord">*/}
										{/*	Mariannes du Nord*/}
										{/*</option>*/}
										{/*<option value="Maroc">Maroc</option>*/}
										{/*<option value="Marshall">Marshall</option>*/}
										{/*<option value="Martinique">Martinique</option>*/}
										{/*<option value="Maurice">Maurice</option>*/}
										{/*<option value="Mauritanie">Mauritanie</option>*/}
										{/*<option value="Mayotte">Mayotte</option>*/}
										{/*<option value="Mexique">Mexique</option>*/}
										{/*<option value="Micronesie">Micronesie</option>*/}
										{/*<option value="Midway">Midway</option>*/}
										{/*<option value="Moldavie">Moldavie</option>*/}
										{/*<option value="Monaco">Monaco</option>*/}
										{/*<option value="Mongolie">Mongolie</option>*/}
										{/*<option value="Montserrat">Montserrat</option>*/}
										{/*<option value="Mozambique">Mozambique</option>*/}

										{/*<option value="Namibie">Namibie</option>*/}
										{/*<option value="Nauru">Nauru</option>*/}
										{/*<option value="Nepal">Nepal</option>*/}
										{/*<option value="Nicaragua">Nicaragua</option>*/}
										{/*<option value="Niger">Niger</option>*/}
										{/*<option value="Nigeria">Nigeria</option>*/}
										{/*<option value="Niue">Niue</option>*/}
										{/*<option value="Norfolk">Norfolk</option>*/}
										{/*<option value="Norvege">Norvege</option>*/}
										{/*<option value="Nouvelle_Caledonie">*/}
										{/*	Nouvelle_Caledonie*/}
										{/*</option>*/}
										{/*<option value="Nouvelle_Zelande">*/}
										{/*	Nouvelle_Zelande*/}
										{/*</option>*/}

										{/*<option value="Oman">Oman</option>*/}
										{/*<option value="Ouganda">Ouganda</option>*/}
										{/*<option value="Ouzbekistan">Ouzbekistan</option>*/}

										{/*<option value="Pakistan">Pakistan</option>*/}
										{/*<option value="Palau">Palau</option>*/}
										{/*<option value="Palestine">Palestine</option>*/}
										{/*<option value="Panama">Panama</option>*/}
										{/*<option value="Papouasie_Nouvelle_Guinee">*/}
										{/*	Papouasie_Nouvelle_Guinee*/}
										{/*</option>*/}
										{/*<option value="Paraguay">Paraguay</option>*/}
										{/*<option value="Pays_Bas">Pays_Bas</option>*/}
										{/*<option value="Perou">Perou</option>*/}
										{/*<option value="Philippines">Philippines</option>*/}
										{/*<option value="Pologne">Pologne</option>*/}
										{/*<option value="Polynesie">Polynesie</option>*/}
										{/*<option value="Porto_Rico">Porto_Rico</option>*/}
										{/*<option value="Portugal">Portugal</option>*/}

										{/*<option value="Qatar">Qatar</option>*/}

										{/*<option value="Republique_Dominicaine">*/}
										{/*	Republique_Dominicaine*/}
										{/*</option>*/}
										{/*<option value="Republique_Tcheque">*/}
										{/*	Republique_Tcheque*/}
										{/*</option>*/}
										{/*<option value="Reunion">Reunion</option>*/}
										{/*<option value="Roumanie">Roumanie</option>*/}
										{/*<option value="Royaume_Uni">Royaume_Uni</option>*/}
										{/*<option value="Russie">Russie</option>*/}
										{/*<option value="Rwanda">Rwanda</option>*/}

										{/*<option value="Sahara Occidental">*/}
										{/*	Sahara Occidental*/}
										{/*</option>*/}
										{/*<option value="Sainte_Lucie">Sainte_Lucie</option>*/}
										{/*<option value="Saint_Marin">Saint_Marin</option>*/}
										{/*<option value="Salomon">Salomon</option>*/}
										{/*<option value="Salvador">Salvador</option>*/}
										{/*<option value="Samoa_Occidentales">*/}
										{/*	Samoa_Occidentales*/}
										{/*</option>*/}
										{/*<option value="Samoa_Americaine">*/}
										{/*	Samoa_Americaine*/}
										{/*</option>*/}
										{/*<option value="Sao_Tome_et_Principe">*/}
										{/*	Sao_Tome_et_Principe*/}
										{/*</option>*/}
										{/*<option value="Senegal">Senegal</option>*/}
										{/*<option value="Seychelles">Seychelles</option>*/}
										{/*<option value="Sierra Leone">Sierra Leone</option>*/}
										{/*<option value="Singapour">Singapour</option>*/}
										{/*<option value="Slovaquie">Slovaquie</option>*/}
										{/*<option value="Slovenie">Slovenie</option>*/}
										{/*<option value="Somalie">Somalie</option>*/}
										{/*<option value="Soudan">Soudan</option>*/}
										{/*<option value="Sri_Lanka">Sri_Lanka</option>*/}
										{/*<option value="Suede">Suede</option>*/}
										{/*<option value="Suisse">Suisse</option>*/}
										{/*<option value="Surinam">Surinam</option>*/}
										{/*<option value="Swaziland">Swaziland</option>*/}
										{/*<option value="Syrie">Syrie</option>*/}

										{/*<option value="Tadjikistan">Tadjikistan</option>*/}
										{/*<option value="Taiwan">Taiwan</option>*/}
										{/*<option value="Tonga">Tonga</option>*/}
										{/*<option value="Tanzanie">Tanzanie</option>*/}
										{/*<option value="Tchad">Tchad</option>*/}
										{/*<option value="Thailande">Thailande</option>*/}
										{/*<option value="Tibet">Tibet</option>*/}
										{/*<option value="Timor_Oriental">Timor_Oriental</option>*/}
										{/*<option value="Togo">Togo</option>*/}
										{/*<option value="Trinite_et_Tobago">*/}
										{/*	Trinite_et_Tobago*/}
										{/*</option>*/}
										{/*<option value="Tristan da cunha">*/}
										{/*	Tristan de cuncha*/}
										{/*</option>*/}
										{/*<option value="Tunisie">Tunisie</option>*/}
										{/*<option value="Turkmenistan">Turmenistan</option>*/}
										{/*<option value="Turquie">Turquie</option>*/}

										{/*<option value="Ukraine">Ukraine</option>*/}
										{/*<option value="Uruguay">Uruguay</option>*/}

										{/*<option value="Vanuatu">Vanuatu</option>*/}
										{/*<option value="Vatican">Vatican</option>*/}
										{/*<option value="Venezuela">Venezuela</option>*/}
										{/*<option value="Vierges_Americaines">*/}
										{/*	Vierges_Americaines*/}
										{/*</option>*/}
										{/*<option value="Vierges_Britanniques">*/}
										{/*	Vierges_Britanniques*/}
										{/*</option>*/}
										{/*<option value="Vietnam">Vietnam</option>*/}

										{/*<option value="Wake">Wake</option>*/}
										{/*<option value="Wallis et Futuma">*/}
										{/*	Wallis et Futuma*/}
										{/*</option>*/}

										{/*<option value="Yemen">Yemen</option>*/}
										{/*<option value="Yougoslavie">Yougoslavie</option>*/}

										{/*<option value="Zambie">Zambie</option>*/}
										{/*<option value="Zimbabwe">Zimbabwe</option>*/}
										{/*	</select>*/}
										{/*</div>*/}

										<Select
											className="basic-single"
											classNamePrefix="select"
											defaultValue={{
												value: 'France',
												label: 'France',
											}}
											name="pays"
											options={pays}
										/>

										<div
											style={{
												color: 'hsl(0, 0%, 40%)',
												display: 'inline-block',
												fontSize: 12,
												fontStyle: 'Sans',
												marginTop: '1em',
											}}
										></div>
									</div>

									<div className="sm:col-span-2 sm:col-start-1">
										<label
											htmlFor="jour"
											className="text-md block font-medium leading-6 text-gray-900"
										>
											Jour
										</label>
										<div className="mt-2">
											<select
												name="jour"
												id="jour"
												autoComplete="jour"
												className="sm:text-md block w-full    rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset      ring-gray-300 sm:leading-6"
											>
												<option value={'jour'} selected={'selected'}>
													Jour
												</option>
												<option value="01">01</option>
												<option value="02">02</option>
												<option value="03">03</option>
												<option value="04">04</option>
												<option value="05">05</option>
												<option value="06">06</option>
												<option value="07">07</option>
												<option value="08">08</option>
												<option value="09">09</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
												<option value="13">13</option>
												<option value="14">14</option>
												<option value="15">15</option>
												<option value="16">16</option>
												<option value="17">17</option>
												<option value="18">18</option>
												<option value="19">19</option>
												<option value="20">20</option>
												<option value="21">21</option>
												<option value="22">22</option>
												<option value="23">23</option>
												<option value="24">24</option>
												<option value="25">25</option>
												<option value="26">26</option>
												<option value="27">27</option>
												<option value="28">28</option>
												<option value="29">29</option>
												<option value="30">30</option>
												<option value="31">31</option>
											</select>
										</div>
									</div>

									<div className="sm:col-span-2">
										<label
											htmlFor="mois"
											className="text-md block font-medium leading-6 text-gray-900"
										>
											Mois
										</label>
										<div className="mt-2">
											<select
												name="mois"
												id="mois"
												autoComplete="Mois"
												className="sm:text-md block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset      ring-gray-300 sm:leading-6"
											>
												<option value={'mois'} selected={'selected'}>
													Mois
												</option>
												<option value="01">Janvier</option>
												<option value="02">Fevrier</option>
												<option value="03">Mars</option>
												<option value="04">Avril</option>
												<option value="05">Mai</option>
												<option value="06">Juin</option>
												<option value="07">Juillet</option>
												<option value="08">Août</option>
												<option value="09">Septenmbre</option>
												<option value="10">Octobre</option>
												<option value="11">Novembre</option>
												<option value="12">Décembre</option>
											</select>
										</div>
									</div>

									<div className="sm:col-span-2">
										<label
											htmlFor="annee"
											className="text-md block font-medium leading-6 text-gray-900"
										>
											Année
										</label>
										<div className="mt-2">
											<select
												name="annee"
												id="annee"
												autoComplete="annee"
												className="sm:text-md block w-full    rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset      ring-gray-300 sm:leading-6"
											>
												<option value="année" selected="selected">
													Année
												</option>

												<option value="1940">1940</option>
												<option value="1941">1941</option>
												<option value="1942">1942</option>
												<option value="1943">1943</option>
												<option value="1944">1944</option>
												<option value="1945">1945</option>
												<option value="1946">1946</option>
												<option value="1947">1947</option>
												<option value="1948">1948</option>
												<option value="1949">1949</option>
												<option value="1950">1950</option>
												<option value="1951">1951</option>
												<option value="1952">1952</option>
												<option value="1953">1953</option>
												<option value="1954">1954</option>
												<option value="1955">1955</option>
												<option value="1956">1956</option>
												<option value="1957">1957</option>
												<option value="1958">1958</option>
												<option value="1959">1959</option>
												<option value="1960">1960</option>
												<option value="1961">1961</option>
												<option value="1962">1962</option>
												<option value="1963">1963</option>
												<option value="1964">1964</option>
												<option value="1965">1965</option>
												<option value="1966">1966</option>
												<option value="1967">1967</option>
												<option value="1968">1968</option>
												<option value="1969">1969</option>
												<option value="1970">1970</option>
												<option value="1971">1971</option>
												<option value="1972">1972</option>
												<option value="1973">1973</option>
												<option value="1974">1974</option>
												<option value="1975">1975</option>
												<option value="1976">1976</option>
												<option value="1977">1977</option>
												<option value="1978">1978</option>
												<option value="1979">1979</option>
												<option value="1980">1980</option>
												<option value="1981">1981</option>
												<option value="1982">1982</option>
												<option value="1983">1983</option>
												<option value="1984">1984</option>
												<option value="1985">1985</option>
												<option value="1986">1986</option>
												<option value="1987">1987</option>
												<option value="1988">1988</option>
												<option value="1989">1989</option>
												<option value="1990">1990</option>
												<option value="1991">1991</option>
												<option value="1992">1992</option>
												<option value="1993">1993</option>
												<option value="1994">1994</option>
												<option value="1995">1995</option>
												<option value="1996">1996</option>
												<option value="1997">1997</option>
												<option value="1998">1998</option>
												<option value="1999">1999</option>
												<option value="2000">2000</option>
												<option value="2001">2001</option>
												<option value="2002">2002</option>
												<option value="2003">2003</option>
												<option value="2004">2004</option>
												<option value="2005">2005</option>
												<option value="2006">2006</option>
												<option value="2007">2007</option>
												<option value="2008">2008</option>
												<option value="2009">2009</option>
												<option value="2010">2010</option>
												<option value="2011">2011</option>
												<option value="2012">2012</option>
												<option value="2013">2013</option>
												<option value="2014">2014</option>
												<option value="2015">2015</option>
												<option value="2016">2016</option>
												<option value="2017">2017</option>
												<option value="2018">2018</option>
												<option value="2019">2019</option>
												<option value="2020">2020</option>
												<option value="2021">2021</option>
												<option value="2022">2022</option>
												<option value="2023">2023</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</form>

						<Link
							href={'#'}
							className={
								' ml-14 flex w-2/5 items-center justify-center rounded-2xl bg-mainaccent-700/100 px-12 py-4 text-xl text-white shadow-[0_4px_5px_#31066f] transition delay-100 ease-in-out hover:brightness-125'
							}
						>
							Enregistrer
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}

export default ProfilEditComponent
