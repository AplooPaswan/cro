import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'

const Loader1 = () => {

    return (
    
<Box p="2" mt="2">

        <Box mt="2">
            <Skeleton height="40px" />
        </Box>

        <Stack spacing="10px" gridGap="10px" direction={["row"]} overflow="auto" bgColor="">
            <>
                <Flex justify="space-evenly" mr="6"  >
                    <Box maxW="xs" bgColor="" pt="16" pr="2"> 
                        <SkeletonCircle size="14" />
                    </Box>
                    <Box w="xs">
                        <SkeletonText mt="4" noOfLines={8} spacing="4" />
                    </Box>
                </Flex>
                
                <Flex justify="space-evenly" mr="6" >
                    <Box maxW="xs" bgColor="" pt="8" pr="2"> 
                        <SkeletonCircle size="14" />
                    </Box>
                    <Box w="xs">
                        <SkeletonText mt="4" noOfLines={8} spacing="4" />
                    </Box>
                </Flex>
                <Flex justify="space-evenly" mr="6" >
                    <Box maxW="xs" bgColor="" pt="8" pr="2"> 
                        <SkeletonCircle size="14" />
                    </Box>
                    <Box w="xs">
                        <SkeletonText mt="4" noOfLines={8} spacing="4" />
                    </Box>
                </Flex> 
            </>
            
        </Stack>    

</Box>





    )
}

export default Loader1
