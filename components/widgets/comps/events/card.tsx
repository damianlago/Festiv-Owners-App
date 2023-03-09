import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import { CalendarIcon, EditIcon } from '@chakra-ui/icons'



export default function cardEvent({ data }: any) {

    var image = data.image;
    return (
        <Box
            role={'group'}
            p={6}
            maxW={'16rem'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            >
            <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'10rem'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${image})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(28px)',
                    },
                }}>
                <Image
                    rounded={'lg'}
                    height={'12rem'}
                    width={'14rem'}
                    objectFit={'cover'}
                    src={image}
                />
            </Box>
            <Stack pt={8}>
                <Box display="flex" mt={2} justifyContent={'space-between'}>
                    <Text color={'gray.500'} fontSize={'0.73rem'} textTransform={'uppercase'}>
                        <CalendarIcon /> {data.date}
                    </Text>
                    <Text color={'gray.500'} fontSize={'0.71rem'} textTransform={'uppercase'}>
                        <CalendarIcon /> {data.adress}
                    </Text>
                </Box>
                <Box display="flex" justifyContent={'center'}>
                    <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>
                        {data.eventName.length <= 25 ? data.eventName : data.eventName.slice(0, 25) + "..."}
                    </Heading>
                </Box>
                {/* <Stack direction={'row'} align={'center'}> */}
                {/* <Text fontWeight={800} fontSize={'xl'} mr={5}>
                           <EditIcon /> Edit
                        </Text>
                        <Text fontWeight={800} fontSize={'xl'}>
                            Publish
                        </Text> */}
                {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text> */}
                {/* </Stack> */}
            </Stack>
        </Box>
    );
}