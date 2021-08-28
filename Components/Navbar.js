import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, Search2Icon, SearchIcon, SunIcon, ViewIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text } from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/react"
import DarkModeSwitch from './DarkModeSwitch'

import Head from 'next/head'
import React from "react"; import { GoogleLogin, useGoogleLogin } from "react-google-login";
import { useGoogleLogout } from 'react-google-login';
import { useState } from 'react'
import Login from './Auth/Login'
import { refreshTokenSetup } from './Auth/refreshToken'
import Logout from './Auth/Logout'
import head from 'next/head'
import "../img/google.png"
const clientId ="427283001518-7r1m5ubnjjqh46neaaehg39f6eobgka0.apps.googleusercontent.com"; 

const Navbar = () => {

    const [img,setImg] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    
    const onSuccess = (res) => { 

        refreshTokenSetup(res);
        console.log("Login Success: currentUser:", res.profileObj.tokenId); 

        setImg(res.profileObj.imageUrl)
        setName(res.profileObj.name)
        setEmail(res.profileObj.email)
      

        return( 
            alert(`welcome ${res.profileObj.imageUrl}.`) 
            
            
        ) 
         refreshTokenSetup(res); 
         
    }
    
    const onFailure = (res) => { 
        console.log("Login failed: res:", res); 
        // alert( `Failed to login. ` );
   };






   const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  const onLogoutSuccess = (res) => {
        setImg("")
        setName("")
        setEmail("")
        res=""
    alert('Logged out Successfully ✌');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    
  });
// for custom btn 




    return (
        <>

    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
        <title>
          Welcome : {name}
        </title>
    </Head>
            
            <Stack bgColor="blackAlpha.100" justifyContent="space-around" borderBottomWidth="">
                
                <Flex pt="2" pb="2" justifyContent="space-between" bgColor="">
                    <Box bgColor="">
                        <img src="https://www.linkpicture.com/q/aploo.png" alt="img" height="2px" width="120px" />
                    </Box>


                    <Box bgColor="" pt="2">
                        {/* <Button colorScheme="teal" variant="outline">
                            Button
                        </Button> */}

                            <HStack spacing={3} alignItems="center">
                                {/* <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
                                    <InputLeftElement
                                    pointerEvents="none"
                                    children={<Search2Icon />}
                                    />
                                    <Input type="tel" placeholder="Search..." />
                                </InputGroup> */}
                                    

                            </HStack>
                    </Box>


                    <Box bgColor="" pt="2">
                            {/* <DarkModeSwitch/> */}
                    </Box>


                    <Box bgColor="" pt="2" mr='2'>
                      <Menu>    
                        {!email === null ?

                        <Avatar                    
                            size="md"
                            src={img}
                            alt={name}
                            />
                            :
                            " "
                        }
                          
                        <DarkModeSwitch/> 
                            <MenuButton
                                outline="none"
                                borderWidth="0px"
                                as={IconButton}
                                aria-label="Options"
                                icon={ email !== "" ? <Avatar src={img} name={name} />  : <HamburgerIcon borderWidth="0px" bgColor="" />}
                                variant="outline"
                                _hover={{borderColor:"rgb(6,17,33)"},{borderWidth:"0px"},{borderStyle:"none"}}

                                ml="2"
                            />
                            <MenuList bgColor="rgb(6,17,33)">

                                {/* <MenuItem minH="48px">
                                    <Image
                                        boxSize="2rem"
                                        borderRadius=""
                                        src="https://www.linkpicture.com/q/userUser.svg"
                                        alt="Register"
                                        mr="12px"
                                    />
                                    <span>Register </span>
                                    </MenuItem>

                                    <MenuItem minH="40px">
                                        <Image
                                            boxSize="2rem"
                                            borderRadius="full"
                                            src="https://www.linkpicture.com/q/login.svg"
                                            alt="LogIn"
                                            mr="12px"
                                        />
                                    <span>LogIn</span>
                                    </MenuItem>
                                    <MenuItem minH="48px">
                                    <Image
                                        boxSize="2rem"
                                        borderRadius="full"
                                        src="https://www.linkpicture.com/q/inr.svg"
                                        alt="$"
                                        mr="12px"
                                    />
                                    <span>Portfolio </span>
                                    </MenuItem> */}

                                { email !== "" ?

                                    <MenuItem minH="40px" _hover={{backgroundColor: "rgb(6,17,33)"}} m="0">
                                       
                                    <Box w="full" cursor="default" bgColor="rgb(6,17,33)" m="0">
                                        <Flex justifyContent="center" bgColor="">
                                           
                                            <Box>
                                                <Avatar
                                                size="md"
                                                name={name}
                                                src={img}
                                                />
                                            </Box>

                                            <Box pl="2" justifyContent="center" fontWeight="bold" textTransform="capitalize">
                                                <Flex><Text color="white">{name}</Text></Flex>
                                                <Flex><Text color="GrayText">{email}</Text></Flex>
                                                
                                            </Box>
                                        </Flex>
                                        <br/>
                                        <Flex>
                                            <Button onClick={signOut}>Sign Out </Button> 
                                        </Flex>


                                        
                                    </Box>
                                    
                                    
                                    
                                    </MenuItem>
                                    :
                                    <MenuItem minH="40px" cursor="default">
                                        {/* <GoogleLogin
                                            clientId={clientId}
                                            buttonText="Login"
                                            onSuccess={onSuccess}
                                            onFailure={onFailure}
                                            cookiePolicy={'single_host_origin'}
                                            style={{ marginTop: '100px' }}
                                            isSignedIn={true}
                                        /> */}
                                        <Button  onClick={signIn}>Login </Button> 
                                    </MenuItem>
                                }
                                </MenuList>
                                
                        </Menu>
                    </Box>
                    
                </Flex>
            </Stack>   
        </>
    )
}

export default Navbar
