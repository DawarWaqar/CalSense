import Header from './header'
import { Grid } from '@mui/material'

function Layout({ children }) {
   return (
      <Grid container spacing={6}>
         <Grid item xs={12}>
            <Header />
         </Grid>

         <Grid item xs={12}>
            {children}
         </Grid>
      </Grid>
   )
}

export default Layout
