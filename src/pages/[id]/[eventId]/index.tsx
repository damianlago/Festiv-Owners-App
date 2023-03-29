import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';
import { fetcher } from "../../../lib/db/fetcher";
import { useRouter } from "next/router";
import CardSettings from '@/components/widgets/cardSettings';
import { Grid, Text } from "@nextui-org/react";
import { Divider } from '@chakra-ui/react'


export default withPageAuthRequired(function eventPage() {

    const router = useRouter();
    const id = router?.query?.eventId || "";

    var method = "getOne";
    const { data } = useSWR(`/api/user/events/event?params=${method}id=${id}`, fetcher);

    const settings = [
        {
            "name": "Information",
            "descrip": "Event basic information",
            "src": "https://cdn.pixabay.com/photo/2016/04/22/14/31/info-1345871_640.png",
            "link": "/details"
        },
        {
            "name": "Tickets",
            "descrip": "Event basic information",
            "src": "http://cdn.onlinewebfonts.com/svg/img_396412.png",
            "link": "/tickets"
        },
        {
            "name": "Settings",
            "descrip": "Event basic information",
            "src": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png",
            "link": "/"
        }
    ];

    return (
        <>
            <Grid.Container gap={2}>
                {
                    settings?.map((item: any) => (
                        <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                                <CardSettings src={item.src} name={item.name} descrip={item.descrip} link={item.link}/>
                        </Grid>
                    ))}
            </Grid.Container>

            <Divider orientation='horizontal' />

            {/* Tabla (con los usuarios) y Chart (con las entradas vendidas) */}
        </>
    )
});