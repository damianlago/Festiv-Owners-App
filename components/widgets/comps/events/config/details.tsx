import {
    Center,
    Heading,
    Stack,
    useColorModeValue,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/react';
import DataTab from "./details/dataTab"
import DetailsTab from "./details/detailsTab"
import OthersTab from "./details/othersTab"


export default function details({ event }: any) {

    return (
        <>
            <Center py={6}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                >
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                        Event Information
                    </Heading>
                    <Tabs colorScheme='gray'>

                        <TabList>
                            <Tab>
                                Data
                            </Tab>
                            <Tab>
                                Details
                            </Tab>
                            <Tab>
                                Others
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <DataTab event={event}/>
                            </TabPanel>

                            <TabPanel>
                                <DetailsTab />
                            </TabPanel>

                            <TabPanel>
                                <OthersTab />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Stack>
            </Center>
        </>
    );
}