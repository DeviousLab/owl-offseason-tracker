import TeamRoleDisplay from '../team/TeamRoleDisplay';

const TableRows = () => {
	return (
		<div
			id='board'
			className='m-auto flex flex-col items-center justify-evenly p-3 w-[90vh] h-[60vh] bg-[#2c2c2c] rounded-md font-Industry'
		>
			<div className='flex w-full h-28 bg-accent-light'>
				<div className='flex justify-center items-center h-full w-1/5 bg-secondary uppercase font-bold text-xl'>
					<TeamRoleDisplay value='Tank' />
				</div>
			</div>
			<div className='flex w-full h-28 bg-accent-light'>
				<div className='flex justify-center items-center h-full w-1/5 bg-secondary uppercase font-bold text-xl'>
					<TeamRoleDisplay value='Damage' />
				</div>
			</div>
			<div className='flex w-full h-28 bg-accent-light'>
				<div className='flex justify-center items-center h-full w-1/5 bg-secondary uppercase font-bold text-xl'>
					<TeamRoleDisplay value='Support' />
				</div>
			</div>
			<div className='flex w-full h-28 bg-accent-light'>
				<div className='flex justify-center items-center h-full w-1/5 bg-secondary uppercase font-bold text-xl'>
					<TeamRoleDisplay value='Staff' />
				</div>
			</div>
		</div>
	);
};

export default TableRows;
