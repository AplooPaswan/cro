import { Box, Heading, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React, {Suspense, useEffect, useState} from 'react'
import FadeIn from 'react-fade-in'
import useFetch from 'use-http'
import Demo from './Demo'
import Loader from './Skeleton'
import TopSlide from './TopSlide'

const AfterLoad = (coinName) => {
  

  const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d"

  const [count, setCount] = useState(0)

  const {data,loading} = useFetch(url,[count])

  setInterval(() => {  }, 3000)

    return (
      <>
            {
              // Loader means Skeleton and TopSlide means body of the page
              loading ? <Loader/> : <TopSlide card={data} />
              // <Loader/>
            }
            <button onClick={()=>{
              setCount(Math.random())
            }}></button> 
      </>
    )
}

export default AfterLoad
