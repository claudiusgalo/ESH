'use client';
import React, { useState, useEffect } from 'react';
import styles from './testimonial.module.css';
import { Newsreader } from 'next/font/google';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
const reader = Newsreader({
	subsets: ['latin'],
	weight: '300',
	display: 'swap',
});
const Testimonial = () => {
	const slides = [
		{
			id: 1,
			image:
				'https://photos.zillowstatic.com/fp/1d3e896aaa92f57d788f273a6aa33f42-cc_ft_768.webp',
			title: '222 Tudor Dr, Winchester, VA 22603',
			productLink:
				'https://www.zillow.com/homedetails/222-Tudor-Dr-Winchester-VA-22603/75339805_zpid/',
		},
		{
			id: 2,
			image:
				'https://photos.zillowstatic.com/fp/f2484dae242c5c1844a2596c16aec718-cc_ft_768.webp',
			title: '536 Battle Ave, Winchester, VA 22601',
			productLink:
				'https://www.zillow.com/homedetails/536-Battle-Ave-Winchester-VA-22601/230922291_zpid/',
		},
		{
			id: 3,
			image:
				'https://photos.zillowstatic.com/fp/9caf7ee48e5537129165d338e5ce0f77-cc_ft_768.webp',
			title: '2169 Harvest Dr, Winchester, VA 22601',
			productLink:
				'https://www.zillow.com/homedetails/2169-Harvest-Dr-Winchester-VA-22601/79353431_zpid/',
		},
	];
	const [people, setPeople] = useState(slides);
	const [current, setCurrent] = useState(0);
	useEffect(() => {
		let id = setInterval(() => {
			nextSlide();
		}, 3000);
		return () => {
			clearInterval(id);
		};
	}, [current]);

	const prevSlide = () => {
		const i = current ? current - 1 : people.length - 1;
		setCurrent(i);
	};
	const nextSlide = () => {
		setCurrent((current + 1) % people.length);
	};
	return (
		<div className={styles.page}>
			<h2 className={`${reader.className} text-[20px]`}>Previously Sold</h2>
			<section className={styles.slider_container}>
				{people.map((p, index) => {
					const { id, image, title, productLink } = p;
					return (
						<article
							className={styles.slide}
							style={{
								transform: `translateX(${100 * (index - current)}%)`,
								opacity: index === current ? '1' : '0',
								visibility: index === current ? 'visible' : 'hidden',
							}}
							key={id}>
							<Image
								src={image}
								alt={title}
								width={350}
								height={320}
							/>
							<Link
								href={productLink}
								target='_blank'
								passHref>
								<h3 className={styles.title}>{title}</h3>
							</Link>
						</article>
					);
				})}
				<button
					type='button'
					className={styles.prev}
					onClick={prevSlide}>
					<FiChevronLeft />
				</button>
				<button
					type='button'
					className={styles.next}
					onClick={nextSlide}>
					<FiChevronRight />
				</button>
			</section>
		</div>
	);
};

export default Testimonial;
