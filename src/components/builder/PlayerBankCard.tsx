import PlayerPortrait from '../lft/PlayerPortrait';

type Props = {
	freeAgents: {
    _id: string;
		image: string;
		username: string;
	};
};

const PlayerBankCard = ({ freeAgents }: Props) => {
	return (
		<div className='bg-[#2c2c2c]' id={freeAgents._id} draggable>
			<div className='m-4'>
				<PlayerPortrait value={freeAgents.image} />
			</div>
			<p className='text-center'>{freeAgents.username}</p>
		</div>
	);
};

export default PlayerBankCard;
