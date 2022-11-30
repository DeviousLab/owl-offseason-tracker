import Head from 'next/head'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { client } from '../lib/client'
import { Droppable } from '../components/builder/Droppable'
import { Draggable } from '../components/builder/Draggable'
import { DndContext } from '@dnd-kit/core'
import TableRows from '../components/builder/TableRows'
import PlayerBank from '../components/builder/PlayerBank'

const TeamBuilder: NextPage = ({ freeAgents }: any) => {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      Go ahead, drag me.
    </Draggable>
  );
  function handleDragEnd({over}: any) {
    setParent(over ? over.id : null);
  }
  return (
    <>
      <Head>
        <title>OWL Off-Season Tracker | Fantasy Team Builder </title>
        <meta name="description" content="An off-season tracker for roster changes in the Overwatch League" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="font-Industry font-bold py-4 text-black text-center text-3xl mt-6 uppercase dark:text-white underline decoration-primary">Fantasy Team Builder</h1>
      <p className="font-Industry text-justify py-4 text-black lg:w-[65rem] w-full text-xl lg:m-auto p-6 dark:text-white">
        Build your own dream OWL team with all the free agents available! Drag and drop players into the role slots to see how your team would look.
      </p>
      <DndContext onDragEnd={handleDragEnd}>
      <TableRows />
      <PlayerBank freeAgents={freeAgents}/>      
      {!parent ? draggable : null}
      <Droppable id="droppable">
        {parent === "droppable" ? draggable : 'Drop here'}
      </Droppable>
    </DndContext>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '*[_type in ["player", "staff"] && currentStatus == "fa"]{username, image} | order(lower(username) asc)';
  const freeAgents = await client.fetch(query);
  console.log(freeAgents);
  return {
    props: {
      freeAgents,
    }
  }
}

export default TeamBuilder