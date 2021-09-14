import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'

const Loader2 = () => {

    return (
    
<Box p="2" mt="2">


        <Box mt="10">
        <Skeleton height="40px" />
        </Box>

    
        <Spacer/>

        <Stack bgColor="" p="" mt="10"   >
            <Flex>
                <Box w="0.5">
                    <SkeletonCircle size="14"  />   
                </Box>
                <Box w="8xl" pt="2" ml="-24" bgColor="">
                    <Skeleton ml="40" height="40px" />
                </Box>
            </Flex>

            <Flex>
                <Box w="0.5">
                    <SkeletonCircle size="14"  />   
                </Box>
                <Box w="8xl" pt="2" ml="-24" bgColor="">
                    <Skeleton ml="40" height="40px" />
                </Box>
            </Flex><Flex>
                <Box w="0.5">
                    <SkeletonCircle size="14"  />   
                </Box>
                <Box w="8xl" pt="2" ml="-24" bgColor="">
                    <Skeleton ml="40" height="40px" />
                </Box>
            </Flex><Flex>
                <Box w="0.5">
                    <SkeletonCircle size="14"  />   
                </Box>
                <Box w="8xl" pt="2" ml="-24" bgColor="">
                    <Skeleton ml="40" height="40px" />
                </Box>
            </Flex><Flex>
                <Box w="0.5">
                    <SkeletonCircle size="14"  />   
                </Box>
                <Box w="8xl" pt="2" ml="-24" bgColor="">
                    <Skeleton ml="40" height="40px" />
                </Box>
            </Flex><Flex>
                <Box w="0.5">
                    <SkeletonCircle size="14"  />   
                </Box>
                <Box w="8xl" pt="2" ml="-24" bgColor="">
                    <Skeleton ml="40" height="40px" />
                </Box>
            </Flex><Flex>
                <Box w="0.5">
                    <SkeletonCircle size="14"  />   
                </Box>
                <Box w="8xl" pt="2" ml="-24" bgColor="">
                    <Skeleton ml="40" height="40px" />
                </Box>
            </Flex><Flex>
                <Box w="0.5">
                    <SkeletonCircle size="14"  />   
                </Box>
                <Box w="8xl" pt="2" ml="-24" bgColor="">
                    <Skeleton ml="40" height="40px" />
                </Box>
            </Flex>
            
        </Stack>
</Box>
    )
}

export default Loader2
