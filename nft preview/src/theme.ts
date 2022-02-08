import { extendTheme, theme } from "@chakra-ui/react"

export default extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "'Outfit', sans-serif",
        backgroundColor: "primary.900",
        display: 'grid',
        placeContent: 'center',
        height: '100%',
      }
    }
  },
  colors: {
    primary: {
      ...theme.colors.teal,
      400: "#90a9d1",
      500: "#0ffcf2",
      800: "#15273f",
      900: "#0D1A2D",
    },
  }
})