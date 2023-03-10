import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button } from '@chakra-ui/react';
import EventPage from '../../../components/widgets/pages/eventPage'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import { fetcher } from 'lib/db/fetcher';



// export async function getStaticPaths() {

//     const router = useRouter();
    
//     return (
//         {
//             params: {
//                 id: router.query.id,
//             },
//         }
//     );
// }

// export async function getStaticProps( {path} : any ) {

//     const initialData = await fetcher(`/api/user/events/create/data/id=${path}`);

//     return {
//         props: {
//             initialData
//             // fallback: {
//             //     'http://localhost:3000/api/user/events/getAll/id=google-oauth2|103819905126483971158': initialData
//             // }
//         }
//     };
// }

export default withPageAuthRequired(function eventPage({ user }) {

    const router = useRouter();
    const { data } = useSWR(`/api/user/events/getOneById/id=${router?.query?.id}`, fetcher)

    if (data) {
        return (
            <>
                <EventPage event={data} />
            </>
        )
    }

    return (
        <>
            Error: Event Dont  - Fix show this fetching data in ssrr
        </>
    )
})