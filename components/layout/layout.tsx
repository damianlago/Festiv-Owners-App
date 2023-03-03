import AuthNavbar from './navbar/authNavbar';
import DefNavbar from './navbar/defNavbar';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Skeleton } from '@chakra-ui/react'


export default function Layout( { children }: any ) {
  
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return( 
      <>
        <Skeleton mt={5} height='25px' />
        <Skeleton mt={2} height='20px' />
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
        <AuthNavbar children={children} user={user}/>
      </>
    )
  }

  return (
    <>
      <DefNavbar />
      {children}
    </>
  );
}