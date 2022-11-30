import { GetServerSideProps } from "next"
import Head from "next/head"

import Header from "../components/Header"
import Footer from "../components/Footer"
import PlayerTable from "../components/lft/PlayerTable"
import { client } from "../lib/client"

const FreeAgents = ({ lftPlayers }: any) => {
  return (
    <>
      <Head>
        <title>OWL Off-Season Tracker | Free Agents</title>
        <meta name="description" content="Off-season tracker for roster changes in the teams within the Overwatch League" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="font-Industry font-bold py-4 text-black text-center text-3xl mt-6 uppercase dark:text-white underline decoration-primary">Current Free Agents</h1>
      <p className="font-Industry text-justify py-4 text-black lg:w-[65rem] w-full text-xl lg:m-auto p-6 dark:text-white">
        This is a list of players and staff that are available to join a team (e.g. Team option declined or existing contract expired). This list is not exhaustive, and is only updated when a player is announced as a free agent.
      </p>
      <PlayerTable lftPlayers={lftPlayers} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '*[_type in ["player", "staff"] && currentStatus == "fa"] | order(lower(username) asc)';
  const lftPlayers = await client.fetch(query);
  return {
    props: {
      lftPlayers,
    }
  }
}

export default FreeAgents