import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import TopSlide from './TopSlide';

const CoinChange = () => {


    function onChangeOption(e){
        if (e !=='')
        {
        //     console.log(e.target.value);
        //    {e.target.value}

        alert(e);
        <TopSlide currency={e}  />
        }
}

    return (
        <>
        <Menu w="full">
            {({ isOpen }) => (
                <>
                <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                $ / ₹
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() =>onChangeOption('inr')}> ₹ - INR </MenuItem>
                    <MenuItem onClick={() =>onChangeOption('usd')}> $- USD  </MenuItem>
                </MenuList>
                </>
            )}
        </Menu>
        </>
    )
}

export default CoinChange
