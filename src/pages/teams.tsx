import { GetServerSideProps } from "next"
import Head from "next/head"

import Header from "../components/Header"
import Footer from "../components/Footer"
import TeamCard from "../components/team/TeamCard"
import { client } from "../lib/client"

const Team = ({ teams }: any) => {
  return (
    <>
      <Head>
        <title>OWL Off-Season Tracker | Teams</title>
        <meta name="description" content="Off-season tracker for roster changes in the teams within the Overwatch League" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="font-Industry font-bold text-black dark:text-white p-4 text-center text-3xl mt-6 uppercase underline decoration-primary">Overwatch League Teams</h1>
      <div className="my-4 flex justify-center items-center">
      <div className="grid lg:grid-cols-4 grid-cols-2 grid-rows-2 gap-2">
        {teams.map((team: any) => <TeamCard key={team._id} team={team}/>)}
      </div>
      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '*[_type == "team"] | order(name asc)';
  const teams = await client.fetch(query);
  return {
    props: {
      teams,
    }
  }
}

export default Team