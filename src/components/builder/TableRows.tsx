import TeamRoleDisplay from '../team/TeamRoleDisplay';

const TableRows = ({ titles }: { titles: string }) => {
	return (
			<div className='flex w-full h-28 bg-accent-light'>
				<div className='flex justify-center items-center h-full w-1/5 bg-secondary uppercase font-bold text-xl'>
					<TeamRoleDisplay value={titles} />
				</div>
			</div>
	);
};

export default TableRows;
