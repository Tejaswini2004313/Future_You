import React from 'react';
import jwtDecode from 'jwt-decode'; // Import the jwt-decode library
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
    Input,
    Avatar,
    Heading,
    Box
} from '@chakra-ui/react';
import LoginSignUp from './UserSignLogin';
import Bookmark from './Bookmark';
import Note from './Note';

export default function User() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    // Get the JWT token from localStorage
    const jwtToken = localStorage.getItem('jwtToken');

    // Function to handle logout
    const handleLogout = () => {
        // Clear the JWT token from localStorage
        localStorage.removeItem('jwtToken');
        onClose();
    };

    // Function to get the username from the JWT token
    const getUsernameFromToken = (token) => {
        try {
            // Decode the JWT token using jwt-decode
            const decodedToken = jwtDecode(token);

            // Extract the username from the decoded token
            const username = decodedToken.user.name;
            console.log(decodedToken)
            console.log(username)

            return username;
        } catch (error) {
            // Handle any decoding errors here
            console.error('Error decoding token:', error);
            return null;
        }
    };

    // Get the username from the token
    const username = jwtToken ? getUsernameFromToken(jwtToken) : null;
    const upperCase = username ? username.toUpperCase() : null;

    return (
        <>
            {jwtToken ? (
                <Button ref={btnRef} onClick={onOpen} variant="ghost">
                    <Avatar size="sm" name={upperCase} src="/path/to/avatar.jpg" />
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
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader><Avatar size="sm" name={upperCase} src="/path/to/avatar.jpg" /></DrawerHeader>

                    <DrawerBody>

                        <Heading as="h3" size="md" mb={4}>
                            Welcome, {upperCase}! 👋

                        </Heading>
                        {/* Display user's bookmarks */}
                        <Box>
                            <Bookmark />
                        </Box>

                        {/* Display user's notes */}
                        <Box>
                            <Note />
                        </Box>

                    </DrawerBody>

                    <DrawerFooter>

                        <Button colorScheme="red" onClick={handleLogout}>
                            Logout
                        </Button>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
