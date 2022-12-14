import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import { client, urlFor } from '../../lib/client';
import ProfileCard from '../../components/team/ProfileCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { teamColourProperties } from '../../components/team/TeamCard';

type Slug = {
	params: {
		slug: string;
	};
};

const TeamDetails: NextPage = ({ teamData, playersData, staffData }: any) => {
	const { name, background } = teamData;
	if (name === 'None') {
		return (
			<div>
				<h1>Nothing to see here bozo</h1>
			</div>
		);
	}
	return (
		<>
			<Head>
				<title>OWL Off-Season Tracker | {name}</title>
				<meta
					name='description'
					content='Off-season tracker for roster changes in the teams within the Overwatch League'
				/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<div className='pb-24 font-Industry'>
				<div className='flex flex-col text-center w-full mb-20 shadow-lg relative'>
					<Image
						src={urlFor(background).url()}
						width={1920}
						height={1080}
						alt='background'
						className='object-none object-center h-64 w-full -z-1 bg-[#EBECE7]'
					/>
					<h1
						className='text-5xl font-bold mb-4 tracking-wide text-center uppercase absolute h-full w-full inline-block top-1/2'
						style={{ color: teamColourProperties[name].backgroundColour }}
					>
						{name}
					</h1>
				</div>
				<h2 className='text-3xl font-bold mb-4 text-center px-24 text-gray-900 dark:text-gray-200 tracking-wide uppercase underline decoration-primary'>
					Current Roster
				</h2>
				<h3 className='text-2xl font-bold mb-4 px-24 text-center lg:text-left text-gray-900 dark:text-gray-200 tracking-wide uppercase'>
					Players
				</h3>
				<div className='flex flex-wrap -m-4 mx-auto px-20'>
					<ProfileCard members={playersData} />
				</div>
				<hr
					className='my-4 mx-auto w-48 h-1 rounded border-0 md:my-10'
					style={{ background: teamColourProperties[name].textColour }}
				></hr>
				<h3 className='text-2xl font-bold mb-4 px-24 text-center lg:text-left text-gray-900 dark:text-gray-200 tracking-wide uppercase'>
					Staff
				</h3>
				<div className='flex flex-wrap -m-4 mx-auto px-20'>
						<ProfileCard members={staffData}  />
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
			staffData,
		},
	};
};

export default TeamDetails;
