import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button } from '@chakra-ui/react';
import Details from './config/details';

export default function eventPage({ event }: any) {

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
                        <Details event={event}/>
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
}