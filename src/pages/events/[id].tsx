import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button } from '@chakra-ui/react';
import EventPage from '../../../components/widgets/pages/eventPage'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import { fetcher } from 'lib/db/fetcher';

export default withPageAuthRequired(function eventPage({ user }) {

    const router = useRouter();
    const { data } = useSWR(`/api/user/events/getOneById/id=${router?.query?.id}`, fetcher)

    if (data) {
        return (
            <>
                <EventPage data={data}  />
            </>
        )
    }

    return (
        <>
            Error: Event Dont  - Fix show this fetching data in ssrr
        </>
    )
})