import Video from '@/components/Video';
import Featured from '@/components/Featured';
import Newsletter from '@/components/Newsletter';
import PreviousListings from '@/components/PreviousListings';
import YoutubeUploads from '@/components/YoutubeUploads';
import Testimonial from '@/components/Testimonial';

export default function Home() {
	return (
		<>
			<Video />
			<Featured />
			<Newsletter />
			<Video
				title_l1={'Lets Close On Your Dream Home'}
				title_l2={''}
				title_l3={''}
				pl1={'Discover our listings'}
				pl2={''}
				isLoading={true}
				text='discover'
				video={
					'https://videos.pexels.com/video-files/5576689/5576689-uhd_2560_1440_30fps.mp4'
				}
				urlLink='https://www.zillow.com/profile/Elcy-Pereira/'
			/>
			<Testimonial />
			<YoutubeUploads />
		</>
	);
}
