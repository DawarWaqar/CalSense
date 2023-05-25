import Home from '../src/pages/Home'
import Profile from '../src/pages/Profile'

import { createBrowserRouter } from 'react-router-dom'

const RouteConfig = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
   },
   {
      path: '/profile',
      element: <Profile />,
   },
])

export default RouteConfig
