'use client';
import styles from './burgermenu.module.css';
import NextLink from 'next/link';
import { MenuList, MenuItem } from '@chakra-ui/react';
import Home from '@/app/(root)/page';

const BurgerMenu = () => {
  const burgerLinks = {
    'Home Search': '/home-search',
    'Contact Us': '/contact-me',
  };

  return (
    <MenuList
      bg="green.700"
      color="white"
      shadow="2xl"
      border="none"
      p={2}
      zIndex={20}
      borderRadius="lg"
      minW="100px"
      className="lg:min-w-[200px]"
    >
      {Object.entries(burgerLinks).map(([label, href]) => (
        <MenuItem
          key={label}
          as={NextLink}
          href={href}
          bg="green.800"
          borderRadius="lg"
          _hover={{ bg: 'green.600', color: 'black' }}
        >
          {label}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default BurgerMenu;
