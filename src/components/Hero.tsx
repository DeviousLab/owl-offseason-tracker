import Image from 'next/image';
import { BsArrowDownCircleFill } from 'react-icons/bs';

import HeroImage from '../assets/OWHero.webp';

const Hero = () => {
	return (
		<section className='text-black bg-gray-100 font-Industry dark:bg-[#1f1f1f] dark:text-white'>
			<Image
				className='w-full lg:w-2/3 m-auto mb-10 pt-10 object-cover object-center'
				alt='hero'
				src={HeroImage}
			/>
			<div className='container mx-auto flex px-5 pb-14 items-center justify-center flex-col'>
				<div className='text-center lg:w-2/3 w-full'>
					<h1 className='sm:text-4xl text-3xl mb-4 font-medium text-primary '>
						The Overwatch League 2023 Off-Season Tracker
					</h1>
					<p className='mb-8 leading-relaxed'>
						Keep an eye on this space as we track Overwatch League off-season
						roster changes with every trade, signing, retirement, and free
						agent.
					</p>
					<div className='flex justify-center'>
						<button className='inline-flex shadow-md text-white bg-primary border-0 py-4 px-4 focus:outline-none hover:bg-primary/75 transition ease-in-out duration-300 rounded-xl cursor-default'>
							<BsArrowDownCircleFill size={30} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
