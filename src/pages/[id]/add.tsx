import { Card, Input, Textarea, Text, Button, Row } from "@nextui-org/react";
import { useForm, Controller } from 'react-hook-form';
import { middleware } from "../../lib/db/middleware";
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Link from "next/link";


export default withPageAuthRequired(function addEvent() {

    const router = useRouter();
    const user = router?.query?.id;

    const defaultValues = {
        userId: user,
        state: 0,
        eventName: "",
        description: "",
        dates: "",
        startTime: "",
        endTime: "",
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
                router.push(`${user}/${data?.model?.id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Card css={{ mw: "330px" }}>
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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

                        <Controller
                            name="dates"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <Input
                                    label="Date"
                                    type="date"
                                    {...field}
                                />
                            }
                        />

                        <Controller
                            name="startTime"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <Input
                                    label="StartTime"
                                    type="time"
                                    {...field}
                                />
                            }
                        />


                        <Controller
                            name="endTime"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <Input
                                    label="EndTime"
                                    type="time"
                                    {...field}
                                />
                            }
                        />

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


                        <Input
                            label="Flyer"
                            type="file"
                            css={{
                                "::file-selector-button": {
                                    height: 20,
                                    padding: 0,
                                    mr: 4,
                                    background: "none",
                                    border: "none",
                                },
                            }}
                        />

                    </Card.Body>

                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>Cancel</Button>
                            <Button type="submit" size="sm">Create</Button>
                        </Row>
                    </Card.Footer>
                </form>
            </Card>
        </>
    );
});