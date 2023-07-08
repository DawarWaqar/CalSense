import { Typography } from '@mui/material'
import Layout from '../components/layout'
import { ALLOWED_CALORIES } from '../../constants'
import { useState } from 'react'
import InteractiveList from '../components/interactiveList'
function Home() {
   const [items, setItems] = useState({})
   const [remainingAllowedCalories, setRemainingAllowedCalories] =
      useState(ALLOWED_CALORIES)

   return (
      <Layout>
         <Typography variant='h3' paragraph>
            Today
         </Typography>
         <Typography variant='h5' paragraph>
            Total allowed calories: {ALLOWED_CALORIES}
         </Typography>
         <Typography variant='h5' paragraph>
            {`Remaining allowed calories: ${
               remainingAllowedCalories >= 0 ? remainingAllowedCalories : 0
            }`}
         </Typography>
         {remainingAllowedCalories < 0 && (
            <Typography color='red' variant='h5' paragraph>
               Excess calories: {Math.abs(remainingAllowedCalories)}
            </Typography>
         )}
         <InteractiveList
            setItems={setItems}
            items={items}
            setRemainingAllowedCalories={setRemainingAllowedCalories}
         />
      </Layout>
   )
}

export default Home
