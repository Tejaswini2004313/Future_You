import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom'; // Import the Link component

export default function Bookmark() {
    const jwtToken = localStorage.getItem('jwtToken');

    const getBookMarks = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            const bookmarks = decodedToken.user.bookmark;
            return bookmarks;
        } catch (error) {
            console.error('Error decoding token:', error);
            return [];
        }
    };
    const bookmarks = jwtToken ? getBookMarks(jwtToken) : [];

    return (
        <Card p={3} m={4} boxShadow='md'> {/* Add boxShadow to create a shadow */}
            <CardHeader>
                <Heading size='md'>Your Bookmarks</Heading>
            </CardHeader>

            <CardBody>
                <Stack spacing='4'>
                    {bookmarks.map((bookmark, index) => (
                        // Wrap each bookmark in a Link component to make it clickable
                        <Link key={index} to={`/bookmark/${index}`}> {/* Replace `/bookmark/${index}` with your actual bookmark route */}
                            <Box
                                p={4}
                                borderWidth='1px'
                                borderRadius='md'
                                borderColor='gray.200'
                                _hover={{ shadow: 'md' }}
                                cursor='pointer'
                            >
                                <Heading size='xs' textTransform='uppercase'>
                                    {bookmark.major}
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    {bookmark.subfield}
                                </Text>
                            </Box>
                        </Link>
                    ))}
                </Stack>
            </CardBody>
        </Card>
    );
}
