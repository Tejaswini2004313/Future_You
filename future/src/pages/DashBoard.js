import React, { useState, useEffect } from 'react';
import { Box, Flex, Input, InputGroup, InputRightElement, IconButton, Stack, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Card, CardHeader, Image, Avatar, Heading, Button, CardFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function DashBoard() {
    const [careersData, setCareersData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch('http://localhost:8082/api/career')
            .then((response) => response.json())
            .then((data) => {
                // Set the fetched data to the state
                setCareersData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);

    };

    return (
        <Box p={4} width="100%">
            <Flex align="center" justify="center" direction="column">
                {/* Search Box */}
                <Box mb={4} width="70%">
                    <InputGroup>
                        <Input placeholder="Search" value={searchValue} onChange={handleSearchChange} />
                        <InputRightElement>
                            <Link to={`/major/${searchValue}`}>
                                <IconButton icon={<SearchIcon />} />
                            </Link>
                        </InputRightElement>
                    </InputGroup>
                </Box>

                <Box width="75%" p={5}>
                    <Stack spacing={4}>
                        <Flex align="center" justify="center">
                            {careersData.map((career, index) => (
                                <Card key={index} m={'5'} width="400px" align='center'>
                                    <CardHeader>
                                        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                                            <Box>
                                                <Heading size="md">{career.name}</Heading>
                                            </Box>
                                        </Flex>
                                    </CardHeader>

                                    <Image height="300px" src={career.image} alt="Career Image" />

                                    <CardFooter justify="space-between" flexWrap="wrap">
                                        {/* Use the searchValue in the to attribute of the Link */}
                                        <Button flex="1" variant="ghost">
                                            <Link to={`/major/${career.name}`}> Explore </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
}
