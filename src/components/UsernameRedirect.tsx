import Link from 'next/link';


type Props = {
	value: string;
};

const ReferenceTweet = ({ value }: Props) => {
	return (
		<>
					<Link href={value} className="flex justify-center">
						{value}
					</Link>

		</>
	);
};

export default ReferenceTweet;
