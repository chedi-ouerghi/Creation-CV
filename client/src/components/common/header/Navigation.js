import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/Action/authAction";
import logo from "./logo.png"
import { Avatar, Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";


export default function Navigation() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "#002944" : "#09113a"}>
      <Flex p={4} justify="space-between" align="center">
        <Link to="/">
          <Box fontWeight="bold" fontSize="xl">
<img src={logo}/>
          </Box>
        </Link>
        <Flex>
          {!user ? (
            <>
              <Link to="/">
                <Button colorScheme="blue" mr={2}>
                  Login
                </Button>
              </Link>
              {/* <Link to="/register">
                <Button colorScheme="blue" mr={2}>
                  Register
                </Button>
              </Link> */}
            </>
          ) : (
            <>
              <div>
               <Link style={{marginInlineStart: "-785%"}} to="/homepage">
                <Button  mr={2}>
                  home
                </Button>
              </Link>
              </div>
              <Link to='/'>
              <Button colorScheme="red" onClick={() => dispatch(logout())}>
                Logout
              </Button>
              </Link>
            </>
          )}
          <Button onClick={toggleColorMode}>
            {colorMode === <MdOutlineDarkMode/> ? "Dark" : <MdDarkMode/>} 
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

