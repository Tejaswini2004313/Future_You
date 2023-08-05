import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading, Text, Button } from '@chakra-ui/react';
import { Box, Flex, Stack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export default function Major() {
    const { major } = useParams();
    const [majorsData, setmajorsData] = useState([]);
    console.log(major);
    const capMajor = major.charAt(0).toUpperCase() + major.slice(1);

    useEffect(() => {
        fetch(`http://localhost:8082/api/career/${capMajor}`) // Remove the colon from here
            .then((response) => response.json())
            .then((data) => {
                // Set the fetched data to the state
                setmajorsData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    // console.log(majorsData);
    return (
        <Card align='center'>
            <CardHeader>
                <Heading size='md'> Explore {capMajor}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{majorsData.description}</Text>

                <Box>
                    <Stack spacing={4}>
                        <Flex align="center" justify="center">
                            {majorsData.subFields.map((subfield, index) => (
                                <Card key={index} m={'5'} width="300px" align='center'>
                                    <CardHeader>
                                        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                                            <Box>
                                                <Heading size="md">{subfield.name}</Heading>
                                            </Box>
                                        </Flex>
                                    </CardHeader>

                                    <Image height="300px" src={subfield.image} alt="subfield Image" />

                                    <CardFooter justify="space-between" flexWrap="wrap">
                                        {/* Use the searchValue in the to attribute of the Link */}
                                        <Button flex="1" variant="ghost">
                                            <Link to={`/major/${subfield.name}`}> Explore </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </Flex>
                    </Stack>
                </Box>


            </CardBody>

        </Card>
    );
}
