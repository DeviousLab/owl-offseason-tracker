import Link from 'next/link';
import Image from 'next/image';

import OWLProfile from '../../assets/owl_profile.webp';
import LiquipediaProfile from '../../assets/liquipedia_profile.webp';

const regexp = new RegExp('^https://liquipedia.net');

type Props = {
	value: string;
};

const ProfileLinks = ({ value }: Props) => {
	if (regexp.test(value)) {
		return (
			<Link href={value} className='flex justify-center mx-2'>
				<Image
					src={LiquipediaProfile}
					alt='Liquipedia Profile'
					width={40}
					height={40}
				/>
			</Link>
		);
	}
	if (value === undefined) {
		return (
			<></>)
	}
	return (
		<Link href={value} className='flex justify-center mx-2'>
			<Image src={OWLProfile} alt='OWL Profile' width={40} height={40} />
		</Link>
	);
};

export default ProfileLinks;
