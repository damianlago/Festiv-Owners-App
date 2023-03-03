import React from "react";
import AddEvent from "../comps/events/addEvent";
import CardEvent from "../comps/events/cardEvent";
import { Heading, Box, Badge, Stack, Flex } from '@chakra-ui/react'


export default function Dashboard() {


  return (
    <>
      {/* Header - Add Event */}
      <Flex mt={3} ml={5}>
        <Heading as='h1' size='2xl'>
          Events
        </Heading>
        <Box ml={3} mt={2}>
          <AddEvent />
        </Box>
      </Flex>

      {/* List Events */}
      <Box mt='3em' ml={2}>
      <CardEvent />
      </Box>

      {/* <Box>
        <Stack direction='row' ml={6} mt={3}>
          <Badge>DEFAULT</Badge>
          <Badge colorScheme='green'>ACTIVE</Badge>
          <Badge colorScheme='red'>PAST</Badge>
        </Stack>
      </Box> */}
    </>
  );
};