import Image from 'next/image';
import { urlFor } from '../../lib/client';

const PlayerPortrait = ({ value }: any) => {
	return (
		<>
      <div className='flex justify-center align-middle'>
        <Image src={urlFor(value).url()} alt='Player picture' height={50} width={50} />
      </div>
		</>
	);
};

export default PlayerPortrait;
