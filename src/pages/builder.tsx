import Head from 'next/head';
import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { client } from '../lib/client';
import TableRows from '../components/builder/TableRows';
import PlayerBank from '../components/builder/PlayerBank';
import PlayerBankCard from '../components/builder/PlayerBankCard';

const tableRows = [
	{
		id: 'row-1',
		title: 'Tank',
		itemIds: [],
	},
	{
		id: 'row-2',
		title: 'Damage',
		itemIds: [],
	},
	{
		id: 'row-3',
		title: 'Support',
		itemIds: [],
	},
	{
		id: 'row-4',
		title: 'Staff',
		itemIds: [],
	},
];

const TeamBuilder: NextPage = ({ freeAgents }: any) => {
  const [players, setPlayers] = useState(freeAgents);

  function handleOnDragEnd(result) {
    if(!result.destination) return;
    const items = Array.from(players);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPlayers(items);
  }
	return (
		<>
			<Head>
				<title>OWL Off-Season Tracker | Fantasy Team Builder </title>
				<meta
					name='description'
					content='An off-season tracker for roster changes in the Overwatch League'
				/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<h1 className='font-Industry font-bold py-4 text-black text-center text-3xl mt-6 uppercase dark:text-white underline decoration-primary'>
				Fantasy Team Builder
			</h1>
			<p className='font-Industry text-justify py-4 text-black lg:w-[65rem] w-full text-xl lg:m-auto p-6 dark:text-white'>
				Build your own dream OWL team with all the free agents available! Drag
				and drop players into the role slots to see how your team would look.
			</p>
			<DragDropContext onDragEnd={() => {}}>
				<div
					id='board'
					className='m-auto flex flex-col items-center justify-evenly p-3 w-[90vh] h-[60vh] bg-[#2c2c2c] rounded-md font-Industry'
				>
					{tableRows.map((tableRow: any) => (
						<Droppable droppableId={tableRow.id} key={tableRow.id}>
							{(provided) => (
								<div
									className='w-full'
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									<TableRows titles={tableRow.title} key={tableRow.id} />
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					))}
				</div>
				<PlayerBank>
					<Droppable droppableId='playerBank'>
						{(provided) => (
							<div
								className='grid lg:grid-cols-10 grid-cols-2 gap-2 p-1 w-[80vw] h-[30vh] bg-accent-light m-auto overflow-auto'
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{players.map((freeAgent: any, index: number) => (
									<Draggable
										draggableId={`${freeAgent._id}`}
										key={freeAgent._id}
										index={index}
									>
										{(provided) => (
											<div
												className='w-full'
												{...provided.draggableProps}
												ref={provided.innerRef}
                        {...provided.dragHandleProps}
											>
												<PlayerBankCard
													freeAgents={freeAgent}
													key={freeAgent._id}
												/>
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</PlayerBank>
			</DragDropContext>
			<Footer />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const query =
		'*[_type in ["player", "staff"] && currentStatus == "fa"] | order(lower(username) asc)';
	const freeAgents = await client.fetch(query);
	return {
		props: {
			freeAgents,
		},
	};
};

export default TeamBuilder;
