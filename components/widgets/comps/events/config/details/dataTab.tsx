import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    HStack,
    Textarea,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Divider,
    Switch,
    Alert,
    AlertIcon,
    CloseButton,
    Center,
} from '@chakra-ui/react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { middleware } from 'lib/db/middleware';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import React from 'react';
import { format } from 'date-fns';


export default function data({ event }: any) {

    const router = useRouter();

    const initialDays: Date[] = [];
    const [days, setDays] = React.useState<Date[] | undefined>(initialDays);

    const footer =
        days && days.length > 0 ? (
            <p>You selected {days.length} day(s).</p>
        ) : (
            <p>Please pick one or more days.</p>
        );

    const defaultValues = {
        displayName: "",
        description: "",
        date: "",
        startTime: "",
        endTime: ""
    };

    const [alert, setAlert] = useState(false);

    //Add validation
    const validateData = {}

    //React-Hook-Forms Control
    const { handleSubmit, register, control, reset, setValue } = useForm({ defaultValues });

    const onSubmit = async (data: any) => {
        data.date = days?.toString(); //FORMAT DATE FOR CORRECT SAVE IN BD
        const apiRoute = `/api/user/events/create/data/id=${router?.query?.id}`;
        middleware(data, apiRoute)
            .then((data) => {
                if (data != null) {
                    console.log("Event Data Added -> ", data);
                    setAlert(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (event) {
        return (
            <>
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    {/* Name */}
                    <FormControl mt={2}>
                        <FormLabel>Name</FormLabel>
                        <Controller
                            name="displayName"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <Input
                                    placeholder={event.model.eventName}
                                    variant={'filled'}
                                    _placeholder={{ color: 'gray.900' }}
                                    type="text"
                                    {...field}
                                />
                            }
                        />
                    </FormControl>

                    {/* Date */}
                    <FormControl mt={1}>
                        <Center>
                            <DayPicker
                                mode="multiple"
                                min={1}
                                selected={days}
                                onSelect={setDays}
                                footer={footer}
                            />

                            {/* <Controller
                            name="date"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                            <DayPicker
                                mode="multiple"
                                min={1}
                                selected={days}
                                onSelect={setDays}
                                footer={footer}
                                {...field}
                            /> } 
                        /> */}
                        </Center>
                        <HStack mt={4}>
                            <Box width={'full'}>
                                Start Time
                                <Controller
                                    name="startTime"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) =>
                                        <Input
                                            placeholder="Select start time"
                                            variant={'filled'}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="time"
                                            {...field}
                                        />}
                                />
                            </Box>
                            <Box width={'full'}>
                                End Time
                                <Controller
                                    name="endTime"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) =>
                                        <Input
                                            placeholder="Select end time"
                                            variant={'filled'}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="time"
                                            {...field}
                                        />}
                                />
                            </Box>
                        </HStack>
                        {/* <Tabs variant='soft-rounded' colorScheme='gray'>
                            <TabList>
                                <Tab _selected={{ color: 'black', bg: 'blackAlpha.100' }} >
                                    <Heading size={'sm'} fontWeight={500}> One Date </Heading >
                                </Tab>
                                <Tab _selected={{ color: 'black', bg: 'blackAlpha.100' }}>
                                    <Heading size={'sm'} fontWeight={500}> Multiple Dates</Heading >
                                </Tab>
                            </TabList>

                            <Divider mt={2} />

                            <TabPanels>
                                <TabPanel>
                                    <Controller
                                        name="date"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) =>
                                            <Input
                                                variant={'filled'}
                                                _placeholder={{ color: 'gray.500' }}
                                                type="date"
                                                {...field}
                                            // value={'2023-03-31'}
                                            />}
                                    />

                                    <HStack mt={2}>
                                        <Box width={'full'}>
                                            Start Time
                                            <Controller
                                                name="startTime"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) =>
                                                    <Input
                                                        placeholder="Select start time"
                                                        variant={'filled'}
                                                        _placeholder={{ color: 'gray.500' }}
                                                        type="time"
                                                        {...field}
                                                    />}
                                            />
                                        </Box>
                                        <Box width={'full'}>
                                            End Time
                                            <Controller
                                                name="endTime"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) =>
                                                    <Input
                                                        placeholder="Select end time"
                                                        variant={'filled'}
                                                        _placeholder={{ color: 'gray.500' }}
                                                        type="time"
                                                        {...field}
                                                    />}
                                            />
                                        </Box>
                                    </HStack>
                                </TabPanel>

                                <TabPanel>
                                    <Box>
                                        Start
                                        <HStack mt={1}>
                                            <Box width={'full'}>
                                                <Input
                                                    placeholder="Select Date"
                                                    variant={'filled'}
                                                    _placeholder={{ color: 'gray.500' }}
                                                    type="date"
                                                />
                                            </Box>
                                            <Box width={'full'}>
                                                <Input
                                                    placeholder="Select start time"
                                                    variant={'filled'}
                                                    _placeholder={{ color: 'gray.500' }}
                                                    type="time"
                                                />
                                            </Box>

                                        </HStack>
                                    </Box>
                                    <Box mt={2}>
                                        End
                                        <HStack mt={1}>
                                            <Box width={'full'}>
                                                <Input
                                                    placeholder="Select Date"
                                                    variant={'filled'}
                                                    _placeholder={{ color: 'gray.500' }}
                                                    type="date"
                                                />
                                            </Box>
                                            <Box width={'full'}>
                                                <Input
                                                    placeholder="Select start time"
                                                    variant={'filled'}
                                                    _placeholder={{ color: 'gray.500' }}
                                                    type="time"
                                                />
                                            </Box>

                                        </HStack>
                                    </Box>
                                </TabPanel>
                            </TabPanels>

                            <Divider mt={2} />
                        </Tabs> */}
                    </FormControl>

                    {/* Adress */}
                    <FormControl mt={4}>
                        <FormLabel>Adress</FormLabel>
                        <HStack mt={2}>
                            <Box width={'55%'}>
                                <Input
                                    placeholder="Adress"
                                    variant={'filled'}
                                    _placeholder={{ color: 'gray.900' }}
                                    type="text"
                                />
                            </Box>
                            <Box width={'45%'}>
                                <Box display={'flex'} ml={4}>
                                    <Switch mt={1} />
                                    <Heading ml={3} size={'1rem'} fontWeight={400}>Secret Adress</Heading >
                                </Box>
                            </Box>
                        </HStack>
                    </FormControl>

                    {/* Description */}
                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Controller
                            name="description"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <Textarea
                                    placeholder="Additional information..."
                                    variant={'filled'}
                                    _placeholder={{ color: 'gray.500' }}
                                    {...field}
                                />} />
                    </FormControl>

                    {/* Flyer */}
                    <FormControl mt={4}>
                        <FormLabel>Flyer</FormLabel>
                        <Input
                            placeholder="Flyer"
                            variant={'filled'}
                            _placeholder={{ color: 'gray.900' }}
                            sx={{
                                "::file-selector-button": {
                                    height: 10,
                                    padding: 0,
                                    mr: 4,
                                    background: "none",
                                    border: "none",
                                },
                            }}
                            type="file"
                        />
                    </FormControl>

                    {/* Button */}
                    <Stack mt={4} align={'flex-end'}>
                        <Button
                            bg={'rgb(59 130 246)'}
                            color={'white'}
                            w="30%"
                            _hover={{
                                bg: '#3E6DCB'
                            }}
                            type='submit'>
                            Save
                        </Button>
                    </Stack>

                    {
                        alert &&
                        <Alert status='success' mt={4}>
                            <AlertIcon />
                            <Box mr={10}>
                                Data updated succesfull!
                            </Box>
                            <CloseButton
                                alignSelf='flex-start'
                                position='relative'
                                right={-1}
                                top={-1}
                                onClick={() => setAlert(false)}
                            />
                        </Alert>
                    }

                </form>
            </>
        )
    }

    return (
        <>
            Error
        </>
    )
}