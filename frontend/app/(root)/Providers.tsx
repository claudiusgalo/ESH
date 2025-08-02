'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';

import { AppProvider } from '@/context/context';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraProvider>
				<AppProvider>{children}</AppProvider>
			</ChakraProvider>
		</CacheProvider>
	);
}
