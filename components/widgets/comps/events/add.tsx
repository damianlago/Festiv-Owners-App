import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Slide,
    Box
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import { useForm } from "react-hook-form";
import { middleware } from "../../../../lib/db/middleware";
import { useRouter } from 'next/router';


export default function addEvent({ user }: any) {

    const router = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure()
    // const { isOpen, onToggle } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const defaultValues = {
        eventName: "",
        state: 0,
        userId: user.sub,
        createdDate: new Date(),
    };

    //Add validation
    const validateData = {}

    //React-Hook-Forms Control
    const { handleSubmit, register, control, reset, setValue } = useForm({ defaultValues });

    const onSubmit = async (data: any) => {
        const apiRoute = "/api/user/events/create/create";
        middleware(data, apiRoute)
            .then((data) => {
                if (data != null) {
                    console.log("Event Created -> ", data);
                    router.push(`/events/${data.model.id}`);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Button backgroundColor={'rgb(59 130 246)'} color={'#fff'} onClick={onOpen} leftIcon={<AddIcon />} _hover={{ backgroundColor: '#3E6DCB' }} rounded="full" size='sm'>Add</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay backdropFilter='blur(10px)' />
                <ModalContent>
                    <ModalHeader>Create New Event</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    required={true}
                                    variant='filled'
                                    placeholder='Name'
                                    {...register("eventName", { required: true, maxLength: 40 })}
                                />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button backgroundColor={'rgb(59 130 246)'} color={'#fff'} mr={3} type='submit' _hover={{ bg: '#3E6DCB' }} >Save</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

// import React, { useState } from 'react'
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     useDisclosure,
//     FormControl,
//     FormLabel,
//     Input,
//     Slide,
//     Box,
//     Alert,
//     CloseButton,
//     AlertIcon,
//     Stack,
//     Textarea,
//     HStack,
//     Switch,
//     Heading,
//     Center
// } from '@chakra-ui/react'
// import { AddIcon } from '@chakra-ui/icons';
// import { Controller, useForm } from "react-hook-form";
// import { middleware } from "../../../../lib/db/middleware";
// import { useRouter } from 'next/router';
// import { DayPicker } from 'react-day-picker';


// export default function addEvent({ user }: any) {

//     const router = useRouter();

//     const { isOpen, onToggle } = useDisclosure()
//     const [alert, setAlert] = useState(false);
//     const initialDays: Date[] = [];
//     const [days, setDays] = React.useState<Date[] | undefined>(initialDays);

//     const footer =
//         days && days.length > 0 ? (
//             <p>You selected {days.length} day(s).</p>
//         ) : (
//             <p>Please select one or more days.</p>
//         );

//     const initialRef = React.useRef(null)
//     const finalRef = React.useRef(null)

//     const defaultValues = {
//         eventName: "",
//         state: 0,
//         userId: user.sub,
//         createdDate: new Date(),
//         displayName: "",
//         description: "",
//         date: "",
//         startTime: "",
//         endTime: ""
//     };

//     //Add validation
//     const validateData = {}

//     //React-Hook-Forms Control
//     const { handleSubmit, register, control, reset, setValue } = useForm({ defaultValues });

//     const onSubmit = async (data: any) => {
//         const apiRoute = "/api/user/events/create/create";
//         middleware(data, apiRoute)
//             .then((data) => {
//                 if (data != null) {
//                     console.log("Event Created -> ", data);
//                     router.push(`/events/${data.model.id}`);
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     return (
//         <>

//             <Button onClick={onToggle} backgroundColor={'rgb(59 130 246)'} color={'#fff'} leftIcon={<AddIcon />} _hover={{ backgroundColor: '#3E6DCB' }} rounded="full" size='sm'>Click Me</Button>
//             <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
//                 <Center>
//                     <Box
//                         height={'full'}
//                         width={'full'}
//                         p='40px'
//                         color='black'
//                         mt='4'
//                         bg='white'
//                         rounded='md'
//                         shadow='md'
//                     >

//                         <form onSubmit={handleSubmit((data) => onSubmit(data))}>
//                             {/* Name */}
//                             <FormControl mt={2}>
//                                 <FormLabel>Name</FormLabel>
//                                 <Controller
//                                     name="displayName"
//                                     control={control}
//                                     rules={{ required: true }}
//                                     render={({ field }) =>
//                                         <Input
//                                             placeholder={'Name'}
//                                             variant={'filled'}
//                                             _placeholder={{ color: 'gray.900' }}
//                                             type="text"
//                                             {...field}
//                                         />
//                                     }
//                                 />
//                             </FormControl>

//                             {/* Date */}
//                             <FormControl mt={1}>
//                                 <Center>
//                                     <Controller
//                                         name="date"
//                                         control={control}
//                                         rules={{ required: true }}
//                                         render={({ field }) =>
//                                             <DayPicker
//                                                 mode="multiple"
//                                                 min={1}
//                                                 selected={days}
//                                                 onSelect={setDays}
//                                                 footer={footer}
//                                                 {...field}
//                                             />}
//                                     />
//                                 </Center>
//                                 <HStack mt={4}>
//                                     <Box width={'full'}>
//                                         Start Time
//                                         <Controller
//                                             name="startTime"
//                                             control={control}
//                                             rules={{ required: true }}
//                                             render={({ field }) =>
//                                                 <Input
//                                                     placeholder="Select start time"
//                                                     variant={'filled'}
//                                                     _placeholder={{ color: 'gray.500' }}
//                                                     type="time"
//                                                     {...field}
//                                                 />}
//                                         />
//                                     </Box>
//                                     <Box width={'full'}>
//                                         End Time
//                                         <Controller
//                                             name="endTime"
//                                             control={control}
//                                             rules={{ required: true }}
//                                             render={({ field }) =>
//                                                 <Input
//                                                     placeholder="Select end time"
//                                                     variant={'filled'}
//                                                     _placeholder={{ color: 'gray.500' }}
//                                                     type="time"
//                                                     {...field}
//                                                 />}
//                                         />
//                                     </Box>
//                                 </HStack>
//                                 {/* <Tabs variant='soft-rounded' colorScheme='gray'>
//                             <TabList>
//                                 <Tab _selected={{ color: 'black', bg: 'blackAlpha.100' }} >
//                                     <Heading size={'sm'} fontWeight={500}> One Date </Heading >
//                                 </Tab>
//                                 <Tab _selected={{ color: 'black', bg: 'blackAlpha.100' }}>
//                                     <Heading size={'sm'} fontWeight={500}> Multiple Dates</Heading >
//                                 </Tab>
//                             </TabList>

//                             <Divider mt={2} />

//                             <TabPanels>
//                                 <TabPanel>
//                                     <Controller
//                                         name="date"
//                                         control={control}
//                                         rules={{ required: true }}
//                                         render={({ field }) =>
//                                             <Input
//                                                 variant={'filled'}
//                                                 _placeholder={{ color: 'gray.500' }}
//                                                 type="date"
//                                                 {...field}
//                                             // value={'2023-03-31'}
//                                             />}
//                                     />

//                                     <HStack mt={2}>
//                                         <Box width={'full'}>
//                                             Start Time
//                                             <Controller
//                                                 name="startTime"
//                                                 control={control}
//                                                 rules={{ required: true }}
//                                                 render={({ field }) =>
//                                                     <Input
//                                                         placeholder="Select start time"
//                                                         variant={'filled'}
//                                                         _placeholder={{ color: 'gray.500' }}
//                                                         type="time"
//                                                         {...field}
//                                                     />}
//                                             />
//                                         </Box>
//                                         <Box width={'full'}>
//                                             End Time
//                                             <Controller
//                                                 name="endTime"
//                                                 control={control}
//                                                 rules={{ required: true }}
//                                                 render={({ field }) =>
//                                                     <Input
//                                                         placeholder="Select end time"
//                                                         variant={'filled'}
//                                                         _placeholder={{ color: 'gray.500' }}
//                                                         type="time"
//                                                         {...field}
//                                                     />}
//                                             />
//                                         </Box>
//                                     </HStack>
//                                 </TabPanel>

//                                 <TabPanel>
//                                     <Box>
//                                         Start
//                                         <HStack mt={1}>
//                                             <Box width={'full'}>
//                                                 <Input
//                                                     placeholder="Select Date"
//                                                     variant={'filled'}
//                                                     _placeholder={{ color: 'gray.500' }}
//                                                     type="date"
//                                                 />
//                                             </Box>
//                                             <Box width={'full'}>
//                                                 <Input
//                                                     placeholder="Select start time"
//                                                     variant={'filled'}
//                                                     _placeholder={{ color: 'gray.500' }}
//                                                     type="time"
//                                                 />
//                                             </Box>

//                                         </HStack>
//                                     </Box>
//                                     <Box mt={2}>
//                                         End
//                                         <HStack mt={1}>
//                                             <Box width={'full'}>
//                                                 <Input
//                                                     placeholder="Select Date"
//                                                     variant={'filled'}
//                                                     _placeholder={{ color: 'gray.500' }}
//                                                     type="date"
//                                                 />
//                                             </Box>
//                                             <Box width={'full'}>
//                                                 <Input
//                                                     placeholder="Select start time"
//                                                     variant={'filled'}
//                                                     _placeholder={{ color: 'gray.500' }}
//                                                     type="time"
//                                                 />
//                                             </Box>

//                                         </HStack>
//                                     </Box>
//                                 </TabPanel>
//                             </TabPanels>

//                             <Divider mt={2} />
//                         </Tabs> */}
//                             </FormControl>

//                             {/* Adress */}
//                             <FormControl mt={4}>
//                                 <FormLabel>Adress</FormLabel>
//                                 <HStack mt={2}>
//                                     <Box width={'55%'}>
//                                         <Input
//                                             placeholder="Adress"
//                                             variant={'filled'}
//                                             _placeholder={{ color: 'gray.900' }}
//                                             type="text"
//                                         />
//                                     </Box>
//                                     <Box width={'45%'}>
//                                         <Box display={'flex'} ml={4}>
//                                             <Switch mt={1} />
//                                             <Heading ml={3} size={'1rem'} fontWeight={400}>Secret Adress</Heading >
//                                         </Box>
//                                     </Box>
//                                 </HStack>
//                             </FormControl>

//                             {/* Description */}
//                             <FormControl mt={4}>
//                                 <FormLabel>Description</FormLabel>
//                                 <Controller
//                                     name="description"
//                                     control={control}
//                                     rules={{ required: true }}
//                                     render={({ field }) =>
//                                         <Textarea
//                                             placeholder="Additional information..."
//                                             variant={'filled'}
//                                             _placeholder={{ color: 'gray.500' }}
//                                             {...field}
//                                         />} />
//                             </FormControl>

//                             {/* Flyer */}
//                             <FormControl mt={4}>
//                                 <FormLabel>Flyer</FormLabel>
//                                 <Input
//                                     placeholder="Flyer"
//                                     variant={'filled'}
//                                     _placeholder={{ color: 'gray.900' }}
//                                     sx={{
//                                         "::file-selector-button": {
//                                             height: 10,
//                                             padding: 0,
//                                             mr: 4,
//                                             background: "none",
//                                             border: "none",
//                                         },
//                                     }}
//                                     type="file"
//                                 />
//                             </FormControl>

//                             {/* Button */}
//                             <Stack mt={4} align={'flex-end'}>
//                                 <Button
//                                     bg={'rgb(59 130 246)'}
//                                     color={'white'}
//                                     w="30%"
//                                     _hover={{
//                                         bg: '#3E6DCB'
//                                     }}
//                                     type='submit'>
//                                     Save
//                                 </Button>
//                             </Stack>

//                             {
//                                 alert &&
//                                 <Alert status='success' mt={4}>
//                                     <AlertIcon />
//                                     <Box mr={10}>
//                                         Data updated succesfull!
//                                     </Box>
//                                     <CloseButton
//                                         alignSelf='flex-start'
//                                         position='relative'
//                                         right={-1}
//                                         top={-1}
//                                         onClick={() => setAlert(false)}
//                                     />
//                                 </Alert>
//                             }

//                         </form>

//                     </Box>
//                 </Center>
//             </Slide>

//         </>
//     )
// }