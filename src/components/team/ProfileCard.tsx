import Image from 'next/image';
import { urlFor } from '../../lib/client';
import ProfileLinks from '../lft/ProfileLinks';
import TeamRoleDisplay from './TeamRoleDisplay';

const ProfileCard = ({ members }: any) => {
	return (
		<>
			{Object.entries(members).map(([key, value]) => {
				return (
					<div className='p-4 lg:w-1/2' key={key}>
						<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-gray-50 shadow'>
							<Image
								alt='team'
								width={450}
								height={450}
								className='flex-shrink-0 rounded-lg bg-gray-200 w-48 h-48 object-cover object-center sm:mb-0 mb-4'
								src={urlFor(members[key].image).url()}
							/>
							<div className='flex-grow sm:pl-8'>
								<h2 className='text-lg font-bold text-gray-900 uppercase'>
									{members[key].username}
								</h2>
								<h3 className='text-gray-500 mb-3'>{members[key].name}</h3>
								<div className='mb-4 bg-black text-white w-fit'>
									<TeamRoleDisplay value={members[key].role} />
								</div>
								<span className='inline-flex'>
									{members[key].role === 'Tank' ? (
										<ProfileLinks value={members[key]?.owlProfile} />
									)
										: members[key].role === 'Support' ? (
										<ProfileLinks value={members[key]?.owlProfile} />
										)
										: members[key].role === 'Damage' ? (
										<ProfileLinks value={members[key]?.owlProfile} />
										)
										: members[key].role === 'Flex' ? (
										<ProfileLinks value={members[key]?.owlProfile} />
										)
									: (
										''
									)}
									<ProfileLinks value={members[key]?.liquipedia} />
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ProfileCard;
