import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';

type Props = {
	reference: string;
};

const ReferenceTweet = ({ value }: any) => {
	return (
		<>
					<Link href={value} >
						<FaTwitter size={20} />
					</Link>

		</>
	);
};

export default ReferenceTweet;
