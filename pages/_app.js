import '../styles/globals.css'
import { ChakraProvider, Skeleton } from "@chakra-ui/react"
import DarkModeSwitch from '../Components/DarkModeSwitch'
import Navbar from '../Components/Navbar'
import AfterLoad from '../Components/AfterLoad'
import Loader from '../Components/Skeleton'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      {/* <Header/> */}
      <AfterLoad/>
     
    </ChakraProvider>
  )
}

export default MyApp
