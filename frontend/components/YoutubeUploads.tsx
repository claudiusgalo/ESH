import React from 'react';
import { Newsreader } from 'next/font/google';
import YoutubeEmbed from './YoutubeEmbed';

const reader = Newsreader({
	subsets: ['latin'],
	weight: '300',
	display: 'swap',
});

export default function YoutubeUploads() {
	return (
		<div className='flex flex-col justify-center items-center my-5 md:my-20'>
			<h2
				className={`${reader.className} mb-5 text-[16px] md:text-[20px] uppercase`}>
				YouTube Uploads
			</h2>
			<section className='flex flex-col lg:flex-row gap-10 lg:gap-32'>
				<YoutubeEmbed videoId='AKxPIWTQYys' />
				<YoutubeEmbed videoId='isP3eik9iDk' />
				<YoutubeEmbed videoId='W608u6sBFpo' />
			</section>
		</div>
	);
}
