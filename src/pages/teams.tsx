import { GetServerSideProps } from "next"

import Header from "../components/Header"
import Footer from "../components/Footer"
import TeamCard from "../components/team/TeamCard"
import { client } from "../lib/client"

const Team = ({ teams }: any) => {
  return (
    <>
      <Header />
      <h1 className="font-Industry font-bold text-black text-center text-3xl mt-6 uppercase">Overwatch League Teams</h1>
      <div className="my-8 mx-56 grid overflow-hidden grid-cols-4 grid-rows-2 gap-4">
        {teams.map((team: any) => <TeamCard key={team._id} team={team}/>)}
      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '*[_type == "team"]';
  const teams = await client.fetch(query);
  console.log()
  return {
    props: {
      teams,
    }
  }
}

export default Team