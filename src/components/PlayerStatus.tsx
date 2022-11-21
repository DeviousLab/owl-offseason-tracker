type Props = {
	value: string;
};

const TeamDisplay = ({ value }: Props) => {
	const playerStatusProperties: any = {
		active: {
			backgroundColour: '#A7F3D0;',
			textColour: '#6B7280',
		},
		inactive: {
			backgroundColour: '#FECACA',
			textColour: '#dc2626',
		},
		retired: {
			backgroundColour: '#E5E7EB',
			textColour: '#161823',
		},
		lft: {
			backgroundColour: '#BFDBFE',
			textColour: '#2563EB',
		},
		fa: {
			backgroundColour: '#FDE68A',
			textColour: '#D97706',
		},
	};

	return (
		<>
			{playerStatusProperties[`${value}`] && (
				<div className="inline-block py-1 px-2.5 leading-none uppercase text-center whitespace-nowrap align-baseline font-bold rounded-full"
					style={{
						background: playerStatusProperties[value].backgroundColour,
						color: playerStatusProperties[value].textColour,
					}}
				>
					{value}
				</div>
			)}
		</>
	);
};

export default TeamDisplay;
