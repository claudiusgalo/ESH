'use client';
import Link from 'next/link';
import React from 'react';

const Underlined = ({ text, color = 'white', urlLink }) => {
	const linkStyle = {
		textDecoration: 'none',
		textTransform: 'uppercase',
		color: color,
		fontWeight: ' 200',
		fontSize: '13px',
		letterSpacing: '3px',
	};
	return (
		<>
			<div className='link_container'>
				<Link
					className='link'
					style={linkStyle}
					href={urlLink}
					target='_blank'
					passHref>
					{text}
				</Link>
			</div>

			<style jsx>{`
				.link_container::after {
					content: '';
					position: absolute;
					width: 100%;
					height: 1px;
					background: rgba(255, 255, 0, 0.839);
					bottom: -5px;
				}
				.link_container {
					/* width:100%; */
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</>
	);
};

export default Underlined;
