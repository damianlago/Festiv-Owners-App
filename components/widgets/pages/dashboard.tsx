import React from "react";
import AddEvent from "../comps/events/add";
import CardEvent from "../comps/events/card";
import { Heading, Box, Badge, Stack, Flex, Grid } from '@chakra-ui/react'

import { Event } from "../../../lib/class/events/eventClass";


export default function Dashboard({ data, user }: any) {

  if (data != null) {
    var eventsLengh = data?.model?.length;
    var eventsList = data?.model;//eventsLengh >= 4 ? data?.model?.slice(0, 4) : eventsLengh >= 1 ? data?.model : 0;
  }

  return (
    <>

      {/* Header - Add Event Btn */}
      <Flex mt={3} ml={5}>
        <Heading as='h1' size='2xl'>
          Events
        </Heading>
        <Box ml={3} mt={3}>
          <AddEvent user={user}/>
        </Box>
      </Flex>


      {/* List Events */}
      <Grid templateColumns={{base: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)"}} gap={6} mt='3.8em'>
        {eventsLengh == 0 || eventsList == 0
          ?
          <p>Crea un Evento</p>
          :
          eventsList?.map((doc: Event) => (
            <Box mt='1.5em' ml={1} key={doc.id}>
              <CardEvent data={doc} />
            </Box>
            // <Link href={`${encodeURIComponent(doc.userId.toString())}/event/${encodeURIComponent(doc.id.toString())}`}> <p>{doc.eventName}</p></Link>
          ))}
      </Grid>


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
