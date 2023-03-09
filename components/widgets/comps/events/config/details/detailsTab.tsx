import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Stack,
    HStack,
    Select,
} from '@chakra-ui/react';
import SelectReact from 'react-select';

export default function details() {

    var ages = ["No age", "+18", "+19", "+20", "+21", "+22", "+23", "+24", "+25", "+26", "+27", "+28"];
    var dresscode = ["No Dresscode", "Casual", "Classy"];
    var musicType = [
        { label: "Techno", value: "Techno" },
        { label: "Hardcore", value: "Hardcore" },
        { label: "House", value: "House" },
        { label: "Trap", value: "Trap" },
        { label: "Comercial", value: "Comercial" },
        { label: "Salsa", value: "Salsa" },
        { label: "Bachata", value: "Bachata" },
        { label: "Latino", value: "Latino" },
        { label: "Pop", value: "Pop" } 
    ];

    return (
        <>
            {/* Min Age - DressCode */}
            <FormControl mt={2}>
                <HStack mt={2}>
                    <Box width={'full'}>
                        <FormLabel>Age</FormLabel>
                        <Select variant={'filled'} defaultValue={"+18"}>
                            {ages.map((index, age) => (
                                <option key={index} value={age}>{age}</option>
                            ))}
                        </Select>
                    </Box>
                    <Box width={'full'}>
                        <FormLabel>Dresscode</FormLabel>
                        <Select variant={'filled'} defaultValue={"No Dresscode"}>
                            {dresscode.map((index, dresscode) => (
                                <option key={index} value={dresscode}>{dresscode}</option>
                            ))}
                        </Select>
                    </Box>
                </HStack>
            </FormControl>

            {/* Music Type */}
            <FormControl mt={4}>
                <FormLabel>Music</FormLabel>
                <SelectReact
                    isMulti
                    name="musicType"
                    options={musicType.length === 1 ? [] : musicType}
                />
            </FormControl>

            {/* Button */}
            <Stack mt={4} align={'flex-end'}>
                <Button
                    bg={'rgb(59 130 246)'}
                    color={'white'}
                    w="30%"
                    _hover={{
                        bg: '#3E6DCB'
                    }}
                    type='submit'>
                    Save
                </Button>
            </Stack>
        </>
    )
}