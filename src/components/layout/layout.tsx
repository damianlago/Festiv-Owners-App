import { useUser } from '@auth0/nextjs-auth0/client';
import { Skeleton } from '@chakra-ui/react'
import AuthNavbar from './authNavbar';
import DefNavbar from './defNavbar';


export default function Layout( { children }: any ) {
  
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return( 
      <>
        <Skeleton mt={5} height='10px' />
        <Skeleton mt={2} height='15px' />
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