import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { NextUIProvider } from '@nextui-org/react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from "../components/layout/layout";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider>
      <ChakraProvider>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </ChakraProvider>
    </NextUIProvider>

  );
}