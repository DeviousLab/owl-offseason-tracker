import TeamRoleDisplay from "../team/TeamRoleDisplay";

function RowHeading({ letter }) {
  return (
				<div className='flex justify-center items-center w-48 h-32 bg-secondary uppercase font-bold md:text-xl text-md text-white'>
					<TeamRoleDisplay value={letter} />
				</div>
  );
}

export default RowHeading;
