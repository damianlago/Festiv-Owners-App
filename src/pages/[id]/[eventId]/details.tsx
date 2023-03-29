import { Card, Input, Textarea, Text, Button, Row, Collapse, Grid } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { Center, Spacer } from '@chakra-ui/react'
import { handlerImg } from "../../../lib/db/handlerImg";


export default withPageAuthRequired(function addEvent() {

    const router = useRouter();
    const user = router?.query?.id;

    const handleImg = (data: any) => {
        data.preventDefault();
        const file = data.target[0]?.files[0];

        if (!file) return null;
        
        const res = handlerImg(file)
        if (res == 0) 
        {
            console.log("IMG Uploaded");
        }
        else
        {
            console.log("Error uploading img");
        }
    }


    return (
        <>
            <Center py={3}>
                <Collapse.Group splitted>
                    <Collapse title="Event Information" bordered shadow>

                    </Collapse>

                    <Collapse title="Details" bordered shadow>
                        
                    </Collapse>

                    <Collapse title="Music & Artist" bordered shadow>
                       
                    </Collapse>

                    <Collapse title="Media" bordered shadow>
                        <form onSubmit={(data: any) => handleImg(data)}>
                            <Input
                                aria-label="Flyer"
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
                            <Button type="submit" size="sm">Upload</Button>
                        </form>
                    </Collapse>
                </Collapse.Group>
            </Center>
        </>
    );
});