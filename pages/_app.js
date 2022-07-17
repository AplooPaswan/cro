import '../styles/globals.css'
import { ChakraProvider, Skeleton } from "@chakra-ui/react"
import DarkModeSwitch from '../Components/DarkModeSwitch'
import Navbar from '../Components/Navbar'
import AfterLoad from '../Components/AfterLoad'
import Loader from '../Components/Skeleton1'
import { extendTheme } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {

  const theme = extendTheme({
    colors: {
      myColor: {
        100: "#061121",
        // ...
        900: "#061121",
      },
    },
  })

  return (
    <div style={{ display: '' }}>
      <ChakraProvider theme={theme}>
        <Navbar colorScheme="myColor" />
        {/* <Header/> */}
        <AfterLoad />
      </ChakraProvider>
    </div>

  )
}

export default MyApp
