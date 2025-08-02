'use client';
import React from 'react';
import styles from './featured.module.css';
import { Newsreader } from 'next/font/google';
import Product from './Product';

const newspaper = Newsreader({
	subsets: ['latin'],
	weight: ['300'],
	display: 'swap',
});
const data = [
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
const PreviousListings = ({ products = data }) => {
	return (
		<div className={styles.featured_container}>
			<h3 className={`${newspaper.className} ${styles.featured_title}`}>
				Previously Sold
			</h3>
			<div className={`${styles.product_container} mt-10`}>
				{products.map((d) => {
					return (
						<Product
							key={d.id}
							image={d.image}
							title={d.title}
							productLink={d.productLink}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default PreviousListings;
