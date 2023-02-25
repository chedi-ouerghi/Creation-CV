import React from 'react'
import {
  Button,MenuGroup, chakra, Modal, useDisclosure, ModalBody, ModalFooter, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Text, HStack, Checkbox, Container, FormLabel, Divider
} from '@chakra-ui/react'
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Link,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../redux/Action/authAction';
import '../layout/home/home.css'
// import logo from "./logo.png"
import { AiTwotoneEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, pass }, navigate));
  };
  const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, pass }, navigate));
  };
   const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };
 
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

 
  return (
        
        <div className='main-content'>
                <Particles options={options} init={particlesInit} />

           <div className='homie'>
    {/* <div className='introduction'>
<p style={{fontSize:'xx-large'}}>please connect to have more chance to explore your portfolio</p>  
        </div> */}

        {/* login from  */}
     
          <div className='login-mise-page'>
            
        <Flex
      flexDirection="column"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
      borderRadius="19px"
    >
      <Stack
        flexDir="column"
        mb="12"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">
          <p style={{fontSize:'xx-large'}}>please connect to have more chance to explore your CV</p>  
        </Heading>
        <Box >
        {/* <Box minW={{ base: "90%", md: "468px" }}> */}
          <form>
            <Stack
              spacing={4}
              borderRadius={4}
              p="4rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              color='black'
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color='black' />}
                  />
                  <Input type="email" placeholder="email address"
                  color='black'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color='black'
                    children={<CFaLock color='black' />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    color='black'
                    onChange={(e) => setPass(e.target.value)}
                value={pass}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? <AiTwotoneEyeInvisible/> : <AiTwotoneEye/> }
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link style={{color:'black'}}>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={1}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>

      {/* register  */}
      <Box>
       <Link style={{color:'black'}}>don't have a account?</Link> 
        <Button variant="solid"
                colorScheme="teal"
                 onClick={onOpen} style={{float:"right",display:"flex",padding:"25px",marginInlineStart:"300px"}}>register</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader style={{color:'black'}}>register to have account</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <Container
    maxW="lg"
    py={{
      base: '10',
      md: '10',
    }}
    px={{
      base: '0',
      sm: '5',
    }}
  >
    <Stack spacing="8">
      <Stack spacing="6">
        <Stack
          spacing={{
            base: '2',
            md: '3',
          }}
          textAlign="center"
        >
          <Heading
            size={{
              base: 'xs',
              md: 'sm',
            }}
           style={{color:'black'}}>
            <Avatar bg="teal.500" />
          </Heading>
        </Stack>
      </Stack>
      <Box
        py={{
          base: '0',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '10',
        }}
        bg={{
          base: 'transparent',
          sm: 'bg-surface',
        }}
        boxShadow={{
          base: 'none',
          sm: 'md',
        }}
        borderRadius={{
          base: 'none',
          sm: 'xl',
        }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel >name</FormLabel>
              <Input id="name" type="name" placeholder="Enter name" 
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <FormLabel >Email</FormLabel>
              <Input id="email" type="email" placeholder="Enter email"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             />
             <FormControl>
                <InputGroup>
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    color='black'
                    id="password" 
                    onChange={(e) => setPass(e.target.value)}
                value={pass}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? <AiTwotoneEyeInvisible/> : <AiTwotoneEye/> }
                    </Button>
                  </InputRightElement>


                </InputGroup>
                </FormControl>
            </FormControl>
            
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="4">
            <Button  borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                 onClick={handleRegister}>Sign in</Button>
            <HStack>
              <Divider />
              {/* <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text> */}
              <Divider />
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
    </ModalBody>

    <ModalFooter>
      <Button  variant="solid"
                colorScheme="teal"
                width="1.5"
                 mr={1} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
      </Box>
    </Flex>
        </div>
        </div>
        </div>

  )
}

export default Home
