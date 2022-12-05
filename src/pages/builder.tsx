import Head from 'next/head';
import { GetServerSideProps } from 'next';
import CreateRosterContainer from "../components/builder/RosterBuilder";
import { useEffect, useState } from "react";
import initialData from "../initialData";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { client } from '../lib/client';

function TeamBuilder({ freeAgents }: any) {
  const [players, setPlayers] = useState(freeAgents);
  const [appState, setAppState] = useState(initialData);

  const addMultipleItems = (amount: number) => {
    let newItems = {};
    let newItemRow: any[] = [];
    for (let i = 0; i < amount; i++) {
      const itemName = `${players[i].username}`;
      const newItem = {
        [itemName]: {
          id: itemName,
          username: players[i].username,
          image: players[i].image,
        },
      };
      newItemRow = [...newItemRow, itemName];
      newItems = { ...newItems, ...newItem };
    }
    setAppState((prev) => ({
      ...prev,
      newDraft: {
        ...prev.newDraft,
        items: { ...newItems, ...prev.newDraft.items },
        rows: {
          ...prev.newDraft.rows,
          "row-tray": {
            ...prev.newDraft.rows["row-tray"],
            itemIds: [
              ...prev.newDraft.rows["row-tray"].itemIds,
              ...newItemRow,
            ],
          },
        },
      },
    }));
  };

  useEffect(() => {
    addMultipleItems(freeAgents.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freeAgents.length]);
  
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
      <CreateRosterContainer
        appState={appState}
        setAppState={setAppState}
      ></CreateRosterContainer>
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
