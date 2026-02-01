'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export function Providers({ 
    children 
  }) {

    const customTheme = extendTheme({
      config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
      },
      colors: {
        blueTheme: {
          // current active theme
          bg: "#142341",
          navBg: "rgba(23, 38, 72, 0.82)",
          navLinkActive:"#5eead4",
          navShadow:"rgba(10,16,32,0.55)",
          card:"#1b2f5a",
          cardHover:"#234174"
        },
        defaultTheme:{
          bg: "#142341",
          navBg: "rgba(28, 46, 84, 0.55)",
          navLinkActive:"#5eead4",
          card:"#203666",
          cardHover:"#28477b"
        },
        hover:{
          gray:"rgba(0, 0, 0, 0.6)"
        },
        social:{
          instagram:"#D53F8C",
          instagramHover:"#FF63B4",
          linkedin:"#0072b1",
          linkedinHover:"#1282B1",
          twitter:"#00acee",
          twitterHover:"#63C5F4",
          hashnode:"#265FF7",
          hashnodeHover:"#7A84E6"
        }
      },
    });
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
