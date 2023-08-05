import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from '@chakra-ui/react';
import { Heading, Stack, Box, Text } from '@chakra-ui/react';


export default function Notes() {
    const [Notes, setNotes] = useState(null); // State to store Note data
    const [fetchingNotes, setFetchingNotes] = useState(false); // State to track if Notes are being fetched

    const jwtToken = localStorage.getItem('jwtToken');

    const handleFetchNotes = async () => {
        try {
            setFetchingNotes(true);
            const response = await fetch('http://localhost:8082/api/showNotes', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            });
            const data = await response.json();
            console.log(data);
            setNotes(data); // Assuming the API returns an array of Note objects
        } catch (error) {
            console.error('Error fetching Notes:', error);
        } finally {
            setFetchingNotes(false);
        }
    };

    return (
        <Card p={3} m={4} boxShadow='md'>
            <CardHeader>
                <Heading size='md'>Your Notes</Heading>
            </CardHeader>

            <CardBody>
                <Stack spacing='4'>
                    {fetchingNotes ? (
                        <Text>Loading Notes...</Text>
                    ) : (
                        <Button onClick={handleFetchNotes}>Show Notes</Button>
                    )}
                    {Notes &&
                        Notes.notes.map((note) => (
                            <Box
                                p={4}
                                borderWidth='0.5px'
                                borderRadius='md'
                                borderColor='gray.200'

                                cursor='pointer'
                            >
                                <Heading size='xs' textTransform='uppercase'>
                                    {note.subfield}
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    {note.notes}
                                </Text>
                            </Box>
                        ))}
                </Stack>
            </CardBody>
        </Card>
    );
}
