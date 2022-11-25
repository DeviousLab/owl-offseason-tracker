import { NextPage } from 'next';
import Image from 'next/image';

import { client, urlFor } from '../../lib/client';
import ProfileCard from '../../components/team/ProfileCard';
import Header from "../../components/Header"
import Footer from "../../components/Footer"

type Slug = {
	params: {
		slug: string;
	};
};

const TeamDetails: NextPage = ({ teamData, playersData, staffData }: any) => {
	const { name, background } = teamData;
	return (
    <>
    <Header />
		<div className='pb-24 font-Industry'>
			<div className='flex flex-col text-center w-full mb-20 shadow-lg relative'>
        <Image src={urlFor(background).url()} width={1920} height={1080} alt="background" className='object-none object-center h-64 w-full -z-10 bg-[#EBECE7]' />
				<h1 className='text-5xl font-bold mb-4 text-gray-900 tracking-wide uppercase absolute h-full w-full inline-block top-1/2'>
					{name}
				</h1>
			</div>
			<h2 className='text-2xl font-bold mb-4 px-24 text-gray-900 tracking-wide uppercase underline decoration-primary'>
				Players
			</h2>
			<div className='flex flex-wrap -m-4 mx-auto px-20'>
        {playersData.map((player: any) => <ProfileCard members={playersData} key={player._id}/>)}
			</div>
      <hr className="my-4 mx-auto w-48 h-1 bg-gray-800 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
			<h2 className='text-2xl font-bold mb-4 px-24 text-gray-900 tracking-wide uppercase underline decoration-primary'>
				Staff
			</h2>
			<div className='flex flex-wrap -m-4 mx-auto px-20'>
        {staffData.map((staff: any) => <ProfileCard members={staffData} key={staff._id} />)}
			</div>
		</div>
    <Footer />
    </>
	);
};

export const getStaticPaths = async () => {
	const teamQuery = `*[_type == "team"] {
    slug {
      current
    }
  }
  `;
	const teamData = await client.fetch(teamQuery);
	const paths = teamData.map((team: any) => ({
		params: { slug: team.slug.current },
	}));
	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params: { slug } }: Slug) => {
	const teamQuery = `*[_type == "team" && slug.current == "${slug}"][0]`;
	const teamData = await client.fetch(teamQuery);

  const playersQuery = `*[_type == "player" && references(*[_type == "team" && slug.current == "${slug}"][0]._id)]`;
  const playersData = await client.fetch(playersQuery);

  const staffQuery = `*[_type == "staff" && references(*[_type == "team" && slug.current == "${slug}"][0]._id)]`;
  const staffData = await client.fetch(staffQuery);

	return {
		props: {
			teamData,
      playersData,
      staffData
		},
	};
};

export default TeamDetails;
