import Aploo from "./aploo.png";
import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatClockIcon, RepeatIcon, Search2Icon, SearchIcon, SunIcon, ViewIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, HStack, Icon, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text } from '@chakra-ui/react'
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
import CoinChange from './CoinChange'
const clientId ="427283001518-7r1m5ubnjjqh46neaaehg39f6eobgka0.apps.googleusercontent.com"; 

const Navbar = () => {

    const [currnecy,setCurrnecy] = useState("");

    const [img,setImg] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    
    const onSuccess = (res) => { 

        refreshTokenSetup(res);
        //console.log("Login Success: currentUser:", res.profileObj.tokenId); 

        setImg(res.profileObj.imageUrl)
        setName(res.profileObj.name)
        setEmail(res.profileObj.email)
      
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
    // alert('Logged out Successfully ✌');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    
  });
// for custom btn 

    console.log(`img location is ${Aploo}`);


    return (
        <>

    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
        <title>
          Welcome :)
        </title>
    </Head>
            
            <Stack  justifyContent="space-around" borderBottomWidth="" boxShadow="sm">
                
                <Flex pt="2" pb="2" justifyContent="space-between" bgColor="">
                    <Box bgColor="">
                        <img src="https://i.postimg.cc/Mfk2fmsS/aploo.png" alt="img" height="2px" width="120px" />
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
                        <Box  as={RepeatClockIcon} minH={6} />  &nbsp;
                        <DarkModeSwitch/> 

{/* ================================================================================================================= */}
                            <MenuButton
                                bgColor="transparent"
                                outline="none"
                                borderWidth="0px"
                                borderRadius="full"
                                as={IconButton}
                                aria-label="Options"
                                icon={ email !== "" ? <Avatar src={img} name={name} />  : <HamburgerIcon borderWidth="0px"  />}
                                
                                
                                _hover={{borderColor:'rgb(6,17,33)'}}

                                ml="2"
                            />
                            <MenuList  _hover={{backgroundColor:'rgb(6,17,33)'}} bgColor="">

                                { email !== "" ?

                                <Box minH="40px"  bgColor="transparent" _hover={{backgroundColor: "rgb(6,17,33)"}} m="0" p="4" >
                                       
                                    <Box w="full" cursor="default" bgColor="" m="0" justifyContent="center" _hover={{backgroundColor:'rgb(6,17,33)'}}>
                                        <Flex justifyContent="center">
                                            <Avatar
                                                size="4"
                                                name={name}
                                                src={img}
                                            />
                                        </Flex>
                                        <Flex justifyContent="center" bgColor="" _hover={{backgroundColor:'rgb(6,17,33)'}}>
                                                <Box bgColor="">
                                                    {/* <Avatar
                                                    size="md"
                                                    name={name}
                                                    src={img}
                                                    /> */}
                                                </Box>

                                                <Box justifyContent="center" fontWeight="bold" textTrans>
                                                    <Flex justifyContent="center"><Text form="capitalize"> {name}  </Text></Flex>
                                                    <Flex justifyContent="center"><Text color="GrayText">  {email} </Text></Flex>
                                                    <Head>
                                                        <title> {name} </title>
                                                        <link rel="icon" href={img} sizes="16x16" type="image/png" />
                                                    </Head>
                                                </Box>
                                        </Flex>
                                        <br/>
                                        <Flex  _hover={{backgroundColor:"rgb(6,17,33)"}}>
                                                <Button
                                                onClick={signOut}
                                                py={2}
                                                w="full"
                                                colorScheme="blue"
                                                leftIcon={
                                                <Icon
                                                    mr={1}
                                                    aria-hidden="true"
                                                    boxSize={6}
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    stroke="transparent"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                                                </Icon>
                                                }
                                            >
                                                SignOut
                                            </Button>
                                           
                                        </Flex>
                                        <Spacer/>  <br/>      
                                        <Flex>
                                            <CoinChange/>
                                        </Flex>
     
                                    </Box>
                                    
                        
                                    </Box>
                                    :
                                    <>
                                    <MenuItem minH="40px" cursor="default"  _hover={{backgroundColor:"rgb(6,17,33)"}}>  
                                            <Box w="full" fontWeight="bold" fontSize="md">Profile</Box>
                                    </MenuItem>
                                    <Box minH="40px" cursor="default"  _hover={{backgroundColor:"rgb(6,17,33)"}}>  
                                        <Flex pl="3.5">
                                            <CoinChange/>
                                        </Flex>
                                    </Box>

                                    <MenuItem minH="40px" cursor="default"  _hover={{backgroundColor:"rgb(6,17,33)"}}>
                                     
                                    <Flex  py={2} >
                                    <Button
                                        onClick={signIn}
                                        py={2}
                                        w="full"
                                        colorScheme="green"
                                        leftIcon={
                                        <Icon
                                            mr={1}
                                            aria-hidden="true"
                                            boxSize={6}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            stroke="transparent"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                                        </Icon>
                                        }
                                    >
                                        Login with Google
                                    </Button>                                  
                                    </Flex>

                                

                                </MenuItem>

                                    
                                    </>
                                    
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
