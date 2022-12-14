import Link from 'next/link';
import { FaRegListAlt } from 'react-icons/fa';
const Header = () => {
	return (
		<header className='text-black font-Industry bg-white dark:bg-accent-light dark:text-white'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<Link href='/' className='flex title-font font-medium items-center text-black mb-4 md:mb-0 dark:text-white'>
					<FaRegListAlt size={30} className="text-primary" />
					<span className='ml-3 text-xl font-bold'>OWL OST</span>
				</Link>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<Link href='/teams' className='mr-5 my-1 text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 cursor-pointer bg-gray-300 dark:bg-gray-600 py-1 px-2 rounded-md'>TEAMS</Link>
					<Link href='/lft' className='mr-5 my-1 text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 cursor-pointer bg-gray-300 dark:bg-gray-600 py-1 px-2 rounded-md'>FREE AGENTS</Link>
					<Link href='/builder' className='mr-5 my-1 text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 cursor-pointer bg-gray-300 dark:bg-gray-600 py-1 px-2 rounded-md'>TEAM BUILDER</Link>
				</nav>				
			</div>
		</header>
	);
};

export default Header;
