import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from './Providers';
import { Child } from '@/interfaces/page';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Elcy & Co. Realty',
	description:
		'Unlocking doors to your dreams. Invest in your tomorrow, your next chapter begins with us.',
};

export default function RootLayout({ children }: Child) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main>
					<Providers>
						<Header />
						{children}
						<Footer />
					</Providers>
				</main>
			</body>
		</html>
	);
}
