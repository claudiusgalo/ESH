import React from 'react';

interface Props {
	videoId: string;
}

export default function YoutubeEmbed({ videoId }: Props) {
	return (
		<iframe
			className='w-[300px] h-[200px] md:w-[400px] md:h-[250px]'
			src={`https://www.youtube.com/embed/${videoId}`}
			title='YouTube video player'
			allowFullScreen
			allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'></iframe>
	);
}
