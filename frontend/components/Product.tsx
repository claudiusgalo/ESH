'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { Listing } from '@/interfaces/listing';

const Product = ({ image, title, productLink }: Listing) => {
	return (
		<>
			<div className='product'>
				<div className='image'>
					<Link
						href={productLink}
						target='_blank'
						passHref>
						<Image
							src={image}
							width={300}
							height={300}
							alt='product'
						/>
						<h3 className='title'>{title}</h3>
					</Link>
				</div>
			</div>

			<style jsx>{`
				.product {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				.title {
					text-align: center;
					margin: 0 auto;
					color: #183f26;
					font-weight: 300;
				}
				p {
					text-align: center;
					margin: 0 auto;
					font-size: 12px;
					margin-top: 5px;
					color: #c7c3c0;
					cursor: pointer;
				}
				.colors {
					margin-top: 5px;
					cursor: pointer;
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 7px;
				}
				.color {
					border-radius: 50%;
					opacity: 0.6;
					padding: 3px;
					display: flex;
					justify-content: center;
					align-items: center;
					border: 2px solid #f6f1ed;
				}
				.color .c {
					width: 8px;
					height: 8px;
					border-radius: 50%;
				}
				.color:hover {
					border: 2px solid red;
				}
			`}</style>
		</>
	);
};

export default Product;
