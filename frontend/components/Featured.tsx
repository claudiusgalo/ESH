'use client';
import React from 'react';
import styles from './featured.module.css';
import { Newsreader } from 'next/font/google';
import Product from './Product';
import { active_listings } from '@/data/active_listings';

const newspaper = Newsreader({
	subsets: ['latin'],
	weight: ['300'],
	display: 'swap',
});
// const data = [
// 	{
// 		id: 1,
// 		image:
// 			'https://photos.zillowstatic.com/fp/aaff97638bc561342d00d281f56d0421-cc_ft_1536.webp',
// 		title: '102 Nutmeg Ln, Winchester, VA 22602',
// 		productLink:
// 			'https://www.zillow.com/homedetails/102-Nutmeg-Ln-Winchester-VA-22602/75345292_zpid/',
// 	},
// ];
const Featured = ({ products = active_listings }) => {
	return (
		<div className={styles.featured_container}>
			<h3
				className={`${newspaper.className} ${styles.featured_title} text-[20px]`}>
				our listings
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

export default Featured;
