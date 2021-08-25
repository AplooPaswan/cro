import { Spacer } from '@chakra-ui/react'
import React from 'react'

const Top100 = () => {
    return (
        <>
         <Spacer/><br/>
                {/* <hr/> */}
                    <Stack bgColor="" mt="sm" mb="10" mx="2" >
                <Text fontSize="20">🔥🔥Top 100 trending coin🔥🔥 </Text>

                    <Flex justifyContent="space-between" px="4" fontWeight="bold" bgColor="" borderTopWidth="1px" minHeight="10" lineHeight="10">
                        <Box maxW="2" pl="" style={{display: `${isLargerThan ? "block" : "none"}`}}>
                                #
                            </Box>
                            <Box minW="24" pl="">
                                Symbol
                            </Box>

                            <Box float="left" minW="20" style={{display: `${isLargerThan ? "block" : "none"}`} }>
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
                    </Flex>


                    { coin.map((rows,index)=>(

                            <Box overflow="auto" key={index} mb={1} borderWidth="1px" borderRadius="2px">
                                <Flex  p="2">
                                        <Box maxW="10">
                                            <Box   float="" minW="24" color="gray"  style={{display: `${isLargerThan ? "block" : "none"}`}}>#{rows.market_cap_rank}</Box>
                                        </Box>


                                    <Box minW="24">
                                        <Image src={rows.image} alt=""  maxW="10" borderRadius="full" />
                                        
                                    </Box>

                                    <Box pt="1.5" w="full" >
                                        <Flex justifyContent='space-between' fontWeight="semibold" >
                                                <Box   float="" minW="24" color="gray"  style={{display: `${isLargerThan ? "block" : "none"}`}}>{rows.name}</Box>
                                                <Box   float="left" minW="24" color="red"     >$ {AmtFormat(`${rows.low_24h}`)}</Box>
                                                <Box   float="left" minW="24" color="orange"  >$ {AmtFormat(`${rows.high_24h}`)}</Box>

                                                <Box   float="left" minW="24" color="red.500"    style={{display: `${isLargerThan ? "block" : "none"}`}} >$ {AmtFormat(`${rows.atl}`)}</Box>
                                                <Box   float="left" minW="24" color="green.500"  style={{display: `${isLargerThan ? "block" : "none"}`}}>$ {AmtFormat(`${rows.ath}`)}</Box>
                                                <Box   float="left" minW="24" color="green" style={{display: `${isLargerThan ? "block" : "none"}`}}>{rows.market_cap_change_percentage_24h}</Box>
                                                <Box   float="left" minW="24" color="green" >$ {AmtFormat(`${rows.current_price}`)}</Box>
                                                
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

export default Top100
