'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/thumbs'
import { useState } from 'react'
import { ResponsiveImg } from '@/ui/Img'
import { cn } from '@/lib/utils'
import styles from './ImageList.module.css'
import { Autoplay } from 'swiper/modules'
import Link from 'next/link'

export default function ImageList({
	assets,
	layout = 'grid',
}: {
	assets: Sanity.Img[]
	layout?: 'grid' | 'carousel' | 'product'
}) {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

	if (!assets?.length) return null

	return (
		<section className={cn('section section-image-list space-y-8')}>
			<div className="container">
				{/* Grid layout */}
				{layout === 'grid' && (
					<div className="grid grid-cols-2 gap-4 md:grid-cols-2">
						{assets.map((block, blockIdx) => {
							const isFirstOdd = assets.length % 2 === 1 && blockIdx === 0
							return (
								<div
									key={blockIdx}
									className={cn(
										'aspect-w-16 aspect-h-9 overflow-hidden rounded shadow',
										isFirstOdd && 'col-span-2',
									)}
								>
									{block?.url !== undefined && (
										<Link href={block?.url}>
											<ResponsiveImg
												img={block}
												className="max-h-fold size-full object-cover"
												width={2400}
												draggable={false}
											/>
										</Link>
									)}
									{block?.url === undefined && (
										<ResponsiveImg
											img={block}
											className="max-h-fold size-full object-cover"
											width={2400}
											draggable={false}
										/>
									)}
								</div>
							)
						})}
					</div>
				)}

				{/* Carousel layout */}
				{layout === 'carousel' && (
					<Swiper
						modules={[Autoplay]}
						slidesPerView={1}
						spaceBetween={20}
						navigation={true}
						autoplay={{
							delay: 5000,
							disableOnInteraction: true,
						}}
						speed={1000}
						breakpoints={{
							640: { slidesPerView: 1 },
							768: { slidesPerView: 1 },
							1024: { slidesPerView: 2 },
						}}
					>
						{assets.map((block, blockIdx) => (
							<SwiperSlide key={blockIdx}>
								<div className="aspect-w-16 aspect-h-9 overflow-hidden rounded shadow">
									{block?.url !== undefined && (
										<Link href={block?.url}>
											<ResponsiveImg
												img={block}
												className="max-h-fold size-full object-cover"
												width={2400}
												draggable={false}
											/>
										</Link>
									)}
									{block?.url === undefined && (
										<ResponsiveImg
											img={block}
											className="max-h-fold size-full object-cover"
											width={2400}
											draggable={false}
										/>
									)}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}

				{/* Product gallery layout */}
				{layout === 'product' && (
					<>
						<Swiper
							modules={[Thumbs]}
							thumbs={{ swiper: thumbsSwiper }}
							className="w-full"
						>
							{assets.map((block, i) => (
								<SwiperSlide key={`main-${i}`}>
									<div className="aspect-w-16 aspect-h-9 overflow-hidden rounded shadow">
										<ResponsiveImg
											img={block}
											className="h-full w-full object-cover"
											width={2400}
											draggable={false}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						<Swiper
							onSwiper={setThumbsSwiper}
							modules={[Thumbs]}
							spaceBetween={10}
							slidesPerView={4}
							watchSlidesProgress
							className="mt-2"
						>
							{assets.map((block, i) => (
								<SwiperSlide key={`thumb-${i}`}>
									<div className={styles.thumbSlide}>
										<ResponsiveImg
											img={block}
											className="h-full w-full object-cover"
											width={400}
											draggable={false}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</>
				)}
			</div>
		</section>
	)
}
