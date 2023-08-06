import React from 'react'
import { AspectRatio, Text, VStack, HStack, Heading, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div bg="#1D5B79">

      <VStack
        w="full"
        h="full"
        px={100}
        spacing={10}

        bg="#1D5B79">


        <Heading size="full" align="center" as='b' fontSize='50px' color="#F3AA60" py='10'>Welcome to FutureYou - Your Path to Success!</Heading>

      </VStack>


      <HStack bg="#1D5B79">
        <VStack w="full"
          h="70vh"
          px={100}
          spacing={7}
          align="flex-start"
          bg="#1D5B79"
          fontSize='25px'>


          <Text spacing={5} color="white" >
            Are you ready to embark on a journey of self-discovery and uncover your true passion? At FutureYou, we believe that every individual has a unique calling, a special domain that ignites their curiosity and fuels their ambitions. Our career guidance website is here to help you find that perfect path that aligns with your interests, strengths, and aspirations.
          </Text>


          <Text spacing={5} color="white">
            So, are you ready to take the first step toward a fulfilling and rewarding career? Click that "Let's Start" button, and let the journey of self-discovery begin! The future awaits, and it's yours to shape with FutureYou by your side. Let's make your dreams a reality together!
          </Text>

          <Link to={'/dashboard'}>
            <Button size='lg' variant="outline" color="#1D5B79" bgColor="#F3AA60" >
              Let's Start
            </Button>
          </Link>

        </VStack>


        <AspectRatio ratio={1} w={800}>
          <Image src='https://e7.pngegg.com/pngimages/692/564/png-clipart-teacher-educational-technology-learning-educational-technology-education-industry-class-text-thumbnail.png' alt='Education' p={10} borderRadius='full' />
        </AspectRatio>
      </HStack>


    </div>
  )
}
