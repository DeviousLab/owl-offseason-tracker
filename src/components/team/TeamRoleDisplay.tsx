import Image from 'next/image';

import Support from '../../assets/support.png';
import Tank from '../../assets/tank.png';
import Damage from '../../assets/damage.png';
import Flex from '../../assets/flex.png';
import User from '../../assets/user.png';

type Props = {
	value: string;
};

const TeamRoleDisplay = ({ value }: Props) => {
  let role;
  switch (value) {
    case 'Support':
      role = Support;
      break;
    case 'Tank':
      role = Tank;
      break;
    case 'Damage':
      role = Damage;
      break;
    case 'Flex':
      role = Flex;
      break;
    default:
      role = User;
  }
	return (
		<>
      <div className='flex rounded-full py-1 px-2'>
        <Image src={role} alt={value} height={25} />
        {value}
      </div>
		</>
	);
};

export default TeamRoleDisplay;
