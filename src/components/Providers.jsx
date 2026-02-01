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
          bg: "#1b212c",
          navBg: "rgba(27, 34, 45, 0.82)",
          navLinkActive:"#f6c453",
          navShadow:"rgba(10,12,18,0.55)",
          card:"#222b38",
          cardHover:"#2d3747"
        },
        defaultTheme:{
          bg: "#1b212c",
          navBg: "rgba(27, 34, 45, 0.7)",
          navLinkActive:"#f6c453",
          card:"#242f3c",
          cardHover:"#2f3c4f"
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
