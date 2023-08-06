import { Text, VStack, Stack, Flex, Box } from '@chakra-ui/react'
import React from 'react'

export default function About() {
    return (
        <>
            <Stack w="full"
                h="full"
                px={100}
                spacing={8}
                align="center"
                paddingX={40}
                py={10}
                bg="#1D5B79"
                fontSize='20px'>


                <Text color="white">"Welcome to FutureYou, where we are dedicated to guiding you toward a fulfilling career that aligns perfectly with your passions and aspirations. Our mission is to be your guiding light, helping you navigate the vast array of possibilities and uncover your true calling. We envision a world where each individual wakes up with excitement, knowing they are pursuing a career that ignites their soul. Our promise to you is a personalized and expert career guidance experience like no other. Our team of passionate professionals with backgrounds in education, technology, and counseling is here to support you every step of the way on your journey of self-discovery."</Text>


                <Text color="white">This is your gateway to abundant information, resources, and expert insights, carefully curated to guide you in making informed decisions about your future. Embrace the exhilarating possibilities, expand your horizons, and unlock your true potential with FutureYou.'</Text>


                <Text color="white">Our journey together has just begun, and we are excited to offer you more in-depth career profiles, and interactive tools. So, are you ready to take the first step toward a brighter future? So, let's together unlock the door to your limitless potential at FutureYou!</Text>
            </Stack>


            <Stack
                w="full"
                h="full"
                px={100}

                align="flex-end"
                paddingX={40}
                py={10}
                bg="#1D5B79"
            >

                <Text fontSize='30px' fontFamily="cursive" color="#97E900">
                    Made by :
                </Text>


                <Flex align="end" as="b" bg="#1D5B79" fontSize='20px'>
                    <Text padding="5" color="#F3AA60">Isha Bule</Text>
                    <Text padding="5" color="#F3AA60">Shruti Chandak</Text>
                    <Text padding="5" color="#F3AA60">Tejaswini Patkar</Text>
                    <Text padding="5" color="#F3AA60">Vaibhavi Deshmukh</Text>
                    <Text padding="5" color="#F3AA60">Simran Desai</Text>
                    <Text padding="5" color="#F3AA60">Anushka Gaikwad</Text>
                </Flex>

            </Stack>
        </>
    )
}