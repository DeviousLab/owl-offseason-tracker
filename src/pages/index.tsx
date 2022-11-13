import Head from 'next/head'
import { NextPage } from 'next'

import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
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
      <Footer />
    </>
  )
}

export default Home