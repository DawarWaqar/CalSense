import * as React from 'react'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { Container, TextField } from '@mui/material'
import { useState } from 'react'

function InteractiveList({ items, setItems }) {
   const [currentItem, setCurrentItem] = useState('')
   const CustomDiv = styled('div')({
      backgroundColor: 'orange',
   })

   const handleChange = (e) => {
      e.preventDefault()
      console.log('handle change')
      setCurrentItem(e.target.value)
   }

   const handleAdd = () => {
      console.log('handle add')
      setItems((prevArr) => [...prevArr, currentItem])
      setCurrentItem('')
   }

   const itemsJSX = items.map((item, index) => {
      return (
         <ListItem
            key={index}
            secondaryAction={
               <IconButton edge='end'>
                  <DeleteIcon />
               </IconButton>
            }
         >
            <ListItemText primary={item} />
         </ListItem>
      )
   })

   return (
      <Container maxWidth='sm'>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <CustomDiv>
                  <List dense disablePadding>
                     <ListItem
                        secondaryAction={
                           <IconButton edge='end' onClick={handleAdd}>
                              <AddIcon />
                           </IconButton>
                        }
                     >
                        <TextField
                           autoFocus
                           label='Add food'
                           variant='standard'
                           size='small'
                           fullWidth
                           value={currentItem}
                           onChange={handleChange}
                        />
                     </ListItem>
                  </List>
               </CustomDiv>
            </Grid>

            {items.length != 0 && (
               <Grid item xs={12}>
                  <CustomDiv>
                     <List dense>{itemsJSX}</List>
                  </CustomDiv>
               </Grid>
            )}
         </Grid>
      </Container>
   )
}

export default InteractiveList
