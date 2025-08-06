'use client';
import styles from './burgermenu.module.css';
import NextLink from 'next/link';
import { MenuList, MenuItem } from '@chakra-ui/react';

const BurgerMenu = () => {
	const burgerLinks = {
		Catalog: '/catalog',
		Team: '/team',
	};

	return (
		<MenuList
			bg='green.700'
			color='white'
			shadow='2xl'
			border='none'
			p={2}
			zIndex={20}
			borderRadius='lg'
			minW='100px'
			className='lg:min-w-[200px]'
		>
			{Object.entries(burgerLinks).map(([label, href]) => (
				<MenuItem
					key={label}
					as={NextLink}
					href={href}
					bg='green.800'
					borderRadius='lg'
					_hover={{ bg: 'green.600', color: 'black' }}
				>
					{label}
				</MenuItem>
			))}
		</MenuList>
	);
};

export default BurgerMenu;
