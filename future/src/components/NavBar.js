import React from 'react';
import {
    Box,
    Flex,
    Spacer,
    Image,
    Text,
    Avatar,
    Button,
    Heading

} from '@chakra-ui/react';
import LoginSignUp from './UserSignLogin.js';
import { Link } from 'react-router-dom';
import User from './User.js';

const Navbar = () => {
    return (
        <Box boxShadow="lg" p={5}>
            <Flex mx="auto" align="center">
                <Box>
                    <Link to={'/'}> <Heading size="md" fontWeight="semibold" color="blue.500">Future You</Heading></Link>

                </Box>
                <Flex ml={10} >

                    <Link to={'/about'}> <Text mr={4}>About</Text> </Link >
                    <Link to={'/dashboard'} ><Text>Let's Start</Text> </Link>
                </Flex>
                <Spacer />
                <Box alignItems="center">
                    <User />
                </Box>
            </Flex>
        </Box>
    );
};



export default Navbar;
