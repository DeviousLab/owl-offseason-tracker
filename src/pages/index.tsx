import Head from 'next/head'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'

import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RosterTable from '../components/RosterTable'
import { client } from '../lib/client'

const Home: NextPage = ({ rosterChanges }: any) => {
  return (
    <>
      <Head>
        <title>OWL Off-Season Tracker</title>
        <meta name="description" content="An off-season tracker for roster changes in the Overwatch League" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <RosterTable rosterChanges={rosterChanges} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = '*[_type == "rosterChanges"]';
  const rosterChanges = await client.fetch(query);
  console.log(rosterChanges)
  return {
    props: {
      rosterChanges,
    }
  }
}

export default Home