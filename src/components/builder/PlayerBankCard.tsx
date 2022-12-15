import PlayerPortrait from '../lft/PlayerPortrait';

type PlayerBankCardProps = {
	player: {
    id: string;
		image: string;
		username: string;
	};
};

const PlayerBankCard = ({ player }: PlayerBankCardProps) => {
	return (
		<div className='bg-gray-600 dark:bg-[#2c2c2c] max-w-min h-32 m-1' id={player.id} >
			<div className='m-4'>
				<PlayerPortrait value={player.image} />
			</div>
			<p className='text-center text-white'>{player.username}</p>
		</div>
	);
};

export default PlayerBankCard;
