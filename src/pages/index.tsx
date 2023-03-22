import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0/client';
import router from 'next/router'

export default function Home() {

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
    router.push(`${user?.sub}`);
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
        Main Content
      </main>
    </>
  )
}