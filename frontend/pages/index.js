import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Summary from '../components/Summary'
import Title from '../components/Title'


export default function Home() {
  return (
    <>
     <Header />
     <Title heading="Nice Job" />
     <Summary />
    </>
  )
}
