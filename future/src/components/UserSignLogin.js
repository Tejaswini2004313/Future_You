import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Avatar,
    Text,
    Spacer
} from '@chakra-ui/react';

function LoginSignUp() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLogin, setIsLogin] = React.useState(false); // State to track if it's login or signup
    const [name, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [noAcc, setAccount] = React.useState(false);

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const toggleNoAcc = () => {
        setAccount(true);
        setIsLogin(false);
    };
    const handleOpenLogin = () => {
        setIsLogin(true);
        onOpen();
    };

    const handleLogin = () => {

        fetch('http://localhost:8082/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                password
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle login response here
                console.log(data);
                // Save the JWT token
                localStorage.setItem('jwtToken', data.token);
                onClose(); // Close the modal on successful login
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleSignup = () => {
        // Perform signup API call here
        fetch('http://localhost:8082/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                password
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle signup response here
                console.log(data);
                setAccount(false);
                onClose(); // Close the modal on successful signup
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <>
            <Button ml={2} onClick={handleOpenLogin} size="sm" variant="outline">
                SignUp/Login
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Lets GO!</ModalHeader>
                    {/* <ModalCloseButton /> */}

                    <ModalBody pb={6}>
                        <Text >
                            'Don't have an account? Sign up here ...'
                        </Text>
                        <Button colorScheme="blue" my={6} onClick={toggleNoAcc}>
                            Sign Up
                        </Button>
                        {noAcc ? (
                            <FormControl p={5}>
                                <FormLabel>Your Good Name</FormLabel>
                                <Input
                                    ref={initialRef}
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button colorScheme="blue" my={6} onClick={handleSignup}>
                                    Sign Up
                                </Button>
                            </FormControl>
                        ) : null}

                        <hr />
                        <Text>
                            'Already have an account? Login here ...'
                        </Text>
                        <FormControl p={5}>
                            <FormLabel>Your Good Name</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button colorScheme="blue" my={6} onClick={handleLogin}>
                                Login
                            </Button>
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default LoginSignUp;
