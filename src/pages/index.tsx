import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useUser } from '@auth0/nextjs-auth0/client';
import useSWR, { SWRConfig } from 'swr'
import { fetcher } from 'lib/db/fetcher';

import styles from '@/styles/Home.module.css'

import HomePage from "../../components/widgets/pages/home"
import Dashboard from "../../components/widgets/pages/dashboard"


const inter = Inter({ subsets: ['latin'] })

// export async function getStaticProps ( user: any ) {
  
//   const initialData = await fetcher(`http://localhost:3000/api/user/events/getAll/id=google-oauth2|103819905126483971158`);
  
//   return { 
//     props: { 
//       fallback: {
//         'http://localhost:3000/api/user/events/getAll/id=google-oauth2|103819905126483971158': initialData
//       } 
//       } 
//   };
// }

export default function Home(  ) {

  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <>
        <p>loading...</p>
      </>
    )
  }

  if (error) {
    return (
      <div>{error.message}</div>
    )
  }

  if (user) {
    
    const { data } = useSWR(`/api/user/events/getAll/id=${user?.sub}`, fetcher);

    return (
      <>
          <Dashboard data={data} user={user} />
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
