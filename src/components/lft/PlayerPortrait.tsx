import Image from 'next/image';
import { urlFor } from '../../lib/client';

const PlayerPortrait = ({ value }: any) => {
	return (
		<>
      <div className='flex shrink-0 bg-gray-300 rounded'>
        <Image src={urlFor(value).url()} alt='Player picture' className='max-w-none' height={60} width={60} />
      </div>
		</>
	);
};

export default PlayerPortrait;
