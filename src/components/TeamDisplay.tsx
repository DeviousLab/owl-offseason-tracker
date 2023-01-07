type Props = {
	value: string;
};

const TeamDisplay = ({ value }: Props) => {
	const teamColourProperties: any = {
		'Atlanta Reign': {
			backgroundColour: '#910F1B',
			textColour: '#c4c4c4',
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
			backgroundColour: '#CF4691',
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
			backgroundColour: '#97D700',
			textColour: '#000000',
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
		'Vegas Eternal': {
			backgroundColour: '#000000',
			textColour: '#FFAA1D',
		},
		'Seoul Infernal': {
			backgroundColour: '#E2012D',
			textColour: '#DCDCDC',
		},
		'San Francisco Shock': {
			backgroundColour: '#A5ACAF',
			textColour: '#FFFFFF',
		},
		'Seoul Dynasty': {
			backgroundColour: '#AA8A00',
			textColour: '#000000',
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
			backgroundColour: '#09226B',
			textColour: '#2FB228',
		},
		'Washington Justice': {
			backgroundColour: '#990034',
			textColour: '#FFFFFF',
		},
		None: {
			backgroundColour: '#000000',
			textColour: '#FFFFFF',
		},
	};

	return (
		<>
			{teamColourProperties[`${value}`] && (
				<div
					className='p-2 font-semibold'
					style={{
						background: teamColourProperties[value].backgroundColour,
						color: teamColourProperties[value].textColour,
					}}
				>
					{value}
				</div>
			)}
		</>
	);
};

export default TeamDisplay;
