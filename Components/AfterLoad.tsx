import { Box, Heading, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React, {Suspense, useEffect, useState} from 'react'
import FadeIn from 'react-fade-in'
import useFetch from 'use-http'
import Navbar from './Navbar'
import Loader from './Skeleton1'
import TopSlide from './TopSlide'

const AfterLoad = () => {
  

  // const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"


  // const {data,loading} = useFetch(url,[])


    return (
      <>
            {
              
             <TopSlide />

           
            }
           
      </>
    )
}

export default AfterLoad
