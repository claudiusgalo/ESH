'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FaEye,
  FaMapMarkerAlt,
  FaSearch,
  FaChevronDown,
  FaBars,
} from 'react-icons/fa';
import styles from './header.module.css';
import { useAppContext } from '@/context/context';
import { Menu, MenuButton, Button, Flex } from '@chakra-ui/react';
import BurgerMenu from './BurgerMenu';
import { Visibility } from '@/interfaces/context';

export default function Header() {
  const { toggleBar } = useAppContext();
  const [color, setColor] = useState<string>('rgba(24, 63, 38,1)');
  const [border, setBorder] = useState<string>('1px solid white');
  const [displayBar, setDisplayBar] = useState<Visibility>('visible');

  function handleScroll() {
    if (window.scrollY > 100) {
      setDisplayBar('hidden');
      setBorder('none');
      setColor('rgba(24, 63, 38,1)');
    } else {
      setDisplayBar('visible');
      setColor('rgba(24, 63, 38,1)');
      setBorder('1px solid white');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.navbar}>
        <div
          className="flex items-center justify-between lg:justify-left p-[0.75rem] uppercase bg-[rgba(24, 63, 38, 1)] text-white"
          style={{ background: color }}
        >
          <div className={styles.title}>
            <Link href="/">
              <div className="flex flex-col">
                <img
                  className="ml-0 mb-2"
                  src="/Asset1.svg"
                  height={80}
                  width={80}
                />
                <span className="text-yellow-200 text-xs text">Elcy & Co</span>
              </div>
            </Link>
            <Link href="/">
              <h3 className="font-bold text-[0.75rem] md:text-[1.5rem]">
                ELCY PEREIRA
              </h3>
              <p className="text-[0.4rem] md:text-[0.4rem] flex justify-center items-center">
                Realtor
                <p className="text-[0.4rem] md:text-[0.3rem] flex justify-center items-center">
                  ®
                </p>
              </p>
              <p className="text-[0.4rem] md:text-[0.8rem] flex justify-center items-center">
                (540)323-0675
              </p>
            </Link>
          </div>

          <div className="bg-green-800 block lg:hidden">
            <Menu>
              <MenuButton
                as={Button}
                className="fill-green-800 bg-green-900 hover:bg-green-900"
              >
                <FaBars
                  onClick={toggleBar}
                  className={`${styles.bars} text-green-800`}
                />
              </MenuButton>
              <BurgerMenu />
            </Menu>
          </div>
        </div>

        <div
          className={`${
            styles.down_container
          } transition-opacity duration-300 ${
            displayBar === 'visible' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: color,
            borderTop: border,
            visibility: displayBar,
          }}
        >
          <Link href="/contact-me">
            <p style={{ visibility: displayBar }}>
              Contact<span className={styles.dot}>.</span>
            </p>
          </Link>
          <Link href="/buyers">
            <p style={{ visibility: displayBar }}>
              Buyers<span className={styles.dot}>.</span>
            </p>
          </Link>
          <Link href="/sellers">
            <p style={{ visibility: displayBar }}>
              Sellers<span className={styles.dot}>.</span>
            </p>
          </Link>
          <Link href="/home-search">
            <p style={{ visibility: displayBar }}>
              Home Search<span className={styles.dot}>.</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
