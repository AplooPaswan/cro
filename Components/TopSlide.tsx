import { ChevronDownIcon } from '@chakra-ui/icons'
import { AspectRatio, Box, Button, Flex, FormControl, FormLabel, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Select, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import { useBreakpointValue } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import React,{ useState,useEffect } from 'react'
import {useFetch} from 'use-http'
import { useRouter } from 'next/router'
import AfterLoad from './AfterLoad'


const TopSlide = (card) => {


    function AmtFormat(x){
        
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    const [isLargerThan] = useMediaQuery("(min-width: 900px)")

    const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d"
    
    const url2="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=7d"

    const [coin, setCoin] = useState([]);
    // const [card, setCard] = useState([]);



    
    // async function getData() {
    
    //     const response = await fetch(url);
    //     const response2 = await fetch(url2);
    
    //     const data = await response.json();
    //     setCoin(data);

    //     const data2 = await response2.json();
    //     setCard(data2);

    //     console.log(coin);
    // }
    
    // useEffect(() => {
    
    //     getData();
        
        
    // }, []);




    // console.log(data)

    // useEffect(()=>{
    //     setCard(data)
    // },[data])

    // useEffect(()=>{
    //     if(loading){
    //         localStorage.setItem("loading","true")
    //     }
    //     if(!loading){
    //         localStorage.setItem("loading","false")
    //     }
    // },[loading])



    // console.log(card?.card)


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
                  borderRadius: '2px',
                  backgroundColor: `bg`,
                //   backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: `bg`,
                //   backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >



{ card &&  card?.card?.map((cards,index)=>(
    
    // console.log(cards);

                <Box borderRadius="sm"  
                    minH="180px" spacing="10px" 
                    minW="sm" maxW="400px" maxH="200px" 
                    p="2" 
                    fontWeight="bold"
                    borderWidth="" 
                    overflow="hidden"
                    boxShadow="sm"
                    cursor="pointer"
                    key={index}
                    bgColor="rgb(6,17,33)"
                    
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
                            <Text fontSize="2xl" color="gray" textTransform="uppercase" fontWeight="bold">( {cards.symbol} )</Text>
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

    <Flex  py="2" pt="1.5" pb="2.5"  fontWeight="semibold" bgColor="gray.800" color="GrayText">

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
                                <Box   float="left" minW="14"      >Low</Box>
                                <Box   float="left" minW="14"  >High</Box>

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

<Box overflow="auto" cursor="pointer" key={index} mb={1} borderWidth="" borderRadius="2px" bgColor="rgb(6,17,33)" fontWeight="bold">
    <Flex  py="2" _hover={{backgroundColor:"black"}}>
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
                <Box   float="left" minW="10"  > <Box as="button" borderColor="white">+</Box> </Box>
            </Flex>                          
        </Box>

    </Flex>
</Box>
      ))
    }
        
      </Stack>

</>
    )
}

export default TopSlide


