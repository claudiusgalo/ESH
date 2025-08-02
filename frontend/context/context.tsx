'use client';

import { createContext, useState, useContext } from 'react';

import { Child } from '@/interfaces/page';
import { NavBar, Visibility } from '@/interfaces/context';

const AppContext = createContext<NavBar | undefined>(undefined);

export function AppProvider({ children }: Child) {
	const [color, setColor] = useState<string>('rgba(24, 63, 38,1)');
	const [border, setBorder] = useState<string>('1px solid white');
	const [smallBarOpen, setSmallBarOpen] = useState<boolean>(false);
	const [displayBar, setDisplayBar] = useState<Visibility>('visible');

	function toggleBar() {
		setSmallBarOpen(!smallBarOpen);
	}
	function handleScroll() {
		if (typeof window !== 'undefined') {
			if (window.scrollY > 130) {
				setDisplayBar('hidden');
				setBorder('none');
				setColor('rgba(24, 63, 38,1)');
			} else {
				setDisplayBar('visible');
				setColor('rgba(24, 63, 38,1)');
				setBorder('1px solid white');
			}
		}
	}
	return (
		<AppContext.Provider
			value={{
				color,
				handleScroll,
				border,
				smallBarOpen,
				toggleBar,
				displayBar,
			}}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useMyContext must be used within a MyContextProvider');
	}
	return context;
}
