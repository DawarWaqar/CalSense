import Header from './header'
import { Grid } from '@mui/material'

function Layout({ children }) {
   return (
      <Grid container spacing={10}>
         <Grid item xs={12}>
            <Header />
         </Grid>
         <Grid
            sx={{ display: 'flex', alignItems: 'center' }}
            direction='column'
            item
            xs={12}
            container
         >
            {children}
         </Grid>
      </Grid>
   )
}

export default Layout
