import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useUser } from '@auth0/nextjs-auth0/client';

import styles from '@/styles/Home.module.css'

import HomePage from "../../components/widgets/pages/home"
import Dashboard from "../../components/widgets/pages/dashboard"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return(
      <>
        <p>loading...</p>
      </>
    )
  }
  
  if (error) { 
    return(
      <div>{error.message}</div>
    )
  }

  if (user) {
    return(
      <>
        <Dashboard />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>App Festiv</title>
        <meta name="description" content="App Festiv" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  )
}