import { ChevronDownIcon } from '@chakra-ui/icons'
import { AspectRatio, Box, Button, Flex, FormControl, FormLabel, HStack, Image, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useBreakpointValue } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import React,{ useState,useEffect } from 'react'
import {useFetch} from 'use-http'
import { useRouter } from 'next/router'
import AfterLoad from './AfterLoad'


const TopSlide = (card) => {

    
    function AmtFormat(x){
        
        return(       
             
             x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
             
        )
    }


    // Adding new port ===============================================
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    // End 

    const [isLargerThan] = useMediaQuery("(min-width: 900px)")

    const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d"
    
    const url2="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=7d"

    const [coin, setCoin] = useState([]);

const router = useRouter()

function onChangeOption(e){
    if (e.detail === 0){
        console.log(e.target.value);
        <AfterLoad coinName={e.target.value} />
    }
}
     return (
    <>


{/* Top =====================================   #3 options   ==================================== */}


        {/* <Stack mt="2" >
            <Flex justifyContent="space-around" px="1" >
                <Box minW="4" >
                        <FormControl id="currency">
                            
                            <Select 
                            // onClick={() => router.push('/inr')  } 
                            onClick={onChangeOption}
                            >
                                <option value="USD"  >USD</option>
                                <option value="INR" >INR</option>
                                
                                
                            </Select>
                        </FormControl>
                </Box>

                <Box minW="4" ml="2">
                        <FormControl id="List">
                            
                            <Select placeholder="List">
                                <option>10</option>
                                <option>100</option>
                                <option>250</option>
                                <option>500</option>
                            </Select>
                        </FormControl>           
                </Box>

                <Box minW="4" ml="2">
                        <FormControl id="List">
                            
                            <Select placeholder="List">
                                <option>24 Hours</option>     
                            </Select>
                        </FormControl>     
                </Box>
            </Flex>
        </Stack> */}

{/* ============================================================================================================================== */}
<Flex justifyContent="">
{/* <Text fontSize="24">🔥🔥Most popular coin🔥🔥 </Text> */}
</Flex>
        <Stack 

            
            direction={["row"]} 
            spacing="12px" px="1.5" 
            fontFamily="serif"
            pt="2" 
            overflow="auto"  
            pb="2"
            sx={{
                '&::-webkit-scrollbar': {
                  width: '8px',
                  height:'5px',
                  borderRadius: '2px',
                  backgroundColor: `gray`,
                //   backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: `gray`,
                //   backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >



{ card &&  card?.card?.map((cards,index)=> index < 10 && (
    
    // console.log(cards);

                <Box borderRadius="sm"  
                    minH="180px" spacing="10px" 
                    minW="sm" maxW="400px" maxH="200px" 
                    p="2" 
                    fontWeight="bold"
                    borderWidth="1px" 
                    overflow="hidden"
                    boxShadow="md"
                    cursor="pointer"
                    key={index}
                    
                    
                >
                   <Flex justify="space-evenly" >

                        <Box bgColor="" maxW="sm" pt="10" >
                            <Image src={cards.image} alt=""  maxW="24" borderRadius="full" />
                         </Box>  

                        <Box justifyContent="center">
                            <Text fontSize="2xl" color="gray" fontWeight="bold">{cards.name}</Text>

                            <Text  color="red">Low :</Text>
                            <Text color="orange">High :</Text>
                                                        
                            <Text color="orange.900">ATL</Text>
                            <Text color="green.500">ATH :</Text>
                            <Text color="green" fontSize="2xl">Price :</Text>
                            
                        </Box>
                        <Box justifyContent="center">
                            <Flex color="gray">
                                <Text fontSize="2xl"  textTransform="uppercase" fontWeight="bold">
                                    ( {cards.symbol} )
                                </Text>&nbsp; #{cards.market_cap_rank}
                            </Flex>
                            <Text color="orange">$ {AmtFormat(`${cards.low_24h}`)}</Text>
                            <Text color="red" >$ {AmtFormat(`${cards.high_24h}`)}</Text>
                            
                            <Text color="orange.900">$ {AmtFormat(`${cards.atl}`)}</Text>
                            <Text color="green.500">$ {AmtFormat(`${cards.ath}`)}</Text>
                            <Text color="green" fontSize="2xl">$  {AmtFormat(`${cards.current_price}`)} </Text>
                            
                        </Box>
                   </Flex>
                     
                </Box>
    
     ))}
                
      </Stack>

      {/* =============================================================================================================================== */}



<Spacer mt="3" mb="3" />

    <Tabs variant="soft-rounded" colorScheme="gray" >
        <TabList justifyContent="space-around">
            <Tab>Top 100</Tab>
            <Tab>Top Gainer</Tab>
            <Tab>Top Losser</Tab>
            <Tab>Portfolio</Tab>
        </TabList>

        <TabPanels>
            {/* <TabPanel>
                <p>one!</p>
            </TabPanel>
            <TabPanel>
                <p>two!</p>
            </TabPanel> */}
        </TabPanels>
    </Tabs>
    <Spacer mt="3"/>    





{/* ====================================================================================================================================== */}

<Stack>
{/* <Spacer/><br/>
      <Stack bgColor="" mt="sm" mb="10" mx="2" color="gray.300">
      <Flex justifyContent="space-between"  px="4" fontWeight="bold" bgColor="" minHeight="10" lineHeight="10">

         <Box maxW="4" pl="" style={{display: `${isLargerThan ? "block" : "none"}`}}>
                #
            </Box>
            <Box minW="14" pl="" bgColor="red">
                Logo
            </Box>

            <Box  bgColor="red" float="left" minW="20" style={{display: `${isLargerThan ? "block" : "none"}`} }>
                Name
            </Box>

            <Box float="left" minW="24" >
                Low 
            </Box>
            <Box float="left" minW="24" >
                High
            </Box>
            <Box float="left" minW="24" style={{display: `${isLargerThan ? "block" : "none"}`}}>
                ATL
            </Box>
            <Box float="left" minW="24" style={{display: `${isLargerThan ? "block" : "none"}`}}>
                ATH
            </Box>
            <Box float="left" minW="24" style={{display: `${isLargerThan ? "block" : "none"}`}}>
                %
            </Box>
            <Box float="left" minW="24" >
                Price
            </Box>
            <Box float="left" minW="24" >
                Add
            </Box>
    </Flex> */}


<Box overflow="auto" mb={1} borderWidth="0px" borderRadius="1px" >

    <Flex  py="2" pt="1.5" pb="2.5"  fontWeight="semibold"  color="GrayText" boxShadow="md">

{/* ========================================= */}
                        <Box maxW="14" pt="1.5" >
                            <Box minW="4"   style={{display: `${isLargerThan ? "block" : "none"}`}}>#</Box>
                        </Box>

                      <Box minW="16" pt="1.5"  pl="2">  
                        Logo                        
                      </Box>
{/* ====================================================== */}

                      <Box pt="1.5" w="full" >
                          <Flex justifyContent='space-between' >
                               
                                <Box   minW="14"   style={{display: `${isLargerThan ? "block" : "none"}`}}>Name</Box>
                                <Box   float="left" minW="14"      >24H Low</Box>
                                <Box   float="left" minW="14"  >24H High</Box>

                                <Box   float="left" minW="14" color="white"   style={{display: `${isLargerThan ? "block" : "none"}`}} >ATL</Box>
                                <Box   float="left" minW="14" color="white"  style={{display: `${isLargerThan ? "block" : "none"}`}}>ATH</Box>
                                <Box   float="left" minW="14" color="white"  style={{display: `${isLargerThan ? "block" : "none"}`}}>%</Box>
                                <Box   float="left" minW="14"  >Price</Box>
                                <Box   float="left" minW="14" cursor="wait" > Add </Box>
                                
                          </Flex>
                          
                      </Box>
    </Flex>
</Box>



{card && card?.card?.map((rows,index)=>(

<Box overflow="auto" cursor="default" key={index} mb={1} borderWidth="0px" boxShadow="" borderRadius="2px"  fontWeight="bold" >
    <Flex  py="2" _hover={{backgroundColor:"rgb(6,17,33)"}}>
        <Box maxW="6" mr="2" style={{display: `${isLargerThan ? "block" : "none"}`}}>
                            <Box minW="24" color="gray" style={{display: `${isLargerThan ? "block" : "none"}`}} >#{rows.market_cap_rank}</Box>
        </Box>

        <Box minW="14" bgColor="" pl="1">
            <Image src={rows.image} alt="" bgColor="white" maxW="8" borderRadius="full" />
            <Spacer/>
           <Text fontWeight="semibold" fontSize="xs" textTransform="uppercase" pt="1" pl="1" color="GrayText">{rows.symbol}</Text>
        </Box>

        <Box pt="3" w="full" >
            <Flex justifyContent='space-between' fontWeight="" fontFamily="-moz-initial">
                <Box   minW="24" color="gray"  style={{display: `${isLargerThan ? "block" : "none"}`}}>{rows.name}</Box>
                <Box   float="left" minW="20" color="red"     >$ {AmtFormat(`${rows.low_24h}`)}</Box>
                <Box   float="left" minW="20" color="orange"  >$ {AmtFormat(`${rows.high_24h}`)}</Box>
                <Box   float="left" minW="20" color=""    style={{display: `${isLargerThan ? "block" : "none"}`}} >$ {AmtFormat(`${rows.atl}`)}</Box>
                <Box   float="left" minW="20" color=""  style={{display: `${isLargerThan ? "block" : "none"}`}}>$ {AmtFormat(`${rows.ath}`)}</Box>
                <Box   float="left" minW="20" color="" style={{display: `${isLargerThan ? "block" : "none"}`}}>{rows.market_cap_change_percentage_24h}</Box>
                <Box   float="left" minW="20"  color="green" fontWeight="extrabold" >$ {AmtFormat(`${rows.current_price}`)}</Box>
                <Box   float="left" minW="10"  > <Button as="button" cursor="pointer" mt="-1.5" mr="3" onClick={onOpen}>+</Button> </Box>
            </Flex>                          
        </Box>

    </Flex>
</Box>
      ))
    }
        
      </Stack>


{/* ============Adding pop up ============================ */}

{/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
</Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add  to your portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          
            <FormControl>
              <FormLabel>Quantity</FormLabel>
              <Input isRequired ref={initialRef} placeholder="Total Amount of quantity" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Amount in $</FormLabel>
              <Input isRequired placeholder="Total $ " />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input isRequired placeholder="Buying price" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</>
    )
}

export default TopSlide


