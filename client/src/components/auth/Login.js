import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/Action/authAction";
import {   Box,  FormControl,Button, Heading, Input, InputGroup, InputLeftElement, Stack,  InputRightElement, chakra, Container, HStack, FormLabel, Divider, Checkbox } from "@chakra-ui/react";
import { FaLock, FaUserAlt } from "react-icons/fa";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, pass }, navigate));
  };
  return (
    <div>
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
          >
            LogIn
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
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaUserAlt color="gray.300" />}
                  />
          
              <Input id="email" type="email" placeholder="Enter email"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             />
              
                </InputGroup>
             <FormLabel htmlFor="password">password</FormLabel>
            <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                value={pass}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
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
                 onClick={handleLogin}>Sign in</Button>
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
     </div>
  );
};

export default Login;
