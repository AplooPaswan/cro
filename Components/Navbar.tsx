import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, Search2Icon, SearchIcon, SunIcon, ViewIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/react"
import DarkModeSwitch from './DarkModeSwitch'
import Inr from '../img/INR.svg'
import Head from 'next/head'
import React from "react"; import { GoogleLogin } from "react-google-login";
import { useState } from 'react'

const clientId ="427283001518-7r1m5ubnjjqh46neaaehg39f6eobgka0.apps.googleusercontent.com"; 
let Proimg;

const Navbar = () => {

    const [img,setImg] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    

    const onSuccess = (res) => { 

        console.log("Login Success: currentUser:", res.profileObj); 

        setImg(res.profileObj.imageUrl)
        setName(res.profileObj.name)
        setEmail(res.profileObj.email)

        // return( alert(`welcome ${res.profileObj.imageUrl}.`) ) 
        // refreshTokenSetup(res); 
    }
    
    const onFailure = (res) => { 
        console.log("Login failed: res:", res); 
        // alert( `Failed to login. ` );
   };


    return (
        <>

    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
        <title>
            Aploo - NextJs
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
                          
                        {/* <DarkModeSwitch/>  */}
                            <MenuButton
                                outline="none"
                                borderWidth="0px"
                                as={IconButton}
                                aria-label="Options"
                                icon={ email !== "" ? <Avatar src={img} name={name} />  : <HamburgerIcon borderWidth="0px" bgColor="" />}
                                variant="outline"
                                outline="none"
                                
                                _hover={{borderWidth :"0px"},{outline:"none"}}
                                ml="2"
                            />
                            <MenuList>

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

                                    <MenuItem minH="40px">
                                        {/* <Image
                                            boxSize="2rem"
                                            borderRadius="full"
                                            src={img}
                                            alt={name}
                                            mr="12px"
                                        /> */}

                                    
                                    <Avatar
                                        size="sm"
                                        name={name}
                                        src={img}
                                    />
                                    <span style={{paddingLeft: "5px"}}>{name}</span>
                                    </MenuItem>
                                    :
                                    <MenuItem minH="40px">
                                        <GoogleLogin 
                                            
                                            clientId={clientId} 
                                            buttonText="Login" 
                                            onSuccess={onSuccess}
                                            onFailure={onFailure} 
                                            cookiePolicy={"single_host_origin"} 
                                            style={{ marginTop: "100px" }} 
                                            isSignedIn={false} 
                                            type="dark"
                                        /> 
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
