import Image from 'next/image';

import Support from '../assets/support.png';
import Tank from '../assets/tank.png';
import Damage from '../assets/damage.png';
import Flex from '../assets/flex.png';
import User from '../assets/user.png';

type Props = {
	value: string;
};

const RoleDisplay = ({ value }: Props) => {
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
      <div className='flex justify-center align-middle'>
        <Image src={role} alt={value} height={25} />
        {value}
      </div>
		</>
	);
};

export default RoleDisplay;
