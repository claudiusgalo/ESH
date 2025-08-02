import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Child } from '@/interfaces/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Elcy & Co. Realty',
	description:
		'Unlocking doors to your dreams. Invest in your tomorrow, your next chapter begins with us.',
};

export default function RootLayout({ children }: Child) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
