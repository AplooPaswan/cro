import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, Search2Icon, SearchIcon, SunIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/react"
import DarkModeSwitch from './DarkModeSwitch'
import Inr from '../img/INR.svg'
import Head from 'next/head'


const Navbar = () => {
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
            
            <Stack bgColor="blackAlpha.100" justifyContent="space-around" borderBottomWidth="1px">
                
                <Flex pt="2" pb="2" justifyContent="space-between" bgColor="">
                    <Box bgColor="">
                        <img src="https://www.linkpicture.com/q/aploo.png" alt="img" height="2px" width="120px" />
                    </Box>


                    <Box bgColor="" pt="2">
                        {/* <Button colorScheme="teal" variant="outline">
                            Button
                        </Button> */}

                            <HStack spacing={3} alignItems="center">
                                <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
                                    <InputLeftElement
                                    pointerEvents="none"
                                    children={<Search2Icon />}
                                    />
                                    <Input type="tel" placeholder="Search..." />
                                </InputGroup>
                            </HStack>
                    </Box>


                    <Box bgColor="" pt="2">
                            {/* <DarkModeSwitch/> */}
                    </Box>


                    <Box bgColor="" pt="2" mr='2'>
                      <Menu>
                        <DarkModeSwitch/> 
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                variant="outline"
                                ml="2"
                            />
                            <MenuList>

                                <MenuItem minH="48px">
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
                                    </MenuItem>
                                    {/* <MenuItem minH="40px">
                                        <Image
                                            boxSize="2rem"
                                            borderRadius="full"
                                            src="https://placekitten.com/120/120"
                                            alt="Simon the pensive"
                                            mr="12px"
                                        />
                                    <span>Home</span>
                                    </MenuItem> */}

                                </MenuList>
                                
                        </Menu>
                    </Box>
                    
                </Flex>
            </Stack>   
        </>
    )
}

export default Navbar
