import { createTheme } from '@mui/material/styles'
const theme = createTheme({
   palette: {
      primary: {
         main: '#17ab27',
         light: '#6dc56d',
         dark: '#008b10',
         contrastText: '#000000',
      },
   },
   components: {
      MuiLink: {
         styleOverrides: {
            root: {
               color: '#000000',
            },
            underlineHover: {
               color: '#000000',
            },
         },
      },
   },
})

export default theme
