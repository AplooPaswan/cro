import React from 'react'
import {useColorMode, IconButton, useColorModeValue} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'


const DarkModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    const color = useColorModeValue("rgb(6,17,33)", "rgb(0,0,0)")
    return (

        <>
        <IconButton 
        
            aria-label="Toggle"
            icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
            onClick={toggleColorMode}
            isRound=true
        />
            
        </>
    )
}

export default DarkModeSwitch
