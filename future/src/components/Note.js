import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react';
import jwtDecode from 'jwt-decode';

export default function Note() {
    const jwtToken = localStorage.getItem('jwtToken');

    const getBookMarks = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            const notes = decodedToken.user.notes;
            return notes;
        } catch (error) {
            console.error('Error decoding token:', error);
            return [];
        }
    };

    const notes = jwtToken ? getBookMarks(jwtToken) : [];

    return (
        <Card p={3} m={4}>
            <CardHeader>
                <Heading size='md'>Your Notes</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    {notes && notes.map((note, index) => (
                        <Box key={index}>
                            <Heading size='xs' textTransform='uppercase'>
                                {note.major}
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {note.subfield}
                            </Text>
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
