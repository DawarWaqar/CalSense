import { RouterProvider } from 'react-router-dom'

import RouteConfig from '../routes/routeConfig'

import { ThemeProvider } from '@emotion/react'
import theme from '../styles/theme'
function App() {
   return (
      <ThemeProvider theme={theme}>
         <RouterProvider router={RouteConfig} />
      </ThemeProvider>
   )
}

export default App
