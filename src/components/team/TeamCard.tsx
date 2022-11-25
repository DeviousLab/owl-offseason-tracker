import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '../../lib/client';

export const teamColourProperties: any = {
	'Atlanta Reign': {
		backgroundColour: '#c4c4c4',
		textColour: '#910F1B',
	},
	'Boston Uprising': {
		backgroundColour: '#174B97',
		textColour: '#EFDF00',
	},
	'Chengdu Hunters': {
		backgroundColour: '#FFA000',
		textColour: '#161823',
	},
	'Dallas Fuel': {
		backgroundColour: '#0072CE',
		textColour: '#FFFFFF',
	},
	'Florida Mayhem': {
		backgroundColour: '#000000',
		textColour: '#3DB2E3',
	},
	'Guangzhou Charge': {
		backgroundColour: '#122C42',
		textColour: '#67A2B2',
	},
	'Hangzhou Spark': {
		backgroundColour: '#FB7299',
		textColour: '#FFFFFF',
	},
	'Houston Outlaws': {
		backgroundColour: '#000000',
		textColour: '#97D700',
	},
	'London Spitfire': {
		backgroundColour: '#59CBE8',
		textColour: '#FFFFFF',
	},
	'Los Angeles Gladiators': {
		backgroundColour: '#3C1053',
		textColour: '#FFFFFF',
	},
	'Los Angeles Valiant': {
		backgroundColour: '#1888C6',
		textColour: '#FFD100',
	},
	'New York Excelsior': {
		backgroundColour: '#171C38',
		textColour: '#0F57EA',
	},
	'Paris Eternal': {
		backgroundColour: '#303D56',
		textColour: '#FFAA1D',
	},
	'Philadelphia Fusion': {
		backgroundColour: '#000000',
		textColour: '#DCDCDC',
	},
	'San Francisco Shock': {
		backgroundColour: '#000000',
		textColour: '#FFFFFF',
	},
	'Seoul Dynasty': {
		backgroundColour: '#000000',
		textColour: '#AA8A00',
	},
	'Shanghai Dragons': {
		backgroundColour: '#D22630',
		textColour: '#FCE300',
	},
	'Toronto Defiant': {
		backgroundColour: '#000000',
		textColour: '#C10021',
	},
	'Vancouver Titans': {
		backgroundColour: '#2FB228',
		textColour: '#09226B',
	},
	'Washington Justice': {
		backgroundColour: '#990034',
		textColour: '#FFFFFF',
	},
	None: {
		backgroundColour: '#FFFFFF',
		textColour: '#000000',
	},
};

const TeamCard = ({ team: { image, name, slug: { current } } }: any) => {
	if (name === 'None') {
		return <></>;
	}

	return (
		<Link href={`/teams/${current}`}
			className='lg:w-64 lg:h-64 w-48 h-48 m-4 transition duration-200 hover:shadow-lg hover:scale-105 cursor-pointer'
			style={{ background: teamColourProperties[name].backgroundColour }}
		>
			<div>
				<Image
					src={urlFor(image).url()}
					alt={name}
					height={220}
					width={220}
					className='m-auto lg:w-5/6 lg:h-5/6 w-36 h-36'
				/>
			</div>
			<div>
				<p
					className='font-Industry block font-bold uppercase text-center align-middle'
					style={{ color: teamColourProperties[name].textColour }}
				>
					{name}
				</p>
			</div>
		</Link>
	);
};

export default TeamCard;
