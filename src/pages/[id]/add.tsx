import { Card, Input, Textarea, Text, Button, Row, Grid } from "@nextui-org/react";
import { useForm, Controller } from 'react-hook-form';
import { middleware } from "../../lib/db/middleware";
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Link from "next/link";
import { Center } from '@chakra-ui/react'


export default withPageAuthRequired(function addEvent() {

    const router = useRouter();
    const user = router?.query?.id;

    const defaultValues = {
        userId: user,
        state: 0,
        eventName: "",
        description: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        img: ""
    };

    //Add validation
    const validateData = {}

    //React-Hook-Forms Control
    const { handleSubmit, register, control, reset, setValue } = useForm({ defaultValues });

    const onSubmit = async (data: any) => {
        const method = "add";
        const apiRoute = `/api/user/events/event?params=${method}id=${user}`
        middleware(data, apiRoute)
            .then((data) => {
                if (data != null) {
                    console.log("Event Data Added -> ", data);
                }
                router.push(`/${user}/${data?.model?.id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Center py={8}>
                <Card css={{ mw: "330px" }}>
                    <form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
                        <Card.Header>
                            <Text b>Event Information</Text>
                        </Card.Header>
                        <Card.Divider />
                        <Card.Body css={{ py: "$10" }}>
                            <Controller
                                name="eventName"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) =>
                                    <Input
                                        label="Name"
                                        type="text"
                                        {...field}
                                    />
                                }
                            />

                            <Grid.Container gap={2} justify="center">
                                <Grid >
                                    <Controller
                                        name="startDate"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) =>
                                            <Input
                                                label="Start Date"
                                                type="date"
                                                {...field}
                                            />
                                        }
                                    />
                                </Grid>
                                <Grid justify="flex-end">
                                    <Controller
                                        name="startTime"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) =>
                                            <Input
                                                label="Start Time"
                                                type="time"
                                                {...field}
                                            />
                                        }
                                    />
                                </Grid>
                            </Grid.Container>

                            <Grid.Container gap={2} justify="center">
                                <Grid >
                                    <Controller
                                        name="endDate"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) =>
                                            <Input
                                                label="End Date"
                                                type="date"
                                                {...field}
                                            />
                                        }
                                    />
                                </Grid>
                                <Grid justify="flex-end">
                                    <Controller
                                        name="endTime"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) =>
                                            <Input
                                                label="End Time"
                                                type="time"
                                                {...field}
                                            />
                                        }
                                    />
                                </Grid>
                            </Grid.Container>

                            <Controller
                                name="description"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) =>
                                    <Textarea
                                        label="Description"
                                        placeholder="..."
                                        {...field}
                                    />
                                }
                            />

                            
                        </Card.Body>
                        <Card.Footer>
                            <Row justify="flex-end">
                                <Link href="/"><Button size="sm" light>Cancel</Button></Link>
                                <Button type="submit" size="sm">Create</Button>
                            </Row>
                        </Card.Footer>
                    </form>
                </Card>
            </Center>
        </>
    );
});