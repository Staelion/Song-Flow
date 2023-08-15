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

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function ProfilEditComponent(props) {
	let test = (separator = '-') => {
		let newDate = new Date()
		let date = newDate.getDate()
		let month = newDate.getMonth() + 1
		let year = newDate.getFullYear()

		return `${year}${separator}${
			month < 10 ? `0${month}` : `${month}`
		}${separator}${date}`
	}
	console.log(test())

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

								<div className="m-auto mt-10 grid max-h-screen w-4/5 grid-cols-1  grid-rows-4 gap-x-10 gap-y-10 sm:grid-cols-6">
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

									<div className="sm:col-span-3 ">
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

									{/*/!*PAYS *!/*/}
									{/*<div className=" col-span-4 row-start-3 sm:col-span-2">*/}
									{/*	<label className="text-md block font-medium leading-6 text-gray-900">*/}
									{/*		Pays*/}
									{/*	</label>*/}
									{/*	<div className="mt-2">*/}
									{/*		<select*/}
									{/*			name="jour"*/}
									{/*			id="jour"*/}
									{/*			autoComplete="jour"*/}
									{/*			className="sm:text-md block w-full rounded-md border-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset      ring-gray-300 sm:leading-6"*/}
									{/*		>*/}
									{/*			<option value={'jour'} selected={'selected'}>*/}
									{/*				Pays*/}
									{/*			</option>*/}

									{/*			<option value="Afghanistan">Afghanistan</option>*/}
									{/*			<option value="Åland Islands">Åland Islands</option>*/}
									{/*			<option value="Albania">Albania</option>*/}
									{/*			<option value="Algeria">Algeria</option>*/}
									{/*			<option value="American Samoa">American Samoa</option>*/}
									{/*			<option value="Andorra">Andorra</option>*/}
									{/*			<option value="Angola">Angola</option>*/}
									{/*			<option value="Anguilla">Anguilla</option>*/}
									{/*			<option value="Antarctica">Antarctica</option>*/}
									{/*			<option value="Antigua and Barbuda">*/}
									{/*				Antigua and Barbuda*/}
									{/*			</option>*/}
									{/*			<option value="Argentina">Argentina</option>*/}
									{/*			<option value="Armenia">Armenia</option>*/}
									{/*			<option value="Aruba">Aruba</option>*/}
									{/*			<option value="Australia">Australia</option>*/}
									{/*			<option value="Austria">Austria</option>*/}
									{/*			<option value="Azerbaijan">Azerbaijan</option>*/}
									{/*			<option value="Bahamas">Bahamas</option>*/}
									{/*			<option value="Bahrain">Bahrain</option>*/}
									{/*			<option value="Bangladesh">Bangladesh</option>*/}
									{/*			<option value="Barbados">Barbados</option>*/}
									{/*			<option value="Belarus">Belarus</option>*/}
									{/*			<option value="Belgium">Belgium</option>*/}
									{/*			<option value="Belize">Belize</option>*/}
									{/*			<option value="Benin">Benin</option>*/}
									{/*			<option value="Bermuda">Bermuda</option>*/}
									{/*			<option value="Bhutan">Bhutan</option>*/}
									{/*			<option value="Bolivia">Bolivia</option>*/}
									{/*			<option value="Bosnia and Herzegovina">*/}
									{/*				Bosnia and Herzegovina*/}
									{/*			</option>*/}
									{/*			<option value="Botswana">Botswana</option>*/}
									{/*			<option value="Bouvet Island">Bouvet Island</option>*/}
									{/*			<option value="Brazil">Brazil</option>*/}
									{/*			<option value="British Indian Ocean Territory">*/}
									{/*				British Indian Ocean Territory*/}
									{/*			</option>*/}
									{/*			<option value="Brunei Darussalam">*/}
									{/*				Brunei Darussalam*/}
									{/*			</option>*/}
									{/*			<option value="Bulgaria">Bulgaria</option>*/}
									{/*			<option value="Burkina Faso">Burkina Faso</option>*/}
									{/*			<option value="Burundi">Burundi</option>*/}
									{/*			<option value="Cambodia">Cambodia</option>*/}
									{/*			<option value="Cameroon">Cameroon</option>*/}
									{/*			<option value="Canada">Canada</option>*/}
									{/*			<option value="Cape Verde">Cape Verde</option>*/}
									{/*			<option value="Cayman Islands">Cayman Islands</option>*/}
									{/*			<option value="Central African Republic">*/}
									{/*				Central African Republic*/}
									{/*			</option>*/}
									{/*			<option value="Chad">Chad</option>*/}
									{/*			<option value="Chile">Chile</option>*/}
									{/*			<option value="China">China</option>*/}
									{/*			<option value="Christmas Island">*/}
									{/*				Christmas Island*/}
									{/*			</option>*/}
									{/*			<option value="Cocos (Keeling) Islands">*/}
									{/*				Cocos (Keeling) Islands*/}
									{/*			</option>*/}
									{/*			<option value="Colombia">Colombia</option>*/}
									{/*			<option value="Comoros">Comoros</option>*/}
									{/*			<option value="Congo">Congo</option>*/}
									{/*			<option value="Congo, The Democratic Republic of The">*/}
									{/*				Congo, The Democratic Republic of The*/}
									{/*			</option>*/}
									{/*			<option value="Cook Islands">Cook Islands</option>*/}
									{/*			<option value="Costa Rica">Costa Rica</option>*/}
									{/*			<option value="Cote D'ivoire">Cote D{"'"}ivoire</option>*/}
									{/*			<option value="Croatia">Croatia</option>*/}
									{/*			<option value="Cuba">Cuba</option>*/}
									{/*			<option value="Cyprus">Cyprus</option>*/}
									{/*			<option value="Czech Republic">Czech Republic</option>*/}
									{/*			<option value="Denmark">Denmark</option>*/}
									{/*			<option value="Djibouti">Djibouti</option>*/}
									{/*			<option value="Dominica">Dominica</option>*/}
									{/*			<option value="Dominican Republic">*/}
									{/*				Dominican Republic*/}
									{/*			</option>*/}
									{/*			<option value="Ecuador">Ecuador</option>*/}
									{/*			<option value="Egypt">Egypt</option>*/}
									{/*			<option value="El Salvador">El Salvador</option>*/}
									{/*			<option value="Equatorial Guinea">*/}
									{/*				Equatorial Guinea*/}
									{/*			</option>*/}
									{/*			<option value="Eritrea">Eritrea</option>*/}
									{/*			<option value="Estonia">Estonia</option>*/}
									{/*			<option value="Ethiopia">Ethiopia</option>*/}
									{/*			<option value="Falkland Islands (Malvinas)">*/}
									{/*				Falkland Islands (Malvinas)*/}
									{/*			</option>*/}
									{/*			<option value="Faroe Islands">Faroe Islands</option>*/}
									{/*			<option value="Fiji">Fiji</option>*/}
									{/*			<option value="Finland">Finland</option>*/}
									{/*			<option value="France">France</option>*/}
									{/*			<option value="French Guiana">French Guiana</option>*/}
									{/*			<option value="French Polynesia">*/}
									{/*				French Polynesia*/}
									{/*			</option>*/}
									{/*			<option value="French Southern Territories">*/}
									{/*				French Southern Territories*/}
									{/*			</option>*/}
									{/*			<option value="Gabon">Gabon</option>*/}
									{/*			<option value="Gambia">Gambia</option>*/}
									{/*			<option value="Georgia">Georgia</option>*/}
									{/*			<option value="Germany">Germany</option>*/}
									{/*			<option value="Ghana">Ghana</option>*/}
									{/*			<option value="Gibraltar">Gibraltar</option>*/}
									{/*			<option value="Greece">Greece</option>*/}
									{/*			<option value="Greenland">Greenland</option>*/}
									{/*			<option value="Grenada">Grenada</option>*/}
									{/*			<option value="Guadeloupe">Guadeloupe</option>*/}
									{/*			<option value="Guam">Guam</option>*/}
									{/*			<option value="Guatemala">Guatemala</option>*/}
									{/*			<option value="Guernsey">Guernsey</option>*/}
									{/*			<option value="Guinea">Guinea</option>*/}
									{/*			<option value="Guinea-bissau">Guinea-bissau</option>*/}
									{/*			<option value="Guyana">Guyana</option>*/}
									{/*			<option value="Haiti">Haiti</option>*/}
									{/*			<option value="Heard Island and Mcdonald Islands">*/}
									{/*				Heard Island and Mcdonald Islands*/}
									{/*			</option>*/}
									{/*			<option value="Holy See (Vatican City State)">*/}
									{/*				Holy See (Vatican City State)*/}
									{/*			</option>*/}
									{/*			<option value="Honduras">Honduras</option>*/}
									{/*			<option value="Hong Kong">Hong Kong</option>*/}
									{/*			<option value="Hungary">Hungary</option>*/}
									{/*			<option value="Iceland">Iceland</option>*/}
									{/*			<option value="India">India</option>*/}
									{/*			<option value="Indonesia">Indonesia</option>*/}
									{/*			<option value="Iran, Islamic Republic of">*/}
									{/*				Iran, Islamic Republic of*/}
									{/*			</option>*/}
									{/*			<option value="Iraq">Iraq</option>*/}
									{/*			<option value="Ireland">Ireland</option>*/}
									{/*			<option value="Isle of Man">Isle of Man</option>*/}
									{/*			<option value="Israel">Israel</option>*/}
									{/*			<option value="Italy">Italy</option>*/}
									{/*			<option value="Jamaica">Jamaica</option>*/}
									{/*			<option value="Japan">Japan</option>*/}
									{/*			<option value="Jersey">Jersey</option>*/}
									{/*			<option value="Jordan">Jordan</option>*/}
									{/*			<option value="Kazakhstan">Kazakhstan</option>*/}
									{/*			<option value="Kenya">Kenya</option>*/}
									{/*			<option value="Kiribati">Kiribati</option>*/}
									{/*			<option value="Korea, Democratic People's Republic of">*/}
									{/*				Korea, Democratic People{"'"}s Republic of*/}
									{/*			</option>*/}
									{/*			<option value="Korea, Republic of">*/}
									{/*				Korea, Republic of*/}
									{/*			</option>*/}
									{/*			<option value="Kuwait">Kuwait</option>*/}
									{/*			<option value="Kyrgyzstan">Kyrgyzstan</option>*/}
									{/*			<option value="Lao People's Democratic Republic">*/}
									{/*				Lao People{"'"}s Democratic Republic*/}
									{/*			</option>*/}
									{/*			<option value="Latvia">Latvia</option>*/}
									{/*			<option value="Lebanon">Lebanon</option>*/}
									{/*			<option value="Lesotho">Lesotho</option>*/}
									{/*			<option value="Liberia">Liberia</option>*/}
									{/*			<option value="Libyan Arab Jamahiriya">*/}
									{/*				Libyan Arab Jamahiriya*/}
									{/*			</option>*/}
									{/*			<option value="Liechtenstein">Liechtenstein</option>*/}
									{/*			<option value="Lithuania">Lithuania</option>*/}
									{/*			<option value="Luxembourg">Luxembourg</option>*/}
									{/*			<option value="Macao">Macao</option>*/}
									{/*			<option value="Macedonia, The Former Yugoslav Republic of">*/}
									{/*				Macedonia, The Former Yugoslav Republic of*/}
									{/*			</option>*/}
									{/*			<option value="Madagascar">Madagascar</option>*/}
									{/*			<option value="Malawi">Malawi</option>*/}
									{/*			<option value="Malaysia">Malaysia</option>*/}
									{/*			<option value="Maldives">Maldives</option>*/}
									{/*			<option value="Mali">Mali</option>*/}
									{/*			<option value="Malta">Malta</option>*/}
									{/*			<option value="Marshall Islands">*/}
									{/*				Marshall Islands*/}
									{/*			</option>*/}
									{/*			<option value="Martinique">Martinique</option>*/}
									{/*			<option value="Mauritania">Mauritania</option>*/}
									{/*			<option value="Mauritius">Mauritius</option>*/}
									{/*			<option value="Mayotte">Mayotte</option>*/}
									{/*			<option value="Mexico">Mexico</option>*/}
									{/*			<option value="Micronesia, Federated States of">*/}
									{/*				Micronesia, Federated States of*/}
									{/*			</option>*/}
									{/*			<option value="Moldova, Republic of">*/}
									{/*				Moldova, Republic of*/}
									{/*			</option>*/}
									{/*			<option value="Monaco">Monaco</option>*/}
									{/*			<option value="Mongolia">Mongolia</option>*/}
									{/*			<option value="Montenegro">Montenegro</option>*/}
									{/*			<option value="Montserrat">Montserrat</option>*/}
									{/*			<option value="Morocco">Morocco</option>*/}
									{/*			<option value="Mozambique">Mozambique</option>*/}
									{/*			<option value="Myanmar">Myanmar</option>*/}
									{/*			<option value="Namibia">Namibia</option>*/}
									{/*			<option value="Nauru">Nauru</option>*/}
									{/*			<option value="Nepal">Nepal</option>*/}
									{/*			<option value="Netherlands">Netherlands</option>*/}
									{/*			<option value="Netherlands Antilles">*/}
									{/*				Netherlands Antilles*/}
									{/*			</option>*/}
									{/*			<option value="New Caledonia">New Caledonia</option>*/}
									{/*			<option value="New Zealand">New Zealand</option>*/}
									{/*			<option value="Nicaragua">Nicaragua</option>*/}
									{/*			<option value="Niger">Niger</option>*/}
									{/*			<option value="Nigeria">Nigeria</option>*/}
									{/*			<option value="Niue">Niue</option>*/}
									{/*			<option value="Norfolk Island">Norfolk Island</option>*/}
									{/*			<option value="Northern Mariana Islands">*/}
									{/*				Northern Mariana Islands*/}
									{/*			</option>*/}
									{/*			<option value="Norway">Norway</option>*/}
									{/*			<option value="Oman">Oman</option>*/}
									{/*			<option value="Pakistan">Pakistan</option>*/}
									{/*			<option value="Palau">Palau</option>*/}
									{/*			<option value="Palestinian Territory, Occupied">*/}
									{/*				Palestinian Territory, Occupied*/}
									{/*			</option>*/}
									{/*			<option value="Panama">Panama</option>*/}
									{/*			<option value="Papua New Guinea">*/}
									{/*				Papua New Guinea*/}
									{/*			</option>*/}
									{/*			<option value="Paraguay">Paraguay</option>*/}
									{/*			<option value="Peru">Peru</option>*/}
									{/*			<option value="Philippines">Philippines</option>*/}
									{/*			<option value="Pitcairn">Pitcairn</option>*/}
									{/*			<option value="Poland">Poland</option>*/}
									{/*			<option value="Portugal">Portugal</option>*/}
									{/*			<option value="Puerto Rico">Puerto Rico</option>*/}
									{/*			<option value="Qatar">Qatar</option>*/}
									{/*			<option value="Reunion">Reunion</option>*/}
									{/*			<option value="Romania">Romania</option>*/}
									{/*			<option value="Russian Federation">*/}
									{/*				Russian Federation*/}
									{/*			</option>*/}
									{/*			<option value="Rwanda">Rwanda</option>*/}
									{/*			<option value="Saint Helena">Saint Helena</option>*/}
									{/*			<option value="Saint Kitts and Nevis">*/}
									{/*				Saint Kitts and Nevis*/}
									{/*			</option>*/}
									{/*			<option value="Saint Lucia">Saint Lucia</option>*/}
									{/*			<option value="Saint Pierre and Miquelon">*/}
									{/*				Saint Pierre and Miquelon*/}
									{/*			</option>*/}
									{/*			<option value="Saint Vincent and The Grenadines">*/}
									{/*				Saint Vincent and The Grenadines*/}
									{/*			</option>*/}
									{/*			<option value="Samoa">Samoa</option>*/}
									{/*			<option value="San Marino">San Marino</option>*/}
									{/*			<option value="Sao Tome and Principe">*/}
									{/*				Sao Tome and Principe*/}
									{/*			</option>*/}
									{/*			<option value="Saudi Arabia">Saudi Arabia</option>*/}
									{/*			<option value="Senegal">Senegal</option>*/}
									{/*			<option value="Serbia">Serbia</option>*/}
									{/*			<option value="Seychelles">Seychelles</option>*/}
									{/*			<option value="Sierra Leone">Sierra Leone</option>*/}
									{/*			<option value="Singapore">Singapore</option>*/}
									{/*			<option value="Slovakia">Slovakia</option>*/}
									{/*			<option value="Slovenia">Slovenia</option>*/}
									{/*			<option value="Solomon Islands">Solomon Islands</option>*/}
									{/*			<option value="Somalia">Somalia</option>*/}
									{/*			<option value="South Africa">South Africa</option>*/}
									{/*			<option value="South Georgia and The South Sandwich Islands">*/}
									{/*				South Georgia and The South Sandwich Islands*/}
									{/*			</option>*/}
									{/*			<option value="Spain">Spain</option>*/}
									{/*			<option value="Sri Lanka">Sri Lanka</option>*/}
									{/*			<option value="Sudan">Sudan</option>*/}
									{/*			<option value="Suriname">Suriname</option>*/}
									{/*			<option value="Svalbard and Jan Mayen">*/}
									{/*				Svalbard and Jan Mayen*/}
									{/*			</option>*/}
									{/*			<option value="Swaziland">Swaziland</option>*/}
									{/*			<option value="Sweden">Sweden</option>*/}
									{/*			<option value="Switzerland">Switzerland</option>*/}
									{/*			<option value="Syrian Arab Republic">*/}
									{/*				Syrian Arab Republic*/}
									{/*			</option>*/}
									{/*			<option value="Taiwan">Taiwan</option>*/}
									{/*			<option value="Tajikistan">Tajikistan</option>*/}
									{/*			<option value="Tanzania, United Republic of">*/}
									{/*				Tanzania, United Republic of*/}
									{/*			</option>*/}
									{/*			<option value="Thailand">Thailand</option>*/}
									{/*			<option value="Timor-leste">Timor-leste</option>*/}
									{/*			<option value="Togo">Togo</option>*/}
									{/*			<option value="Tokelau">Tokelau</option>*/}
									{/*			<option value="Tonga">Tonga</option>*/}
									{/*			<option value="Trinidad and Tobago">*/}
									{/*				Trinidad and Tobago*/}
									{/*			</option>*/}
									{/*			<option value="Tunisia">Tunisia</option>*/}
									{/*			<option value="Turkey">Turkey</option>*/}
									{/*			<option value="Turkmenistan">Turkmenistan</option>*/}
									{/*			<option value="Turks and Caicos Islands">*/}
									{/*				Turks and Caicos Islands*/}
									{/*			</option>*/}
									{/*			<option value="Tuvalu">Tuvalu</option>*/}
									{/*			<option value="Uganda">Uganda</option>*/}
									{/*			<option value="Ukraine">Ukraine</option>*/}
									{/*			<option value="United Arab Emirates">*/}
									{/*				United Arab Emirates*/}
									{/*			</option>*/}
									{/*			<option value="United Kingdom">United Kingdom</option>*/}
									{/*			<option value="United States">United States</option>*/}
									{/*			<option value="United States Minor Outlying Islands">*/}
									{/*				United States Minor Outlying Islands*/}
									{/*			</option>*/}
									{/*			<option value="Uruguay">Uruguay</option>*/}
									{/*			<option value="Uzbekistan">Uzbekistan</option>*/}
									{/*			<option value="Vanuatu">Vanuatu</option>*/}
									{/*			<option value="Venezuela">Venezuela</option>*/}
									{/*			<option value="Viet Nam">Viet Nam</option>*/}
									{/*			<option value="Virgin Islands, British">*/}
									{/*				Virgin Islands, British*/}
									{/*			</option>*/}
									{/*			<option value="Virgin Islands, U.S.">*/}
									{/*				Virgin Islands, U.S.*/}
									{/*			</option>*/}
									{/*			<option value="Wallis and Futuna">*/}
									{/*				Wallis and Futuna*/}
									{/*			</option>*/}
									{/*			<option value="Western Sahara">Western Sahara</option>*/}
									{/*			<option value="Yemen">Yemen</option>*/}
									{/*			<option value="Zambia">Zambia</option>*/}
									{/*			<option value="Zimbabwe">Zimbabwe</option>*/}
									{/*		</select>*/}
									{/*	</div>*/}
									{/*</div>*/}

									{/*/!*JOUR *!/*/}
									{/*<div className=" col-span-3 row-start-4 sm:col-span-2">*/}
									{/*	<label className="text-md block font-medium leading-6 text-gray-900">*/}
									{/*		Jour*/}
									{/*	</label>*/}
									{/*	<div className="mt-2">*/}
									{/*		<select*/}
									{/*			name="jour"*/}
									{/*			id="jour"*/}
									{/*			autoComplete="jour"*/}
									{/*			className="sm:text-md block w-full rounded-md border-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset      ring-gray-300 sm:leading-6"*/}
									{/*		>*/}
									{/*			<option value={'jour'} selected={'selected'}>*/}
									{/*				Jour*/}
									{/*			</option>*/}
									{/*			<option value="01">01</option>*/}
									{/*			<option value="02">02</option>*/}
									{/*			<option value="03">03</option>*/}
									{/*			<option value="04">04</option>*/}
									{/*			<option value="05">05</option>*/}
									{/*			<option value="06">06</option>*/}
									{/*			<option value="07">07</option>*/}
									{/*			<option value="08">08</option>*/}
									{/*			<option value="09">09</option>*/}
									{/*			<option value="10">10</option>*/}
									{/*			<option value="11">11</option>*/}
									{/*			<option value="12">12</option>*/}
									{/*			<option value="13">13</option>*/}
									{/*			<option value="14">14</option>*/}
									{/*			<option value="15">15</option>*/}
									{/*			<option value="16">16</option>*/}
									{/*			<option value="17">17</option>*/}
									{/*			<option value="18">18</option>*/}
									{/*			<option value="19">19</option>*/}
									{/*			<option value="20">20</option>*/}
									{/*			<option value="21">21</option>*/}
									{/*			<option value="22">22</option>*/}
									{/*			<option value="23">23</option>*/}
									{/*			<option value="24">24</option>*/}
									{/*			<option value="25">25</option>*/}
									{/*			<option value="26">26</option>*/}
									{/*			<option value="27">27</option>*/}
									{/*			<option value="28">28</option>*/}
									{/*			<option value="29">29</option>*/}
									{/*			<option value="30">30</option>*/}
									{/*			<option value="31">31</option>*/}
									{/*		</select>*/}
									{/*	</div>*/}
									{/*</div>*/}

									{/*<div className=" col-span-3 row-start-4 sm:col-span-2">*/}
									{/*	<label*/}
									{/*		htmlFor="mois"*/}
									{/*		className="text-md block font-medium leading-6 text-gray-900"*/}
									{/*	>*/}
									{/*		Mois*/}
									{/*	</label>*/}
									{/*	<div className="mt-2">*/}
									{/*		<select*/}
									{/*			name="mois"*/}
									{/*			id="mois"*/}
									{/*			autoComplete="Mois"*/}
									{/*			className="sm:text-md block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset      ring-gray-300 sm:leading-6"*/}
									{/*		>*/}
									{/*			<option value={'mois'} selected={'selected'}>*/}
									{/*				Mois*/}
									{/*			</option>*/}
									{/*			<option value="01">Janvier</option>*/}
									{/*			<option value="02">Fevrier</option>*/}
									{/*			<option value="03">Mars</option>*/}
									{/*			<option value="04">Avril</option>*/}
									{/*			<option value="05">Mai</option>*/}
									{/*			<option value="06">Juin</option>*/}
									{/*			<option value="07">Juillet</option>*/}
									{/*			<option value="08">Août</option>*/}
									{/*			<option value="09">Septenmbre</option>*/}
									{/*			<option value="10">Octobre</option>*/}
									{/*			<option value="11">Novembre</option>*/}
									{/*			<option value="12">Décembre</option>*/}
									{/*		</select>*/}
									{/*	</div>*/}
									{/*</div>*/}

									{/*<div className=" col-span-3 row-start-4 sm:col-span-2">*/}
									{/*	<label*/}
									{/*		htmlFor="annee"*/}
									{/*		className="text-md block font-medium leading-6 text-gray-900"*/}
									{/*	>*/}
									{/*		Année*/}
									{/*	</label>*/}
									{/*	<div className="mt-2">*/}
									{/*		<select*/}
									{/*			name="annee"*/}
									{/*			id="annee"*/}
									{/*			autoComplete="annee"*/}
									{/*			className="sm:text-md block w-full    rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset      ring-gray-300 sm:leading-6"*/}
									{/*		>*/}
									{/*			<option value="année" selected="selected">*/}
									{/*				Année*/}
									{/*			</option>*/}

									{/*			<option value="1940">1940</option>*/}
									{/*			<option value="1941">1941</option>*/}
									{/*			<option value="1942">1942</option>*/}
									{/*			<option value="1943">1943</option>*/}
									{/*			<option value="1944">1944</option>*/}
									{/*			<option value="1945">1945</option>*/}
									{/*			<option value="1946">1946</option>*/}
									{/*			<option value="1947">1947</option>*/}
									{/*			<option value="1948">1948</option>*/}
									{/*			<option value="1949">1949</option>*/}
									{/*			<option value="1950">1950</option>*/}
									{/*			<option value="1951">1951</option>*/}
									{/*			<option value="1952">1952</option>*/}
									{/*			<option value="1953">1953</option>*/}
									{/*			<option value="1954">1954</option>*/}
									{/*			<option value="1955">1955</option>*/}
									{/*			<option value="1956">1956</option>*/}
									{/*			<option value="1957">1957</option>*/}
									{/*			<option value="1958">1958</option>*/}
									{/*			<option value="1959">1959</option>*/}
									{/*			<option value="1960">1960</option>*/}
									{/*			<option value="1961">1961</option>*/}
									{/*			<option value="1962">1962</option>*/}
									{/*			<option value="1963">1963</option>*/}
									{/*			<option value="1964">1964</option>*/}
									{/*			<option value="1965">1965</option>*/}
									{/*			<option value="1966">1966</option>*/}
									{/*			<option value="1967">1967</option>*/}
									{/*			<option value="1968">1968</option>*/}
									{/*			<option value="1969">1969</option>*/}
									{/*			<option value="1970">1970</option>*/}
									{/*			<option value="1971">1971</option>*/}
									{/*			<option value="1972">1972</option>*/}
									{/*			<option value="1973">1973</option>*/}
									{/*			<option value="1974">1974</option>*/}
									{/*			<option value="1975">1975</option>*/}
									{/*			<option value="1976">1976</option>*/}
									{/*			<option value="1977">1977</option>*/}
									{/*			<option value="1978">1978</option>*/}
									{/*			<option value="1979">1979</option>*/}
									{/*			<option value="1980">1980</option>*/}
									{/*			<option value="1981">1981</option>*/}
									{/*			<option value="1982">1982</option>*/}
									{/*			<option value="1983">1983</option>*/}
									{/*			<option value="1984">1984</option>*/}
									{/*			<option value="1985">1985</option>*/}
									{/*			<option value="1986">1986</option>*/}
									{/*			<option value="1987">1987</option>*/}
									{/*			<option value="1988">1988</option>*/}
									{/*			<option value="1989">1989</option>*/}
									{/*			<option value="1990">1990</option>*/}
									{/*			<option value="1991">1991</option>*/}
									{/*			<option value="1992">1992</option>*/}
									{/*			<option value="1993">1993</option>*/}
									{/*			<option value="1994">1994</option>*/}
									{/*			<option value="1995">1995</option>*/}
									{/*			<option value="1996">1996</option>*/}
									{/*			<option value="1997">1997</option>*/}
									{/*			<option value="1998">1998</option>*/}
									{/*			<option value="1999">1999</option>*/}
									{/*			<option value="2000">2000</option>*/}
									{/*			<option value="2001">2001</option>*/}
									{/*			<option value="2002">2002</option>*/}
									{/*			<option value="2003">2003</option>*/}
									{/*			<option value="2004">2004</option>*/}
									{/*			<option value="2005">2005</option>*/}
									{/*			<option value="2006">2006</option>*/}
									{/*			<option value="2007">2007</option>*/}
									{/*			<option value="2008">2008</option>*/}
									{/*			<option value="2009">2009</option>*/}
									{/*			<option value="2010">2010</option>*/}
									{/*			<option value="2011">2011</option>*/}
									{/*			<option value="2012">2012</option>*/}
									{/*			<option value="2013">2013</option>*/}
									{/*			<option value="2014">2014</option>*/}
									{/*			<option value="2015">2015</option>*/}
									{/*			<option value="2016">2016</option>*/}
									{/*			<option value="2017">2017</option>*/}
									{/*			<option value="2018">2018</option>*/}
									{/*			<option value="2019">2019</option>*/}
									{/*			<option value="2020">2020</option>*/}
									{/*			<option value="2021">2021</option>*/}
									{/*			<option value="2022">2022</option>*/}
									{/*			<option value="2023">2023</option>*/}
									{/*		</select>*/}
									{/*	</div>*/}
									{/*</div>*/}

									<div className={'col-span-4 col-start-2 row-start-4 '}>
										<input
											type={'date'}
											max={test()}
											className={'w-full rounded-2xl text-xl'}
										/>
									</div>
								</div>
							</div>
						</form>
					</div>

					<Link
						href={'#'}
						className={
							' ml-14 flex w-2/5 items-center justify-center rounded-2xl bg-mainaccent-700/100 px-12 py-4 text-xl text-white shadow-[0_4px_5px_#31066f] transition delay-100 ease-in-out hover:brightness-125'
						}
					>
						Enregistrer
					</Link>
				</div>
			</main>
		</>
	)
}

export default ProfilEditComponent
