import React from "react";
import Link from "next/link";
import { EventModel } from "../../lib/model/eventModel";
import Card from "../../components/widgets/cardEvent"
import { Grid, Button, Badge, Container, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { fetcher } from "../../lib/db/fetcher";
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';


export default withPageAuthRequired(function Dashboard() {

    const router = useRouter();
    const user = router?.query?.id || "";

    var method = "getAll";
    const { data } = useSWR(`/api/user/events/event?params=${method}id=${user}`, fetcher);

    if (data != null) {
        var eventsList = data?.models;
    }

    return (
        <>

            <Button size="md" shadow color="primary" auto>
                <Link href={`${encodeURIComponent(user?.toString())}/add`}>
                    New Event
                </Link>
            </Button>

            {/* Buscador y Filtrar eventos */}

            <Spacer x={3} />

            <Grid.Container gap={2}>
                {
                    eventsList?.map((doc: EventModel) => (
                        <Grid xs={12} sm={4} md={4} lg={4} xl={3}>
                            {/* <Link href={`events/${encodeURIComponent(doc.id.toString())}`}> */}
                            <Card data={doc} />
                            {/* </Link> */}
                        </Grid>
                    ))}
            </Grid.Container>
        </>
    );

});
