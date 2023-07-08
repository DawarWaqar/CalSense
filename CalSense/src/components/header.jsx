import { AppBar, Toolbar, Grid, Typography, Link } from '@mui/material'
import { PROJECT_NAME } from '../../constants'

export default function Header({}) {
   return (
      <AppBar position='fixed'>
         <Toolbar disableGutters sx={{ mx: 1 }}>
            <Grid container direction='row' alignItems='center'>
               <Grid item xs={4} display='flex' justifyContent='flex-start'>
                  <Link href={'/'} underline='hover'>
                     <Typography>
                        <b>{PROJECT_NAME}</b>
                     </Typography>
                  </Link>
               </Grid>
               <Grid item xs={4} display='flex' justifyContent='center'>
                  {/* <Typography>[center]</Typography> */}
               </Grid>
               <Grid item xs={4} display='flex' justifyContent='flex-end'>
                  <Link href={'/profile'} underline='hover'>
                     <Typography>profile</Typography>
                  </Link>
               </Grid>
            </Grid>
         </Toolbar>
      </AppBar>
   )
}
