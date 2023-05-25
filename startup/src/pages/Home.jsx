import { Typography } from '@mui/material'
import Layout from '../components/layout'
import { ALLOWED_CALORIES } from '../../constants'
import { useState } from 'react'
import InteractiveList from '../components/interactiveList'
function Home() {
   const [totalCaloriesIn, setTotalCaloriesIn] = useState(0)
   const [items, setItems] = useState([])
   return (
      <Layout>
         <Typography variant='h3' paragraph>
            Today
         </Typography>
         <Typography variant='h5' paragraph>
            Total allowed calories: {ALLOWED_CALORIES}
         </Typography>
         <Typography variant='h5' paragraph>
            Remaining allowed calories: {ALLOWED_CALORIES - totalCaloriesIn}
         </Typography>
         <InteractiveList setItems={setItems} items={items} />
      </Layout>
   )
}

export default Home
