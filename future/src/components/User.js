import React from 'react';
import jwtDecode from 'jwt-decode';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Avatar,
    Heading,
    Box,
    Spacer,
    Flex,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi'; // Import the FiLogOut icon
import LoginSignUp from './UserSignLogin';
import Bookmark from './Bookmark';
import Note from './Note';

export default function User() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const jwtToken = localStorage.getItem('jwtToken');

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        onClose();
    };

    const getUsernameFromToken = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            const username = decodedToken.user.name;

            return username;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };

    const username = jwtToken ? getUsernameFromToken(jwtToken) : null;
    const upperCase = username ? username.toUpperCase() : null;

    return (
        <>
            {jwtToken ? (
                <Button
                    ref={btnRef}
                    onClick={onOpen}
                    variant="ghost"
                    size="sm"
                    fontSize="lg"
                    _focus={{ outline: 'none' }}
                >
                    <Avatar
                        size="sm"
                        name={upperCase}
                        src="/path/to/avatar.jpg"
                        _hover={{ opacity: 0.8 }}
                    />
                </Button>
            ) : (
                <LoginSignUp />
            )}

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg="gray.100">

                    <DrawerHeader borderBottomWidth="1px" bg="blue.500" color="white">
                        <Flex align="center">
                            <Avatar
                                size="sm"
                                name={upperCase}
                                src="/path/to/avatar.jpg"
                                mr={2}
                            />
                            <Heading as="h3" size="md">
                                Welcome, {upperCase}! 👋
                            </Heading>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <Box my={4}>
                            <Bookmark />
                        </Box>
                        <Box my={4}>
                            <Note />
                        </Box>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth="1px">
                        <Button
                            colorScheme="red"
                            leftIcon={<FiLogOut />}
                            onClick={handleLogout}
                            mr={2}
                            _hover={{ opacity: 0.8 }}
                        >
                            Logout
                        </Button>
                        <Spacer />
                        <Button onClick={onClose} _hover={{ opacity: 0.8 }}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
