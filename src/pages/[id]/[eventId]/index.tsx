import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';
import { fetcher } from "../../../lib/db/fetcher";
import { useRouter } from "next/router";


export default withPageAuthRequired(function eventPage() {

    const router = useRouter();
    const id = router?.query?.eventId || "";

    var method = "getOne";
    const { data } = useSWR(`/api/user/events/event?params=${method}id=${id}`, fetcher);

    return (
        <>
            <Tabs variant='soft-rounded' colorScheme='gray'>

                <TabList>
                    <Tab>Data</Tab>
                    <Tab>Tickets</Tab>
                    <Tab>Team</Tab>
                    <Tab>Settings</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>four!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
});