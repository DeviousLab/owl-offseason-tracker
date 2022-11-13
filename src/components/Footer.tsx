import Link from 'next/link';
import { FaReddit, FaGlobe, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer aria-label='Site Footer' className='text-center text-white bg-accent-light dark:bg-white dark:text-accent'>
			<div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl space-y-6'>
					<div className='flex justify-center gap-6'>
						<Link
							className='text-[#009AE4] hover:text-[#009AE4]/75'
							href='https://overwatchleague.com/'
							target='_blank'
							rel='noreferrer'
							aria-label='Overwatch League Website'
						>
							<FaGlobe size={25} />
						</Link>

						<Link
							className='text-[#FF0000] hover:text-[#FF0000]/75'
							href='https://www.youtube.com/overwatchleague'
							target='_blank'
							rel='noreferrer'
							aria-label='Overwatch League YouTube Channel'
						>
							<FaYoutube size={28} />
						</Link>

						<Link
							className='text-[#ff4500] hover:text-[#ff4500]/75'
							href='https://old.reddit.com/r/Competitiveoverwatch/'
							target='_blank'
							rel='noreferrer'
							aria-label='Competitive Overwatch Subreddit'
						>
							<FaReddit size={25} />
						</Link>
					</div>

					<p className='mx-auto max-w-lg text-xs text-gray-500'>
						Overwatch, the Overwatch League and the Overwatch and the Overwatch
						League logos are the exclusive property of OWL and their respective owners.
						<span className='mt-4 block'> &copy; 2022 
						<Link
							className='ml-1 underline hover:text-[#009AE4]'
							href='https://old.reddit.com/user/Devious_Beast/'
							target='_blank'
							rel='noreferrer'
							aria-label='Devious Beast Reddit Profile'
						>
							DeviousLab 
						</Link>
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
