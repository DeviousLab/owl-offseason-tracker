import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';

type Props = {
	value: string;
};

const ReferenceTweet = ({ value }: Props) => {
	return (
		<>
					<Link href={value} className="flex justify-center">
						<FaTwitter className='text-black dark:text-white' size={20} />
					</Link>

		</>
	);
};

export default ReferenceTweet;
