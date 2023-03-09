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
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import { useForm } from "react-hook-form";
import { middleware } from "../../../../lib/db/middleware";
import { useRouter } from 'next/router';


export default function addEvent({ user }: any) {

    const router = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure()
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