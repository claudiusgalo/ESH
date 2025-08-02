import React from 'react';

import Image from 'next/image';

export default function Team() {
	return (
		<div className='flex flex-col flex-1 min-h-screen justify-center items-center'>
			<div className='flex flex-col justify-center items-center gap-5'>
				<Image
					src='https://photos.zillowstatic.com/h_l/ISxfi4vquxrksk0000000000.jpg'
					alt='Elcy'
					width={100}
					height={100}
					className='object-cover w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full'
				/>
				<div className='flex flex-col p-5'>
					<h1 className='font-bold text-center text-[16px] md:text-[20px]'>
						Elcy Pereira, CEO
					</h1>
					<p className='text-[12px] md:text-[16px]'>
						Hello, I am here to help you unlock the doors to your future.
					</p>
				</div>
			</div>
		</div>
	);
}
