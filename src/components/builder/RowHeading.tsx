import TeamRoleDisplay from "../team/TeamRoleDisplay";

function RowHeading({ letter }) {
  return (
				<div className='flex justify-center items-center h-28 bg-secondary uppercase font-bold text-xl'>
					<TeamRoleDisplay value={letter} />
				</div>
  );
}

export default RowHeading;
