import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from '@chakra-ui/react';
import { Heading, Stack, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Bookmark() {
    const [bookmarks, setBookmarks] = useState(null); // State to store bookmark data
    const [fetchingBookmarks, setFetchingBookmarks] = useState(false); // State to track if bookmarks are being fetched

    const jwtToken = localStorage.getItem('jwtToken');

    const handleFetchBookmarks = async () => {
        try {
            setFetchingBookmarks(true);
            const response = await fetch('http://localhost:8082/api/showBookmark', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            });
            const data = await response.json();
            console.log(data);
            setBookmarks(data); // Assuming the API returns an array of bookmark objects
        } catch (error) {
            console.error('Error fetching bookmarks:', error);
        } finally {
            setFetchingBookmarks(false);
        }
    };

    return (
        <Card p={3} m={4}>
            <CardHeader>
                <Heading size='md'>Your Bookmarks</Heading>
            </CardHeader>

            <CardBody>
                <Stack spacing='4'>
                    {fetchingBookmarks ? (
                        <Text>Loading bookmarks...</Text>
                    ) : (
                        <Button onClick={handleFetchBookmarks}>Show Bookmarks</Button>
                    )}
                    {bookmarks &&
                        bookmarks.bookmarks.map((bookmark) => (
                            <Link key={bookmark._id} to={`/major/${bookmark.major}/${bookmark.subfield}`}>
                                <Box
                                    p={4}
                                    m={2}
                                    borderWidth='0.5px'
                                    borderRadius='md'

                                    _hover={{ shadow: 'md' }}
                                    cursor='pointer'
                                >
                                    <Heading size='xs' textTransform='uppercase'>
                                        {bookmark.subfield}
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        {bookmark.major}
                                    </Text>
                                </Box>
                            </Link>
                        ))}
                </Stack>
            </CardBody>
        </Card>
    );
}
