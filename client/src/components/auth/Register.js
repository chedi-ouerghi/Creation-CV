import React, { useState } from "react";
import {
  Heading,
  Input,
  Stack,
  Box,
  FormControl, Button, chakra,  Checkbox, Container, FormLabel, Divider,
   InputRightElement, InputGroup, InputLeftElement, HStack
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/Action/authAction";
import {  FaLock,FaUserAlt } from "react-icons/fa";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CFaLock = chakra(FaLock);
  const CFaUserAlt = chakra(FaUserAlt);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, pass }, navigate));
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
            Register
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
              <FormLabel htmlFor="name">name</FormLabel>
              <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaUserAlt color="gray.300" />}
                  />
              <Input id="name" type="name" placeholder="Enter name" 
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              </InputGroup>
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
    </div>
  );
};

export default Register;
