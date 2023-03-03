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
    Input
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';


export default function addEvent() {
   
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen} leftIcon={<AddIcon/>} rounded="full"  size='sm'>Add</Button>
        
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create New Event</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input ref={initialRef} placeholder='Name' />
                    </FormControl>
        
                    <FormControl mt={4}>
                        <FormLabel>Adress</FormLabel>
                        <Input placeholder='Adress' />
                    </FormControl>
                </ModalBody>
        
                <ModalFooter>
                    {/* <Button backgroundColor='#956ce3' colorScheme='#956ce3' mr={3}>Save</Button> */}
                    <Button backgroundColor='#956ce3' mr={3}>Save</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
      </>
    )
}