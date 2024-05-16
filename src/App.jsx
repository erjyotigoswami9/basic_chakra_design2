import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Flex, Card, Stack, Heading, Text, Image, Divider, Button, ButtonGroup, CardBody, CardFooter, Box, Wrap, WrapItem, Avatar, AvatarBadge} from '@chakra-ui/react'

function App() {
  
  return (
    <div>
      <Flex direction="column" width={'fit-content'} padding={'5'} margin={'auto'}  boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset">
      <Card maxW='md' boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
  <CardBody>
  <Stack direction='row' spacing={4}>
  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0gYR-As9-_w2_fjRc895mD_91WQ5p7N_9Q&s" width={90} height={90} margin={'auto'}>
    <AvatarBadge boxSize='1.5em' bg='green.500' />
  </Avatar>


</Stack>
    <Stack mt='6' spacing='3' textAlign={'center'}>
      <Heading size='xl'>Lindsey James</Heading>
      <Text fontSize='2xl' color={'gray'}>@lindsey_jam3s</Text>
      <Text fontSize='3xl'>Actress , musician , songwriter</Text>
      <Text fontSize='3xl'>and artist. PM for work inquires</Text>
      <Text fontSize='3xl'>or</Text>
      <Text fontSize='3xl' color={'skyblue'}>#tag</Text>
      <Text fontSize='3xl'>me in your posts</Text>
    </Stack>
  </CardBody>
  <Wrap spacing={4} padding={'5'}>
    <WrapItem>
      <Button bg={'rgb(248,250,252)'}>#ART</Button>
    </WrapItem>
    <WrapItem>
      <Button bg="rgb(248,250,252)">#PHOTOGRAPHY</Button>
    </WrapItem>
    <WrapItem>
      <Button bg={'rgb(248,250,252)'}>#MUSIC</Button>
    </WrapItem>
  </Wrap>
  <CardFooter>
  <Stack direction='column'>
  

  <Wrap spacing={4}>
    <WrapItem>
      <Button colorScheme='gray' padding={'8'} fontSize={'30'} borderRadius={'30'}>Message</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='twitter' padding={'8'} fontSize={'30'} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" borderRadius={'30'}>Follow</Button>
    </WrapItem>
  </Wrap>
</Stack>
  </CardFooter>
</Card>
      </Flex>
    </div>
  )
}

export default App
