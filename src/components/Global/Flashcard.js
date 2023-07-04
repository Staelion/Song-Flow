import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

import Image from 'next/image'
import Link from 'next/link'

const flashcard_data = [
	{
		image: '/images/album_cover_1.jpg',
		title: 'Importez vos donnees d’écoutes spotify',
		description:
			"Afin que nous puissions vous créer une playlist 100 personnalisée, importez facilement vos donnés d'écoutes récentes !",
		isBtnVisible: true,
		linkBtn: '/importation_donnees',
	},
	{
		image: '/images/album_cover_2.jpg',
		title: 'Plusieurs options de personnalisation de votre playlist',
		description:
			'Choisisez parmi les options proposés afin de nous dire avec précision ce que vous souhaitez  retrouver dans votre playlist !',
		isBtnVisible: false,
		linkBtn: '/link',
	},
	{
		image: '/images/album_cover_3.jpg',
		title: 'Gère ta playlist avant de la récupérery',
		description:
			'Utilise les options d’ecoute d’un extrait du son et les option de remplacement afin de séléctionner les titres que tu veux garder ou non dans ta playlist customisée.',
		isBtnVisible: false,
		linkBtn: '/link',
	},
	{
		image: '/images/album_cover_4.jpg',
		title:
			'Partage tes découvertes musicales et vote pour les meilleures découvertes',
		description:
			'Grace a l’onglet communautaire, découvre encore plus de pépites musicales en partagant et en votant pour les meilleurs partages des autres fans de musique !',
		isBtnVisible: true,
		linkBtn: '/link',
	},
	{
		image: '/images/album_cover_5.jpg',
		title:
			'Propose nous des petits artistes à exposer dans notre tremplin d’artistes',
		description:
			'Fais nous découvrir tes créations oux celles d’un artiste que tu voudrais mettre en avant !',
		isBtnVisible: true,
		linkBtn: '/link',
	},
]
function Flashcard(props) {
	return (
		<div className={'relative w-auto '}>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{flashcard_data.map((data, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="card-container overflow-hidden">
								<div className="card overflow-hidden">
									<div className="image-content">
										<div className="card-image">
											<Image
												src={data.image}
												alt="album cover"
												className="card-img"
												width={500}
												height={500}
											/>
										</div>
									</div>
									<div className="card-content">
										<h4 className="cardtitle">{data.title}</h4>
										<p className="description">{data.description}</p>
										{data.isBtnVisible ? (
											<button className="cardbutton ">
												<Link href={data.linkBtn}>En Savoir Plus</Link>
											</button>
										) : (
											<></>
										)}
									</div>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>

			<div className="swiper-button-next"></div>
			<div className="swiper-button-prev"></div>
			<div className="swiper-pagination"></div>
		</div>
	)
}

export default Flashcard
