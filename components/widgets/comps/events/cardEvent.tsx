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


const image = 'https://discotecasgratis.com/img/uploads/Property/32/PropertyPicture/large/1568026093_stardust.jpg';

export default function ProductSimple() {
    return (
        <Box
            role={'group'}
            p={6}
            maxW={'300px'}
            // maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
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
                        filter: 'blur(20px)',
                    },
                }}>
                <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={image}
                />
            </Box>
            <Stack pt={8} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                   <CalendarIcon/> 04-03-2023 -  Sala Cool
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    Stardust: Nole + Matrixman
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'} mr={5}>
                       <EditIcon /> Edit
                    </Text>
                    <Text fontWeight={800} fontSize={'xl'}>
                        Publish
                    </Text>
                    {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                            $199
                        </Text> */}
                </Stack>
            </Stack>
        </Box>
    );
}