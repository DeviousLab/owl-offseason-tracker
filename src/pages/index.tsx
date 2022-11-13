import Head from 'next/head'
import Image from 'next/image'

import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}
